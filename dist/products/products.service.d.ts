import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Product } from "./entities/product.entity";
import { Repository } from "typeorm";
import { Category } from "src/categories/entities/category.entity";
import { Type } from "src/type/entities/type.entity";
export declare class ProductsService {
    private productRepository;
    private typeRepo;
    private categoryRepo;
    constructor(productRepository: Repository<Product>, typeRepo: Repository<Type>, categoryRepo: Repository<Category>);
    create(createProductDto: CreateProductDto): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<Product>;
    remove(id: string): Promise<Product>;
}
