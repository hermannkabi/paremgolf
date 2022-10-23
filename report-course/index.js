//Check if URL params has the platform

const urlParams = new URLSearchParams(window.location.search);

var platform = urlParams.get("platform");
var version = urlParams.get("version");
var theme = urlParams.get("theme");

var holeNr = urlParams.get("hole");

var nameParam = urlParams.get("name");
var emailParam = urlParams.get("email");

var course = urlParams.get("course");


if(nameParam != null){
    $("#name-input").val(nameParam);
}

if(emailParam != null){
    $("#email-input").val(emailParam);
}

if(platform != null){
    if(platform == "android" || platform == "ios"){
        $("#platform-select").val(platform);
    }
}
if(version != null){
    $("#app-version").val(version)
}
if(holeNr != null){
    $("#hole-nr").val(holeNr)

}
if(theme != null && theme == "dark"){
    $(document).ready(function() {
        console.log("Ready");
        $("body").css("background-color", "#282828");
        $("#title").css("color", "white");
        $(".textfield").css("background-color", "#191919");
        $(".textfield").css("color", "white");
        $(".filepicker").css("color", "white");
        $("select").css("background-color", "#191919");
        $("select").css("color", "white");

    });
}

if(course != null){
    $("#course-name").val(course);
}