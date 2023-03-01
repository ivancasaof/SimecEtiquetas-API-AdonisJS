import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ProducaoReimp extends BaseModel {
  static get table(){
    return 'producao_reimp'
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
	public prod_codigo: string
  @column()
	public corrida: string
  @column()
	public lote: string
  @column()
	public peso: string
  @column()
	public op: string
  @column()
	public envio_protheus: string
  @column()
	public envio_data: string  
  @column()
	public envio_hora: string  
}
