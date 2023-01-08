import { Entity, Column } from 'typeorm';

import BaseEntityIdentity from './BaseEntityIdentity';

export enum YesOrNo {
  'S' = 'Sim',
  'N' = 'Não'
};

@Entity({ name: 'simples', synchronize: false })
export class Simples extends BaseEntityIdentity {
  @Column({ type: 'int' })
  public id_cnpj: number

  @Column()
  public cnpj: string

  @Column({ type: 'enum', enum: YesOrNo })
  public opcao_pelo_simples: YesOrNo

  @Column({ type: 'timestamp' })
  public data_opcao_pelo_simples: Date

  @Column({type: 'timestamp'})
  public data_exclusao_do_simples: Date

  @Column({type: 'enum', enum: YesOrNo})
  public opcao_pelo_mei: YesOrNo

  @Column({type: 'timestamp'})
  public data_opcao_pelo_mei: Date

  @Column({ type: 'timestamp'})
  public data_entrada_do_mei: Date
}