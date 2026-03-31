import { IsString, MinLength, IsOptional, IsInt, Min, Max } from 'class-validator';

// DTO para criar um personagem(Data Transfer Object)
// Ele define a estrutura dos dados que serão enviados para criar um personagem, validando e etc..


export class CreatePersonagemDto{
    @IsString({message: 'O nome deve ser um texto!'})
    @MinLength(3, {message: 'O nome deve conter no mínimo 3 caracteres!'})
    nome: string;

    @IsString()
    classe: string;
    @IsOptional()

    @IsInt()
    @Min(1 , {message: 'O nível deve ser no mínimo 1!'})
    @Max(5, {message: 'O nível deve ser no máximo 5!'})
    @IsOptional()

    guildaId?: number;
}