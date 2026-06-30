function temaDegistir() {
    document.body.classList.toggle("dark");
}

function ara() {
    let input = document.getElementById("arama").value.toLowerCase();
    let kartlar = document.getElementsByClassName("kart");

    for (let i = 0; i < kartlar.length; i++) {
        let baslik = kartlar[i].getElementsByTagName("h3")[0].innerText.toLowerCase();

        if (baslik.includes(input)) {
            kartlar[i].style.display = "block";
        } else {
            kartlar[i].style.display = "none";
        }
    }
}
