// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let getmovie = JSON.parse(localStorage.getItem("movies")) || []

// console.log(e)
getmovie.forEach(function (data) {
    // event.preventDefault()
    let movie = document.getElementById("movie")
    let box = document.createElement("div")

    let img = document.createElement("img")
    img.src = data.Poster

    let title = document.createElement("p")
    title.innerText = data.Title

    box.append(img, title)

    movie.append(box)

})

let confirm = document.getElementById("confirm").addEventListener("click", confirmFun)

function confirmFun() {
    let amount=JSON.parse(localStorage.getItem("amount"))||[]
    let user = document.getElementById("user_name").value;
    let seats = document.getElementById("number_of_seats").value
    amount.filter(function(e){

        if(e.amount>=seats*100){
            alert("Booking succesfull")
            localStorage.setItem("amount",JSON.stringify(amount))
            
        }
        else{
            alert("Not Sufficient balance for booking")
        }
    })

}
