import { Controller, Get } from '@nestjs/common';
import { CHARTS } from '../_mock/_chart';

@Controller('charts')
export class ChartsController {

    CHARTS = CHARTS;

    @Get()
    getData() {
        return this.CHARTS['/chart'];
    }

    @Get('visit')
    getVisit() {
        return this.CHARTS['/chart/visit'];
    }

    @Get('tags')
    getTags() {
        return this.CHARTS['/chart/tags'];
    }
}
