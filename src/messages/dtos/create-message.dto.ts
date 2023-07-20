import {
  IsNotEmpty,
  IsLowercase,
  IsAlphanumeric,
  Length,
} from 'class-validator';
export class createMessageDto {
  @IsAlphanumeric()
  id: number;
  @IsNotEmpty()
  @IsLowercase()
  @Length(3, 6)
  content: string;
}
