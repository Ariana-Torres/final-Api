import { TypeService } from "./type.service";
import { CreateTypeDto } from "./dto/create-type.dto";
import { UpdateTypeDto } from "./dto/update-type.dto";
export declare class TypeController {
    private readonly typeService;
    constructor(typeService: TypeService);
    create(createTypeDto: CreateTypeDto): Promise<import("./entities/type.entity").Type>;
    findAll(): Promise<import("./entities/type.entity").Type[]>;
    findOne(id: string): Promise<import("./entities/type.entity").Type>;
    update(id: string, updateTypeDto: UpdateTypeDto): Promise<import("./entities/type.entity").Type>;
    remove(id: string): Promise<import("./entities/type.entity").Type>;
}
