//display current date
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));

function currentTime() {
  var current = moment().hours();
  var time = $(".time-block");

  time.each(function () {
    var hour = parseInt($(this).attr("id"));
    console.log(hour);

    if (hour === current) {
      $(this)
        .children(".col-sm-10")
        .attr("class", "present col-sm-10 description");
    } else if (current > hour) {
      $(this)
        .children(".col-sm-10")
        .attr("class", "past col-sm-10 description");
    } else {
      $(this)
        .children(".col-sm-10")
        .attr("class", "future col-sm-10 description");
    }
  });
}
currentTime();
