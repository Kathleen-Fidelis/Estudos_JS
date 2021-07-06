function verificar(){
    var data = new Date()
    var ano = data.getFullYear()   
    var fano = document.getElementById('txtano') 
    //var res = document.getElementById('res')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente! ')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img') //cria tag img
        img.setAttribute('id', 'foto') //com id = foto

        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebemenino.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovemhomem.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'homem.png')
            } else{
                //idoso
                img.setAttribute('src', 'senhor.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebemenina.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovemmulher.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'mulher.png')
            } else{
                //idoso
                img.setAttribute('src', 'senhora.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) //adiciona um elemento
    }
}