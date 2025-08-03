import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Tags {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true, type: 'varchar',  nullable: false })
  name: string;

  @Column({ type: 'varchar',  nullable: false })
  description?: string;

  @Column({ unique: true, type: 'varchar',  nullable: false })
  slug: string;

  @Column({ type: 'text', nullable: true })
  schema: string;

  @Column({ type: 'text', nullable: true })
  featureImageUrl?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
