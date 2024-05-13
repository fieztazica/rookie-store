import { Injectable } from '@nestjs/common';
import { CreateCustomerInput } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';
import { PrismaService } from '../common/database/prisma.service';

@Injectable()
export class CustomersService {
  constructor(private readonly prisma: PrismaService) {}
  create(createCustomerInput: CreateCustomerInput) {
    return this.prisma.customer.create({ data: createCustomerInput });
  }

  findAll() {
    return this.prisma.customer.findMany();
  }

  findOne(id: string) {
    return this.prisma.customer.findUnique({ where: { id } });
  }

  update(id: string, updateCustomerInput: UpdateCustomerInput) {
    return this.prisma.customer.update({
      where: { id },
      data: updateCustomerInput,
    });
  }

  remove(id: string) {
    return `This action removes a #${id} customer`;
  }
}
