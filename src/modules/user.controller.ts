import { Controller, Get } from '@nestjs/common';
import { UserService } from '@/modules/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    return this.userService.getHello();
  }
}

