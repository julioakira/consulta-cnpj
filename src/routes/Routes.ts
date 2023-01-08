import { Router } from 'express'

import {
  EmpresasController,
  SociosController,
  EstabelecimentosController,
  SimplesController
} from '../controllers'

const Routes = Router()

Routes.post('/empresas', EmpresasController.index);
Routes.post('/socios', SociosController.index);
Routes.post('/estabelecimentos', EstabelecimentosController.index);
Routes.post('/simples', SimplesController.index);

export default Routes
