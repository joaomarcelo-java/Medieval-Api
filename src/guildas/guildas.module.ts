import { Module } from '@nestjs/common';
import { GuildasService } from './guildas.service';
import { GuildasController } from './guildas.controller';
import { PrismaService } from '../prisma.service'; // Ajuste o caminho se necessário

@Module({
  controllers: [GuildasController],
  
  providers: [GuildasService, PrismaService],
  
  exports: [GuildasService],
})
export class GuildasModule {}