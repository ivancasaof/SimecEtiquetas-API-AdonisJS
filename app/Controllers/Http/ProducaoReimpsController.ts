// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import ProducaoReimp from "App/Models/ProducaoReimp"

export default class ProducaoReimpsController {
    public async index(){
        const producao = await ProducaoReimp.all()
        return {
            data: producao,
        }
    }
}
