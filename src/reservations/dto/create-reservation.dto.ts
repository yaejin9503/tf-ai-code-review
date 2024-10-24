// src/reservations/dto/create-reservation.dto.ts
import { IsString, IsDate, IsNotEmpty } from 'class-validator';

export class CreateReservationDto {
  @IsString()
  @IsNotEmpty()
  customerName: string;

  @IsDate()
  reservationDate: Date;

  @IsString()
  @IsNotEmpty()
  serviceType: string;
}
