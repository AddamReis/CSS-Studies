const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao /*pega a cor definida para cada tag, se a mesma não existir pega a cor padrão #616161*/
    }
}

document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase()

    elemento.style.borderColor = colors.get(tagName) /*pega a cor de acordo com a tag*/

    if (!elemento.classList.contains('nolabel')) {
        const label = document.createElement('label') /*dentro de todas as classes que contém .tag irá aplicar o label*/
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0]) /*insere a label antes do primeiro elemento*/
    }
})