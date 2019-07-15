import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChartsModule } from './charts/charts.module';
import { TodosModule } from './todos/todos.module';
import { UsersModule } from './users/users.module';
import { ProfileModule } from './profile/profile.module';
import { RulesModule } from './rules/rules.module';


@Module({
  imports: [
    ChartsModule,
    TodosModule,
    UsersModule,
    ProfileModule,
    RulesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
