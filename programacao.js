const product = document.querySelector("#input-produtos")
const form = document.querySelector("form")

const lista = document.querySelector("ul")
let listaDosProdutos = []
let num = 0

//botao de apagar
const newDiv = document.createElement("div")
newDiv.classList.add("alert")

const spanExcluirFrase = document.createElement("span")
spanExcluirFrase.textContent="⚠ O item foi removido da lista"

const spanExcluirClose = document.createElement("span")
spanExcluirClose.classList.add("close")

const buttonClose = document.createElement("button")
buttonClose.setAttribute("type","button")
buttonClose.classList.add("botunn-cancel")

const imgExcluir = document.createElement("img")
imgExcluir.src = "img/cancel-02-stroke-rounded.svg"

buttonClose.append(imgExcluir)
spanExcluirClose.append(buttonClose)

newDiv.append(spanExcluirFrase, spanExcluirClose)


//fim criaca botao apagar

console.log(num)
product.addEventListener("input",(e)=>{
    e.preventDefault()
    console.log(product.value)
    const regex = /\D+/g //string
    const regexNumber =  /[^a-zA-Z]/g //regex_number

    product.value != regex ? product.value = product.value.replace(regexNumber,"") : null

})

console.log(lista)

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    creamCamp(product.value)
    
    product.value = ''
    
})



function creamCamp(name){
    try{
    if(name){
        //variaveis criadas na funcao, para ser criadas varias vezes
         num += 1  //soma de id  
        let newProductName = document.createElement("li")
        newProductName.setAttribute("id",`newProductName${num}`)

        let newSpanFrase = document.createElement("span")
        newSpanFrase.setAttribute("id","newSpanFrase")

        const newInput = document.createElement("input")
        newInput.setAttribute("type","checkbox")

        const newSpanImg = document.createElement("span")
        newSpanImg.classList.add("delete")
        newSpanImg.setAttribute("type","click")

        const newImg = document.createElement("img")
        newImg.src="img/waste-stroke-rounded.svg"

        //fim criacao variaveis

        newSpanFrase.textContent= name

        newSpanImg.append(newImg)
        
        newProductName.append(newInput, newSpanFrase, newSpanImg )
        
        lista.appendChild(newProductName)
        

        listaDosProdutos.push(newProductName.id)

        newSpanImg.addEventListener("click", (e) => {
            console.log(newProductName.id)
            for(var i = 0; i < listaDosProdutos.length; i++){
                if(listaDosProdutos[i] ==  newProductName.id){
                   document.getElementById(newProductName.id).remove()
                   lista.appendChild(newDiv)

                   buttonClose.addEventListener("click", (e)=>{
                      document.querySelector(".alert").remove()
                   })
                }
            }
        } )
            
    }

    }catch{

        alert("Escreva o produto que você queira adicionar")
    }
}







//texxtcontent