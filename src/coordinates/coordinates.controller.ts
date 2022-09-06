import {
  Body,
  Controller,
  Post,
  UseGuards,
  Logger,
  OnModuleInit,
} from '@nestjs/common';
import { microservicesOptions } from '../grpc.options';
import { AuthenticationGuard } from '../auth/authentication.guard';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { IGrpcService } from '../grpc.interface';

@Controller('coordinates')
export class CoordinatesController implements OnModuleInit {
  private logger = new Logger('CoordinatesController');

  @Client(microservicesOptions)
  private client: ClientGrpc;

  private grpcService: IGrpcService;

  onModuleInit() {
    this.grpcService = this.client.getService<IGrpcService>(
      'CoordinatesController',
    );
  }

  @UseGuards(AuthenticationGuard)
  @Post('new-coordinates')
  async addCoordinates(
    @Body('latitude') latitude: number,
    @Body('longitude') longitude: number,
  ) {
    this.logger.log('Adding the coordinates: ', latitude, longitude)
    return this.grpcService.addCoordinates({ latitude, longitude });
  }
}
