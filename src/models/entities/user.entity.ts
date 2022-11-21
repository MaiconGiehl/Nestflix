import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export default class UserEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'password', type: 'varchar' })
  password: string;

  @Column({ name: 'active', type: 'boolean' })
  active: boolean;

  @Column({
    name: 'created_in',
    type: 'timestamp',
  })
  createdAt: Date;

  @Column({
    name: 'updated_in',
    type: 'timestamp',
  })
  updatedAt: Date;
}
