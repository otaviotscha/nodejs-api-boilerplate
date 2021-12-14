import { PrismaClient } from '@prisma/client'

/**
 * Creates a database connection and exports it.
 */
const prisma = new PrismaClient()
export { prisma }
