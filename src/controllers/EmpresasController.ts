import { Request, Response } from 'express'
import DatabaseDataSource from '../database/DatabaseDataSource';
import Empresas from '../entities/Empresas.entity';

class EmpresasController {
  async index(req: Request, res: Response): Promise<Response> {
    const { cnpj } = req.body;

    const repo = DatabaseDataSource.getRepository(Empresas);
    const data = await repo.findOne({
      where: { cnpj_base: cnpj }
    });
    return res.status(200).json(data);
  }
}

export default new EmpresasController()
