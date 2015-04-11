jQuery(document).ready(function($) {
  $.ajax({
  url : "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=16d8b076f9808ebbd4b7908e74fe1154&format=json",
  dataType : "json",
  success : function(parsed_json) {
  var hola = parsed_json['tracks']['track']['0']['name'];
  var haha = parsed_json['tracks']['track']
  alert("Current temperature in "+hola);
  $('.hola').append( "<p>"+hola+"  </p>");
  console.log(haha);
  }
  });
});