class CuentaBancaria {
  constructor(saldoInicial = 0) {
    this.saldo = saldoInicial;
  }

  depositar(monto) {
    if (monto > 0) {
      this.saldo += monto;
      return `Depositaste $${monto}`;
    }
    return "Monto inválido";
  }

  retirar(monto) {
    if (monto > 0 && monto <= this.saldo) {
      this.saldo -= monto;
      return `Retiraste $${monto}`;
    }
    return "Fondos insuficientes o monto inválido";
  }

  verSaldo() {
    return `Saldo actual: $${this.saldo}`;
  }
}

// Uso
const cuenta = new CuentaBancaria(10000);

console.log(cuenta.verSaldo());
console.log(cuenta.depositar(550));
console.log(cuenta.retirar(320));
console.log(cuenta.verSaldo());