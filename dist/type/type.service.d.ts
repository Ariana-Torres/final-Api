import { CreateTypeDto } from "./dto/create-type.dto";
import { UpdateTypeDto } from "./dto/update-type.dto";
import { Type } from "./entities/type.entity";
import { Repository } from "typeorm";
export declare class TypeService {
    private typeRepository;
    constructor(typeRepository: Repository<Type>);
    create(createTypeDto: CreateTypeDto): Promise<Type>;
    findAll(): Promise<Type[]>;
    findOne(id: string): Promise<Type>;
    update(id: string, updateTypeDto: UpdateTypeDto): Promise<Type>;
    remove(id: string): Promise<Type>;
}
