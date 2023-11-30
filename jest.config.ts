import type { Config } from 'jest'

export default async (): Promise<Config> => {
  return {
    displayName: 'questionable-code',
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleDirectories: ['node_modules', '<rootDir>'],
    moduleNameMapper: {
      '^~/(.*)$': '<rootDir>/$1',
    },
  }
}
