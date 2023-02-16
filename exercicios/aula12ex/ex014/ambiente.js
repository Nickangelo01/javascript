function carregar(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'fotodamanha.png'
        document.body.style.background = '#4a5573'
    }else if(hora >= 12 && hora < 18){
        //BOA TARDE!
        img.src = 'fotodatarde.png'
        document.body.style.background = '#467589'
    }else{
        //BOA NOITE!
        img.src = 'fotodanoite.png'
        document.body.style.background = 'rgb(10, 26, 50)'
    }
}

