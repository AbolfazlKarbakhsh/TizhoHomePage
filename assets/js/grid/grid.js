import PValidator from "../pvalidaitor-1.1.1.js";



$(document).ready(function () {
    // connect lib 
    const Validaitr = new PValidator;

    // Loader Site 
    setInterval(() => {
        $('#preLoader').addClass('d-none')

    }, 100)

    // counter number banner 
    Validaitr.Counter('.count')




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





    //******************************
    //??        menu bergar 
    //******************************

    $('#btnhumber').click(function (e) {
        e.preventDefault();
        $('#navbar').animate({ width: "300px" }, 300)
        $('#fother-nav').animate({ width: "100%" }, 300)
    });

    $('#fother-nav').click(() => {
        $('#navbar').animate({ width: "0px" }, 300)
        $('#fother-nav').animate({ width: "0px" }, 300)
    })

    $('#btncart').click(function (e) {
        e.preventDefault();
        $('#shoppingcart').animate({ width: "300px" }, 300)
        $('#fother-nav2').animate({ width: "100%" }, 300)
    });

    $('#fother-nav2').click(() => {
        $('#shoppingcart').animate({ width: "0px" }, 300)
        $('#fother-nav2').animate({ width: "0px" }, 300)
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



    //******************************
    //??        Cart
    //******************************

   

    //******************************
    //??        end cart 
    //******************************
});


