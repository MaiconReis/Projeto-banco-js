import{Cliente} from "./Cliente.js"
import {Gerente} from "./Funcionarios/Gerente.js"
import {Diretor} from "./Funcionarios/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Ricardo" ,5000, 123789456001);
gerente.cadastrarSenha("123");
const estalogado = SistemaAutenticacao.login(diretor, "123456")

const cliente = new Cliente("Lais", 78745612370, 456)
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor,"123456");


const clienteEstaLogado = SistemaAutenticacao.login(cliente,"456")

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);


