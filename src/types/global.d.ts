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

type EmpresasRequest = {
  cnpj: string
}

type EmpresasResponse = {
  status: boolean,
  message: string,
  data: Empresas | {}
}
