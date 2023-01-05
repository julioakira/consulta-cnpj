import { PrimaryGeneratedColumn } from 'typeorm';

export default abstract class BaseEntityIdentity {
  @PrimaryGeneratedColumn({ type: 'int' })
  public id: number
}
