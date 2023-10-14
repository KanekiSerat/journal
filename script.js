function rate(choice) {
    var pic;
    if (choice == 0) {
      pic = "https://media.giphy.com/media/3NtY188QaxDdC/giphy.gif"
    } else {
      pic = "https://media.giphy.com/media/l1KVaj5UcbHwrBMqI/giphy.gif"
    }
    document.getElementById('myImage').src = pic;
  }
  //minta string input
  function getStringInput() {
    var userInput = document.getElementById("textInput").value;
    alert("You name entered: " + userInput);
}