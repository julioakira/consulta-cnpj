import { Router } from 'express'

import { EmpresasController } from '../controllers'

const Routes = Router()

Routes.post('/empresas', EmpresasController.index)

export default Routes
