import { Injectable } from "@angular/core";
import { Lancamento } from "../models/lancamento.model";

@Injectable({
    providedIn: 'root',
})

export class LancamentoService {

    private lancamento: Lancamento [] = [];

    adicionarLancamento(lancamento: Lancamento): void{
        this.lancamento.push(lancamento);
    }

    getLancamento(): Lancamento[]{
        return this.lancamento;
    }

}
