import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonagemDto } from './create-personagem.dto';

export class UpdateItemDto extends PartialType(CreatePersonagemDto) {}