import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('favorite_movies')
export default class FavoriteMoviesEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'title', type: 'varchar' })
  title: string;

  @Column({ name: 'image', type: 'varchar' })
  image: string;

  @Column({
    name: 'created_at',
    type: 'timestamp',
  })
  createdAt: Date;

  @Column({
    name: 'updated_at',
    type: 'timestamp',
  })
  updatedAt: Date;

  @Column({ name: 'active', type: 'boolean' })
  active: boolean;

  @Column({ name: 'user_id', type: 'integer' })
  user_id: number;
}
