import { Column, Entity } from 'typeorm';

import BaseEntityIdentity from './BaseEntityIdentity';

@Entity({ name: 'estabelecimentos', synchronize: false })
export default class Estabelecimentos extends BaseEntityIdentity {
  @Column({ type: 'int' })
  public id_cnpj: number

  @Column({ length: 8 })
  public cnpj: string

  @Column({ length: 4 })
  public cnpj_ordem: string

  @Column({ length: 2 })
  public cnpj_digito_verificador: string

  @Column({ type: 'int' })
  public id_matriz_filial: number

  @Column()
  public nome_fantasia: string

  @Column({ type: 'int' })
  public id_situacao_cadastral: number

  @Column({ type: 'timestamp' })
  public data_situacao_cadastral: Date

  @Column()
  public id_motivo_situacao_cadastral: string

  @Column()
  public nome_cidade_exterior: string

  @Column()
  public id_pais: string

  @Column({ type: 'timestamp' })
  public data_inicio_atividade: Date

  @Column({ length: 7 })
  public id_cnae_principal: string

  @Column()
  public lista_cnaes_secundarias: string

  @Column()
  public tipo_logradouro: string

  @Column()
  public logradouro: string

  @Column()
  public numero: string

  @Column()
  public complemento: string

  @Column()
  public bairro: string

  @Column()
  public cep: string

  @Column()
  public uf: string

  @Column()
  public id_municipio: string

  @Column()
  public ddd1: string

  @Column()
  public telefone1: string

  @Column()
  public ddd2: string

  @Column()
  public telefone2: string

  @Column()
  public ddd_fax: string

  @Column()
  public fax: string

  @Column()
  public email: string

  @Column()
  public situacao_especial: string

  @Column({ type: 'timestamp' })
  public data_situacao_especial: Date
}
