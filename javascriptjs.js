(function () {
    var myElement = document.getElementById("mdiv");
  
    //Create tablle
    var myTable = document.createElement("table");
    myTable.id = "table";
    
  
    //Adding table 
    myElement.appendChild(myTable);
  
    var myTableElements = document.getElementById("table");
  
    // for  rows
    for (j = 1; j <= 5; j++) 
    {
      var tr1 = document.createElement("tr");
      tr1.id = "tr";
      if (j === 1) {
      
        var td1 = document.createElement("th");
        var td2 = document.createElement("th");
        var td3 = document.createElement("th");
        var td4 = document.createElement("th");
        var td5 = document.createElement("th");
      } 
      else {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");
        var td5 = document.createElement("td");
      }
      if (j === 1) {
        //first row
        for (i = 1; i <= 5; i++) // for each cell
         {
          if (i == 1) {
            var cell1 = document.createTextNode("Name");
            td1.appendChild(cell1);
          } else if (i == 2) {
            var cell2 = document.createTextNode("Age");
            td2.appendChild(cell2);
          } else if (i == 3) {
            var cell3 = document.createTextNode("DOB");
            td3.appendChild(cell3);
          } else if (i == 4) {
            var cell4 = document.createTextNode("Email");
            td4.appendChild(cell4);
          } else {
            var cell5 = document.createTextNode("Company");
            td5.appendChild(cell5);
          }
        }
      } else if (j === 2) {
        for (i = 1; i <= 5; i++) {
          if (i == 1) {
            var cell1 = document.createTextNode("Ragini");
            td1.appendChild(cell1);
          } else if (i == 2) {
            var cell2 = document.createTextNode("21");
            td2.appendChild(cell2);
          } else if (i == 3) {
            var cell3 = document.createTextNode("02-05-2000");
            td3.appendChild(cell3);
          } else if (i == 4) {
            var cell4 = document.createTextNode("raginikhushi99@gmail.com");
            td4.appendChild(cell4);
          } else {
            var cell5 = document.createTextNode("Gemini Solutions");
            td5.appendChild(cell5);
          }
        }
      } else if (j === 3) {
        for (i = 1; i <= 5; i++) {
          if (i == 1) {
            var cell1 = document.createTextNode("vijay laxmi");
            td1.appendChild(cell1);
          } else if (i == 2) {
            var cell2 = document.createTextNode("22");
            td2.appendChild(cell2);
          } else if (i == 3) {
            var cell3 = document.createTextNode("29-12-2000");
            td3.appendChild(cell3);
          } else if (i == 4) {
            var cell4 = document.createTextNode("vijaylaxmi@gmail.com");
            td4.appendChild(cell4);
          } else {
            var cell5 = document.createTextNode("Gemini Solutions");
            td5.appendChild(cell5);
          }
        }
      } else if (j === 4) {
        for (i = 1; i <= 5; i++) {
          if (i == 1) {
            var cell1 = document.createTextNode("Saumya Gupta");
            td1.appendChild(cell1);
          } else if (i == 2) {
            var cell2 = document.createTextNode("23");
            td2.appendChild(cell2);
          } else if (i == 3) {
            var cell3 = document.createTextNode("12-5-1998");
            td3.appendChild(cell3);
          } else if (i == 4) {
            var cell4 = document.createTextNode("saumyagupta@gmail.com");
            td4.appendChild(cell4);
          } else {
            var cell5 = document.createTextNode("Gemini Solutions");
            td5.appendChild(cell5);
          }
        }
      } else {
        for (i = 1; i <= 5; i++) {
          if (i == 1) {
            var cell1 = document.createTextNode("Rahul sharma");
            td1.appendChild(cell1);
          } else if (i == 2) {
            var cell2 = document.createTextNode("22");
            td2.appendChild(cell2);
          } else if (i == 3) {
            var cell3 = document.createTextNode("22-07-2000");
            td3.appendChild(cell3);
          } else if (i == 4) {
            var cell4 = document.createTextNode("rahulsharma@gmail.com.com");
            td4.appendChild(cell4);
          } else {
            var cell5 = document.createTextNode("Gemini Solutions");
            td5.appendChild(cell5);
          }
        }
      }
      tr1.appendChild(td1);
      tr1.appendChild(td2);
      tr1.appendChild(td3);
      tr1.appendChild(td4);
      tr1.appendChild(td5);
      myTableElements.appendChild(tr1);
    }
  })();