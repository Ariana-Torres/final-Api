import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./entities/product.entity";
import { In, Repository } from "typeorm";
import { Category } from "src/categories/entities/category.entity";
import { Type } from "src/type/entities/type.entity";

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(Type)
    private typeRepo: Repository<Type>,
    @InjectRepository(Category)
    private categoryRepo: Repository<Category>
  ) {}

  async create(createProductDto: CreateProductDto) {
    const { types, categories, ...productData } = createProductDto;

    let typesModels = [];
    let categoriesModels = [];

    if (createProductDto.types) {
      typesModels = await this.typeRepo.find({
        where: { name: In([...createProductDto.types]) },
      });
    }
    if (createProductDto.categories) {
      categoriesModels = await this.categoryRepo.find({
        where: { name: In([...createProductDto.categories]) },
      });
    }

    const model = this.productRepository.create({
      ...productData,
      categories: categoriesModels,
      types: typesModels,
    });
    await this.productRepository.save(model);

    return model;
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(id: string) {
    return this.productRepository.findOneBy({ id });
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const { types, categories, ...productData } = updateProductDto;

    let typeModels = [];
    let categoriesModels = [];
    if (updateProductDto.types) {
      typeModels = await this.typeRepo.find({
        where: { name: In([...updateProductDto.types]) },
      });
    }
    if (updateProductDto.categories) {
      categoriesModels = await this.categoryRepo.find({
        where: { name: In([...updateProductDto.categories]) },
      });
    }

    const product = await this.productRepository.preload({
      id,
      ...productData,
      categories: categoriesModels,
      types: typeModels,
    });

    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    return this.productRepository.save(product);
  }

  async remove(id: string) {
    const product = await this.productRepository.findOneBy({ id });

    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    return this.productRepository.remove(product);
  }
}
