// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page


let amount = localStorage.getItem("amount");
let wallet = document.getElementById("wallet");
wallet.innerHTML = amount;

function search(){

    setTimeout(function(){
        search_movies();
    },2000);

}

let movies = document.getElementById("movies");




async  function search_movies(){
    let search = document.getElementById("search").value;

    let res = await fetch(`https://www.omdbapi.com/?i=tt3896198&s=${search}&apikey=8858332b`)
    let data = await res.json();
    console.log(data.Search);
    data.Search.forEach(el => {
    
        let div = document.createElement("div");
        div.setAttribute("class","movie");

        let poster = document.createElement("img");
        poster.src = el.Poster;

        let name = document.createElement("p");
        name.innerText = el.Title;

        let book = document.createElement("button");
        book.setAttribute("class","book_now")
        book.innerHTML ="Book Movie"
        book.onclick = function(){
            let movie ={
                name:name.innerText,
                poster: poster.src,
            }
            localStorage.setItem("movie",JSON.stringify(movie));
            window.open("checkout.html")
        }

        div.append(poster,name,book);
        movies.append(div)



    });
}


