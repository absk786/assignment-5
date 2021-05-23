let tasks = {
    9: [],
    10: [],
    11: [],
    12: [],
    14: [],
    15: [],
    16: [],
    17: [],
};
let getDate = moment().format ("Do MMMM YYYY h:mm:ss a");
let getHour = parseInt(moment().format ("HH"));
let taskIdCounter = 0;
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
    $(this).closest("div").css({"border": "3px solid yellow"}) 
  }

})

// When that happens, we need to collect a few pieces of data: the 
// current value of the element, the parent element's ID, and the element's position in the list.
$(".form-control").on("click", function () {
  console.log("this has been clicked");
  $(".form-control").on("blur", "textarea",function () {  
  } );
   // console log the currently selected elemnt
   console.log(this);
   // get current text
  let currentText = $(this).text().trim();
  console.log(currentText);
  // create a new text area input
  let textInput = $("<textarea>").addClass("form-control").attr("data-task-id", taskIdCounter). text(currentText);
  // console.log(textInput);
  // console.log(taskIdCounter);
  // replace with the new textInput element
  $(this).replaceWith(textInput);
  // 
  let textP = $("p").addClass("m-1").attr("data-task-id");
  console.log(this);
  $(this).replaceWith(textP);
  // highlight the input box for user
  textInput.trigger("focus");
  // on click add a new p tag with the id - this way we can keep track of the tasks
  taskIdCounter++;

}) 

$(".save-button").on("click", function () {
  console.log("save button was clicked");
  console.log($(this).closest('textarea').text());
  $(this).closest('#form-control').text

  localStorage.setItem("tasks", JSON.stringify(tasks));
})

  });