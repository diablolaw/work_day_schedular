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
  var textArea = $("<textarea></textarea>")
    .text(store.getItem(hr.text))
    .attr("name", hr.text);

  var saveButton = $(
    '<button type="submit" class = "saveBtn"><i>Save</i></button>'
  ).attr("name", hr.text);

  grid.append(time);
  grid.append(textArea);
  grid.append(saveButton);
  container.append(grid);
});
$(".saveBtn").click(function (event) {
  event.preventDefault();
  var i = this.name;
  var value = $('textarea[name = "' + i + '"]').val();

  store.setItem(i, value);
});
