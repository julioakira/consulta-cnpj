import { Router } from 'express'

import {
  EmpresasController,
  SociosController,
  EstabelecimentosController,
} from '../controllers'

const Routes = Router()

Routes.post('/empresas', EmpresasController.index);
Routes.post('/socios', SociosController.index);
Routes.post('/estabelecimentos', EstabelecimentosController.index);

export default Routes
