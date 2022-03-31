function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        alert('ERRO Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'https://media.starlightcms.io/workspaces/327329647/optimized/como-melhorar-o-sono-do-bebe-O6jfcg2rna.jpeg')
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', 'https://www.napratica.org.br/wp-content/uploads/2020/09/jovem-preocupado.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'https://d5y9g7a5.rocketcdn.me/wp-content/uploads/2019/06/ser-adulto-e-ser-bem-sucedido-ou-nao-afinal-o-que-e-ser-adulto-1-1024x640.jpg')
            } else {
                img.setAttribute('src', 'https://pt.bcdn.biz/Images/2017/5/23/486b3676-52fe-4140-8143-f171feff2357.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'https://img.elo7.com.br/product/main/303B7D9/bebe-reborn-enxoval-lindo-boneca-reborn-bebe-reborn.jpg')
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', 'https://jornalpequeno.com.br/media/2022/03/IEL-abre-inscri%C3%A7%C3%B5es-para-seletivo-de-Programa-Jovem-Aprendiz-1024x768.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2022/03/000-32733wa.jpg')
            } else {
                img.setAttribute('src', 'https://f.i.uol.com.br/fotografia/2012/06/19/159985-970x600-1.jpeg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}