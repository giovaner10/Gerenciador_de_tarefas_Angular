export class Tarefa{
    constructor(
        public id: number ,
        public nome?: string,
        public concluida?: boolean,
        public fimTarefa?: Date,
        public inicioTarefa?: Date,

    ){}
}