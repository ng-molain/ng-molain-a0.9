import { Controller, Get, Param, HttpCode } from '@nestjs/common';

import { AppService } from './app.service';
import { APIS } from './_mock/_api';
import { GEOS } from './_mock';

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

  @Get('list')
  getList(@Param('count') count: number) {
    return APIS['/api/list'](count);
  }

  @Get('401')
  @HttpCode(401)
  get401() {}

  @Get('403')
  @HttpCode(403)
  get403() {}
  
  @Get('404')
  @HttpCode(404)
  get404() {}

  @Get('500')
  @HttpCode(500)
  get500() {}

  @Get('geo/province')
  getGeoProvince() {
    return GEOS["/geo/province"]();
  }

  @Get('geo/:id')
  getGeoById(@Param('id')id: any) {
    return GEOS["/geo/:id"](id);
  }
}
