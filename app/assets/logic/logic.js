//Confirm form fields are completed
function validateForm() {

    let isValid = true;

    $(".form-control").each(function() {

        if ( $(this).val() === '' )

            isValid = false;

    });

    $('.selectpicker').each(function() {

          if( $(this).val() === "")

              isValid = false

    });

    return isValid;

}
//Clear survey form if needed
$("#clearAll").on("click", function() {

    location.reload();

});

//initiate function to submit user survey		

$("#submit").on("click", function(event) {

      event.preventDefault();

    if(validateForm())	{

        let newPerson = {

            "friendName": $("#name").val().trim(),

            "friendPhoto": $("#photo").val(),

            "scores": [$("#question1").val(),
                        $("#question2").val(),
                        $("#question3").val(),
                        $("#question4").val(),
                        $("#question5").val(),
                        $("#question6").val(),
                        $("#question7").val(),
                        $("#question8").val(),
                        $("#question9").val(),
                        $("#question10").val()]

        };

        console.log(newPerson);

        var currentURL = window.location.origin;

        $.post(currentURL + "/api/friends", newPerson, function(data) {

            //popup new friend bootstrap modal and best match bootstrap modal 

            console.log("data:",data);

            console.log(data.friendName, data.friendPhoto);

              $("#matchName").text(data.friendName);

            $('#matchImg').attr("src", data.friendPhoto);

            $("#matchModal").modal("toggle");

        });

        //clear page

        $("#name").val("");

        $("#photo").val("");

        $("#question1").val("");
        $("#question2").val("");
        $("#question3").val("");
        $("#question4").val("");
        $("#question5").val("");
        $("#question6").val("");
        $("#question7").val("");
        $("#question8").val("");
        $("#question9").val("");
        $("#question10").val("");

    } else {

        alert("Complete the entire form please!");

    }

});