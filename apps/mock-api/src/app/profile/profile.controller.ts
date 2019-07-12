import { Controller, Get } from '@nestjs/common';
import { PROFILES } from '../_mock/_profile';

@Controller('profile')
export class ProfileController {

    @Get('goods')
    getGoods() {
        return PROFILES["GET /profile/goods"];
    }

    @Get('advanced')
    getAdvanced() {
        return PROFILES["GET /profile/advanced"];
    }

    @Get('progress')
    getProgress() {
        return PROFILES["GET /profile/progress"];
    }
}
