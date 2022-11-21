import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUser1668388238783 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users').catch();
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar(200)',
          },
          {
            name: 'password',
            type: 'varchar(1000)',
          },
          {
            name: 'active',
            type: 'boolean',
          },
          {
            name: 'created_in',
            type: 'timestamp',
          },
          {
            name: 'updated_in',
            type: 'timestamp',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
