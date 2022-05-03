import express from 'express'

class BaseController {
  async store(req: express.Request, res: express.Response): Promise<express.Response<string>> {
    return res.json({ message: 'Everything okay LALALA!' })
  }
}

export default new BaseController()