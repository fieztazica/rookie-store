import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SessionSerializer } from './serializer/session.serializer';
import { JwtStrategy } from './strategy/jwt.strategy';
import { buildOpenIdClient, OidcStrategy } from './strategy/oidc.strategy';
import { CustomersModule } from 'src/customers/customers.module';
import { ConfigsModule } from 'src/configs/configs.module';
import { ApiKeyStrategy } from './strategy/apikey.strategy';

const OidcStrategyFactory = {
  provide: 'OidcStrategy',
  useFactory: async (authService: AuthService) => {
    const client = await buildOpenIdClient(); // secret sauce! build the dynamic client before injecting it into the strategy for use in the constructor super call.
    const strategy = new OidcStrategy(authService, client);
    return strategy;
  },
  inject: [AuthService],
};

@Module({
  imports: [
    CustomersModule,
    ConfigsModule,
    PassportModule.register({
      session: true,
      defaultStrategy: ['oidc', 'jwt', 'api-key'],
    }),
  ],
  controllers: [AuthController],
  providers: [
    OidcStrategyFactory,
    SessionSerializer,
    AuthService,
    JwtStrategy,
    ApiKeyStrategy,
  ],
  exports: [AuthService],
})
export class AuthModule {}
