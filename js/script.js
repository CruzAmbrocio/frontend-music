// Javascript Code.
var playCounts = [];
var varName = [];
var varDuration = [];
var varArtist = [];
var varImage = [];

jQuery(document).ready(function($) {
  $.ajax({
  url : "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=16d8b076f9808ebbd4b7908e74fe1154&format=json",
  dataType : "json",
  success : function(parsed_json) {
    for (var i = 0; i <= 50; i++) {
        playCounts.push(parsed_json["tracks"]["track"][i]["playcount"])
        varDuration.push(parsed_json["tracks"]["track"][i]["duration"])
        varName.push(parsed_json["tracks"]["track"][i]["name"])
        varArtist.push(parsed_json['tracks']['track'][i]['artist']['name'])
        try {varImage.push(parsed_json["tracks"]["track"][i]["image"][2]["#text"])}
        catch(err){varImage.push("images/undefined.jpg")}
            console.log(playCounts);
            console.log(varImage);

          $('.songs').append(
        "<div class='col-md-8 col-md-offset-1'>"+
            "<hr/>"+
            "<div class='col-md-2'>"+
                "<p class='noSong'>"+(i+1)+"</p>"+
            "</div>"+
            "<div class='col-md-2'>"+
                "<div class='images'>"+"<img src=\""+varImage[i]+"\" class='imgbig'>"+"</div>"+
            "</div>"+
            "<div class='col-md-8'>"+
                "<div class='infoSong'>"+
                    "<p class='name'> "+varName[i]+"</p>"+
                    "<p class='artist'>"+varArtist[i]+"</p>"+
                    "<p class='duration'>"+varDuration[i]+"  Seg."+"</p>"+
                "</div>"+
            "</div>"+
        "</div>"
);

    }
  }
  });
});

 $(".bottons").hover(
      function() {
        $(this).addClass("hover_button");
    },
      function() {
        $(this).removeClass("hover_button");
    });


