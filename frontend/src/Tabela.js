import React, { Component } from 'react';

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Login</th>
                <th>Nome</th>
                <th>CDF</th>
                <th>Nome da Mãe</th>
                <th>Nome do Pai</th>
                <th>Data de Cadastro</th>
                <th>Data de Nascimento</th>    
                <th>Pessoa Fisica</th>
                <th>Pessoa Juridica</th>
            </tr>
        </thead>
    )
}


const TableBody = props => {
    const linhas = props.autores.map((linha) => {
        return (
            <tr key={linha.id}>
                <td>{linha.loginDoOperador}</td>
                <td>{linha.nome}</td>
                <td>{linha.CPF}</td>
                <td>{linha.nomeDaMae}</td>
                <td>{linha.nomeDoPai}</td>
                <td>{linha.dataDeCadastro}</td>
                <td>{linha.dataDeNascimento}</td>
                <td>{linha.pessoaFisica}</td>
                <td>{linha.pessoaJuridica}</td>
                <td><button onClick = {() => {props.removeAutor(linha.id)}} className = "waves-effect waves-light btn light-blue darken-3">Remover</button></td>
            </tr>

        )
    });
    return(
        <tbody>
            {linhas}
        </tbody>
    );
}

class Tabela extends Component {
    render() {
        const { autores, removeAutor } = this.props;
        return (
            <table>
                <TableHead />
                <TableBody autores = { autores } removeAutor = {removeAutor}/>
            </table>
        )
    }
}
export default Tabela;
