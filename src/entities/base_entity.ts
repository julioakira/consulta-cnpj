import { PrimaryGeneratedColumn } from "typeorm";

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()

  public rowid: number
}
