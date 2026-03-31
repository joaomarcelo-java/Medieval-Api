import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { PersonagensService } from './personagens.service';
import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { UpdateItemDto } from '../guildas/dto/update-item.dto';
import { ApiTags } from '@nestjs/swagger'; 

@ApiTags('personagens') 

@Controller('personagens')
export class PersonagensController {
  constructor(private readonly personagensService: PersonagensService) {}

  @Post()
  create(@Body() data: CreatePersonagemDto) {
    return this.personagensService.create(data);
  }

  @Get()
  findAll(){
    return this.personagensService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.personagensService.findOne(id);
  }

  @Get('buscar')
  buscar(@Query('nome') nome?: string, @Query('classe') classe?: string, @Query('guilda') guilda?: string) {
    if (nome) {
      return this.personagensService.findByName(nome);
    }
    if (classe) {
      return this.personagensService.findByClasse(classe);
    }
    if (guilda) {
      return this.personagensService.findByGuilda(guilda);
    }
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateItemDto) {
    return this.personagensService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number){
    return this.personagensService.delete(id);
  }
}
