import { Controller, Get } from '@nestjs/common';
import { todoData } from '../_mock';

@Controller('todos')
export class TodosController {
    
    @Get()
    getData() {
        return todoData;
    }
}
