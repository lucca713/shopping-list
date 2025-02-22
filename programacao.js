const product = document.querySelector("#input-produtos")
const form = document.querySelector("form")

const lista = document.querySelector("ul")
let listaDosProdutos = []
let num = 0


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
    listaDosProdutos.push(product.value)
    
    
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
        newSpanImg.setAttribute("id","newSpanImg")

        const newImg = document.createElement("img")
        newImg.src="img/waste-stroke-rounded.svg"

        //fim criacao variaveis

        newSpanFrase.textContent= name

        newSpanImg.append(newImg)
        
        newProductName.append(newInput, newSpanFrase, newSpanImg )
        
        lista.appendChild(newProductName)
    }

    }catch{

        alert("Escreva o produto que você queira adicionar")
    }
}

//texxtcontent