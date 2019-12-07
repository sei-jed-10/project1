

var changePlayer = 0;

// 

$(document).ready(function () {
    var table = document.querySelector('table')
    var h6 = document.createElement('h6')
    h6.setAttribute("class", "bcs")
    document.body.appendChild(h6)

    //------------------------check1 the virtical ----------------------------------------------------

    function checkVer() {
        var getIndex = []
        for (let row = 0; row <= 3; row++) {
            getIndex[row] = table.rows[row].cells[row]
        }
        //         console.log('oaky')


        // { console.log("one right") }

        function checkColor(cel1, cel2, cel3, cel4)
        // cel2, cel3, cel4) 
        {
            if (cel1.classList.contains('red')
                && cel2.classList.contains('red')
                && cel3.classList.contains('red')
                && cel4.classList.contains('red')) { return winFunction() }
            // debugger;
            // console.log(getIndex[])
        }

        checkColor(getIndex[3], getIndex[2], getIndex[1], getIndex[0])

        //--------------------------------------------end check 
        // function checkByrows() {

        //     for
        // }






        // calling  winning function 
        function winFunction() {
            table.style.visibility = "hidden"
            var $winner = $("<h6/>").text("congratulations! Green User");
            $(".bcs").append($winner);
        }



    }



    //----------------------------------------------------------------------------------------------------------
    let x = 0;
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
                // console.log(currentCell + (this.parentElement.parentElement.rows[i].cells[x] + 1))
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

        checkVer()

    });



    //---------------------------------------------------end-----------------------------------------------






    // click is over here 


    // replay again the game
    var play = document.querySelector("#play");
    play.addEventListener("click",
        function replay() {

            // <!-- <h6 class="bcs"> </h6> -->




            $("[id*='cell-']").removeClass('green')
            $("[id*='cell-']").removeClass('red')
            table.style.visibility = "visible";
            acctive.innerText = ""
            h6.innerText = ""

            console.log(table)
        });



    // console.dir(getIndex)

    //------------- check winer


    // checkColor(1, 2, 3, 4)
    //debugger;






});


//--------------------


// var rowsCol


        // for (let row = 0; row < table.rows.length; row++) {
        //     rowsCol[row] = []
        //     for (let cal = 0; cal <= 3; cal++) {
        //         rowsCol[row] = table.rows.cells[cal]
        // if (table.rows[row].cells[x].classList.contains('green')) {
        // winFunction()

        // }
        // }
        // console.log(rowsCol)


        // }

        // if (x === 3) {
        //     console.log("yes")
        // }









