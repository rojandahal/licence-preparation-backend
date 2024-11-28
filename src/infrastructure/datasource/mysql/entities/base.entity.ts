import {
  BeforeInsert,
  BeforeUpdate,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn({})
  id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  setCreateAtTimestamps() {
    this.created_at = new Date(Date.now());
  }

  @BeforeUpdate()
  setUpdateAtTimestamps() {
    this.updated_at = new Date(Date.now());
  }

  static get InjectableString(): string {
    return (
      this.name
        .replace(/(A-Z)/g, ' $1')
        .replace(/entity/gi, '')
        .trim()
        .split(' ')
        .join('_')
        .toUpperCase() + '_REPOSITORY'
    );
  }
}
