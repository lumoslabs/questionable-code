import { Game, PlayCount } from '~/constants'

var gameRatingBias = 1

var gamePlayHistoryBias = 1
var gamePlayWeight = 0.1
var gamePlayWeightMax = 1.2

var maxHistoricalGamePlays = 30

export function indexBy(xs: PlayCount[], prop: keyof PlayCount) {
  return xs.reduce((store, item) => {
    var key = item[prop]
    return store.set(key, item)
  }, new Map<PlayCount[keyof PlayCount], PlayCount>())
}

/**
 * Randomly select N games from a list of available games using the weights
 * assigned to games and historical gameplay data
 *
 * @param {Game[]} availableGames - List of Games to select from
 * @param {PlayCount[]} gamePlays - Historical Gameplays for the particular user.
 * @param {number} count(default=5) number of games to select
 */
export function selectGamesForWorkout(availableGames: Game[], gamePlays: PlayCount[], count: number = 5) {
  if (availableGames.length == 0 || count == 0) return []
  if (gamePlays.length > maxHistoricalGamePlays) {
    throw new Error(
      `This function only allows ${maxHistoricalGamePlays} historical game plays to be passed in but received ${gamePlays.length}`,
    )
  }
  if (count > availableGames.length) {
    throw new Error(`Not enough items(${availableGames.length}) to make ${count} selections`)
  }

  var playsBySlug = indexBy(gamePlays, 'game_slug')
  var gameWeights = availableGames.map((game) =>
    calculateGameWeight(game.gameRatingWeight, playsBySlug.get(game.slug)?.play_count || 0),
  )

  var games = weightedSelectNGames(count, availableGames, gameWeights)
  return games
}

/**
 * Select N Games from a list using a random weighted selection
 *
 * @param {number} count - number of unique selections to make from the list
 * @param {T[]} items - list of things to select from
 * @param {number[]} weights - weights of items in items list
 *
 * @returns {Game[]}
 */
function weightedSelectNGames(count: number, items: Game[], weights: number[]): Game[] {
  var filteredItems = [...items]
  var filteredWeights = [...weights]
  var selectedItems: Game[] = []

  for (let i = 0; i < count; ++i) {
    var { item: nextItem, index } = weightedRandomSelection(filteredItems, filteredWeights)
    selectedItems.push(nextItem)
    filteredItems.splice(index, 1)
    filteredWeights.splice(index, 1)
  }

  return selectedItems.slice(0, i)
}

function calculateGameWeight(gameWeight: number, gamePlayCount: number) {
  var gamePlayHistoryWeight = Math.max(1 + gamePlayCount * gamePlayWeight, gamePlayWeightMax)

  return gameRatingBias * gameWeight * gamePlayHistoryBias * gamePlayHistoryWeight
}

function calculateCumulativeWeights(weights: number[]): number[] {
  var cumulativeWeights: number[] = []
  for (var i = 0; i < weights.length; i += 1) {
    cumulativeWeights[i] = weights[i] + (cumulativeWeights[i - 1] || 0)
  }
  if (i == 0) {
    return []
  }
  return cumulativeWeights
}

/**
 * Given a list of items and a matching length list of weights, apply the
 * weights and randomly select a Game
 *
 * @param {T[]} games
 * @param {number[]} weights
 */
function weightedRandomSelection(games: Game[], weights?: number[]) {
  if (games.length != weights?.length) {
    throw new Error('Items and weights must be of the same size')
  }

  if (!games.length) {
    throw new Error('Items must not be empty')
  }

  // Preparing the cumulative weights array.
  // For example:
  // - weights = [1, 4, 3]
  // - cumulativeWeights = [1, 5, 8]
  var cumulativeWeights = calculateCumulativeWeights(weights)

  // Getting the random number in a range of [0...sum(weights)]
  // For example:
  // - weights = [1, 4, 3]
  // - maxCumulativeWeight = 8
  // - range for the random number is [0...8]
  var maxCumulativeWeight = cumulativeWeights[cumulativeWeights.length - 1]

  // Math.random generates a number < 1 so this calculation will ensure our
  // selected value is below the highest cumulative weight
  var randomNumber = maxCumulativeWeight * Math.random()

  // Picking the random item based on its weight.
  // The items with higher weight will be picked more often.
  var selectedIndex = games.findIndex((_, index) => cumulativeWeights[index] >= randomNumber)
  return {
    item: games[selectedIndex],
    index: selectedIndex,
  }
}
