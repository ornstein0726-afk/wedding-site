const lines = [



"> launch invitation",



"",

"Initializing system...",



"",

"Loading memory archive..........DONE",



"Loading venue information.......DONE",



"Loading ceremony schedule.......DONE",



"Loading reception schedule......DONE",



"Loading guest registry..........DONE",



"",



"Bride : NATSUMI",



"Groom : SOYA",



"",



"Venue : HOTEL NEW GRAND",



"Date : JAN 30 2027",



"",



"--------------------------------",



"",



"Authentication required"



];



const output =

document.getElementById("terminal-output");



let i = 0;



function typeLine(){



    if(i < lines.length){



        output.innerHTML += lines[i] + "\n";



        i++;



        setTimeout(typeLine, 450);



    }else{



        document

        .getElementById("input-container")

        .classList

        .remove("hidden");



    }

}



typeLine();



document

.getElementById("unlockBtn")

.addEventListener("click",()=>{



    const value =

    document.getElementById("passcode").value;



   if(value==="0130"){



    document

    .getElementById("terminal")

    .style.display = "none";



    document

    .getElementById("invitation-screen")

    .style.display = "flex";



    setTimeout(()=>{



        alert(

          "ここからオープニングアニメーションが開始されます"

        );



    },2500);



}



    }else{



        alert("Authentication failed.");



    }



});
