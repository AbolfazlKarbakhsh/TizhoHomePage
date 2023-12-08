import PValidator from "../pvalidaitor-1.1.1.js";


$(document).ready(function () {

    const Validaitr = new PValidator;
    // Evants 

    // search open label 
    Validaitr.LabelShowInBox("#searchinput", "#labelsearch", "جستجو")



    // search label 
    const valueSarchBox = "لطفا یک مورد را از بخش فیلتر انتخاب کنید !"
    const FreeSpace = "لطفا یک مقدار وارد کنید !"
    Validaitr.AddAfterTag("#SearchBox", `<span class="mr-auto mt-2 d-block text-danger d-none font2" id="AdminSearchSpan"> ${valueSarchBox}</span>`)
    Validaitr.AddAfterTag("#SearchBox", `<span class="mr-auto mt-2 d-block text-danger d-none font2" id="AdminSearchSpanSpace"> ${FreeSpace}</span>`)

    // search validaite
    $("#searchbutton").click(() => {
        const Selection = Validaitr.SelectBox("#SelectFilter", "#AdminSearchSpan")
        const ValueForm = Validaitr.ValueV1("#searchinput", "#AdminSearchSpanSpace")
        if (Selection, ValueForm) {
            $("#SearchForm").submit()
        }
    })




    // accounts 
    $("#Validaitr1").click((e) => {
        e.preventDefault()

        // ShomareCart 
        const ShomareCart = Validaitr.Numbers("#Cart", "#CartSpan");

        // ShomareShaba
        const ShomareShaba = Validaitr.Numbers("#SbahCart", "#SbahCartSpan");


        // check into submit 

        if (ShomareCart && ShomareShaba) {
            $("#ValidaitrP").submit();
        }
    })

    // TraidingAccount

    $("#ValidaitrTraidin").click((e) => {
        e.preventDefault()


        // ShomareShaba
        const ShomareShaba = Validaitr.Numbers("#SbahCart", "#SbahCartSpan");


        // check into submit 

        if (ShomareShaba) {
            $("#TraidingAccount").submit();
        }
    })

    // edit user 

    $("#editBtnUser").click((e) => {
        e.preventDefault()

        // name user validate 
        const ValidName = Validaitr.Value($("#nameUser").val())
        !ValidName ? Validaitr.massegeOn("#nameUser", "#nameSpan") : Validaitr.massegeOff("#nameUser", "#nameSpan");
        !ValidName ? $("#brName").removeClass("d-none") : $("#brName").addClass("d-none");
        const validPesianName = Validaitr.Value("#nameUser", "#nameSpan2")



        // family user validiate
        const ValidFamily = Validaitr.Value($("#familyName").val())
        !ValidFamily ? Validaitr.massegeOn("#familyName", "#familySpan") : Validaitr.massegeOff("#familyName", "#familySpan");
        !ValidFamily ? $("#brFamily").removeClass("d-none") : $("#brFamily").addClass("d-none");
        const validPesianfamily = Validaitr.PerstionValue("#familyName", "#familySpan2")



        // PhoneNumber Cheack
        const ValidCallNumber = Validaitr.CallNumber("#phoneNumberInput", "#phoneSpan");

        // check email User 
        const validEmail = Validaitr.EmailUser("#EmailUser", "#EmailUserSpan");


        if (validPesianName && validPesianfamily && ValidCallNumber && ValidFamily && ValidName && validEmail) {
            $("#EditUser").submit();
        }
    })

    // cancel payment 
    $("#Cancel-pay-btn").click(() => {
        const Description = Validaitr.SelectBox("#SelectRed", "#SelectRedSpan")
        console.log(Description);
        if (Description) {
            $("#Cancel-pay").submit();
        }
    })






    //******************************
    //??        Start Eye Btn
    //******************************

    //*Button 
    let stateEye = false;
    $(".hoverBgPassWord").click((e) => {
        let toggle = () => {
            Validaitr.ToggleEyeClass(child[0], "fa-eye", "fa-eye-slash")
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
            Validaitr.ToggleEyeClass(element, "fa-eye", "fa-eye-slash")
        })
    })

    //*******************************
    //!         end Eye Btn
    //*******************************


    //? Paginations 
    const buttons = $("#Pageination button");
    $.map(buttons, function (element) {
        element.addEventListener("click", () => {
            $.map(buttons, (tag) => {
                tag.classList.remove("activePagination");
            })

            element.classList.add("activePagination");
        })
    });

    function removeAllSideBarToggleClass() {
        $('#sidebar-toggle-hide').removeClass('d-md-inline')
        $('#sidebar-toggle-hide').removeClass('d-none')
        $('#sidebar-toggle-on').removeClass('d-inline')
        $('#sidebar-toggle-on').removeClass('d-md-none')
    }




    //******************************
    //??        menu bergar 
    //******************************

    $('#sidebar-toggle-hide').click(function () {
        $('#sidebar').fadeOut(300);
        $('#main-body').animate({ width: "100%" }, 300)
        setTimeout(() => {
            removeAllSideBarToggleClass();
            $('#sidebar-toggle-hide').addClass('d-none')
            $('#sidebar-toggle-on').removeClass('d-none')

        }, 300);
    })

    $('#sidebar-toggle-on').click(function () {
        $('#sidebar').fadeIn(300);
        $('#main-body').css("width", "calc(100% - 14rem)");

        setTimeout(() => {
            removeAllSideBarToggleClass();
            $('#sidebar-toggle-on').addClass('d-none')
            $('#sidebar-toggle-hide').removeClass('d-none')

        }, 300);
    })

    $('#menu-toggle').click(function () {
        $('#body-header').toggle(300);

    })


    // fother giga menu
    document.querySelector(".sidebar").innerHTML += `<div class="fother-mega-menu d-md-none " id="fother-giga-menu"></div>`

    $("#fother-giga-menu").click((e) => {
        $("#sidebar-toggle-hide").click()
        $("#HabergerButton").click()
    })


    let logical = true
    document.querySelector("#HabergerButton").addEventListener("click", () => {
        if (logical == true) {
            $("#sidebar-toggle-on").click()
            logical = false
        } else if (logical == false) {
            $("#sidebar-toggle-hide").click()
            logical = true
        }
    })





    //******************************
    //!       menu bergar 
    //******************************



    //******************************
    //??         full screen mode 
    //******************************
    $('#fs').click(function () {
        toggleFullScreen();

    })

    function toggleFuleScreen() {
        if ((document.fullScreenElement && document.fullScreenElement !== null) ||
            ((!document.mozfullscreen && !document.webkitIsfullScreen))) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();

            }
            else if (document.documentElement.mozrequestFullscreen) {
                document.documentElement.mozrequestFullscreen();

            }

            else if (document.documentElement.webkitrequestFullscreen) {
                document.documentElement.webkitrequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);

            }
        }
        else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            }
            else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
            else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }

        }



    }

    function toggleFullScreen() {
        if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            }
            else if (document.documentElement.mozRequestFullscreen) {
                document.documentElement.mozRequestFullscreen();
            }
            else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
            $('#screen-compress').removeClass('d-none');
            $('#screnn-expand').addClass('d-none');
        }
        else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            }
            else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
            else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
            $('#screen-compress').addClass('d-none');
            $('#screnn-expand').removeClass('d-none');
        }
    }

    $('#wtite-toggle').click(function () {
        $('#write').fadeToggle();
        dropdownIcon("#write-show", "#write-hide");
    })
    $('#user-toggle').click(function () {
        $('#user').fadeToggle();
        dropdownIcon("#user-show", "#user-hide");

    })
    $('#setting-toggle').click(function () {
        $('#setting').fadeToggle();
        dropdownIcon("#setting-show", "#setting-hide");

    })

    //******************************
    //!        menu bergar 
    //******************************


    // variablels 
    var a = 0;
    function dropdownIcon(show, hide) {

        if (a == 0) {
            $(show).addClass('d-none');
            $(hide).removeClass('d-none');
            a++;
        } else {
            $(show).removeClass('d-none');
            $(hide).addClass('d-none');
            a--;
        }

    }


    // resize fixeb bug aside 
    function checkWindowSize() {
        if ($(window).width() > 768) {
            $("#sidebar").attr("style" , "display:block;");

        }else{
            $("#sidebar").attr("style" , " ");
        }
    }
    checkWindowSize();

    $(window).resize(function () {
        checkWindowSize();
    });
});