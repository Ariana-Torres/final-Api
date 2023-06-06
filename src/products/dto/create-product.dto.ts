import { IsArray, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  name: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  description: string;
}
