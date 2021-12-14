import moduleAlias from 'module-alias'
import { resolve } from 'path'

const srcPath = resolve(__dirname, '..')

moduleAlias.addAlias('~', srcPath)

moduleAlias()
