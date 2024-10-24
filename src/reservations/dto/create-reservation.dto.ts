// src/reservations/dto/create-reservation.dto.ts
import { IsString, IsDate, IsNotEmpty } from 'class-validator';

export class CreateReservationDto {
  @IsString()
  customerName: string;

  @IsDate()
  reservationDate: Date;

  @IsString()
  @IsNotEmpty()
  serviceType: string;
}
