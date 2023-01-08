import { Request, Response } from 'express';
import { CNPJ } from '@julioakira/cpf-cnpj-utils';
import DatabaseDataSource from '../database/DatabaseDataSource';
import Estabelecimentos from '../entities/Estabelecimentos.entity';

import Utils from '../utils/Utils';

type EstabelecimentoTemplate = BaseIdentity & {
  id_cnpj: number,
  cnpj: string,
  cnpj_ordem: string,
  cnpj_digito_verificador: string,
  id_matriz_filial: number,
  nome_fantasia: string,
  id_situacao_cadastral: number,
  data_situacao_cadastral: Date,
  id_motivo_situacao_cadastral: string,
  nome_cidade_exterior: string,
  id_pais: string,
  data_inicio_atividade: Date,
  id_cnae_principal: string,
  lista_cnaes_secundarias: string,
  tipo_logradouro: string,
  logradouro: string,
  numero: string,
  complemento: string,
  bairro: string,
  cep: string,
  uf: string,
  id_municipio: string,
  ddd1: string,
  telefone1: string,
  ddd2: string,
  telefone2: string,
  ddd_fax: string,
  fax: string,
  email: string,
  situacao_especial: string,
  data_situacao_especial: Date,
}

type EstabelecimentosResponse = DefaultResponse & {
  data: EstabelecimentoTemplate[] | []
}

class EstabelecimentosController implements DataQueryingController {
  public async index(req: Request<DataQueryingRequest>, res: Response<EstabelecimentosResponse>): Promise<Response<EstabelecimentosResponse>> {
    const resp: EstabelecimentosResponse = {
      status: false,
      message: 'CNPJ inválido',
      data: [],
    };
    try {
      const { cnpj } = req.body;
      if (cnpj && CNPJ.Validate(cnpj)) {
        const cnpj_base = Utils.GetBaseCNPJ(cnpj);
        const repo = DatabaseDataSource.getRepository(Estabelecimentos);
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
    } catch(err) {
      console.error(err);
      resp.message = 'Ocorreu um erro ao processar a consulta';
      return res.status(400).json(resp);
    }
  }
}

export default new EstabelecimentosController();
