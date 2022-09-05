import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthenticationGuard } from '../auth/authentication.guard';
import { CoordinatesService } from './coordinates.service';

@Controller('coordinates')
export class CoordinatesController {
  constructor(private readonly coordinatesService: CoordinatesService) {}

  @UseGuards(AuthenticationGuard)
  @Post('new-coordinates')
  addCoordinates(
    @Body('latitude') latitude: number,
    @Body('longitude') longitude: number,
  ): string {
    this.coordinatesService.addCoordinates(latitude, longitude);
    return 'Coordinates added correctly';
  }
}
