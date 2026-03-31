import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PersonagensService {
    constructor(private prisma: PrismaService) {}

    //Encontrar personsagens
    async findAll() {
        return await this.prisma.personagem.findMany();

    }
    findOne(id: number) {
        return this.prisma.personagem.findUnique({where: {id}});
    }

    //Criar personagens
    async create(data: any){
        return await this.prisma.personagem.create({data});
    }

    //Editar personagem
    async update (id: number, data: any){
        return await this.prisma.personagem.update({where: {id}, data});
    }

    //Deletar personagem
    async delete(id: number){
        return await this.prisma.personagem.delete({where: {id}});
    }

    //Encontrar personagens por nome
    async findByName(name: string){
        return await this.prisma.personagem.findMany({
            where:{
                nome:{
                    contains:name,
                    mode: 'insensitive'
                }
            }
        })
    }

    //Encontrar personagens por classe
    async findByClasse(classe: string){
        return await this.prisma.personagem.findMany({
            where:{
                classe:{
                    contains: classe,
                    mode: 'insensitive'
                }
            }
        })
    }

    //Enontrar personagens por Guilda
    async findByGuilda(guilda: string){
        return this.prisma.personagem.findMany({
            where:{
                guilda:{
                    nome:{
                        contains: guilda,
                        mode: 'insensitive'
                    }
                }
            }
        })
    }
}