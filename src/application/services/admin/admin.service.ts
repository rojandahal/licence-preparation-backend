import { Injectable } from '@nestjs/common';
import { IAdminService } from 'src/domain/services';

@Injectable()
export class AdminService implements IAdminService {
  constructor() {
    console.log('AdminService');
  }
  async getAdmin(): Promise<any> {
    return 'AdminService';
  }
}
