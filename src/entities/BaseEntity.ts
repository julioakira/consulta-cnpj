import { PrimaryGeneratedColumn } from 'typeorm';

export default abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  public id_cnpj: number
}
