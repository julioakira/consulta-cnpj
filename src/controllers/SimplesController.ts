import { Request, Response } from 'express';
import { CNPJ } from '@julioakira/cpf-cnpj-utils';

import Simples from '../entities/Simples.entity';
import Utils from '../utils/Utils';
import DatabaseDataSource from '../database/DatabaseDataSource';

class SimplesController implements DataQueryingController {
  public async index(req: Request<DataQueryingController>, res: Response<DefaultResponse<Simples>>): Promise<Response<DefaultResponse<Simples>>> {
    const resp: DefaultResponse<Simples> = {
      status: false,
      message: 'CNPJ inválido',
      data: []
    };
    try {
      const { cnpj } = req.body;
      if (cnpj && CNPJ.Validate(cnpj)) {
        const cnpj_base = Utils.GetBaseCNPJ(cnpj);
        const repo = DatabaseDataSource.getRepository(Simples);
        const data = await repo.find({
          where: { cnpj: cnpj_base }
        });

        resp.status = true;
        resp.message = 'Consulta efetuada com sucesso';
        data 
        ? resp.data = data
        : resp.data = []

        return res.status(200).json(resp);
      }
      return res.status(400).json(resp);
    } catch(err) {
      console.error(err);
      resp.message = 'Ocorreu um erro ao processar a consulta.'
      return res.status(400).json(resp);
    }
  }
}

export default new SimplesController();
