import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { APIS } from './_mock/_api';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('notice')
  getNotice() {
    return APIS['/api/notice']();
  }

  @Get('activities')
  getActivities() {
    return APIS['/api/activities']();
  }
}
