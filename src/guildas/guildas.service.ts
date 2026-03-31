import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';


@Injectable()
export class GuildasService {
    constructor(private prisma: PrismaService) {}

    findAll(){
        return this.prisma.guilda.findMany();
    }
    //Apenas quando procurada especificamente por id, a guilda trará os membros associados a ela
    findOne(id: number){
        return this.prisma.guilda.findUnique(
            {
            where: {id},
            include: {
                membros:{
                    select: {
                        id: true,
                        nome: true
                    }
                }
            }
        });
    }

    create(data:any){
        return this.prisma.guilda.create({data});
    }
    update(id: number, data: any){
        return this.prisma.guilda.update({where: {id}, data});
    }
    delete(id: number){
        return this.prisma.guilda.delete({where: {id}});
    }

    findGuildaByName(nome: string){
        return this.prisma.guilda.findMany({
            where:{
                nome:{
                    contains: nome,
                    mode: 'insensitive'
                }
            }
        })
    }
}
