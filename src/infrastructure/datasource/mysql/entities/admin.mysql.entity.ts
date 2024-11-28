import { AdminRole } from 'src/common/enum/role.enum';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';
import { AdminEntity } from 'src/domain/entities';

@Entity()
export class AdminMySqlEntity extends BaseEntity implements AdminEntity {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: AdminRole,
    default: AdminRole.VIEWER,
  })
  role: AdminRole;

  @Column({ nullable: true })
  lastLoginAt: Date;

  // Computed full name property
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  // Optional: Method to check if admin has specific permissions
  hasPermission(requiredRole: AdminRole): boolean {
    const roleHierarchy = {
      [AdminRole.SUPER_ADMIN]: 3,
      [AdminRole.MANAGER]: 2,
      [AdminRole.VIEWER]: 1,
    };

    return roleHierarchy[this.role] >= roleHierarchy[requiredRole];
  }
}
