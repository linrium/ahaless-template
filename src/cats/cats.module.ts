import { module } from '@ahamove/ahaless'
import { CatsHandler } from './cats.handler'
import { CatsService } from './cats.service'

@module({
  handlers: [CatsHandler],
  providers: [CatsService],
})
export class CatsModule {}
