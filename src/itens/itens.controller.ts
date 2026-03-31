import { Controller, Post, Body, Get, ParseIntPipe, Param, Patch, Delete, Query } from '@nestjs/common';
import { ItensService } from './itens.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ApiTags } from '@nestjs/swagger'; 

@ApiTags('itens') 
@Controller('itens')
export class ItensController {    
  constructor(private readonly itensService: ItensService) {}

  @Post()
  create(@Body() data: CreateItemDto) {
    return this.itensService.create(data);
  }

  @Get()
  findAll(){
    return this.itensService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.itensService.findOne(id);
  }
  @Get('buscar')
  buscar(@Query('nome') nome?: string,
         @Query('raridade') raridade?: string,
         @Query('tipo') tipo?: string,
         @Query('personagemId') personagemId?: string) {
    if(nome) {
      return this.itensService.findByName(nome);
    }
    if(raridade) {
      return this.itensService.findByRaridade(raridade);
    }
    if(tipo) {
      return this.itensService.findByTipo(tipo);
    }
    if(personagemId) {
      return this.itensService.findByPersonagemId(Number(personagemId));
    }
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateItemDto) {
    return this.itensService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.itensService.delete(id);
  }

}
