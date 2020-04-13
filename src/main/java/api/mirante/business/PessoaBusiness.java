package api.mirante.business;

import api.mirante.DAO.PessoaDAO;
import api.mirante.entity.Pessoa;

import javax.ejb.Stateless;
import javax.inject.Inject;
import java.util.List;

@Stateless
public class PessoaBusiness {

    @Inject
    private PessoaDAO pessoaDAO;

    public List<Pessoa> listaPessoas(){
        return pessoaDAO.listaPessoas();
    }

    public Pessoa salvarPessoa(Pessoa pessoa) throws Exception {
        return pessoaDAO.salvarPessoa(pessoa);
    }

    public void deletarPessoa(Long id){
        pessoaDAO.deletarPessoa(id);
    }

    public Pessoa updateDaPessoa(Pessoa pessoa){
        return pessoaDAO.updateDaPessoa(pessoa);
    }
}

