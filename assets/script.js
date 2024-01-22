// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
  // $document.ready(function(){
 

  
    // Added a listener for click events on the save button.     
        $(".saveBtn").on("click", function () {   
        var text = $(this).siblings(".description").val();  
        var time = $(this).parent().attr("id"); 
             //set items in local storage.
             console.log(this)
        localStorage.setItem(time, text);
      
    });

    //Add code to get any user input that was saved in localStorage and set
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));

    $(function updateTimeblocks() {
      var currentHour = dayjs().format('h a');
      var currentTime = dayjs(currentHour, 'h a')
      var hourBlock = document.getElementsByClassName('descriptions')
      for (var i = 0; i < hourBlock.length; i++) {
        var timeBlock = dayjs(time-block[i], 'h a');
      if (currentTime.isSame(timeBlock)===true) {
        hourBlock[i].classList.add('present')
        hourBlock[i].classList.remove('past')
        hourBlock[i].classList.remove('future')
        hourBlock[i].classList.remove('description')
      } else if (currentTime.isBefore(timeBlock)===true) {
        hourBlock[i].classList.add('future')
        hourBlock[i].classList.remove('past')
        hourBlock[i].classList.remove('present')
        hourBlock[i].classList.remove('description')
      } else if (currentTime.isAfter(timeBlock)===true) {
        hourBlock[i].classList.add('past')
        hourBlock[i].classList.remove('present')
        hourBlock[i].classList.remove('future')
        hourBlock[i].classList.remove('description')
      }
    
    }


    });
   
    
    // Code to display the current date in the header of the page.
    $(function displayTime() {
    var today = dayjs();
    $('#currentDay').text(today.format('MMM D, YYYY'));  
  });

// });

// **GIVEN I am using a daily planner to create a schedule
// **WHEN I open the planner
// **THEN the current day is displayed at the top of the calendar
// **WHEN I scroll down
// **THEN I am presented with timeblocks for standard business hours of 9am&ndash;5pm
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
//** WHEN I click into a timeblock
// **THEN I can enter an event
// **WHEN I click the save button for that timeblock
// **THEN the text for that event is saved in local storage
// **WHEN I refresh the page
// **THEN the saved events persist