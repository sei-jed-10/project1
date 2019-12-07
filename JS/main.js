var changePlayer = 0;

$(document).ready(function () {
    var table = document.querySelector('table')
    var h6 = document.createElement('h6')
    h6.setAttribute("class", "bcs")
    document.body.appendChild(h6)

    //------------------------ // Check for Diagonal Wins ----------------------------------------------------

    function checkVer() {

        var verticalCheck = [];


        // Diagonal 
        var getIndex = []
        for (let row = 0; row <= 3; row++) {
            getIndex[row] = table.rows[row].cells[row]
        }


        function checkColor(cel1, cel2, cel3, cel4) {
            if (cel1.classList.contains('red')
                && cel2.classList.contains('red')
                && cel3.classList.contains('red')
                && cel4.classList.contains('red')) { return winFunction(" Winner Red User (Diagonal)") }

            if (cel1.classList.contains('green')
                && cel2.classList.contains('green')
                && cel3.classList.contains('green')
                && cel4.classList.contains('green')) { return winFunction(" Winner Green User (Diagonal)") }
        }

        checkColor(getIndex[3], getIndex[2], getIndex[1], getIndex[0])


        //-----------------------------------------------------------


        // calling  winning function 
        function winFunction(win) {

            this.win = win;
            table.style.visibility = "hidden"
            var $winner = $("<h6/>").text(`congratulations! ${win} `);
            $(".bcs").append($winner);
        }


        //---- get the 2D Array index ex[0,1]

        for (let row = 0; row <= 3; row++) {
            verticalCheck[row] = []
            for (let cal = 3; cal >= 0; cal--) {
                for (let x = 0; x < 3; x++) {
                    verticalCheck[row][cal] = table.rows[row].cells[cal];
                }
            }
        }




        //---------- vertical -----------------Red

        var cal = verticalCheck;


        //Check for Diagonal left 
        checkColor(cal[3][0], cal[2][1], cal[1][2], cal[0][3])




        if (
            cal[0][0].classList.contains('red') &&
            cal[1][0].classList.contains('red') &&
            cal[2][0].classList.contains('red') &&
            cal[3][0].classList.contains('red') ||
            cal[0][1].classList.contains('red') &&
            cal[1][1].classList.contains('red') &&
            cal[2][1].classList.contains('red') &&
            cal[3][1].classList.contains('red') ||
            cal[0][2].classList.contains('red') &&
            cal[1][2].classList.contains('red') &&
            cal[2][2].classList.contains('red') &&
            cal[3][2].classList.contains('red') ||
            cal[0][3].classList.contains('red') &&
            cal[1][3].classList.contains('red') &&
            cal[2][3].classList.contains('red') &&
            cal[3][3].classList.contains('red')) {

            winFunction(" Winner is Red User (Vertical)")
        }




        //---------- vertical -----------------green

        var cal = verticalCheck;

        if (
            cal[0][0].classList.contains('green') &&
            cal[1][0].classList.contains('green') &&
            cal[2][0].classList.contains('green') &&
            cal[3][0].classList.contains('green') ||
            cal[0][1].classList.contains('green') &&
            cal[1][1].classList.contains('green') &&
            cal[2][1].classList.contains('green') &&
            cal[3][1].classList.contains('green') ||
            cal[0][2].classList.contains('green') &&
            cal[1][2].classList.contains('green') &&
            cal[2][2].classList.contains('green') &&
            cal[3][2].classList.contains('green') ||
            cal[0][3].classList.contains('green') &&
            cal[1][3].classList.contains('green') &&
            cal[2][3].classList.contains('green') &&
            cal[3][3].classList.contains('green')) {

            winFunction("Winner is Green User (Vertical)")
        }



        // horizontal  red -----------------------------------


        if (
            cal[0][0].classList.contains('red') &&
            cal[0][1].classList.contains('red') &&
            cal[0][2].classList.contains('red') &&
            cal[0][3].classList.contains('red') ||
            cal[1][0].classList.contains('red') &&
            cal[1][1].classList.contains('red') &&
            cal[1][2].classList.contains('red') &&
            cal[1][3].classList.contains('red') ||
            cal[2][0].classList.contains('red') &&
            cal[2][1].classList.contains('red') &&
            cal[2][2].classList.contains('red') &&
            cal[2][3].classList.contains('red') ||
            cal[3][0].classList.contains('red') &&
            cal[3][1].classList.contains('red') &&
            cal[3][2].classList.contains('red') &&
            cal[3][3].classList.contains('red')) {
            console.log("red H")
            winFunction("Winner is red User (horizontal)")
        }


        // heroizntal  green -----------------------------------


        if (
            cal[0][0].classList.contains('green') &&
            cal[0][1].classList.contains('green') &&
            cal[0][2].classList.contains('green') &&
            cal[0][3].classList.contains('green') ||
            cal[1][0].classList.contains('green') &&
            cal[1][1].classList.contains('green') &&
            cal[1][2].classList.contains('green') &&
            cal[1][3].classList.contains('green') ||
            cal[2][0].classList.contains('green') &&
            cal[2][1].classList.contains('green') &&
            cal[2][2].classList.contains('green') &&
            cal[2][3].classList.contains('green') ||
            cal[3][0].classList.contains('green') &&
            cal[3][1].classList.contains('green') &&
            cal[3][2].classList.contains('green') &&
            cal[3][3].classList.contains('green')) {
            console.log("green H")
            winFunction("Winner is red User (horizontal) ")
        }


    }




    //----------------------------------------------------------------------------------------------------------
    var acctive = document.querySelector("h2");

    $("[id*='cell-']").on('click', function (event) {


        if (changePlayer === 0) {
            acctive.classList.remove("green")
            acctive.classList.add("red")
            acctive.innerText = "Current: Red Player"


            var x = this.cellIndex;
            // var y= this.parentElement.rowIndex;
            var played = false;

            for (i = this.parentElement.parentElement.rows.length - 1; i >= 0; i--) {
                var currentCell = this.parentElement.parentElement.rows[i].cells[x]
                var check1 = currentCell.classList.contains('red');
                var check2 = currentCell.classList.contains('green');
                if (!(check1 || check2)) {
                    this.parentElement.parentElement.rows[i].cells[x].classList.add("red");
                    played = true;
                    break;
                }
            }

            if (played) { changePlayer++; }
        }


        else if (changePlayer === 1) {
            acctive.classList.remove("red")
            acctive.classList.add("green")
            acctive.innerText = "Current: Green Player"


            var x = this.cellIndex;
            var y = this.parentElement.rowIndex;
            var played = false;


            for (i = this.parentElement.parentElement.rows.length - 1; i >= 0; i--) {
                var currentCell = this.parentElement.parentElement.rows[i].cells[x]
                var check1 = currentCell.classList.contains('red');
                var check2 = currentCell.classList.contains('green');
                if (!(check1 || check2)) {
                    played = true;
                    this.parentElement.parentElement.rows[i].cells[x].classList.add("green");
                    break;
                }
            }

            if (played) { changePlayer--; }

        }


        // call function to evaluate the color 
        checkVer()
    });



    //---------------------------------------------------end-----------------------------------------------




    // replay again the game
    var play = document.querySelector("#play");
    play.addEventListener("click",
        function replay() {
            $("[id*='cell-']").removeClass('green')
            $("[id*='cell-']").removeClass('red')
            table.style.visibility = "visible";
            acctive.innerText = ""
            h6.innerText = ""

            console.log(table)
        });

});









