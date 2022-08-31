import { Injectable } from '@nestjs/common';

import { Coordinates } from './coordinates.model';

@Injectable()
export class CoordinatesService {
  private coordinates: Coordinates = { longitude: 0, latitude: 0 };

  addCoordinates(longitude: number, latitude: number) {
    const newCoordinates = new Coordinates(longitude, latitude);
    this.coordinates = newCoordinates;
    return this.coordinates;
  }
}
