//Check if URL params has the platform

const urlParams = new URLSearchParams(window.location.search);

var platform = urlParams.get("platform");
var version = urlParams.get("version");
var theme = urlParams.get("theme");

console.log(theme);

if(platform != null){
    if(platform == "android" || platform == "ios"){
        $("#platform-select").val(platform);
    }
    if(version != null){
        $("#app-version").val(version)
    }
    if(theme != null && theme == "dark"){
        $(document).ready(function() {
            console.log("Ready");
            $("body").css("background-color", "#282828");
            $("#title").css("color", "white");
        });
    }
}
