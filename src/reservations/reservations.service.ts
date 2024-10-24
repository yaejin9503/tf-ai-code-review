import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';

@Injectable()
export class ReservationsService {
  private reservations = [];

  create(createReservationDto: CreateReservationDto) {
    const newReservation = {
      id: this.reservations.length + 1,
      ...createReservationDto,
    };
    this.reservations.push(newReservation);
    return newReservation;
  }

  findAll() {
    return this.reservations;
  }
}
