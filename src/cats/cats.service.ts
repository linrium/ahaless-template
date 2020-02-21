import { injectable } from '@ahamove/ahaless'
import { CreateCatDto } from './dto/create-cat.dto'
import { DatabaseService } from '../database/database.service'

@injectable()
export class CatsService {
  constructor(private readonly databaseService: DatabaseService) {}

  findAll() {
    return this.databaseService.getCats()
  }

  findOne(name: string) {
    const cats = this.databaseService.getCats()

    return cats.find(cat => cat.name === name)
  }

  create(createCatDto: CreateCatDto) {
    return this.databaseService.createCat(createCatDto)
  }
}
