import { Request, Response } from 'express'
import { CNPJ } from '@julioakira/cpf-cnpj-utils'

import DatabaseDataSource from '../database/DatabaseDataSource'
import Socios from '../entities/Socios.entity'
import Utils from '../utils/Utils'


type Socio = BaseIdentity & {
  id_cnpj: number,
  cnpj: string
  id_tipo_socio: number
  nome_razao_social: string
  cpf_cnpj: string
  id_qualificacao: string
  data_entrada: Date
  id_pais: string
  cpf_representante_legal: string
  nome_representante_legal: string
  id_qualificacao_representante_legal: string
  id_faixa_etaria: number
}

type SociosResponse = DefaultResponse & {
  data: Socio[] | []
}

class SociosController implements DataQueryingController {
  async index(req: Request<DataQueryingRequest>, res: Response): Promise<Response<SociosResponse>> {
    const resp: SociosResponse = {
      status: false,
      message: 'CNPJ inválido',
      data: []
    }
    try {
      const { cnpj } = req.body;
      if (cnpj && CNPJ.Validate(cnpj)) {
        const cnpj_base = Utils.GetBaseCNPJ(cnpj);
        const repo = DatabaseDataSource.getRepository(Socios);
        const data = await repo.find({
          where: { cnpj: cnpj_base }
        });
        resp.status = true;
        resp.message = 'Consulta efetuada com sucesso';
        data
          ? resp.data = data
          : resp.data = [];

        return res.status(200).json(resp);
      }
      return res.status(400).json(resp);
    } catch (err) {
      console.error(err);
      resp.message = 'Ocorreu um erro ao processar a consulta.';
      return res.status(400).json(resp);
    }
  }
}

export default new SociosController();