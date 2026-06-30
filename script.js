function temaDegistir(){
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("tema","dark");
    } else {
        localStorage.setItem("tema","light");
    }
}

window.onload = function(){
    if(localStorage.getItem("tema") === "dark"){
        document.body.classList.add("dark");
    }
}

function ara(){
    let input = document.getElementById("arama");
    let filter = input.value.toLowerCase();
    let kartlar = document.getElementsByClassName("kart");

    for(let i=0;i<kartlar.length;i++){
        let baslik = kartlar[i].getElementsByTagName("h3")[0].innerText.toLowerCase();

        if(baslik.includes(filter) || filter === ""){
            kartlar[i].style.display = "";
        } else {
            kartlar[i].style.display = "none";
        }
    }
}
