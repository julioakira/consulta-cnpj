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

type DataQueryingRequest = {
  cnpj: string
}

interface DataQueryingController {
  public index(req: Request<DataQueryingRequest>, res: Response<T>): Promise<Response<T>>
}

type DefaultResponse<T> = {
  status: boolean,
  message: string,
  data: T[] | []
}
