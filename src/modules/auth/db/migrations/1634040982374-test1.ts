/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class test11634040982374 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log('up');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
      
  }
}
