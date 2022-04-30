import express from 'express'
import helmet from 'helmet'
import Youch from 'youch'
import cors from 'cors'
import bodyParser from 'body-parser'
import http from 'http'

import './bootstrap'
import routes from '../routes/routes'
import DatabaseDataSource from '../database/database'

class App {
  public app: express.Application
  public server: http.Server
  constructor() {
    this.app = express()
    this.server = new http.Server(this.app)
    this.config()
    this.database()
    this.parsing()
    this.middlewares()
    this.routes()
    this.ExceptionHandler()
  }

  private config(): void {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: false }))
  }

  private database(): void {
    DatabaseDataSource
      .initialize()
      .then(() => {
        console.log('Database initialized')
      })
      .catch((err) => {
        console.error(`Error During database initialization: ${err}`);
      })
  }

  private middlewares(): void {
    this.app.use(helmet())
    this.app.use(cors())
  }

  private parsing(): void {
    this.app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }))
  }

  private routes(): void {
    this.app.use('/v1', routes);
  }

  private async ExceptionHandler(): Promise<void> {
    this.app.use(async (err: express.ErrorRequestHandler, req: express.Request, res: express.Response, next: express.NextFunction) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON()
        return res.status(500).json(errors);
      }
      return res.status(500).json({ error: 'Internal Server Error' })
    })
  }
}

export default new App().server
