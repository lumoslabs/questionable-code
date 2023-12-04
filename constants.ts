export type PlayCount = {
  game_slug: GameSlug
  play_count: number
}

export const AreaSlugNames = {
  attention: 'attention',
  flexibility: 'flexibility',
  language: 'language',
  math: 'math',
  memory: 'memory',
  'problem-solving': 'problem-solving',
} as const

export const gamesLibrary = [
  {
    slug: 'assist-ants',
    areaSlug: AreaSlugNames.attention,
    gameDurationMinutes: 1.149065678,
    gameRatingWeight: 1,
  },
  {
    slug: 'brain-shift',
    areaSlug: AreaSlugNames.flexibility,
    gameDurationMinutes: 1.026906428,
    gameRatingWeight: 0.5,
  },
  {
    slug: 'chalkboard-challenge',
    areaSlug: AreaSlugNames.math,
    gameDurationMinutes: 1.518464441,
    gameRatingWeight: 0.5,
  },
  {
    slug: 'cognition-kitchen',
    areaSlug: AreaSlugNames.memory,
    gameDurationMinutes: 2.93993936,
    gameRatingWeight: 0,
  },
  {
    slug: 'color-match',
    areaSlug: AreaSlugNames.flexibility,
    gameDurationMinutes: 0.7773903236,
    gameRatingWeight: 0.625,
  },
  {
    slug: 'contextual',
    areaSlug: AreaSlugNames.language,
    gameDurationMinutes: 2.731802336,
    gameRatingWeight: 0.375,
  },
  {
    slug: 'continuum',
    areaSlug: AreaSlugNames.language,
    gameDurationMinutes: 2.347861568,
    gameRatingWeight: 1,
  },
  {
    slug: 'disillusion',
    areaSlug: AreaSlugNames.flexibility,
    gameDurationMinutes: 1.10864441,
    gameRatingWeight: 1,
  },
  {
    slug: 'eagle-eye',
    areaSlug: AreaSlugNames.attention,
    gameDurationMinutes: 2.325396171,
    gameRatingWeight: 1,
  },
  {
    slug: 'ebb-and-flow',
    areaSlug: AreaSlugNames.flexibility,
    gameDurationMinutes: 1.022193459,
    gameRatingWeight: 1,
  },
  {
    slug: 'editors-choice',
    areaSlug: AreaSlugNames.language,
    gameDurationMinutes: 1.205419401,
    gameRatingWeight: 1,
  },
  {
    slug: 'familiar-faces',
    areaSlug: AreaSlugNames.memory,
    gameDurationMinutes: 5.596743473,
    gameRatingWeight: 1,
  },
  {
    slug: 'feel-the-beat',
    areaSlug: AreaSlugNames.attention,
    gameDurationMinutes: 3.178295254,
    gameRatingWeight: 0.375,
  },
  {
    slug: 'follow-that-frog',
    areaSlug: AreaSlugNames.memory,
    gameDurationMinutes: 3.038671994,
    gameRatingWeight: 0.125,
  },
  {
    slug: 'fuse-clues',
    areaSlug: AreaSlugNames['problem-solving'],
    gameDurationMinutes: 3.502919351,
    gameRatingWeight: 1,
  },
  {
    slug: 'halve-your-cake',
    areaSlug: AreaSlugNames.math,
    gameDurationMinutes: 1.520586552,
    gameRatingWeight: 0.375,
  },
  {
    slug: 'highway-hazards',
    areaSlug: AreaSlugNames.attention,
    gameDurationMinutes: 1.892647587,
    gameRatingWeight: 1,
  },
  {
    slug: 'lost-in-migration',
    areaSlug: AreaSlugNames.attention,
    gameDurationMinutes: 0.7743742617,
    gameRatingWeight: 1,
  },
  {
    slug: 'magic-chance',
    areaSlug: AreaSlugNames.math,
    gameDurationMinutes: 4.23116128,
    gameRatingWeight: 1,
  },
  {
    slug: 'masterpiece',
    areaSlug: AreaSlugNames['problem-solving'],
    gameDurationMinutes: 2.621681157,
    gameRatingWeight: 0.875,
  },
  {
    slug: 'memory-match',
    areaSlug: AreaSlugNames.memory,
    gameDurationMinutes: 1.015052339,
    gameRatingWeight: 0.25,
  },
  {
    slug: 'memory-matrix',
    areaSlug: AreaSlugNames.memory,
    gameDurationMinutes: 2.430335911,
    gameRatingWeight: 0.75,
  },
  {
    slug: 'memory-serves',
    areaSlug: AreaSlugNames.memory,
    gameDurationMinutes: 2.057100804,
    gameRatingWeight: 1,
  },
  {
    slug: 'organic-order',
    areaSlug: AreaSlugNames['problem-solving'],
    gameDurationMinutes: 3.843836271,
    gameRatingWeight: 0.875,
  },
  {
    slug: 'penguin-pursuit',
    areaSlug: AreaSlugNames.flexibility,
    gameDurationMinutes: 3.259121657,
    gameRatingWeight: 0,
  },
  {
    slug: 'penguin-rally',
    areaSlug: AreaSlugNames.flexibility,
    gameDurationMinutes: 3.259121657,
    gameRatingWeight: 0,
  },
  {
    slug: 'pet-detective',
    areaSlug: AreaSlugNames['problem-solving'],
    gameDurationMinutes: 2.07393337,
    gameRatingWeight: 1,
  },
  {
    slug: 'pinball-recall',
    areaSlug: AreaSlugNames.memory,
    gameDurationMinutes: 2.484673967,
    gameRatingWeight: 0.625,
  },
  {
    slug: 'pirate-passage',
    areaSlug: AreaSlugNames['problem-solving'],
    gameDurationMinutes: 4.074995814,
    gameRatingWeight: 1,
  },
  {
    slug: 'playing-koi',
    areaSlug: AreaSlugNames.memory,
    gameDurationMinutes: 2.627318394,
    gameRatingWeight: 0.25,
  },
  {
    slug: 'raindrops',
    areaSlug: AreaSlugNames.math,
    gameDurationMinutes: 2.077412792,
    gameRatingWeight: 1,
  },
  {
    slug: 'river-ranger',
    areaSlug: AreaSlugNames.attention,
    gameDurationMinutes: 1.519770934,
    gameRatingWeight: 1,
  },
  {
    slug: 'robot-factory',
    areaSlug: AreaSlugNames.flexibility,
    gameDurationMinutes: 1.440355693,
    gameRatingWeight: 0.125,
  },
  {
    slug: 'skyrise',
    areaSlug: AreaSlugNames.memory,
    gameDurationMinutes: 1.453309994,
    gameRatingWeight: 1,
  },
  {
    slug: 'space-trace',
    areaSlug: AreaSlugNames.flexibility,
    gameDurationMinutes: 1.579464593,
    gameRatingWeight: 1,
  },
  {
    slug: 'speed-match',
    areaSlug: AreaSlugNames.flexibility,
    gameDurationMinutes: 0.7602279318,
    gameRatingWeight: 1,
  },
  {
    slug: 'speed-pack',
    areaSlug: AreaSlugNames['problem-solving'],
    gameDurationMinutes: 1.560724996,
    gameRatingWeight: 1,
  },
  {
    slug: 'splitting-seeds',
    areaSlug: AreaSlugNames.attention,
    gameDurationMinutes: 1.600167499,
    gameRatingWeight: 0.375,
  },
  {
    slug: 'star-search',
    areaSlug: AreaSlugNames.attention,
    gameDurationMinutes: 1.507698773,
    gameRatingWeight: 1,
  },
  {
    slug: 'taking-root',
    areaSlug: AreaSlugNames.language,
    gameDurationMinutes: 2.15946766,
    gameRatingWeight: 1,
  },
  {
    slug: 'tidal-treasures',
    areaSlug: AreaSlugNames.memory,
    gameDurationMinutes: 4.945849236,
    gameRatingWeight: 1,
  },
  {
    slug: 'top-that',
    areaSlug: AreaSlugNames.math,
    gameDurationMinutes: 1.21555567,
    gameRatingWeight: 0.375,
  },
  {
    slug: 'train-of-thought',
    areaSlug: AreaSlugNames.attention,
    gameDurationMinutes: 2.2824813,
    gameRatingWeight: 1.25,
  },
  {
    slug: 'trouble-brewing',
    areaSlug: AreaSlugNames.attention,
    gameDurationMinutes: 1.968477231,
    gameRatingWeight: 1,
  },
  {
    slug: 'whats-my-name',
    areaSlug: AreaSlugNames.memory,
    gameDurationMinutes: 1.154788751,
    gameRatingWeight: 1,
  },
  {
    slug: 'word-bubbles',
    areaSlug: AreaSlugNames.flexibility,
    gameDurationMinutes: 5.030977243,
    gameRatingWeight: 1.125,
  },
  {
    slug: 'word-snatchers',
    areaSlug: AreaSlugNames.language,
    gameDurationMinutes: 2.702962522,
    gameRatingWeight: 1,
  },
] as const

export type Game = {
  slug: GameSlug
  areaSlug: AreaSlug
  gameDurationMinutes: number
  gameRatingWeight: number
}

export const gamesList = [...gamesLibrary] as Game[]
export type GameSlug = (typeof gamesLibrary)[number]['slug']
export type AreaSlug = keyof typeof AreaSlugNames
