//Check if URL params has the platform

const urlParams = new URLSearchParams(window.location.search);

var platform = urlParams.get("platform");

if(platform != null){
    if(platform == "android" || platform == "ios"){
        $("#platform-select").val(platform);
    }
}
