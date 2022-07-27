//display current date
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));
var saveLocal = document.getElementById("saveBtn");

//if-else statement to change color of timeblocks
function currentTime() {
  var current = moment().hours();
  var time = $(".time-block");

  time.each(function () {
    var hour = parseInt($(this).attr("id"));
    //console.log(hour);

    if (hour === current) {
      $(this).children(".col-sm-10").attr("class", "present col-sm-10");
    } else if (current > hour) {
      $(this).children(".col-sm-10").attr("class", "past col-sm-10");
    } else {
      $(this).children(".col-sm-10").attr("class", "future col-sm-10");
    }
  });
}
currentTime();

//var saveLocal = document.getElementById(".col-sm-10");

saveLocal.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem(".col-sm-10", JSON.stringify([]));
  location.reload();
});
