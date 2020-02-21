import { module } from '@ahamove/ahaless'
import { DatabaseService } from './database.service'

@module({
  providers: [DatabaseService],
})
export class DatabaseModule {}
