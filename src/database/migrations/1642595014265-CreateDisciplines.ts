import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateDisciplines1642595014265 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'disciplines',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    length: '36',
                    isPrimary: true
                },
                {
                    name: 'title',
                    type: 'varchar'
                },
                {
                    name: 'course_id',
                    type: 'varchar',
                    length: '36'
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
        }))

        await queryRunner.createForeignKey(
            'disciplines',
            new TableForeignKey({
                name: 'FKDisciplinesCourses',
                referencedTableName: 'courses',
                referencedColumnNames: ['id'],
                columnNames: ['course_id'],
                onDelete: 'SET NULL',
                onUpdate: 'SET NULL',
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('disciplines', 'course_id')
        await queryRunner.dropTable('disciplines')
    }

}
