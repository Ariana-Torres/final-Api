import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTypeDto } from "./dto/create-type.dto";
import { UpdateTypeDto } from "./dto/update-type.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Type } from "./entities/type.entity";
import { Repository } from "typeorm";
import slugify from "slugify";

@Injectable()
export class TypeService {
  constructor(
    @InjectRepository(Type)
    private typeRepository: Repository<Type>
  ) {}

  async create(createTypeDto: CreateTypeDto) {
    const { name } = createTypeDto;
    const slug = slugify(name, { lower: true, strict: true });

    const type = this.typeRepository.create({
      name,
      slug,
    });

    await this.typeRepository.save(type);
    return type;
  }

  findAll() {
    return this.typeRepository.find();
  }

  async findOne(id: string) {
    const type = await this.typeRepository.findOneBy({ id });

    if (!type) {
      throw new NotFoundException(`Type with ID ${id} not found`);
    }

    return type;
  }

  async update(id: string, updateTypeDto: UpdateTypeDto) {
    const { name } = updateTypeDto;

    const type = await this.typeRepository.preload({
      id,
      name,
    });

    if (!type) {
      throw new NotFoundException(`Type with ID ${id} not found`);
    }

    return this.typeRepository.save(type);
  }

  async remove(id: string) {
    const type = await this.typeRepository.findOneBy({ id });

    if (!type) {
      throw new NotFoundException(`Type with ID ${id} not found`);
    }

    return this.typeRepository.remove(type);
  }
}
