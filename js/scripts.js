function toDoList (task) {
  this.task = task;
};

$(document).ready(function() {
  $("#taskForm").submit(function(event) {
    event.preventDefault();

    var inputtedItem = $("input#taskInput").val();
    var newTask = new toDoList(inputtedItem);

    $("ul#resultsList").append("<li>" + '<input type="checkbox" class="complete">' + " " + newTask.task + "</li>");

    $("input#taskInput").val("");

    $('.complete').change(function()
    {
      if(this.checked == true) {
      $(this).parent().hide();
      }
    });


  });
});
