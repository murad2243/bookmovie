// Store the wallet amount to your local storage with key "amount"
function book_movies(){
    window.open("movies.html")
}

function add_to_wallet(){
    let amount = document.getElementById("amount").value;
    
    let local = localStorage.getItem("amount");
    localStorage.setItem("amount",Number(amount)+Number(local));
    
    appendamount.innerHTML= localStorage.getItem("amount")
    
console.log(amount,local);
}

let appendamount = document.getElementById("wallet");
    appendamount.innerHTML= localStorage.getItem("amount") ||0
console.log(appendamount.innerHTML);
