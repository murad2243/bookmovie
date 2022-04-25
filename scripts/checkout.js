// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let amount = localStorage.getItem("amount");
let wallet = document.getElementById("wallet");
wallet.innerHTML = amount;


let movieinfo  = JSON.parse(localStorage.getItem("movie")) ;
let movie = document.getElementById("movie");

let name = document.createElement("p");
name.innerText = "Movies Name:  "+movieinfo.name;

let poster = document.createElement("img");
poster.src = movieinfo.poster;
movie.append(poster,name)


function confirm(){
    let name = document.getElementById("user_name").value;

    let seats = document.getElementById("number_of_seats").value;
    console.log(name,seats);

    let total = seats*100;
    if(amount<total){
        alert("Insufficient Balance!");
        
    }
    else{
        wallet.innerHTML = amount-total;
        amount = amount-total;
        alert("Booking successful!")
    }
}