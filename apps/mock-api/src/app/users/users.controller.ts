import { Controller, Get } from '@nestjs/common';
import { USERS } from '../_mock/_user';

@Controller('user')
export class UsersController {
    
    @Get('current')
    getCurrent() {
        return USERS['/user/current'];
    }
}
