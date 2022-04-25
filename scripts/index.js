// Store the wallet amount to your local storage with key "amount"


document.getElementById("add_to_wallet").addEventListener("click",addAmount)

let getamount=JSON.parse(localStorage.getItem("amount"))||[]
let wallet= document.getElementById("wallet")
let showAm=getamount.reduce(function(ec,e,i,arr){
    return ec+Number(e.amount)
    
},0)
console.log(showAm)
wallet.append(showAm)

function addAmount(){
    event.preventDefault()

    amountObj={
        amount:document.getElementById("amount").value
    }
    getamount.push(amountObj)

    localStorage.setItem("amount",JSON.stringify(getamount))
    alert(`${amountObj.amount} added in your wallet`)
    window.location.reload()

}