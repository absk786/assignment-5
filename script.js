let tasks = {
    zero: [],
    one: [],
    two: [],
    three: [],
    four: [],
    five: [],
    six: [],
    seven: [],
    eight: [],
};
let getDate = moment().format ("Do MMMM YYYY h:mm:ss a");
let getHour = parseInt(moment().format ("HH"));
let taskIdCounter = 0;
let taskArrPositionConverter;

// Jquery methods
$(document).ready(function(){
// this gets the date from the variable and displays it
$("#todaysDateEl").text(getDate);

// select all span tags
$("span").each(function(index) {
  // this adds 9 to the index of the span tags
let indexTimeConverter = parseInt(index) + 9;
  if (indexTimeConverter === getHour) {
    $(this).closest("div").css({"border": "3px solid green"})    
 }
  else if ( indexTimeConverter < getHour) {
    $(this).closest("div").css({"border": "3px solid blue"}) 
  }
  else if ( indexTimeConverter > getHour) {
    $(this).closest("div").css({"border": "3px solid orangered"}) 
  }
})

$(".form-control").on("click", function () { 
   // get current text - "this" is currently set to the input tag.
  let currentText = $(this).val().trim();    
  // // finds the corresponding time hour of where the button is clicked and this converts the time into an intiger which can be linked to the array.
  let taskTimeStatus = parseInt($(this).siblings(".input-group-prepend").find("span").text());
  // console.log(taskTimeStatus);
  let taskArrPositionNumber = taskTimeStatus - 9;
  if  (taskArrPositionNumber === 0) {
    taskArrPositionConverter = "zero";
  }if (taskArrPositionNumber === 1) {
    taskArrPositionConverter = "one";
  }if (taskArrPositionNumber === 2) {
    taskArrPositionConverter = "two";
  }if (taskArrPositionNumber === 3) {
    taskArrPositionConverter = "three";
  }if (taskArrPositionNumber === 4) {
    taskArrPositionConverter = "four";
  }if (taskArrPositionNumber === 5) {
    taskArrPositionConverter = "five";
  }if (taskArrPositionNumber === 6) {
    taskArrPositionConverter = "six";
  }if (taskArrPositionNumber === 7) {
    taskArrPositionConverter = "seven";
  }if (taskArrPositionNumber === 8) {
    taskArrPositionConverter = "eight";
  }
  tasks[taskArrPositionConverter].push(currentText);
  taskIdCounter++;
}) 

$(".save-button").on("click", function () {
  localStorage.setItem("tasks", JSON.stringify(tasks));
})

var loadTasks = function() {
  tasks = JSON.parse(localStorage.getItem("tasks"));

  // if nothing in localStorage, create a new object to track all task status arrays
  if (!tasks) {
    tasks = {
      zero: [],
      one: [],
      two: [],
      three: [],
      four: [],
      five: [],
      six: [],
      seven: [],
      eight: [],
  };
  }

  // loop over object properties
  $.each(tasks, function(list, arr) {
    console.log(list, arr);
    // then loop over sub-array
    arr.forEach(function(task) {
      createTask(task.text);
    });
  });
};

});
