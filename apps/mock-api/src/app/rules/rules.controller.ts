import { Controller, Get, Param, Query } from '@nestjs/common';
import { RULES } from '../_mock/_rule';

@Controller('rule')
export class RulesController {

  @Get()
  getAll(@Query() querys: any) {
    return RULES["/rule"](querys);
  }
}
