const ApiService={

    listaOperador:()=> {
        return fetch('http://localhost:8080/api-mirante/api/pessoa').then(res => res.json())
    },

    salvarPessoa: autor => {
        return fetch('http://localhost:8080/api-mirante/api/pessoa/save',{method: 'POST', headers: {'contente-type': 'application/json', body: autor}} )
            .then(res => res.json());
    }

    

}

export default ApiService