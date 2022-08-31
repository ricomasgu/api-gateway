import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoordinatesController } from './coordinates/coordinates.controller';
import { CoordinatesService } from './coordinates/coordinates.service';
import { CoordinatesModule } from './coordinates/coordinates.module';

@Module({
  imports: [CoordinatesModule],
  controllers: [AppController, CoordinatesController],
  providers: [AppService, CoordinatesService],
})
export class AppModule {}
