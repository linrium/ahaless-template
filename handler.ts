import { CatsModule } from './src/cats/cats.module'
import { module } from '@ahamove/ahaless'
import { DatabaseModule } from './src/database/database.module'

@module({
  imports: [DatabaseModule, CatsModule],
})
export class Handler {
  static exports = exports
}
