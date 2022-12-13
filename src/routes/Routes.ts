import { Router } from 'express'

import { EmpresasController } from '../controllers'

const Routes = Router()

Routes.post('/test', EmpresasController.index)

export default Routes
