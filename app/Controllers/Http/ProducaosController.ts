//import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Producao from "App/Models/Producao"
import Database from "@ioc:Adonis/Lucid/Database"
import { DateTime } from "luxon"

export default class ProducaosController {
    public async teste(){

        let dia = DateTime.local().toLocaleString().toString()
        const prod_dia = await
        Database
        .from('producao')
        .where('data', `${dia}`)
        .orderBy('data', 'desc')
        
        const soma_dia = await
        Database
        .from('producao')
        .where('data', `${dia}`).andWhere('envio_protheus','OK')      
        .sum('peso as Total')            

        let mes = DateTime.local().toLocaleString().toString().slice(2)
        const prod_mes = await
        Database
        .from('producao')
        .where('data', 'like', `%${mes}%`)
        .orderBy('data', 'desc')

        const soma_mes = await
        Database
        .from('producao')
        .where('data', 'like', `%${mes}%`).andWhere('envio_protheus','OK')      
        .sum('peso as Total')            

        return {
            data:  {
                "producaoDia": prod_dia,
                "totalDia": soma_dia,                
                "producaoMes": prod_mes,
                "totalMes": soma_mes
            }
        }
    }

    public async index(){
        const producao = await Producao.all()
        return {
            data: producao
        }
    }    

}
