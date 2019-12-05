

var changePlayer = 0;

// 

$(document).ready(function () {
    // replay 
    
    var table = document.querySelector("table")

    // console.dir(parentElement.parentElement.rows[2].cells[1])

  


    // function replay()
    // {
    //     for(let x in )
    // }
        
    
    $("[id*='cell-']").on('click', function (event) 
                    {
            var acctive = document.querySelector("h1");
 
            if(changePlayer == 0)
    
            {
            acctive.innerText =   "Current: Red Player"
                         
            }
            if(changePlayer == 1)
            
            {
            acctive.innerText =   "Current: Green Player"               
            }       
                if (changePlayer ===0)
                {
                    var x = this.cellIndex;                   
                    // var y= this.parentElement.rowIndex;
                    var played = false;

                    for (i = this.parentElement.parentElement.rows.length -1; i >= 0; i--) {
                        var currentCell = this.parentElement.parentElement.rows[i].cells[x]
                        
                        var check1 = currentCell.classList.contains('red');
                        var check2 = currentCell.classList.contains('green');
                        if(!(check1 || check2 ))
                        {
                            this.parentElement.parentElement.rows[i].cells[x].classList.add("red");
                            played = true;
                            break;
                        }
                      }
                    

                // $(this).off("mouseleave"); 
                //$(this).addClass('red');
            
                
                // winFunction()
                if(played)
                {
                changePlayer ++;
                }
                }
                    
                
                else if(changePlayer ===1)
                { 
                    var x = this.cellIndex;                   
                    var y= this.parentElement.rowIndex;
                    var played = false;
                    

                    for (i = this.parentElement.parentElement.rows.length -1; i >= 0; i--) {
                        var currentCell = this.parentElement.parentElement.rows[i].cells[x]
                        var check = currentCell.classList.contains('red');
                        if(!(check || currentCell.classList.contains('green')))
                        {
                            played = true;
                            this.parentElement.parentElement.rows[i].cells[x].classList.add("green");
                            break;
                        }
                      }
                $(this).off("mouseleave");
               
               // $(this).addClass('green');
            
               if(played)
                {
                changePlayer --;
                }
                } 
            
                    
              
            });

// rest 
var play = document.querySelector("#play"); 
play.addEventListener("click", 
function replay()
  {

    $("[id*='cell-']").removeClass('green')
    $("[id*='cell-']").removeClass('red')
    console.log("what")
 
  }


); 

         

                    
        });

        
        


        // function callback() 
        //     {
        //         location.reload()
        //         console.log("fun")

        //     };

          
        
 
        function winFunction() {
            var counter = 0;
            nextCell = currentCell +1; 
            prev = currentCell -1; 

            
            
            $("[id*='cell-']").each(function (index) {
                if (currentCell.hasClass('green')) {
                    counter++;
                }
                if (counter === 3) {
                    var $winner = $("<h2/>").text("congratulations!");
                    $(".red").append($winner);
                   
                }
            });
        }

         
 

 

// //// create array for cell 
//         var cellIndexId=[];
//         for(let row=0; row<=15; row++)
//         {
//             cellIndexId[row] =["cell-"+[row]]
            
//         }
// var home =[]
// for(let x=0; x<=cellIndexId.length; x++)
// {
//         home[x] =document.querySelector(`#` + cellIndexId[x])

// }

//get the giagnol
// let dg1= [13,10,7,4]
// let dg2=[1,6,11,16]
// $("[id*='cell-']").each(function (index){
// if ($(home[dg1]).hasClass('green'))
// {
// console.log("whats is lobe")
// }

// });


      

       



      

        // console.dir(ids)



    




