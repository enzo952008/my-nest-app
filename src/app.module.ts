import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Service1 } from './service1/service1.service';
import { Controller1 } from './controller1/controller1.controller';
import { Service2 } from './service2/service2.service';
import { Controller2 } from './controller2/controller2.controller';

@Module({
  imports: [],
  controllers: [AppController, Controller1, Controller2],
  providers: [AppService, Service1, Service2],
})
export class AppModule {}
