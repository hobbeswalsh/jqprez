/**
 * Created by walrobin on 11/21/13.
 */

var pruneTodoList = function () {
    $(".done-true").remove();
};


$(document).ready(function () {
    $(".todoDiv").prepend("<h2 class='todoHeader'>You have 0 things to do.</h2>")

    $("#target").submit(function (event) {
        event.preventDefault();
        $(".todoList").append("<li class='todoItem'>ONE MORE<span><input type='checkbox'></span></li>");
        $( ".todoHeader" ).remove();
        var todoLen = $( '.todoList').length;
        $(".todoDiv").prepend("<h2 class='todoHeader'>You have " + todoLen + " things to do.</h2>")
        return true;
    });

});