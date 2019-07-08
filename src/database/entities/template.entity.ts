import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Template {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 500 })
  middleName: string;

  @Column({ length: 500 })
  lastName: string;

  @Column()
  age: number;

  @Column()
  gender: string;
}
