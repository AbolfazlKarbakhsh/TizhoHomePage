
$(document).ready(function () {

    //#region INput Chose File
    $("#files").change(function () {
        const filename = this.files[0];
        const regex = /^image\/(jpeg|jpg|png)$/;

        if (!regex.test(filename.type)) {
            massegeOn("#buttonChoise", "#ImgSpan")
        } else {
            massegeOff("#buttonChoise", "#ImgSpan")
            $("#img-View").attr('src', URL.createObjectURL(filename))
            $('#img-View').removeClass('img-fluid')
            $("#img-View").addClass('img-view')
        }

    });

    $("#buttonChoise").click(() => {
        $("#files").click();
    });
    //#endregion


    //  *************************************** Functions 


    // background Changer in EyeBtn
    const ToggleEyeClass = (tag, Class1, Class2) => {
        tag.classList.toggle(Class1)
        tag.classList.toggle(Class2)
    }
    // check text input 
    function checkValue(value) {
        if (value != " " && value != "" && value.trim() != "" && value.length > 1) {
            return true;
        } else {
            return false;
        }
    }

    // check persian value 
    function persinChackValue(tag, span) {
        // انتخاب المان input با شناسه "myInput"
        const inputElement = $(tag);

        // دریافت مقدار رشته و بررسی آن
        const inputValue = inputElement.val();
        const regex = /^[\u0600-\u06FF\s]+$/; // عبارت منظم برای بررسی رشته فارسی
        if (!regex.test(inputValue)) {
            massegeOn(tag, span)
        } else {
            massegeOff(tag, span)
            return true;

        }
    }

    // check call number 
    function CheckCallNumber(tag, span) {

        var phoneNumber = $(tag).val();
        const pattern = /^0\d{10}$/;

        phoneNumber = phoneNumber.replace(/^(\d{10})$/, "0$1");

        if (phoneNumber.match(pattern)) {
            $(tag).val(phoneNumber)
            massegeOff(tag, span)
            return true;
        } else {
            massegeOn(tag, span)
        }

    }

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

    // check has IMage 
    function CheckInputFile(fileInp, span) {
        var fileInput = $(fileInp)[0];
        if (fileInput.files.length > 0) {
            massegeOff("#buttonChoise", span)
            return true;
        } else {
            massegeOn("#buttonChoise", span)
        }

    }

    // check password 
    function validatePassword(password) {
        const minLength = 6;
        const hasLetter = /[a-zA-Z]/;
        const hasNumber = /[0-9]/;
        const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        $("#BoxSpanPass").fadeIn();



        // pass lenght 
        if (password.length < minLength) {
            BackTick("#Char1", "#Char2")
            $("#BoxSpanPass").addClass("shake")
            setTimeout(() => {
                $("#BoxSpanPass").removeClass("shake")
            }, 3000)

        } else {
            Tick("#Char1", "#Char2")
            $("#BoxSpanPass").removeClass("shake")

        }


        // pass comibe A-Z 0-9 
        if (!hasLetter.test(password) || !hasNumber.test(password)) {
            BackTick("#EnglishCombineNumber1", "#EnglishCombineNumber2")
            $("#BoxSpanPass").addClass("shake")
            setTimeout(() => {
                $("#BoxSpanPass").removeClass("shake")
            }, 3000)


        } else {
            Tick("#EnglishCombineNumber1", "#EnglishCombineNumber2")
            $("#BoxSpanPass").removeClass("shake")


        }

        // check spetion char
        if (!hasSpecialChar.test(password)) {
            BackTick("#CombineSpetionChar1", "#CombineSpetionChar2")

            $("#BoxSpanPass").addClass("shake")
            setTimeout(() => {
                $("#BoxSpanPass").removeClass("shake")
            }, 3000)


        } else {
            Tick("#CombineSpetionChar1", "#CombineSpetionChar2")
            $("#BoxSpanPass").removeClass("shake")
        }


        // check validaite 
        if (
            $('.fa-close.d-none').length === 3
        ) {
            return true;
        }

    }


    // check rePassWord 
    function chackRepass() {
        let tag1 = $("#RePassWord1").val()
        let tag2 = $("#passwordInput").val()
        if (tag1 == tag2) {
            massegeOff("#RePassWord10", "#RePassWord2")
            massegeOff("#rePassShow", "#RePassWord3")

            return true
        } else {
            massegeOn("#RePassWord10", "#RePassWord2")
            massegeOn("#rePassShow", "#RePassWord3")
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

    // Evants 

    $("#ValidateButton").click((e) => {
        e.preventDefault()


        // name user validate 
        const ValidName = checkValue($("#nameUser").val())
        !ValidName ? massegeOn("#nameUser", "#nameSpan") : massegeOff("#nameUser", "#nameSpan");
        !ValidName ? $("#brName").removeClass("d-none") : $("#brName").addClass("d-none");
        const validPesianName = persinChackValue("#nameUser", "#nameSpan2")



        // family user validiate
        const ValidFamily = checkValue($("#familyName").val())
        !ValidFamily ? massegeOn("#familyName", "#familySpan") : massegeOff("#familyName", "#familySpan");
        !ValidFamily ? $("#brFamily").removeClass("d-none") : $("#brFamily").addClass("d-none");
        const validPesianfamily = persinChackValue("#familyName", "#familySpan2")



        // PhoneNumber Cheack
        const ValidCallNumber = CheckCallNumber("#phoneNumberInput", "#phoneSpan");

        // code meli 
        const validCodeMeli = CheckCodeMeli("#CheckCodeMeli", "#MeliSpan");

        // check email User 
        const validEmail = EmailUser("#EmailUser", "#EmailUserSpan");

        // check input file 
        const ValidCheckFile = CheckInputFile("#files", "#ImgSpan2");

        // check password 
        const PassInput = $("#passwordInput").val();
        const validPass = validatePassword(PassInput)


        // checkRe PassWord 
        const ValidRePass = checkValue($("#RePassWord1").val())
        !ValidRePass ? massegeOn("#RePassWord10", "#rePassSpan") : massegeOff("#RePassWord10", "#rePassSpan");
        !ValidRePass ? $("#brPass").removeClass("d-none") : $("#brPass").addClass("d-none");
        const validRePass2 = chackRepass()


        // check into submit 
        if (ValidName && ValidFamily && validPesianName && validPesianfamily) {
            if (ValidCallNumber && validCodeMeli && validEmail && ValidCheckFile && validPass && ValidRePass && validRePass2) {
                $("#signUp").submit();
            }
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
        validatePassword(e.target.value)
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


})