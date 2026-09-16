import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProductosModule } from './productos/productos.module.js'; // 1. agregar

@Module({
  imports: [ProductosModule], // 2. agregar aquí
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}