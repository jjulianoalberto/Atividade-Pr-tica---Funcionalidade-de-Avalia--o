import { v4 as uuidv4 } from 'uuid'

import { Product } from './Product'

export class User {
  private readonly _id: string = uuidv4()
  private _cart: Product[] = []

  constructor(
    private _name: string,
    private _username: string,
    private _email: string
  ) {}

  public get id(): string {
    return this._id
  }

  public get username(): string {
    return this._username
  }

  public get email(): string {
    return this.email
  }

  // Adiciona produto no carrinho do usuário
  public addToCart(product: Product): void {
    this._cart.push(product)
    console.log(`Produto adicionado no carrinho: ${product.name}`)
  }

  // Remove um produto do carrinho
  public removeFromCart(product: Product): void {
    // Se o produto estiver presente, index será o índice do produto;
    // caso contrário, o index será -1.

    const index = this._cart.indexOf(product)

    if (index !== -1) {
      this._cart.splice(index, 1)
      console.log(`${product.name} removido com sucesso.`)
    } else {
      console.log(`${product.name} não está no carrinho.`)
    }
  }

  public showProducts(): string {
    let total = 0

    this._cart.forEach(item => {
      console.log(item.show())

      // total = total + item.value
      total += item.value
    })

    return `Total: R$ ${total.toFixed(2).replace('.', ',')}`
  }

  public toJson() {
    return {
      id: this._id,
      name: this._name,
      username: this._username,
      email: this._email
    }
  }
}
