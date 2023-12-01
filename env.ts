import * as nextEnv from '@next/env'

export const loadEnv = () => {
  const isDev = process.env.NODE_ENV === undefined || process.env.NODE_ENV === 'development'
  nextEnv.loadEnvConfig('.', isDev)
}

export const mustGetEnv = (name: string): string => {
  const val = process.env[name]
  if (!val) {
    const isDev = process.env.NODE_ENV === undefined || process.env.NODE_ENV === 'development'
    const updateHint = "Local .env files can be generated or updated with 'yarn run update-env'"
    throw new Error(
      `${name} env var is required in ${process.env.NODE_ENV} in PORT: ${process.env.PORT}. ${isDev ? updateHint : ''}`,
    )
  }
  return val
}
