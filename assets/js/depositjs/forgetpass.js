

// check Natinality Cod : Code Meli  
function CheckCodeMeli(tag, span) {

    var phoneNumber = $(tag).val();


    const pattern = /^\d{10}$/; // عبارت منظم برای بررسی شماره ۱۰ رقمی


    if (phoneNumber.match(pattern)) {
        massegeOff(tag, span)
        return true
    } else {
        massegeOn(tag, span)
    }

}

// check email user 
function EmailUser(emailTag, span) {
    const email = $(emailTag).val();
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // عبارت منظم برای اعتبارسنجی ایمیل
    if (!regex.test(email)) {
        massegeOn(emailTag, span)

    } else {
        massegeOff(emailTag, span)
        return true
    }
}

function massegeOn(idInp, idMes) {
    $(idInp).addClass("border-danger shake")
    $(idMes).addClass("text-danger")
    $(idMes).removeClass("d-none")
}

function massegeOff(idInp, idMes) {
    $(idInp).removeClass("border-danger shake")
    $(idMes).removeClass("text-danger")
    $(idMes).addClass("d-none")
}

function Tick(id1, id2) {
    $(id1).addClass("d-none shake");
    $(id2).removeClass("d-none ");
}

function BackTick(id1, id2) {
    $(id1).removeClass("d-none shake");
    $(id2).addClass("d-none ");
}
// background Changer in EyeBtn
const ToggleEyeClass = (tag, Class1, Class2) => {
    tag.classList.toggle(Class1)
    tag.classList.toggle(Class2)
}

// Evants 

$("#ValidateButton").click((e) => {
    e.preventDefault()
    // code meli 
    const validCodeMeli = CheckCodeMeli("#CheckCodeMeli", "#MeliSpan");

    // check email User 
    const validEmail = EmailUser("#EmailUser", "#EmailUserSpan");


    // check into submit 

    if (validCodeMeli && validEmail) {
        $("#ForgetPass").submit();
    }


})

    //******************************
    //??        Start Eye Btn
    //******************************

    //*Button 
    let stateEye = false;
    $(".hoverBgPassWord").click((e) => {
        let toggle = () => {
            ToggleEyeClass(child[0], "fa-eye", "fa-eye-slash")
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
            ToggleEyeClass(element, "fa-eye", "fa-eye-slash")
        })
    })

    //*******************************
    //!         end Eye Btn
    //*******************************


//#endregion 

