import { Column, Entity } from 'typeorm'

import BaseEntityIdentity from './BaseEntityIdentity'

@Entity({ name: 'empresas', synchronize: false })
export default class Empresas extends BaseEntityIdentity {
  @Column({ type: 'int' })
  public id_cnpj: number

  @Column({ length: 8 })
  public cnpj: string

  @Column()
  public razao_social: string

  @Column()
  public id_natureza_juridica: string

  @Column({ type: 'int' })
  public id_qualificacao: number

  @Column({ type: 'bigint' })
  public capital_social: number

  @Column({ type: 'int' })
  public id_porte: number

  @Column()
  public ente_federativo_responsavel: string

}
