import { Module } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { ProductsController } from "./products.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./entities/product.entity";
import { Type } from "src/type/entities/type.entity";
import { Category } from "src/categories/entities/category.entity";

@Module({
  imports: [
    // TypeModule,
    // CategoriesModule,
    TypeOrmModule.forFeature([Product, Type, Category]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
