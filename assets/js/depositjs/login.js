import PValidator from "../pvalidaitor-1.1.1.js";

const Lvalid = new PValidator;




// Evants 

$("#ValidateButton").click((e) => {
    e.preventDefault()
    // code meli 
    const validCodeMeli = Lvalid.CodeMeli("#CheckCodeMeli", "#MeliSpan")
    console.log(validCodeMeli);

    // check password 
    const PassInput = $("#passwordInput").val();
    const validPass = Lvalid.Password(PassInput)
    console.log(validPass);


    // check into submit 

    if (validCodeMeli && validPass) {
        $("#Login").submit();
    }


})

//#region  show and hide pass word 

// password 
let passShow = false
$("#btnShowPass").click(() => {
    if (!passShow) {
        $("#passwordInput").attr('type', 'text')
        passShow = true
    } else {
        $("#passwordInput").attr('type', 'password')
        passShow = false
    }
})

// re password 
let passShow1 = false
$("#rePassShow").click(() => {
    if (!passShow1) {
        $("#RePassWord1").attr('type', 'text')
        passShow1 = true
    } else {
        $("#RePassWord1").attr('type', 'password')
        passShow1 = false
    }
})

//#endregion


// event is changing

// check password 
const PassInput = $("#passwordInput");

PassInput.on("input", (e) => {
    Lvalid.Password(e.target.value)
})
PassInput.on("focus", (e) => {
    $("#BoxSpanPass").fadeIn();
})
PassInput.on("blur", (e) => {
    $("#BoxSpanPass").fadeToggle();
})


//#endregion 

//******************************
//??        Start Eye Btn
//******************************

//*Button 
let stateEye = false;
$(".hoverBgPassWord").click((e) => {
    let toggle = () => {
        Lvalid.ToggleEyeClass(child[0], "fa-eye", "fa-eye-slash")
    }

    stateEye = !stateEye;
    const child = e.target.children
    if (child.length) {
        stateEye ? toggle() : toggle()
    }
})

//*span 
document.querySelectorAll(".hoverBgPassWord span").forEach(element => {
    element.addEventListener("click", () => {
        Lvalid.ToggleEyeClass(element, "fa-eye", "fa-eye-slash")
    })
})

//*******************************
//!         end Eye Btn
//*******************************


