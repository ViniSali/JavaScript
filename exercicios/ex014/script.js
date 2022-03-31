function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
    if (minuto < 10) {
        msg.innerHTML = `Agora são ${hora}:0${minuto} horas.`
    }
    if (hora >= 0 && hora < 12) {
        img.src = 'manhã.jpg'
        document.body.style.background = '#ffc56e'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'noite.jpg'
        document.body.style.background = '#515154'
    }
}