import { Column, Entity } from 'typeorm'
import BaseEntity from './BaseEntity'

@Entity({ name: 'socios', synchronize: false })
export default class Socios extends BaseEntity {
  @Column({ unique: true })
  public cnpj: string

  @Column()
  public id_tipo_socio: number

  @Column()
  public nome_razao_social: string

  @Column()
  public cpf_cnpj: string

  @Column()
  public id_qualificao: string

  @Column({ type: 'timestamp' })
  public data_entrada: Date

  @Column()
  public id_pais: string

  @Column()
  public cpf_representante_legal: string

  @Column()
  public nome_representante_legal: string

  @Column()
  public id_qualificao_representante_legal: string

  @Column()
  public id_faixa_etaria: number
}
