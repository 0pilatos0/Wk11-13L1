let dagen = ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"];
document.getElementById("dagen").innerHTML = dagen;
document.getElementById("weekdagen").innerHTML = dagen[0] +","+ dagen[1] +","+ dagen[2] +","+ dagen[3] +","+ dagen[4];
document.getElementById("weekenddagen").innerHTML = dagen[5] +","+ dagen[6];
document.getElementById("dagenomgekeerd").innerHTML = dagen[6] +","+dagen[5] +","+dagen[4] +","+ dagen[3] +","+ dagen[2] +","+ dagen[1] +","+ dagen[0];
document.getElementById("weekdagenomgekeerd").innerHTML = dagen[6] +","+dagen[5] +","+dagen[4] +","+ dagen[3] +","+ dagen[2] +","+ dagen[1] +","+ dagen[0];
document.getElementById("weekenddagenomgekeerd").innerHTML = dagen[6] +","+ dagen[5];