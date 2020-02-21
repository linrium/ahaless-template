import { body, handler, post, get, validator, param } from '@ahamove/ahaless'
import { CreateCatDto } from './dto/create-cat.dto'
import { CatsService } from './cats.service'
import { GetCatsDto } from './dto/get-cats.dto'

@handler()
export class CatsHandler {
  constructor(private readonly catsService: CatsService) {}

  @get('get_cats')
  @validator()
  async getCats() {
    return this.catsService.findAll()
  }

  @get('get_cat')
  @validator()
  async getCat(@param() param: GetCatsDto) {
    return this.catsService.findOne(param.name)
  }

  @post()
  @validator()
  async create_cat(@body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto)
  }
}
