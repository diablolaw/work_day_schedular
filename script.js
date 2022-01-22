$("#currentDay").text(moment().format("MMMM Do YYYY"));
var store = window.localStorage;
var container = $(".container");
var now = moment();
var currentTime = { text: moment().format("h:00 A"), hour: moment().hour() };

var hoursOfTheDay = Array.from(new Array(9)).map((v, i) => {
  var text = moment()
    .hour(i + 9)
    .format("h:00 A");
  var hour = moment().hour(i + 9);
  return { text, hour };
});
hoursOfTheDay.forEach((hr) => {
  var grid = $(
    '<form data-name="${hr.text}" class="hour row time-block"></form>'
  );

  var time = $('<div class="flex time-label"></div>').text(hr.text);

  grid.append(time);
  container.append(grid);
});
