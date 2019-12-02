$(document).ready(function () {
  $("#cell-1").click(function () {
    // $("#test").hide();
    // alert("helo");
    // console.log("okay");
    $(this).addClass("green");
    $(this).off("mouseleave");
    $(this).addClass("red");
    if (
      $("#cell-1").hasClass("green") &&
      $("#cell-2").hasClass("green") &&
      $("#cell-3").hasClass("green") &&
      $("#cell-4").hasClass("green")
    ) {
      $(".container").append('<div class="red">Completed!</div>');
    }
  });
  //
  $("[id*='cell-']").mouseenter(function () {
    $(this).addClass("green");
  });

  $("[id*='cell-']").mouseleave(function () {
    $(this).removeClass("green");
  });
});

// // test
// var p = document.querySelector("p");

// // setup our table array
// var tableArry = [
//   ["row1 cell1", "row1 - cell2"],
//   [" row2, cell1 ", "row2 - cell2"]
// ];

//
// let table = document.createElement("table");

// let row = table.insertRow();
// let cell = row.insertCell();
// cell.textContent = "New Cell";
//
// console.log(table.rows);

// iterate over the length of the array
// function getSize(num)
// {
//     num = num/2
// for (let x =0; x<num.length; x++)
// {
//     var row +=
// }

// }

// for (let row of tableArry) {
//   //insert a new row element into the table element
//   table.insertRow();
//   //Iterate over every index(cell) in each arry(row)
//   // of the prevuoise one
//   for (let cell of row) {
//     //while iterating over the index(cell)
//     //insert a cell into table element
//     let newCell = table.rows[table.rows.length - 1].insertCell();

//     // add text to the created cell element
//     newCell.textContent = cell;
//   }
// }

// // p.appendChild(table);

// // console.dir(p);

function tableCreate() {
  var body = document.body,
    tbl = document.createElement("table");
  tbl.style.width = "80px";
  tbl.style.border = "1px solid black";

  for (var i = 0; i < 4; i++) {
    var tr = tbl.insertRow();
    for (var j = 0; j < 4; j++) {
      var td = tr.insertCell();
      td.appendChild(document.createTextNode(j));
      td.style.border = "0.2px solid black";
      // if (i == 1 && j == 1) {
      //   //   td.setAttribute();
      // //   console.dir(td);

      // }
    }
  }
  body.appendChild(tbl);
}

tableCreate();
