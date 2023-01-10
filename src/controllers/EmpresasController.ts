import { Request, Response } from 'express'
import { CNPJ } from '@julioakira/cpf-cnpj-utils';

import DatabaseDataSource from '../database/DatabaseDataSource';
import Empresas from '../entities/Empresas.entity';
import Utils from '../utils/Utils';

class EmpresasController implements DataQueryingController {
  public async index(req: Request<DataQueryingRequest>, res: Response<DefaultResponse<Empresas>>): Promise<Response<DefaultResponse<Empresas>>> {
    const resp: DefaultResponse<Empresas> = {
      status: false,
      message: 'CNPJ inválido',
      data: []
    };
    try {
      const { cnpj } = req.body;
      if (cnpj && CNPJ.Validate(cnpj)) {
        const cnpj_base = Utils.GetBaseCNPJ(cnpj);
        const repo = DatabaseDataSource.getRepository(Empresas);
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

export default new EmpresasController()
