export class Conta {
    constructor(saldoInicial, Cliente, agencia) {
        if (this.construtor == Conta) {
            throw new Error("voce não deveria instancias em um objeto tipo conta diretamente, pois isso é uma classe abstrata");
        }
        this._saldo = saldoInicial;
        this._Cliente = Cliente;
        this._agencia = agencia;

    }
    set Cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._Cliente = novoValor;
        }

    }
    get Cliente() {
        return this._Cliente;
    }

    _saldo = 0;
    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }
    get saldo() {
        return this._saldo;
    }
    //metodo abstrato
    sacar(valor) {
        throw new Error("O metodo sacar da conta é abstrato");
    }
    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    depositar(valor) {
        this._saldo += valor;
    }

    tranferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }

}



