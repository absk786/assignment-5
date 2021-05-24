let tasks = {
    zero: [],
    one: [],
    two: [],
    three: [],
    four: [],
    five: [],
    six: [],
    seven: [],
};
let getDate = moment().format ("Do MMMM YYYY h:mm:ss a");
let getHour = parseInt(moment().format ("HH"));
let taskTimeStatusSaveBtn;
let taskIdCounter = 0;
let taskArrPositionConverter;
// data-task-Id is linked with taskIdCounter. every time we add a new task we will add taskCounterId ++
// setAttribute("data-task-id", taskIdCounter);The setAttribute() method can be used to add or update any attribute on an HTML element, but the only attribute we need for now is data-task-id, which we set to the current value of taskIdCounter.

// Jquery methods
$(document).ready(function(){
// this gets the date from the variable and displays it
$("#todaysDateEl").text(getDate);
// select all span tags

$("span").each(function(index) {
  // console.log($(this).text());
  // this adds 9 to the index of the span tags
  let indexTimeConverter = parseInt(index) + 9;
  // console.log("this is a", typeof indexTimeConverter, indexTimeConverter);
  // console.log("this is a number", typeof getHour, getHour);
  if (indexTimeConverter === getHour) {
    $(this).closest("div").css({"border": "3px solid green"})    
 }
  else if ( indexTimeConverter < getHour) {
    // console.log("not found")
    $(this).closest("div").css({"border": "3px solid blue"}) 
  }
  else if ( indexTimeConverter > getHour) {
    // console.log("not found")
    $(this).closest("div").css({"border": "3px solid orangered"}) 
  }

})

// When that happens, we need to collect a few pieces of data: the 
// current value of the element, the parent element's ID, and the element's position in the list.
$(".form-control").on("click", function () { 
  // $(".form-control").on("blur", "textarea",function () {  
  // } );
   // get current text - "this" is currently set to the input tag.
   console.log($(this));
  let currentText = $(this).text().trim();  
  console.log(currentText);
  
  // // this converts the time into an intiger which can be linked to the array.
  // let taskTimeStatus = parseInt($("textarea").siblings(".input-group-prepend").find("span").text());
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
  }
  
  console.log(tasks[taskArrPositionConverter]);
  tasks[taskArrPositionConverter].push(text);
  taskIdCounter++;
}) 

$(".save-button").on("click", function () {
  taskTimeStatusSaveBtn = parseInt($(this).siblings(".input-group-prepend").find("span").text())
  localStorage.setItem("tasks", JSON.stringify(tasks));
})
});










// this generates a ptag on click on that specific 
// $("<p>").appendTo(this);
// // let clickedTextArea = $(this);
// let dynamicPTag = $(this).find("p").addClass("form-control").attr("data-task-id", taskIdCounter).text(currentText);
// // create a new text area input
// let textInput = $("<textarea>").addClass("form-control").attr("data-task-id", taskIdCounter).text(dynamicPTag.text());
// console.log(textInput.val());

// // this replaces the div with the textinput
// $(this).replaceWith(textInput);
// textInput.trigger("focus");