package api.mirante.DAO;

import api.mirante.entity.Operador;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Stateless
public class FabricaDAO {

    @PersistenceContext(unitName = "primario")
    EntityManager entityManager;

    public List<Operador> listaOperadores(){
        return entityManager.createQuery("select o from Operador o", Operador.class).getResultList();
    }

    public Operador salvarOperadores(Operador operador){
      return entityManager.merge(operador);
    }

    public void deletarOperadores(Long id){
       Operador operador = entityManager.find(Operador.class, id);
       entityManager.remove(operador);
    }

    public Operador updateDoOperador(Operador operador){
       return entityManager.merge(operador);
    }

}


