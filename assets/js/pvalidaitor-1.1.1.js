// ****************************** Creator Lib AbolfazlKarbakhsh ***************************
// *****************************  abolfazl.javaScript@gmail.com ******************************
// verstion:1.1.1
// Lib Perstion Vadlidaitor

class PValidator {

    //    text input 
    Value(value) {
        if (value != " " && value != "" && value.trim() != "" && value.length > 1) {
            return true;
        } else {
            return false;
        }
    }

    // selected box 
    ValueV1(id, span) {
        const value = $(id).val()
        console.log(value);
        if (value != " " && value != "" && value.trim() != "" && value.length > 1) {
            this.massegeOff(id, span)
            return true;
        } else {
            this.massegeOn(id, span)
            return false;
        }
    }


    //    persian value 
    PerstionValue(tag, span) {
        const inputElement = $(tag);
        const inputValue = inputElement.val();
        const regex = /^[\u0600-\u06FF\s]+$/;
        if (!regex.test(inputValue)) {
            this.massegeOn(tag, span)
        } else {
            this.massegeOff(tag, span)
            return true;
        }
    }

    //    call number 
    CallNumber(tag, span) {

        let phoneNumber = $(tag).val();
        const pattern = /^0\d{10}$/;

        phoneNumber = phoneNumber.replace(/^(\d{10})$/, "0$1");

        if (phoneNumber.match(pattern)) {
            $(tag).val(phoneNumber)
            this.massegeOff(tag, span)
            return true;
        } else {
            this.massegeOn(tag, span)
        }

    }

    //     number 
    Numbers(tag, span) {

        let Number = $(tag).val();
        const pattern = /^[0-9]+$/;


        if (pattern.test(Number)) {

            $(tag).val(Number)
            this.massegeOff(tag, span)
            return true;

        } else {

            this.massegeOn(tag, span)

        }

    }

    //     number Ashar
    NumbersAshar(tag, span) {

        let Number = $(tag).val();
        const pattern = /^[0-9]+(\.[0-9]+)?$/;


        if (pattern.test(Number)) {

            $(tag).val(Number)
            this.massegeOff(tag, span)
            return true;

        } else {

            this.massegeOn(tag, span)

        }

    }

    //    Natinality Cod : Code Meli  
    CodeMeli(tag, span) {

        let phoneNumber = $(tag).val();


        const pattern = /^\d{10}$/;


        if (phoneNumber.match(pattern)) {
            this.massegeOff(tag, span)
            return true
        } else {
            this.massegeOn(tag, span)
        }

    }

    //    email user 
    EmailUser(emailTag, span) {
        const email = $(emailTag).val();
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!regex.test(email)) {
            this.massegeOn(emailTag, span)

        } else {
            this.massegeOff(emailTag, span)
            return true
        }
    }

    //    has IMage 
    InputFile(fileInp, span) {
        let fileInput = $(fileInp)[0];
        if (fileInput.files.length > 0) {
            this.massegeOff("#buttonChoise", span)
            return true;
        } else {
            this.massegeOn("#buttonChoise", span)
        }

    }

    //    password 
    Password(password) {
        const minLength = 6;
        const hasLetter = /[a-zA-Z]/;
        const hasNumber = /[0-9]/;
        const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        $("#BoxSpanPass").fadeIn();



        // pass lenght 
        if (password.length < minLength) {
            this.BackTick("#Char1", "#Char2")
            $("#BoxSpanPass").addClass("shake")
            setTimeout(() => {
                $("#BoxSpanPass").removeClass("shake")
            }, 3000)

        } else {
            this.Tick("#Char1", "#Char2")
            $("#BoxSpanPass").removeClass("shake")

        }


        // pass comibe A-Z 0-9 
        if (!hasLetter.test(password) || !hasNumber.test(password)) {
            this.BackTick("#EnglishCombineNumber1", "#EnglishCombineNumber2")
            $("#BoxSpanPass").addClass("shake")
            setTimeout(() => {
                $("#BoxSpanPass").removeClass("shake")
            }, 3000)


        } else {
            this.Tick("#EnglishCombineNumber1", "#EnglishCombineNumber2")
            $("#BoxSpanPass").removeClass("shake")


        }

        //    spetion char
        if (!hasSpecialChar.test(password)) {
            this.BackTick("#CombineSpetionChar1", "#CombineSpetionChar2")

            $("#BoxSpanPass").addClass("shake")
            setTimeout(() => {
                $("#BoxSpanPass").removeClass("shake")
            }, 3000)


        } else {
            this.Tick("#CombineSpetionChar1", "#CombineSpetionChar2")
            $("#BoxSpanPass").removeClass("shake")
        }


        //    validaite 
        if (
            $('.fa-close.d-none').length === 3
        ) {
            return true;
        }

    }

    //    rePassWord 
    RePassword() {
        let tag1 = $("#RePassWord1").val()
        let tag2 = $("#passwordInput").val()
        if (tag1 == tag2) {
            this.massegeOff("#RePassWord1", "#RePassWord2")
            this.massegeOff("#rePassShow", "#RePassWord3")

            return true
        } else {
            this.massegeOn("#RePassWord1", "#RePassWord2")
            this.massegeOn("#rePassShow", "#RePassWord3")
        }
    }

    // selected box 
    SelectBox(id, span) {
        if ($(id).val() == null) {
            this.massegeOn(id, span)
            return false
        } else {
            this.massegeOff(id, span)
            return true;
        }
    }

    // beat Ween Number 
    BeatWeenNumber(min, value) {
        if (value >= min) {
            return true;
        } else {
            return false;
        }
    }

    // show message 
    showMessage(Logic, idInp, idMes) {
        if (Logic) {
            this.massegeOff(idInp, idMes)
        } else {
            this.massegeOn(idInp, idMes)
        }
    }

    checkbox(id, span) {
        let checkbox1 = $(id);
        if (!checkbox1.is(':checked')) {
            this.massegeOn(id, span)
            return false;
        }
        this.massegeOff(id, span)
        return true;
    }

    massegeOn(idInp, idMes) {
        $(idInp).addClass("border-danger shake")
        console.log($(idInp));
        $(idMes).addClass("text-danger")
        $(idMes).removeClass("d-none")
    }

    massegeOff(idInp, idMes) {
        $(idInp).removeClass("border-danger shake")
        $(idMes).removeClass("text-danger")
        $(idMes).addClass("d-none")
    }

    Tick(id1, id2) {
        $(id1).addClass("d-none shake");
        $(id2).removeClass("d-none ");
    }

    BackTick(id1, id2) {
        $(id1).removeClass("d-none shake");
        $(id2).addClass("d-none ");
    }

    hideDecimalPlaces(number, decimalPlaces) {
        let fixedNumber = parseFloat(number).toFixed(2);
        fixedNumber = fixedNumber.replace(/\.?0+$/, '');
        return fixedNumber;
    }

    formatNumber(number) {
        return number.toLocaleString('en-US', { useGrouping: true });;
    }

    LabelShowInBox(input, label, valuePlace) {
        $(input).focus(function () {
            if (!$(input).val()) {
                $(input).attr("placeholder", "");
                $(label).fadeIn();
                $(label).removeClass("d-none");
            }

        });
        $(input).blur(function () {
            $(input).attr("placeholder", valuePlace);
            $(label).fadeIn();
            $(label).addClass("d-none");
        });
        $(input).on("input", () => {
            $(input).attr("placeholder", valuePlace);
            $(label).fadeIn();
            $(label).addClass("d-none");
        })
    }

    AddAfterTag(tag, After) {
        $(tag).after(After);
    }

    UserName(id, span) {
        let value = $(id).val();
        var pattern = /^[a-zA-Z0-9_-]+$/;
        if (pattern.test(value)) {
            this.massegeOff(id, span)
            return true;
        } else {

            this.massegeOn(id, span)
            return false;
        }
    }

    // background Changer in EyeBtn
     ToggleEyeClass = (tag, Class1, Class2) => {
        tag.classList.toggle(Class1)
        tag.classList.toggle(Class2)
    }

    Counter = (id) => {
        $(id).each(function () {
            $(this)
              .prop("Counter", 0)
              .animate(
                {
                  Counter: $(this).text(),
                },
                {
                  duration: 2000,
                  easing: "swing",
                  step: function (now) {
                    now = Number(Math.ceil(now)).toLocaleString('en');
                                          $(this).text(now);
                  },
                }
              );
          });
    }

    
}



export default PValidator;

