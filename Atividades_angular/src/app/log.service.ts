export class LogService {
    info(message: string) {
        console.log(`Info: ${message}`);
    }

    aviso(message: string){
        console.log(`Aviso: ${message}`);
    }

    erro(message: string){
        console.log(`Erro: ${message}`);
    }
}