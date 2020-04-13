package api.mirante.DAO;

import api.mirante.entity.Pessoa;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

public class PessoaDAO {

    @PersistenceContext(unitName = "primario")
    EntityManager entityManager;

    public List<Pessoa> listaPessoas(){
        return entityManager.createQuery("select p from Pessoa p", Pessoa.class).getResultList();
    }

    public Pessoa salvarPessoa(Pessoa pessoa) throws Exception{
        try {
            entityManager.getTransaction().begin();
            entityManager.persist(pessoa);
            entityManager.getTransaction().commit();
        } catch (Exception e) {
            entityManager.getTransaction().rollback();
            throw new Exception(e);
        } finally {
            entityManager.close();
        }
        return pessoa;
    }

    public void deletarPessoa(Long id){
        Pessoa pessoa = entityManager.find(Pessoa.class, id);
        entityManager.remove(pessoa);
    }

    public Pessoa updateDaPessoa(Pessoa pessoa){
        return entityManager.merge(pessoa);
    }

}