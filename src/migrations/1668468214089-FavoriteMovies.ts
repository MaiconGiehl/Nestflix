import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class FavoriteMovies1668468214089 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users').catch();
    await queryRunner.createTable(
      new Table({
        name: 'favorite_movies',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'title',
            type: 'varchar(200)',
          },
          {
            name: 'image',
            type: 'varchar(1000)',
          },
          {
            name: 'active',
            type: 'boolean',
          },
          {
            name: 'created_at',
            type: 'timestamp',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
          },
          {
            name: 'user_id',
            type: 'integer',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('favorite_movies');
  }
}
