declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string,
    DB_HOST: string,
    DB_PORT: number,
    DB_HOST: string,
    DB_USERNAME: string,
    DB_PASSWORD: string,
    DB_NAME: string,
  }
}

type BaseIdentity = {
  id: number,
}

interface DataQueryingController {
  public index(req: Request<RequestByCNPJ>, res: Response<T>): Promise<Response<T>>
}

type DataQueryingRequest = {
  cnpj: string
}

type DefaultResponse = {
  status: boolean,
  message: string,
}
