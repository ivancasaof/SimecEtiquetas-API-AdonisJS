// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import ProducaoAvulsa from "App/Models/ProducaoAvulsa"

export default class ProducaoAvulsasController {
    public async index(){
        const producao = await ProducaoAvulsa.all()
        return {
            data: producao,
        }
    }    
}
