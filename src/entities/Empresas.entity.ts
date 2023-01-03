import { Column, Entity } from 'typeorm'
import BaseEntity from './BaseEntity'

@Entity({ name: 'empresas', synchronize: false })
export default class Empresas extends BaseEntity {
  @Column({ unique: true })
  public cnpj: string

  @Column()
  public razao_social: string

  @Column()
  public id_natureza_juridica: string

  @Column()
  public id_qualificacao: number

  @Column()
  public capital_social: number

  @Column()
  public id_porte: number

  @Column()
  public ente_federativo_responsavel: string

}
