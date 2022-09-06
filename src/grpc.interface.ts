import { Observable } from 'rxjs';
import { Coordinates } from './coordinates/coordinates.model';

export interface IGrpcService {
  addCoordinates(newCoordinates: Coordinates): Observable<any>;
}