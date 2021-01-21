
function postMessageFunction(message)
{
 document.getElementById('postedMessage').innerHTML = message.value;                
}





/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navMenuFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  