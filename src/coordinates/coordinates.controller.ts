import { Body, Controller, Post } from '@nestjs/common';
import { CoordinatesService } from './coordinates.service';

@Controller('coordinates')
export class CoordinatesController {
  constructor(private readonly coordinatesService: CoordinatesService) {}

  @Post('new-coordinates')
  addCoordinates(
    @Body('latitude') latitude: number,
    @Body('longitude') longitude: number,
  ): void {
    this.coordinatesService.addCoordinates(latitude, longitude);
  }
}
