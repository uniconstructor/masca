import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';

import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import ConfigModule from './config/configuration.js';
import { AgentService } from './modules/agent/agent.service.js';
import { DatastoreService } from './modules/datastore/datastore.service.js';

@Module({
  imports: [ConfigModule, ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: [ConfigService, AppService, AgentService, DatastoreService],
})
export class AppModule {}
export default AppModule;
