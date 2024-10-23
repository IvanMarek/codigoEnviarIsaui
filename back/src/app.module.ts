import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { SeguimientosModule } from './seguimientos/seguimientos.module';
import { Usuario } from './usuarios/entities/usuario.entity';
import { Seguimiento } from './seguimientos/entities/seguimiento.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host:'localhost',
      port: 3305,
      username: 'root',
      password:'estudiantes2020',
      database: 'usuarios',
      entities: [Usuario, Seguimiento], 
    }), 
    UsuariosModule, 
    AuthModule, SeguimientosModule, ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}
