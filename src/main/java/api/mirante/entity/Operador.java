package api.mirante.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity
public class Operador {

    @Id
    @GeneratedValue
    private Long id;

    @Column
    @NotNull
    private String nome;

    @Column
    @NotNull
    private String login;

    @Column
    @NotNull
    private String senha;

    @Column
    private Boolean gerente;

    @Column
    private Boolean analista;

    @Column
    private Date dataDoCadastro;

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

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public Date getDataDoCadastro() {
        return dataDoCadastro;
    }

    public void setDataDoCadastro(Date dataDoCadastro) {
        this.dataDoCadastro = dataDoCadastro;
    }

    public Boolean getGerente() {
        return gerente;
    }

    public void setGerente(Boolean gerente) {
        this.gerente = gerente;
    }

    public Boolean getAnalista() {
        return analista;
    }

    public void setAnalista(Boolean analista) {
        this.analista = analista;
    }
}
