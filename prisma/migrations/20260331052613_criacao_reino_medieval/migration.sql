-- CreateTable
CREATE TABLE "Personagem" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "classe" TEXT NOT NULL,
    "nivel" INTEGER NOT NULL,
    "guildaId" INTEGER,

    CONSTRAINT "Personagem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "raridade" TEXT NOT NULL,
    "personagemId" INTEGER,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Guilda" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Guilda_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Personagem" ADD CONSTRAINT "Personagem_guildaId_fkey" FOREIGN KEY ("guildaId") REFERENCES "Guilda"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_personagemId_fkey" FOREIGN KEY ("personagemId") REFERENCES "Personagem"("id") ON DELETE SET NULL ON UPDATE CASCADE;
