import { Module } from '@nestjs/common';
import { PersonagensModule } from './personagens/personagens.module';
import { ItensModule } from './itens/itens.module';
import { GuildasModule } from './guildas/guildas.module';

@Module({
  imports: [
    PersonagensModule, 
    ItensModule, 
    GuildasModule 
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}