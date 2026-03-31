import { IsString, IsInt, IsOptional, IsIn, MinLength } from 'class-validator';

export class CreateItemDto {
    @IsString({message: 'O nome do item deve ser um texto.'})
    @MinLength(3, {message: 'O nome do item deve conter pelo menos 3 caracteres.'})
    nome: string;

    @IsString({message: 'A raridade deve ser um texto.'})
    @IsIn(['Comum', 'Raro', 'Rarissimo'], {message: 'A raridade deve estar entre: Comum, Raro ou Rarissimo'})
    raridade: string;

    @IsString({message: 'O tipo do item deve ser um texto.'})
    @IsIn(['Arma', 'Armadura', 'Consumível', 'Material'], {message: 'O tipo do item deve estar entre: Arma, Armadura, Consumível ou Material'})
    tipo: string;

    @IsInt({message: 'O ID do personsagem deve ser um número inteiro.'})
    @IsOptional()
    personsagemId: number;
}