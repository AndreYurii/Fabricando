package api.mirante.resource;

import api.mirante.DAO.PessoaDAO;
import api.mirante.business.PessoaBusiness;
import api.mirante.entity.Pessoa;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

@Path("/pessoa")
public class PessoaResource {

    @Inject
    private PessoaBusiness pessoaBusiness;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response listarPessoas(){
        return Response.ok(pessoaBusiness.listaPessoas()).build();
    }


    /**
     * Adiciona nova pessoa
     *
     * @param pessoa: Nova pessoa
     * @return response 200 (OK) - Conseguiu adicionar
     */
    @Path("/save")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @POST
    public Response salvarPessoa(Pessoa pessoa) throws Exception {
        return Response.ok(pessoaBusiness.salvarPessoa(pessoa)).build();
    }


    /**
     * Remove uma pessoa
     *
     * @param id: id da pessoa
     * @return response 200 (OK) - Conseguiu remover
     */
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @DELETE
    public Response deletarPessoa(@PathParam("id") Long id){
        pessoaBusiness.deletarPessoa(id);
        return Response.ok().build();
    }



    /**
     * Atualiza uma pessoa
     *
     * @param id: id da pessoa
     * @param pessoa: Pessoa atualizado
     * @return response 200 (OK) - Conseguiu atualizar
     */
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @PUT
    public Response updateDaPessoa(@PathParam("id") Long id, Pessoa pessoa){
        return Response.ok(pessoaBusiness.updateDaPessoa(pessoa)).build();
    }

}
