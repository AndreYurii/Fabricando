package api.mirante.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import java.util.Date;


@Entity
public class Pessoa {

    @Id
    @GeneratedValue
    private Long id;

    @Column
    @NotNull
    private String nome;

    @Column
    @NotNull
    private String CPF;

    @Column
    private Date dataDeNascimento;

    @Column
    @NotNull
    private String nomeDaMae;

    @Column
    @NotNull
    private String nomeDoPai;

    @Column
    private Date dataDeCadastro;

    @Column
    @NotNull
    private String loginDoOperador;

    @Column
    private Boolean pessoaFisica;

    @Column
    private Boolean pessoaJurica;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCPF() {
        return CPF;
    }

    public void setCPF(String CPF) {
        this.CPF = CPF;
    }

    public Date getDataDeNascimento() {
        return dataDeNascimento;
    }

    public void setDataDeNascimento(Date dataDeNascimento) {
        this.dataDeNascimento = dataDeNascimento;
    }

    public String getNomeDaMae() {
        return nomeDaMae;
    }

    public void setNomeDaMae(String nomeDaMae) {
        this.nomeDaMae = nomeDaMae;
    }

    public String getNomeDoPai() {
        return nomeDoPai;
    }

    public void setNomeDoPai(String nomeDoPai) {
        this.nomeDoPai = nomeDoPai;
    }

    public Date getDataDeCadastro() {
        return dataDeCadastro;
    }

    public void setDataDeCadastro(Date dataDeCadastro) {
        this.dataDeCadastro = dataDeCadastro;
    }

    public String getLoginDoOperador() {
        return loginDoOperador;
    }

    public void setLoginDoOperador(String loginDoOperador) {
        this.loginDoOperador = loginDoOperador;
    }

    public Boolean getPessoaFisica() {
        return pessoaFisica;
    }

    public void setPessoaFisica(Boolean pessoaFisica) {
        this.pessoaFisica = pessoaFisica;
    }

    public Boolean getPessoaJurica() {
        return pessoaJurica;
    }

    public void setPessoaJurica(Boolean pessoaJurica) {
        this.pessoaJurica = pessoaJurica;
    }
}