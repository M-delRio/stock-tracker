import { Stock } from "src/stocks/interfaces/stock.interface"

export interface IUser {
  name: string
  stocks: Stock[]
}
