import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';

@Injectable()
export class ReservationsService {
  private reservations = [];

  create(createReservationDto: CreateReservationDto) {
    const existingReservation = this.reservations.find(
      (reservation) =>
        reservation.reservationDate.getTime() ===
          new Date(createReservationDto.reservationDate).getTime() &&
        reservation.serviceType === createReservationDto.serviceType,
    );

    if (existingReservation) {
      throw new ConflictException('이미 예약이 존재합니다.!!!!!');
    }

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

  findOne(id: number) {
    const reservation = this.reservations.find((res) => res.id === id);
    if (!reservation) {
      throw new NotFoundException('예약을 찾을 수 없습니다.');
    }
    return reservation;
  }

  remove(id: number) {
    const index = this.reservations.findIndex((res) => res.id === id);
    if (index === -1) {
      throw new NotFoundException('예약을 찾을 수 없습니다.');
    }
    this.reservations.splice(index, 1);
    return { message: '예약이 삭제되었습니다.' };
  }
}
