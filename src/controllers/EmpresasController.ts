import { Request, Response } from 'express'
import { CNPJ } from '@julioakira/cpf-cnpj-utils';

import DatabaseDataSource from '../database/DatabaseDataSource';
import Empresas from '../entities/Empresas.entity';
import Utils from '../utils/Utils';


type Empresa = BaseIdentity & {
  id_cnpj: number,
  cnpj: string
  razao_social: string
  id_natureza_juridica: string
  id_qualificacao: number
  capital_social: number
  id_porte: number
  ente_federativo_responsavel: string
}

type EmpresasResponse = DefaultResponse & {
  data: Empresa | {}
}

class EmpresasController implements DataQueryingController {
  public async index(req: Request<DataQueryingRequest>, res: Response<EmpresasResponse>): Promise<Response<EmpresasResponse>> {
    const resp: EmpresasResponse = {
      status: false,
      message: 'CNPJ inválido',
      data: {}
    };
    try {
      const { cnpj } = req.body;
      if (cnpj && CNPJ.Validate(cnpj)) {
        const cnpj_base = Utils.GetBaseCNPJ(cnpj);
        const repo = DatabaseDataSource.getRepository(Empresas);
        const data = await repo.findOne({
          where: { cnpj: cnpj_base }
        });

        resp.status = true;
        resp.message = 'Consulta efetuada com sucesso';
        data
          ? resp.data = data
          : resp.data = {};

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

export default new EmpresasController()
