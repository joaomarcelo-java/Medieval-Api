import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { contains } from 'class-validator';

@Injectable()
export class ItensService {
    constructor(private prisma: PrismaService) {}

    findAll(){
        return this.prisma.item.findMany();
    }
    findOne(id: number){
        return this.prisma.item.findUnique({where: {id}});
    }

    create(data:any){
        return this.prisma.item.create({data});
    }

    update(id: number, data: any){
        return this.prisma.item.update({where: {id}, data});
    }

    delete(id: number){
        return this.prisma.item.delete({where: {id}});
    }

    //Encontrar itens por nome
    findByName(name: string){
        return this.prisma.item.findMany({
            where:{
                nome:{
                    contains:name,
                    mode: 'insensitive'
                }
            }
        })
    }

    //Encontrar itens por raridade
    findByRaridade(raridade: string){
        return this.prisma.item.findMany({
            where:{
                raridade:{
                    contains: raridade,
                    mode: 'insensitive'
                }
            }
        })
    }
   //Encontrar itens por tipo
   findByTipo(tipo: string){
        return this.prisma.item.findMany({
            where:{
                tipo:{
                    contains: tipo,
                    mode: 'insensitive'
                }
            }
        })
   }

   //Encontrar itens por personagem
   findByPersonagemId(personagemId: number){
        return this.prisma.item.findMany({
            where:{
                personagemId:personagemId
            }
        })
   }
}
