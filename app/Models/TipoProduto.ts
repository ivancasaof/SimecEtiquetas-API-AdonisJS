
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class TipoProduto extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
	public nome: string
  
  @column()
	public letra: string
  
  @column()
	public ultima_seq: string  
}
