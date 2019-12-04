
window.onload = function () { 
   
    Swal.fire({
        title: "Welcome to Connect 4 game.. ",
        text: "Let's see who wins!!!",
        imageUrl: src="Pic/c.JPG" ,
        imageWidth: 300,
        imageHeight: 310,
        imageAlt: 'Welcome image',
      })    
    
      
      var IDrow; //for the row id number
      var IDcol; //for the column id number
      //this arrays will fill by the player 1 and player 2
      col0=['','','',''];
      col1=['','','',''];
      col2=['','','',''];
      col3=['','','',''];
      var turn=0;// for shwitching between players
      var CheckPlayercol=0; // for checking in column function
      var CheckPlayerrow=0; // for checking in row function
      var CheckPlayerCros1=0; // for checking in cross 1 function
      var CheckPlayerCros2=0; // for checking in cross 2 function
      var tie=0 //for checking if tie

    
      $('#Restart').click(function() { // when Restart botton are clicked it's will reload the page
        location.reload();
    });
    
      $(".col").click(function(e) {  //when players clicks any where in the column div
        IDcol = $(this).attr("id");  //it;s will return the column id number
        IDrow=color(IDcol); //call the color function
        Check(IDcol,IDrow); // call check function
       }); //click
      
      
      function color(col){
      if(turn==0){
      if(col==0){
          row=col0.lastIndexOf('');
          col0[row]="p1";
          $("#"+col+''+row).addClass("yellow");
          tie++;
      }
      if(col==1){
          row=col1.lastIndexOf('');
          col1[row]="p1";
          $("#"+col+''+row).addClass("yellow");
          tie++;
          }
      if(col==2){
          row=col2.lastIndexOf('');
          col2[row]="p1";
          $("#"+col+''+row).addClass("yellow");
          tie++;
          }
      if(col==3){
          row=col3.lastIndexOf('');
          col3[row]="p1";
          $("#"+col+''+row).addClass("yellow");
          tie++;
          }   
        turn++;
      }//player 1 turn
      
      else if(turn==1){
          if(col==0){
              row=col0.lastIndexOf('');
              col0[row]="p2";
              $("#"+col+''+row).addClass("red");
              tie++;
          }
          if(col==1){
              row=col1.lastIndexOf('');
              col1[row]="p2";
              $("#"+col+''+row).addClass("red");
              tie++;
              }
          if(col==2){
              row=col2.lastIndexOf('');
              col2[row]="p2";
              $("#"+col+''+row).addClass("red");
              tie++;
              }
          if(col==3){
              row=col3.lastIndexOf('');
              col3[row]="p2";
              $("#"+col+''+row).addClass("red");
              tie++;
              }    
              turn--;
          }//player 2 turn
        return row;  
      }//end color
      
    
      function Check(IDcol,IDrow){ //check it all
       checkCol(IDcol);
       checkRow(IDrow);
       checkCross1();
       checkCross2();
       if (tie==16){
        Swal.fire({
            title: "It's a tie !!!",
            text: 'Try again..',
            imageUrl: src="Pic/tie.PNG" ,
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: 'tie image',
          })    
    }
      }
    
    
       function checkCol(IDcol){
        let winner = true;
    
        if(CheckPlayercol==0){
        if(IDcol==0){
        for(i=0;i<4;i++){
            if ((col0[i])!="p1") 
                winner = false;
        } }
        if(IDcol==1){
        for(i=0;i<4;i++){       
            if ((col1[i])!="p1") 
                winner = false;    
        }  }      
        if(IDcol==2){
        for(i=0;i<4;i++){   
            if ((col2[i])!="p1") 
                winner = false;  
        } }
        if(IDcol==3){
        for(i=0;i<4;i++){         
             if ((col3[i])!="p1") 
                winner = false;        
        } }
        if(winner){
            Win();
        } 
        CheckPlayercol++;
    }//CheckPlayercol=0
    else if(CheckPlayercol==1){
        if(IDcol==0){
        for(i=0;i<4;i++){
            if ((col0[i])!="p2") 
                winner = false;
        } }
        if(IDcol==1){
        for(i=0;i<4;i++){       
            if ((col1[i])!="p2") 
                winner = false;    
        }  }      
        if(IDcol==2){
        for(i=0;i<4;i++){   
            if ((col2[i])!="p2") 
                winner = false;  
        } }
        if(IDcol==3){
        for(i=0;i<4;i++){         
             if ((col3[i])!="p2") 
                winner = false;        
        } }
        if(winner){
            Win();
        } 
        CheckPlayercol--;
    }//CheckPlayercol=1
    }//end check colomn
    
    
    
    function checkRow(row){
    
        let winner = true;
    
        if(CheckPlayerrow==0){
        if( col0[row]!=='p1' ||col1[row]!=='p1' ||col2[row]!=='p1' ||col3[row]!=='p1')   {
         winner = false;
        }
        if(winner){
            Win();
        } 
        CheckPlayerrow++;
    }//CheckPlayerrow=0
    
    else if(CheckPlayerrow==1){
        if( col0[row]!=='p2' ||col1[row]!=='p2' ||col2[row]!=='p2' ||col3[row]!=='p2')   {
         winner = false;
        }
        if(winner){
            Win();
        } 
        CheckPlayerrow--;
    }//CheckPlayerrow=1
    
    }//end check Row
    
    
    
    function checkCross1(){
    
        let winner = true;
    
        if(CheckPlayerCros1==0){
            if( col0[0]!=='p1' ||col1[1]!=='p1' ||col2[2]!=='p1' ||col3[3]!=='p1')   {
                winner = false;
            } 
            else if(winner){
                Win();
            } 
            CheckPlayerCros1++;
        } //checkPlayerCros1=0    
    
        else if(CheckPlayerCros1==1){
            if( col0[0]!=='p2' ||col1[1]!=='p2' ||col2[2]!=='p2' ||col3[3]!=='p2')   {
                winner = false;
            } 
            else if(winner){
                Win();
            } 
            CheckPlayerCros1--;
        }//CheckPlayerCros1=1
    
    }//end check Cross 1
    
    
    function checkCross2(){
    
        let winner = true;
    
        if(CheckPlayerCros2==0){
            if( col0[3]!=='p1' ||col1[2]!=='p1' ||col2[1]!=='p1' ||col3[0]!=='p1')   {
                winner = false;
            } 
            else if(winner){
                Win();
            } 
            CheckPlayerCros2++;
        } //checkPlayerCros2=0    
    
        else if(CheckPlayerCros2==1){
            if( col0[3]!=='p2' ||col1[2]!=='p2' ||col2[1]!=='p2' ||col3[0]!=='p2')   {
                winner = false;
            } 
            else if(winner){
                Win();
            } 
            CheckPlayerCros2--;
        }//CheckPlayerCros2=1
    
    }//end check Cross 2
    
    function Win(){
        Swal.fire({
            title: 'Congratulations!',
            text: 'You Win !!!',
            imageUrl: src="Pic/win2.jpg" ,
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: 'Win image',
          })    
    }

      }//onload