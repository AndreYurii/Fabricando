package api.mirante.business;

import api.mirante.DAO.FabricaDAO;
import api.mirante.DAO.PessoaDAO;
import api.mirante.entity.Operador;
import api.mirante.entity.TelefoneFabrica;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.validation.Valid;
import java.util.List;

@Stateless
public class FabricaBusiness {

    @Inject
    private FabricaDAO fabricaDAO;

    public List<Operador> listaOperadores() {
        return fabricaDAO.listaOperadores();
    }


    public Operador salvarOperadores(Operador operador){
        return fabricaDAO.salvarOperadores(operador);
    }

    public void deletarOperadores(Long id){
        fabricaDAO.deletarOperadores(id);
    }

    public Operador updateDoOperador(Operador operador){
        return fabricaDAO.updateDoOperador(operador);
    }

}
