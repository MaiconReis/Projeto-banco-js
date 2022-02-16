import { Conta } from "./Conta.js";
export class ContaCorrente extends Conta {
    static numeroDeContas = 0;

 constructor(saldoInicial,Cliente, agencia) {
       super(saldoInicial,Cliente, agencia);
       ContaCorrente.numeroDeContas += 1;
    }
    teste(){
        super.teste();
        console.log('class conta corrente');
    }
    //sobre escrevendo o comportamento sacar
    sacar(valor) {
        let taxa = 1.1
      return this._sacar(valor, taxa);
    }
}