function checkPasscode() {



    const passcode =

        document.getElementById("passcode").value;



    const uploadArea =

        document.getElementById("upload-area");



    if (passcode === "0130") {



        uploadArea.innerHTML = `

            <p style="margin-top:20px;">

                THANK YOU FOR SHARING.

            </p>



            <input type="file" accept="image/*">

        `;



    } else {



        alert("PASSCODE ERROR");



    }

}

