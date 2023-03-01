import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ProducaoAvulsa extends BaseModel {
  static get table(){
    return 'etiquetas_avulsas'
  }
  @column({ isPrimary: true })
	public id: number
  @column()
	public data: string
  @column()
	public hora: string
  @column()
	public usuario: string 
  @column()
	public tipo_produto: string
  @column()
	public codigo: string
  @column()
	public volume: string
  @column()
	public corrida: string
  @column()
	public peso: string
  @column()
	public abnt: string
  @column()
	public inmetro: string  
}
