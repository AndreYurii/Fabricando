package api.mirante.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class TelefoneFabrica {


    @Id
    @GeneratedValue
    private Long id;

    @Column
    private int ddd;

    @Column
    private String numero;

    @Column
    private Date dataDeCadastro;

    @Column
    private String login;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getDdd() {
        return ddd;
    }

    public void setDdd(int ddd) {
        this.ddd = ddd;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public Date getDataDeCadastro() {
        return dataDeCadastro;
    }

    public void setDataDeCadastro(Date dataDeCadastro) {
        this.dataDeCadastro = dataDeCadastro;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }
}
