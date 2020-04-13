import React, { Component } from "react";

class Formulario extends Component {

    constructor(props) {
        super(props);

        this.stateInicial = {
            nome: '',
            cpf: '',
            NomeDaMae: '',
            NomeDoPai: '',
            DataDeCadastro: '',
            DataDeNascimento: '',
        }

        this.state = this.stateInicial;
    }

    submitFormulario = () => {
        this.props.escutadorDeSubmit(this.state);
        this.setState(this.stateInicial);

    }


    escutadorDeInput = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    render() {

        const { nome, cpf, NomeDaMae, NomeDoPai, DataDeCadastro, DataDeNascimento } = this.state;
        return (
            <form>
                <div className="row">
                    <div className="input-field col s3">
                        <label htmlFor="nome">Nome</label>
                        <input
                            id="nome"
                            type="text"
                            name="nome"
                            value={nome}
                            onChange={this.escutadorDeInput}
                        />
                    </div>
                    
                    <div className="input-field col s3">

                        <label htmlFor="cpf">CPF</label>
                        <input
                            id="cpf"
                            type="text"
                            name="cpf"
                            value={cpf}
                            onChange={this.escutadorDeInput}
                        />
                    </div>

                    <div className="input-field col s3">
                        <label htmlFor="NomeDaMae">Nome da Mãe</label>
                        <input
                            id="NomeDaMae"
                            type="text"
                            name="NomeDaMae"
                            value={NomeDaMae}
                            onChange={this.escutadorDeInput}
                        />

                    </div>
                    <div className="input-field col s3">

                        <label htmlFor="NomeDoPai">Nome do Pai</label>
                        <input
                            id="NomeDoPai"
                            type="text"
                            name="NomeDoPai"
                            value={NomeDoPai}
                            onChange={this.escutadorDeInput}
                        />
                    </div>
                    <div className="input-field col s3">

                        <label htmlFor="DataDeCadastro">Data de Cadastro</label>
                        <input
                            id="DataDeCadastro"
                            type="text"
                            name="DataDeCadastro"
                            value={DataDeCadastro}
                            onChange={this.escutadorDeInput}
                        />
                    </div>
                    <div className="input-field col s3">

                        <label htmlFor="DataDeNascimento">Data de Nascimento</label>
                        <input
                            id="DataDeNascimento"
                            type="text"
                            name="DataDeNascimento"
                            value={DataDeNascimento}
                            onChange={this.escutadorDeInput}
                        />
                    </div>
                </div>
                <button type="button" onClick={this.submitFormulario} className="waves-effect waves-light btn light-blue darken-3">Salvar
            </button>
            </form>

        )

    }
}

export default Formulario;