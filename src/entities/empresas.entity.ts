import { Column, Entity } from 'typeorm'
import { BaseEntity } from './base_entity'

@Entity()
export default class Empresas extends BaseEntity {
  @Column({ unique: true})
  public cnpj: string

  @Column()
  public razao_social: string

  @Column()
  public natureza_juridica: string

  @Column()
  public qualificacao_responsavel: string

  @Column()
  public capital_social: string

  @Column()
  public porte: string

  @Column()
  public ente_federativo_responsavel: string
}
