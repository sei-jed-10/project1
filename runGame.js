$(document).ready(function () {




    $("[id*='cell-']").click(function () {
        var finished = 0;

        if (finished == 0) {
            $(this).addClass("green");
            $(this).off("mouseleave");
            finished++ + ;

        }
        if (finished == 0) {
            $(this).addClass("red");
            $(this).off("mouseleave");
            finished-- -


            // ;
        }


    });


    console.dir(finished)

});


            // $(this).addClass("green");

            // $(this).addClass("red");
            // if (
            //     // $("#cell-1").hasClass("green") &&
            //     // $("#cell-2").hasClass("green") &&
            //     // $("#cell-3").hasClass("green") &&
            //     // $("#cell-4").hasClass("green")
            // ) {
            //     $(".container").append('');
            // }

    //
    // if (click == 0)


    // $("[id*='cell-']").mouseleave(function () {
    //     
    // });
