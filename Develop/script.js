// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var today = dayjs();
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
  //
  // TODO: Add code to display the current date in the header of the page.
  $("#currentDay").text(today.format("[Today is] MMMM, DD, dddd"));

  //need a for loop that loops from 8-19;
  var currentHour = today.format("HH");
  for (var hour = 8; hour < 20; hour++) {
    //check if current hour is past present or future;
    var element = $("#hour-" + hour);
    if (hour < currentHour) {
      element.addClass("past");
      element.removeClass("present");
      element.removeClass("future");
    } else if (hour == currentHour) {
      element.removeClass("past");
      element.addClass("present");
      element.removeClass("future");
    } else if (hour > currentHour) {
      element.removeClass("past");
      element.removeClass("present");
      element.addClass("future");
    }
    //find element on page that corresponds to that hour;

    //swap class for past, present, or future;
  }
});
