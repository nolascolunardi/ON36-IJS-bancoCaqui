import { Cliente } from "./entities/usuarios/cliente";
import { ContaCorrente } from "./entities/conta/contaCorrente";
import { ContaPoupanca } from "./entities/conta/contaPoupanca";

//Criação de  cliente
const cliente1 = new Cliente(1, "João", "123.456.789-00", "jaoao@gmail.com", "11 99999-9999", new Date(20, 6, 18), "Rua Alberto Silva, numero 10");
const cliente2 = new Cliente(2, "Maria", "987.654.321-00", "maria@gmail.com", "11 99999-8888", new Date(20, 2, 15), "Rua Vilela, numero 22");

//criação de  conta corrente
const contaPoupanca1 = new ContaPoupanca(cliente1.getId(),"22222222-5", "123", 50.00, true);
const contaCorrente2 = new ContaCorrente(cliente2.getId(),"22222222-6", "123", 100.00, true, 250);

//testando as funcionalidades
console.log("---- Cliente " + cliente1.getNome()+" ----");
contaPoupanca1.consultarSaldo();
contaPoupanca1.depositar(1000);
contaPoupanca1.sacar(100);
contaPoupanca1.consultarSaldo();
contaPoupanca1.consultarTaxa();

console.log("\n---- Cliente " + cliente2.getNome()+" ----");
contaCorrente2.consultarSaldo();
contaCorrente2.depositar(20.55);
contaCorrente2.consultarSaldo();

console.log("\n---- Cliente " + cliente1.getNome()+" ----");
contaPoupanca1.transferir(100, contaCorrente2);
contaPoupanca1.consultarSaldo();

console.log("\n---- Cliente " + cliente2.getNome()+" ----");
contaCorrente2.consultarSaldo();
contaCorrente2.consultarCheque();
contaCorrente2.depositarCheque(contaCorrente2.getLimiteChequeEspecial());
contaCorrente2.consultarSaldo();