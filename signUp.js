function calculateGrade() {
    var marks = $("#marks").val();
    var grade = '';

    if (marks > 100) {
        grade = 'Value must be less than or equal to 100';
    } else if (marks >= 90) {
        grade = 'A';
        $("#grade").css("background", "yellow");
    } else if (marks >= 80) {
        grade = 'B';
        $("#grade").css("background", "green")
    } else if (marks >= 70) {
        grade = 'C';
        $("#grade").css("background", "blue")
    } else if (marks >= 60) {
        grade = 'D';
        $("#grade").css("background", "black")
    } else {
        grade = 'F';
        $("#grade").css("background", "yellow")
    }

    $("#grade").val(grade);

    if (marks >= 80 && marks <= 100) {
        $(".scho").show();
    } else {
        $(".scho").hide();
    }
}
function student() {
    var studentId = $("#studentId").val();
    var faculty = ""; 

   
    $("#faculty").val(""); 
    if (studentId.length != 4) {
                $("#faculty").val("Error"); 
                return; 
            }

   else if (studentId.startsWith("12")) {
        faculty = "Computer Science";
        $("#faculty").css("background", "yellow");
    } else if (studentId.startsWith("13")) {
        faculty = "ecnomic";
        $("#faculty").css("background", "green");
    } else if (studentId.startsWith("14")) {
        faculty = "business";
        $("#faculty").css("background", "red");
    } else if (studentId.startsWith("15")) {
        faculty = "Medicine";
        $("#faculty").css("background", "blue");
        
    } else {
      
        faculty = "Unknown";
        $("#faculty").css("background", ""); 
    }

    $("#faculty").val(faculty);
}


$(document).ready(function(){  
    calculateGrade();

//     $(".scho").click(function() {
//         $(this).show();
//     }).mouseleave(function() {
//         $(this).hide();
//     });
});



function getAge() {
    bdate = $('#bdate').val();

    age = 2024 -  bdate;

    $('#age').val(age);
  
}

$(document).ready(function() {
  
    getAge();
});




