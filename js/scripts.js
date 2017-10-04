
function doggo(water) {
  var myString = ("");
  for (var i = water.length - 1; i >= 0; i--) {
    myString += water[i];
  };
  alert(myString);
}

doggo("I love bread");
