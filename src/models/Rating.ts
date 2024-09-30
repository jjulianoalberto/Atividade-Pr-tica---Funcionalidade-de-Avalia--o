import { v4 as uuidv4 } from 'uuid'

import { User } from './User'

export class Rating {
  private readonly _id: string = uuidv4()

  constructor(
    private _rate: number, 
    private _user: User
  ) {}

  public get id(): string {
    return this._id
  }

  public get rate(): number {
    return this._rate
  }

  public get user(): User {
    return this._user
  }

  public show(): void {
    console.log(`Avaliação de ${this.user.username}: ${this.rate}`);
  }

}