function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res  = document.getElementById('res')
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'fotocrianca.jpg')
            }else if (idade <= 21){
                //adolescente
                img.setAttribute('src', 'fotoadolescenteM.png')
            }else if ( idade < 40){
                //adulto
                img.setAttribute('src', 'fotoadulto.png')
            }else{
                //idoso
                img.setAttribute('src', 'fotoidoso.png')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'fotocrianca.png')
            }else if (idade <= 21){
                //adolescente
                img.setAttribute('src', 'fotoadolescente.png')
            }else if ( idade < 40){
                //adulto
                img.setAttribute('src', 'fotoadulta.png')
            }else{
                //idoso
                img.setAttribute('src', 'fotoidosa.png')
            }
        }
        img.style.maxWidth = '300px'
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }
}