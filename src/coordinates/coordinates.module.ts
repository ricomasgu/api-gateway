import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CoordinatesController } from './coordinates.controller';
import { CoordinatesSchema } from './coordinates.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Coordinates', schema: CoordinatesSchema },
    ]),
  ],
  controllers: [CoordinatesController],
  providers: [],
})
export class CoordinatesModule {}
