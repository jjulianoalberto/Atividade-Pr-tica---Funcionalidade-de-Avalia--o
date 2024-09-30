import { v4 as uuidv4 } from 'uuid'

import { User } from './User'
import { Product } from './Product'

export class Comment {
  private readonly _id: string = uuidv4()

  constructor(
    private _from: User, 
    private _product: Product, 
    private _content: string
  ) {}

  public get from(): User {
    return this._from
  }

  public get product(): Product {
    return this._product
  }

  public get content(): string {
    return this._content
  }

  public show(): void {
    console.log(`Comentário de ${this.from.username}: "${this.content}"`)
  }

  public toJson() {
    return {
      id: this._id,
      from: this._from,
      productId: this._product.id,
      content: this._content
    }
  }
}