import { hash, compare } from 'bcryptjs'

/**
 * Helpers / common.
 */
import { logger } from '~/common/logger'

const saltRounds = 10

/**
 * Hashing password.
 */
export const hashPassword = async (rawPassword: string): Promise<string> => {
  logger.info('Hashing password')
  return hash(rawPassword, saltRounds)
}

/**
 * Compares raw password with the supposed hashed one.
 */
export const comparePasswords = async (rawPassword: string, storedPassword: string): Promise<boolean> => {
  logger.info('Comparing passwords')
  return compare(rawPassword, storedPassword)
}
