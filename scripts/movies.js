// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

async function searchMovie(){

    try{
        const query=document.getElementById("search").value 
        // const res=await fetch(`https://www.omdb.com/?apikey=8d9e40b5&s=${query}`)
        const res = await fetch(`https://www.omdbapi.com/?apikey=8d9e40b5&s=${query}`)
        const img = await fetch(`https://img.omdbapi.com/?apikey=8d9e40b5&s=${query}`)
        let data =await res.json()
        let movies=data.Search;
        console.log(movies)
        append(movies)
        return movies
    } catch(err){
        console.log(err)
    }
}

let getamount=JSON.parse(localStorage.getItem("amount"))||[]
let wallet= document.getElementById("wallet")
let showAm=getamount.reduce(function(ec,e,i,arr){
    return ec+Number(e.amount)
    
},0)
console.log(showAm)
wallet.append(showAm)

let movies=JSON.parse(localStorage.getItem("movies"))||[]
const movies_div=document.getElementById("movies")
function append(data){
    movies_div.innerHTML=null;
    data.forEach(function(e){
        let box=document.createElement("div")

        let title=document.createElement("p");
        title.innerText=e.Title;

        let img=document.createElement("img")
        img.src=e.Poster;

        let book=document.createElement("button")
        book.setAttribute("class","book_now")
        book.innerText="Book movies"

        book.addEventListener("click", function(){
            bookMovies(e)
        })

        box.append(img,title,book)

        movies_div.append(box)
    })
}

function bookMovies(e){
    event.preventDefault()
    movies.push(e)

    localStorage.setItem("movies",JSON.stringify(movies))
    window.location.href="checkout.html"
}
async function main(){
    let data=await searchMovie()
    if(data==undefined){
        return false
    }
    append(data)
}
let id;
function debounce(func,delay){
    if(id){
        clearTimeout(id)
    }
    id=setTimeout(function(){
        func()
    },delay)
}