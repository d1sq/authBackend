/* eslint-disable @typescript-eslint/no-unused-vars */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertTestAdmin1634041391119 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log('up');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    console.log('down');
  }
}
