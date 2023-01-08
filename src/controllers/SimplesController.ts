import { Request, Response } from 'express';
import { CNPJ } from '@julioakira/cpf-cnpj-utils';

import { Simples, YesOrNo } from '../entities/Simples.entity';
import Utils from '../utils/Utils';
import DatabaseDataSource from '../database/DatabaseDataSource';

type SimplesTemplate = BaseIdentity & {
  id_cnpj: number,
  cnpj: string,
  opcao_pelo_simples: YesOrNo,
  data_opcao_pelo_simples: Date,
  data_exclusao_do_simples: Date,
  opcao_pelo_mei: YesOrNo,
  data_opcao_pelo_mei: Date,
  data_entrada_do_mei: Date,
};

type SimplesResponse = DefaultResponse & {
  data: SimplesTemplate[] | []
}

class SimplesController implements DataQueryingController {
  public async index(req: Request<DataQueryingController>, res: Response<SimplesResponse>): Promise<Response<SimplesResponse>> {
    const resp: SimplesResponse = {
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
