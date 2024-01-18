// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var hour9 = $('#hour-9');
var hour10 = $('#hour-10');
var hour11 = $('#hour-11')
var hour12 = $('#hour-12')
var hour13 = $('#hour-1');
var hour14 = $('#hour-2');
var hour15 = $('#hour-3');
var hour16 = $('#hour-4');
var hour17 = $('#hour-5');

    // $(".saveBtn").on("click", function () {
        
    //     console.log(this);
    //     var text = $(this).siblings(".description").val(); // taken the change from the sibling html description attribute
        // var time = $(this).parent().attr("id"); // taken the change from the parent html id attribute

        //set items in local storage.
    //     localStorage.setItem(time, text);
    // })

  
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    
    // Code to display the current date in the header of the page.
    $(function displayTime() {
    var today = dayjs();
    $('#currentDay').text(today.format('MMM D, YYYY'));  
 });
  //README
//   GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// DONE**THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// DONE**THEN I am presented with timeblocks for standard business hours of 9am&ndash;5pm
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist