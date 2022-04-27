import { Router } from 'express'

import { BaseController} from '../controllers'

const routes = Router()

routes.get('/test', BaseController.store)

export default routes
