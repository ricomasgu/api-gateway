import { Controller, Post, UseGuards, Request } from '@nestjs/common';

import { LocalAuthGuard } from './localauth.guard';

@Controller('auth')
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return req.user;
  }
}
