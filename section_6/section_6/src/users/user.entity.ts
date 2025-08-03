import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid') // Use PrimaryGeneratedColumn to auto-generate the id
  //   @PrimaryColumn() --> U generate the id
  id: number;
  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  firstName: string;
  @Column()
  lastName: string;
  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
    unique: true,
  })
  email: string;
  @Column()
  password: string;
  @Column()
  isActive: boolean;
}
