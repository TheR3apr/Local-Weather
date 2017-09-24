var tempShow = "&#8451";
var temp = 0, temp2;
var lat, long;
var pic;
var weather_pictures= [" http://natbg.com/wp-content/uploads/2016/06/winter-icy-landscape-high-quality-wallpaper.jpg","https://www.photocase.com/photos/1095538-nature-white-landscape-winter-forest-cold-photocase-stock-photo-large.jpeg","http://onfocusproduction.com/wp-content/uploads/2016/08/Landscape-wallpaper-16.jpg","http://images.all-free-download.com/images/graphiclarge/beautiful_scenery_05_hd_pictures_166316.jpg","https://s-media-cache-ak0.pinimg.com/originals/e1/4c/c6/e14cc64664b930b703a5a4d1bba434dc.jpg","http://savin-it.com/images/2016/02/06/beautiful-landscape-high-definition-wallpaper-for-desktop-background-HD-1920x1200.jpg",]

function getWeather(){
  /*
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
      lat = position.coords.latitude;
      long = position.coords.longitude;
    });
  }
  else {
    $("html").html("<h1 class='text-center'>Service is unavailable</h1>");
    return;
  }
  */
  $.getJSON("http://ip-api.com/json", function(data2){
    lat = data2.lat;
    long = data2.lon;
   $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&units=metric&appid=86f0975664fa42fa12d9ffb88aec84b3",function(data){
    debugger;
      $("#location").text(data.name + ", " +data.sys.country);
     temp = data.main.temp;
      $("#temp").html(Math.round(temp) + tempShow);
      $("#weather").text(data.weather[0].description);
    if(temp<=-5.5)
     pic=0;
    else if(temp<=5.5)
     pic=1;
    else if(temp<=15.5)
     pic=2;
    else if(temp<=25.5)
     pic=3;
    else if(temp<=35.5)
     pic=4;
    else
     pic=5;
    $("html body").css("background-image", "url("+weather_pictures[pic]+")");
    });
  
  });
  
}

$(document).ready(function(){
  getWeather();
  
  $("#btn1").on("click", function(){
    if(tempShow === "&#8451"){
      temp = temp*1.8 + 32;
      tempShow = "&#8457";
    }
    else{
      temp = (temp-32)/1.8;
      tempShow = "&#8451";
    }
    $("#temp").html(Math.round(temp)+tempShow);
  });
  
})