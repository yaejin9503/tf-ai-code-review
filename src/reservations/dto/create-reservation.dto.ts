// src/reservations/dto/create-reservation.dto.ts
import { IsString, IsDate, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateReservationDto {
  @IsString()
  @IsNotEmpty()
  customerName: string;

  @IsDate()
  reservationDate: Date;

  @IsString()
  @IsNotEmpty()
  serviceType: string;

  @IsEmail()
  @IsNotEmpty()
  customerEmail: string; // 고객 이메일 추가
}
