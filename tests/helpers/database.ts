import { Prisma } from '.prisma/client'

/**
 * Helpers / common.
 */
import { prisma } from '~/common/database'

/**
 * Deletes everything from every table.
 */
export const cleanDatabase = async () => {
  const modelKeys = Prisma.dmmf.datamodel.models.map(model => model.name)

  for (const table of modelKeys) {
    await prisma.$executeRawUnsafe(`TRUNCATE "${table}" CASCADE`)
  }
}

/**
 * Disconnects from database.
 */
export async function disconnect() {
  await prisma.$disconnect()
}
