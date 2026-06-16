//0 JavaScript é uma lingagem WEB

//variáveis-valores armazenados na memória do computador 

//Funções- Blocos de código

function carregar (){
    //alert ("Bem vindo ao java script")
    var msg = window.document.getElementById
    ('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date ()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    msg.innerHTML = `agora sao ${hora}:${minutos}am`

    if(hora>=0&& hora< 12){
        img.src = 'manha.png'
        document.body.style.background ='#caf0f8'  
    }
    else if (hora>= 12 && hora < 18){
        img.src = 'tarde.png'
        document.body.style.background ='#f7d6e0'  
    }
    else{
        img.src = 'noite.png'
        document.body.style.background ='#d3c3eb' 
    }
}