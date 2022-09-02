import { Injectable } from '@nestjs/common';

import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne(username);
    const passwordHashed = password;
    if (user && user.password === passwordHashed) {
      const { username, password, ...rest } = user;
      return rest;
    }

    return null;
  }
}
