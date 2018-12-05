function myFunction() {
  var a, b, c, ch, d, x;
  var addition = 0;
  var subtraction = 0;
  var multiplication = 0;
  var division = 0;
  var exponent = 0;
  var sum1 = 0;
  var count = 0;

  choice = parseInt(prompt("1 for Addition \n2 for Subtraction \n3 for Multiplication\n4 for Division\n5 for Exponent\n6 for Mean \n7 for Quit"));
  switch (choice) {
    case 1:
      a = window.prompt("Enter first Number");
      b = window.prompt("Enter second Number");
      addition = parseInt(a) + parseInt(b);
      document.getElementById("txt1").value = addition;
      break;


    case 2:
      a = window.prompt("Enter first Number");
      b = window.prompt("Enter second Number");
      subtraction = parseInt(a) - parseInt(b);
      document.getElementById("txt1").value = subtraction;
      break;

    case 3:
      a = window.prompt("Enter first Number");
      b = window.prompt("Enter second Number");
      multiplication = parseInt(a) * parseInt(b);
      document.getElementById("txt1").value = multiplication;
      break;

    case 4:
      a = window.prompt("Enter first Number");
      b = window.prompt("Enter second Number");
      division = parseFloat(a) / parseFloat(b);
      document.getElementById("txt1").value = division;
      break;

    case 5:
      a = window.prompt("Enter base Number");
      b = window.prompt("Enter pow");
      exponent = parseFloat(Math.pow(a, b));
      document.getElementById("txt1").value = exponent;
      break;

    case 6:


      x = prompt("Enter the series of numbers to find mean:");
      while (x != "***") {
        count++;
        sum1 = sum1 + parseInt(x);
        x = prompt("Enter the series of numbers to find the mean:");
        document.getElementById("txt1").value = sum1 / count;
      }

      break;
    case 7:
      {
        exit;
      }
    default:
      window.alert("Enter the numeric values only between 1-7");
  }


}