import { Request, Response } from 'express'
import DatabaseDataSource from '../database/DatabaseDataSource';
import Empresas from '../entities/Empresas.entity';
import Utils from '../utils/Utils';

import { CNPJ } from '@julioakira/cpf-cnpj-utils';


class EmpresasController {
  async index(req: Request<EmpresasRequest>, res: Response<EmpresasResponse>): Promise<Response<EmpresasResponse>> {
    const { cnpj } = req.body;
    const resp: EmpresasResponse = {
      status: false,
      message: 'CNPJ inválido',
      data: {}
    };

    if (!CNPJ.Validate(cnpj))
      return res.status(400).json(resp);

    const cnpj_base: string = Utils.GetBaseCNPJ(cnpj);
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
}

export default new EmpresasController()
