

var changePlayer = 0;

// 

$(document).ready(function () {
    // replay 
    
    // var table = document.querySelector("table")

        
    
    $("[id*='cell-']").on('click', function (event) 
                    {
            var acctive = document.querySelector("h2");
                 
                if (changePlayer ===0)
                {
                    acctive.classList.remove("green")
                    acctive.classList.add("red")
                    acctive.innerText =   "Current: Red Player"
                    
                    
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
                    acctive.classList.remove("red")
                    acctive.classList.add("green")    
                    acctive.innerText =   "Current: Green Player" 
                              
                 
                    var x = this.cellIndex;                   
                    var y= this.parentElement.rowIndex;
                    var played = false;
                    

                    for (i = this.parentElement.parentElement.rows.length -1; i >= 0; i--) {
                        var currentCell = this.parentElement.parentElement.rows[i].cells[x]
                        var check1 = currentCell.classList.contains('red');
                        var check2 =currentCell.classList.contains('green');
                        if(!(check1 || check2 ))
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

// replay again the game
var play = document.querySelector("#play"); 
play.addEventListener("click", 
function replay()
  {

    $("[id*='cell-']").removeClass('green')
    $("[id*='cell-']").removeClass('red')
 
  }
  


); 

var table = document.querySelector('table')
var getIndex= []
for(let row =0; row<=3; row++)
{
    
    // var x = this.cellIndex

    getIndex[row]= table.rows[row].cells[row]


    

}   

console.dir(getIndex)
});

                    
        

        
        


        // function callback() 
        //     {
        //         location.reload()
        //         console.log("fun")

        //     };

          
        
 
        function winFunction() {
            var counter = 0;
            // nextCell = currentCell +1; 
            // prev = currentCell -1; 

            // var win1 = ['cal1','cal2', 'cal3', 'cal4' ]

            
            
            $("[id*='cell-']").each(function (index) {
                
                if (getIndex.each.hasClass('green')) {
                    // counter++;
                // }
                // if (counter === 3) {
                    var $winner = $("<h2/>").text("congratulations!");
                    $(".red").append($winner);

                    console.log("yes")
                   
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



    




