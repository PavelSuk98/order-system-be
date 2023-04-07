import { faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';
import { ApiNotFoundResponse } from '@nestjs/swagger';
import { ListItemModel } from 'src/domains/shared/domain/list-item.interface';
import { CreateProductDto } from '../domain/dto/create-product.dto';
import { UpdateProductDto } from '../domain/dto/update-product.dto';
import { Product } from '../domain/entities/product.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProductService {
  fakeProducts: ListItemModel<Product> = { list: [] };

  constructor() {
    for (let index = 0; index < 100; index++) {
      const fakeProductInfo: Product = {
        id:
          index === 0
            ? 'da045ae7-2a94-4503-8b7a-85f18dbad000'
            : faker.datatype.uuid(),
        order: index + 1,
        title: faker.commerce.product(),
        description:
          faker.commerce.productDescription() +
          ' ' +
          faker.commerce.productDescription(),
        imageUrl: faker.image.food(400, 500, true),
        state: 'Verified',
        categoryId: faker.commerce.productAdjective(),
        type: 'Food',
        price: faker.commerce.price(),
        createdBy: faker.name.fullName(),
        createdDate: faker.date.soon(),
        updatedBy: faker.name.fullName(),
        updatedDate: faker.date.soon(),
      };
      this.fakeProducts.list.push(fakeProductInfo);
    }
  }

  create(createProductDto: CreateProductDto) {
    const newProduct: Product = {
      id: uuidv4(),
      order: createProductDto.order,
      title: createProductDto.title,
      description: createProductDto.description,
      imageUrl: createProductDto.imageUrl,
      state: createProductDto.state,
      categoryId: createProductDto.categoryId,
      type: createProductDto.type,
      price: createProductDto.price,
      createdBy: 'System',
      createdDate: new Date(),
      updatedBy: 'Admin',
      updatedDate: new Date(),
    };
    this.fakeProducts.list.push(newProduct);
    return newProduct;
  }

  findAll() {
    return this.fakeProducts;
  }

  findOne(id: string) {
    const product = this.checkIfProductIsInArray(id);

    return product;
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    this.checkIfProductIsInArray(id);

    this.fakeProducts.list.map((product) => {
      if (product.id !== id) {
        return;
      }
      product.title = updateProductDto.title;
      product.order = updateProductDto.order;
      product.description = updateProductDto.description;
      product.imageUrl = updateProductDto.imageUrl;
      product.state = updateProductDto.state;
      product.categoryId = updateProductDto.categoryId;
      product.type = updateProductDto.type;
      product.price = updateProductDto.price;
      product.updatedDate = new Date();

      return product;
    });
  }

  remove(id: string) {
    this.checkIfProductIsInArray(id);

    this.fakeProducts.list = this.fakeProducts.list.filter((p) => p.id !== id);
  }

  private checkIfProductIsInArray(id: string) {
    const product = this.fakeProducts.list.find((product) => product.id === id);
    if (!product) {
      throw ApiNotFoundResponse();
    } else {
      return product;
    }
  }
}
