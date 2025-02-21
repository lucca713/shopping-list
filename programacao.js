const product = document.querySelector("#input-produtos")
const form = document.querySelector("form")

product.addEventListener("input",(e)=>{
    e.preventDefault()
    console.log(product.value)
    const regex = /\D+/g //string
    const regexNumber =  /[^a-zA-Z]/g //regex_number

    product.value != regex ? 
     product.value = product.value.replace(regexNumber,"") 
     :
     null

})

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    alert(product.value)
})


function creamCamp(){
    try{

    }catch{
        alert("erro em adicionar o pruduto")
    }
}
//texxtcontent