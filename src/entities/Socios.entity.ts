import { Column, Entity } from 'typeorm'

import BaseEntityIdentity from './BaseEntityIdentity'

@Entity({ name: 'socios', synchronize: false })
export default class Socios extends BaseEntityIdentity {
  @Column({ type: 'int' })
  public id_cnpj: number

  @Column({ length: 8})
  public cnpj: string

  @Column({ type: 'int' })
  public id_tipo_socio: number

  @Column()
  public nome_razao_social: string

  @Column()
  public cpf_cnpj: string

  @Column()
  public id_qualificacao: string

  @Column({ type: 'timestamp' })
  public data_entrada: Date

  @Column()
  public id_pais: string

  @Column()
  public cpf_representante_legal: string

  @Column()
  public nome_representante_legal: string

  @Column()
  public id_qualificacao_representante_legal: string

  @Column({ type: 'int' })
  public id_faixa_etaria: number
}
