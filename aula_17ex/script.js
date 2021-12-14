let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []
let numC = Number(num.value)

function isNumero(n) {
    if (Number(n)>=1 && Number(n)<=100) {
        return true
    } else {
        return false
    }
}

function inLista(n,l) {
    if(l.indexOf(Number(n))!= -1){
        return true

    } else {
        return  false
    }
    
}


function adicionar() {
    if (isNumero(num.value)&& !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} Adicionado`
        lista.appendChild(item)
        res.innerHTML=''

    } else {
        alert('Valor Invalido ou ja existente.')
    }
   num.value = ''  // Limpa o campo do objeto HTML instanciado
   num.focus() //volta o foco do cursor ao objeto html instanciado
    
}

function finalizar() {
    if (valores.length ==  0) {
        alert('Adicione valores antes de finalizar !')
        
    } else {
        let  tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma +=valores[pos]
            if (valores[pos]>maior) {
                maior = valores[pos]                
            } else if (valores[pos <menor]){
                menor = valores[pos]
            }
        }
        media  = soma/tot
        res.innerHTML=''
        res.innerHTML +=`<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML +=`<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML +=`<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML +=`<p>Somando  todos os valores temos ${soma}.</p>`
        res.innerHTML +=`<p> A media dos valores digitados é  ${media}.</p>`
        
    }
    
}