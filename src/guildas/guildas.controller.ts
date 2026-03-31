import { Controller, Post, Body, Param, Get, Patch, Delete } from '@nestjs/common';
import { GuildasService } from './guildas.service';
import { CreateGuildaDto } from './dto/create-guilda.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ApiTags } from '@nestjs/swagger'; 

@ApiTags('guildas')
@Controller('guildas')
export class GuildasController {
  constructor(private readonly guildasService: GuildasService) {}

  @Post()
  create(@Body() data: CreateGuildaDto) {
    return this.guildasService.create(data);
  }

  @Get()
  findAll() {
    return this.guildasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.guildasService.findOne(id);
  }

  @Get('buscar')
  findByName(@Param('nome') nome: string) {
    return this.guildasService.findGuildaByName(nome);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() data: UpdateItemDto) {
    return this.guildasService.update(id, data);
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.guildasService.delete(id);
  }
}
