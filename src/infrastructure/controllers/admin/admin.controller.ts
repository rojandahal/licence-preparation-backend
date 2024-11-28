import { Controller, Get, Inject, Request } from '@nestjs/common';
import { AdminService } from 'src/application/services/admin';
import { IsPublic } from 'src/common/decorators';
import { IAdminService } from 'src/domain/services';

@Controller()
export class AdminController {
  constructor(
    @Inject(AdminService) private readonly adminService: IAdminService,
  ) {}

  @Get()
  @IsPublic() // If this decorator is present, the route will be public and won't require authentication
  async getAdmin(@Request() req) {
    return this.adminService.getAdmin();
  }
}
