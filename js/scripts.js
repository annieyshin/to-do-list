function toDoList (task, date) {
  this.task = task;
  this.date = date;
};

toDoList.prototype.fullTask = function() {
  return this.task + " " + this.date;
};

$(document).ready(function() {
  $("#taskForm").submit(function(event) {
    event.preventDefault();

    var inputtedItem = $("input#taskInput").val();
    var taskDate = $("#date").val();
    var newTask = new toDoList(inputtedItem, taskDate);


    $("ul#resultsList").append("<li>" + '<input type="checkbox" class="complete">' + " " +  newTask.fullTask() + "</li>");

    $("input#taskInput").val("");

    $('.complete').change(function()
    {
      if(this.checked == true) {
      $(this).parent().hide();
      }
    });


  });
});
