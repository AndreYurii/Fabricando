package api.mirante.resource;

import api.mirante.business.FabricaBusiness;
import api.mirante.entity.Operador;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/fabrica")
public class FabricaResource {

    @Inject
    private FabricaBusiness fabricaBusiness;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response listarOperadores(){
        return Response.ok(fabricaBusiness.listaOperadores()).build();
    }

    /**
     * Adiciona novo operador
     *
     * @param operador: Novo operador
     * @return response 200 (OK) - Conseguiu adicionar
     */
    @POST
    @Path("/save")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response salvarOperador(Operador operador){
        return Response.ok(fabricaBusiness.salvarOperadores(operador))
                .build();
    }


    /**
     * Remove um operador
     *
     * @param id: id do operador
     * @return response 200 (OK) - Conseguiu remover
     */
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @DELETE
    public Response deletarOperador(@PathParam("id") Long id){
        fabricaBusiness.deletarOperadores(id);
        return Response.ok().build();
    }



    /**
     * Atualiza um operador
     *
     * @param id: id do operador
     * @param operador: Operador atualizado
     * @return response 200 (OK) - Conseguiu atualizar
     */
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @PUT
    public Response updateDoOperador(@PathParam("id") Long id, Operador operador){
        return Response.ok(fabricaBusiness.updateDoOperador(operador)).build();
    }

}
