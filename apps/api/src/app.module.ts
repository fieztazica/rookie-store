import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ThrottlerModule } from '@nestjs/throttler';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import configuration from './common/config/configuration';
import { validate } from './common/config/env.validation';
import { PrismaModule } from './common/database/prisma.module';
import { PrismaService } from './common/database/prisma.service';
import { CustomersModule } from './customers/customers.module';
import { FeedbacksModule } from './feedbacks/feedbacks.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';

@Global()
@Module({
  imports: [
    PrismaModule,
    CustomersModule,
    FeedbacksModule,
    CategoriesModule,
    ProductsModule,
    OrdersModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validate,
      expandVariables: true,
    }),
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        throttlers: [
          {
            ttl: config.get('THROTTLE_TTL'),
            limit: config.get('THROTTLE_LIMIT'),
          },
        ],
      }),
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: '~schema.gql',
      playground: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
