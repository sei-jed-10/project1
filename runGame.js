

var changePlayer = 0;

// 

$(document).ready(function () {
    
        $("[id*='cell-']").on('click', function (event) 
                    {
                   
                if (changePlayer ===0)
                {
                    var x = this.cellIndex;                   
                    // var y= this.parentElement.rowIndex;
                    var played = false;

                    for (i = this.parentElement.parentElement.rows.length -1; i >= 0; i--) {
                        var currentCell = this.parentElement.parentElement.rows[i].cells[x]
                        var check = currentCell.classList.contains('red');
                        if(!(check || currentCell.classList.contains('green')))
                        {
                            this.parentElement.parentElement.rows[i].cells[x].classList.add("red");
                            played = true;
                            break;
                        }
                      }
                    

                $(this).off("mouseleave"); 
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


         

                    
        });
        
 
        function winFunction() {
            var counter = 0;
            $("[id*='cell-']").each(function (index) {
                if ($(this).hasClass('green')) {
                    counter++;
                }
                if (counter === 3) {
                    var $winner = $("<h2/>").text("congratulations!");
                    $(".red").append($winner);
                   
                }
            });
        }

//// create array for cell 
        var cellIndexId=[];
        for(let row=0; row<=15; row++)
        {
            cellIndexId[row] =["cell-"+[row]]
            
        }
var home =[]
for(let x=0; x<=cellIndexId.length; x++)
{
        home[x] =document.querySelector(`#` + cellIndexId[x])

}

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



    




