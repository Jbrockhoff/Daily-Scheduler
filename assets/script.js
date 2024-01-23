      //created function to change timeblock color to reflect current time
    //and change the color of past to gray, current to red, and future to green
      var currentTime = dayjs().hour()

      for (var i = 9; i < 18; i++) {
        var hourBlock = document.getElementById('hour-'+i)
        var timeBlock = i
        console.log(timeBlock);
      if (currentTime === timeBlock) {
        hourBlock.classList.add('present')
        hourBlock.classList.remove('past')
        hourBlock.classList.remove('future')
        hourBlock.classList.remove('description')
      } else if (currentTime < timeBlock) {
        hourBlock.classList.add('future')
        hourBlock.classList.remove('past')
        hourBlock.classList.remove('present')
        hourBlock.classList.remove('description')
      } else if (currentTime > timeBlock) {
        hourBlock.classList.add('past')
        hourBlock.classList.remove('present')
        hourBlock.classList.remove('future')
        hourBlock.classList.remove('description')
      }    
    }
    
    // Added a listener for click events on the save button.     
        $(".saveBtn").on("click", function () {   
        var text = $(this).siblings(".description").val();  
        var time = $(this).parent().attr("id"); 
             //set items in local storage.
             console.log(text)
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
    
    // Code to display the current date in the header of the page.
    $(function displayTime() {
    var today = dayjs();
    $('#currentDay').text(today.format('MMM D, YYYY'));  
  });

