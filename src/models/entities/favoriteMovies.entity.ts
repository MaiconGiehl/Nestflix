import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import UserEntity from './user.entity';

@Entity('favorite_movies')
export default class FavoriteMoviesEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'title', type: 'varchar' })
  title: string;

  @Column({ name: 'image', type: 'varchar' })
  image: string;

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

  @ManyToOne(() => UserEntity, (user) => user)
  @JoinColumn({ name: 'user' })
  user: UserEntity;
}
