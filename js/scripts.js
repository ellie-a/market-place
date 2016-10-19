$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var name1Input = $("input#name1").val();
    var name2Input = $("input#name2").val();
    var street1Input = $("input#street1").val();
    var street2Input = $("input#street2").val();
    var locationInput = $("input#location").val();

    $(".name1").text(name1Input);
    $(".name2").text(name2Input);
    $(".street1").text(street1Input);
    $(".street2").text(street2Input);
    $(".location").text(locationInput);


    $("#receipt").show();

    event.preventDefault();
  });
});
