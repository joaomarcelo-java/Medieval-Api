import { PartialType } from '@nestjs/mapped-types';
import { CreateGuildaDto } from './create-guilda.dto';

export class UpdateItemDto extends PartialType(CreateGuildaDto) {}