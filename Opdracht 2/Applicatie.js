
Main();
function Main(){
    let namen = [];
    aantal = prompt("hoeveel namen wilt u invoeren?")
    if (aantal >= 2){
        for(let i = 0; i < aantal; i++){
            let naam = prompt("voer een naam in");
            namen.push(naam);
        }
        
        document.getElementById("namen").innerHTML = namen;
        namen.reverse();
        document.getElementById("namenomgekeerd").innerHTML = namen;
    }
    else{
        alert("het moeten minimaal 3 namen zijn")
        Main();
    }
}

