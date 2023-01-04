import { Request, Response } from 'express'
import DatabaseDataSource from '../database/DatabaseDataSource'
import Socios from '../entities/Socios.entity'
import Utils from '../utils/Utils'

import { CNPJ } from '@julioakira/cpf-cnpj-utils'

type Socio = BaseIdentity & {
  cnpj: string
  id_tipo_socio: number
  nome_razao_social: string
  cpf_cnpj: string
  id_qualificao: string
  data_entrada: Date
  id_pais: string
  cpf_representante_legal: string
  nome_representante_legal: string
  id_qualificao_representante_legal: string
  id_faixa_etaria: number
}

type  SociosResponse = DefaultResponse & {
  data: Socio | {}
}

class SociosController implements DataQueryingController {
  async index(req: Request, res: Response) {
    const { cnpj } = req.body;
    const resp: SociosResponse = {
      status: false,
      message: 'CNPJ inválido',
      data: {}
    }
  }
}

export default new SociosController();