import { Column, Entity } from 'typeorm'
import BaseEntity from './BaseEntity'

@Entity({name:'Empresas', synchronize: false})
export default class Empresas extends BaseEntity {
  @Column({ unique: true})
  public cnpj_base: string

  @Column()
  public razao_social: string

  @Column()
  public natureza_juridica: string

  @Column()
  public qualificacao_responsavel: string

  @Column()
  public porte_empresa: string
  
  @Column()
  public ente_federativo_responsavel: string
  
  @Column()
  public capital_social: number
}
