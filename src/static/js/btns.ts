/**
 * função responsavel por alterar todas as permissões do login,
 * basta enviar o estado desejado, true, ou false
 */
function alterarTodas(state:boolean){


    //checks são todos os inputs checkbox das permissões
    let checks = (<HTMLCollection>document.getElementsByClassName("check-permission"))

    //tipo any devido a probabilidade do valor ser nulo
    let idlogin= (<HTMLInputElement>document.getElementById('idlogin'))
    

    //altera o stado de todos os checkbos para o estado da variavale state
    if(checks != null && idlogin.value != ""){
        for(let i = 0; i < checks.length; i++){
            const c = (<HTMLInputElement>checks[i])
            //checks[i].checked = state
            c.checked = state
        }
    }
}



//função responsvel por salvar as permissões dos logins
//primeiro ela apaga todas as permissões atuais, e depois salva todas as novas permissões
function salvar(){
    let checks = (<HTMLCollection> document.getElementsByClassName("check-permission"))
    let idlogin = (<HTMLInputElement> document.getElementById('idlogin')).value
    let permissions:Array<string> =[]
    let url = baseUrl + "permissions/" + idlogin + "/"
    addEventListener("",event =>{
        event.preventDefault();
    })
    //faz uma lista com as novas permissões do usuario e as adiciona a variavel permissions
    if(idlogin != "" && checks != null){
        for(let i = 0; i < checks.length; i++){
            const c = <HTMLInputElement>checks[i]
            if(c.checked){
                permissions.push(c.name)
            }
        }


        //primeiro apaga todas as permissões atuais e depois salva as novas permissões
        fetch(url,{method:'DELETE'}).then(response => response.json())
        .then(response => {
            if(response['res']){
                //dados com as novas permissões do login
                let data = {permissions:permissions}
                //envia para a api os novos dados
                fetch(url,{
                    method:'POST',
                    body:JSON.stringify(data),
                    headers:{
                        "Content-Type":"application/json"
                    }
                }).then(function(response){
                    return response.json()
                }).then(function(response){
                    if(response['res']){
                        alert("Dados Alterados com sucesso")
                    }
                    else{
                        alert("houve um proble com os dados, eles não foram salvos")
                    }

                })
            }
            
        })

        
    }
    
}