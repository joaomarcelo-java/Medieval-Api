import { IsString, IsInt, IsOptional, IsIn, MinLength } from 'class-validator';

export class CreateGuildaDto {
    @IsString({message: 'O nome da guilda deve ser um texto.'})
    @MinLength(3, {message: 'O nome da guilda deve conter pelo menos 3 caracteres.'})
    nome: string;
}