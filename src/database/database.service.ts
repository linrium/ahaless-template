import { Cat } from '../cats/interfaces/cat.interface'
import { injectable } from '@ahamove/ahaless'

@injectable()
export class DatabaseService {
  private cats: Cat[] = [
    {
      name: 'Lu',
    },
  ]

  getCats() {
    return this.cats
  }

  createCat(cat: Cat) {
    this.cats.push(cat)

    return this.cats
  }
}
