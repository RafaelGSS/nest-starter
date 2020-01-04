import { Module } from '@nestjs/common';
import { UserController } from '@/modules/user.controller';
import { UserService } from '@/modules/user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}

