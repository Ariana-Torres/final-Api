import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductsModule } from "./products/products.module";
import { CategoriesModule } from "./categories/categories.module";
<<<<<<< HEAD
import { TagsModule } from "./tags/tags.module";
import { MenuModule } from "./menu/menu.module";
=======
import { TypeModule } from "./type/type.module";
>>>>>>> ariana

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "12345678",
      database: "restaurant-ng",
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    ProductsModule,
    CategoriesModule,
<<<<<<< HEAD
    TagsModule,
    MenuModule,
=======
    TypeModule,
>>>>>>> ariana
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
