import { IsNotEmpty, IsOptional, IsArray, IsString } from "class-validator";
export class CreateTypeDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  slug: string;

  @IsArray({ always: true })
  @IsString({ each: true })
  @IsOptional()
  products: string[];
}
