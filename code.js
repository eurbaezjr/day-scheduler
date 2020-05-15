
//Load DOM when it is ready
$(document).ready(function () {
    var date = moment().format("dddd, MMMM Do");
    var nowHour = moment().format("HH");
    $("#currentDay").text(date);

    //If there is not anything saved in local storage, create the user object
    if (lastSaved === undefined || lastSaved == null || lastSaved.length <= 0) {
        var user = {
            input9: "",
            input10: "",
            input11: "",
            input12: "",
            input13: "",
            input14: "",
            input15: "",
            input16: "",
            input17: "",
        };
    }
    else {
        var user = {
            input9: lastSaved.input9,
            input10: lastSaved.input10,
            input11: lastSaved.input11,
            input12: lastSaved.input12,
            input13: lastSaved.input13,
            input14: lastSaved.input14,
            input15: lastSaved.input15,
            input16: lastSaved.input16,
            input17: lastSaved.input17,
        };
    }

    // =================================================

    // Dynamically change color of boxes depending on time
    $("input").each(function () {

        if (parseInt($(this).attr("id")) > parseInt(nowHour)) { $(this).attr('class', 'future form-control h-100 description'); }

        else if (parseInt($(this).attr("id")) < parseInt(nowHour)) { $(this).attr("class", "past form-control h-100 description"); }

        else if (parseInt($(this).attr("id")) == parseInt(nowHour)) {
            $(this).attr("class", "present form-control h-100 description");
        }
    });
    // =================================================

    // Upon clicking on save item, user notes are saved to local storage
    $("button").on("click", function () {
        var savedHour = $(this).attr('value');

        // Link the button clicked to save to local storage
        if (savedHour == 9) {
            user.input9 = $("#9").val();
        }
        else if (savedHour == 10) {
            user.input10 = $("#10").val();
        }
        else if (savedHour == 11) {
            user.input11 = $("#11").val();
        }
        else if (savedHour == 12) {
            user.input12 = $("#12").val();
        }
        else if (savedHour == 13) {
            user.input13 = $("#13").val();
        }
        else if (savedHour == 14) {
            user.input14 = $("#14").val();
        }
        else if (savedHour == 15) {
            user.input15 = $("#15").val();
        }
        else if (savedHour == 16) {
            user.input16 = $("#16").val();
        }
        else if (savedHour == 17) {
            user.input17 = $("#17").val();
        }

        localStorage.setItem("user", JSON.stringify(user));

    });
    // =================================================

    // Return saved items from local storage
    var lastSaved = JSON.parse(localStorage.getItem("user"));

    $("#9").attr("value", lastSaved.input9);
    $("#10").attr("value", lastSaved.input10);
    $("#11").attr("value", lastSaved.input11);
    $("#12").attr("value", lastSaved.input12);
    $("#13").attr("value", lastSaved.input13);
    $("#14").attr("value", lastSaved.input14);
    $("#15").attr("value", lastSaved.input15);
    $("#16").attr("value", lastSaved.input16);
    $("#17").attr("value", lastSaved.input17);

});
