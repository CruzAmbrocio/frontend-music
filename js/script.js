// Javascript Code.
var playCounts = [];
var playorder =[];
var varName = [];
var varDuration = [];
var varArtist = [];
var varImage = [];
var contnum ={(i+1)};
var contimage =[varImage[i]];
var contname =[varName[i]];
var contartist=[varArtist[i]];
var contduration=[varDuration[i]];
var contplay=[playorder[i]];

function songs () {
      $('.songs').append(
    "<div class='col-md-8 col-md-offset-1'>"+
        "<hr/>"+
        "<div class='col-md-2'>"+
            "<p class='noSong'>"+contnum+"</p>"+
        "</div>"+
        "<div class='col-md-2'>"+
            "<div class='images'>"+"<img src=\""+contimage+"\" class='imgbig'>"+"</div>"+
        "</div>"+
        "<div class='col-md-8'>"+
            "<div class='infoSong'>"+
                "<p class='name'>"+"Name  : "+contname+"</classp>"+
                "<p class='artist'>"+"Artist name  : "+contartist+"</p>"+
                "<p class='duration'>"+"Duration  : "+contduration+"  Seg."+"</p>"+
                "<p class='playCounts'>"+"Play counts  : "+contplay+"</p>"+
            "</div>"+
        "</div>"+
    "</div>"
      );
}
jQuery(document).ready(function($) {
  $.ajax({
  url : "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=16d8b076f9808ebbd4b7908e74fe1154&format=json",
  dataType : "jsonp",
  success : function(parsed_json) {
    for (var i = 0; i <= 50; i++) {
        playCounts.push(parsed_json["tracks"]["track"][i]["playcount"])
        playorder.push(parsed_json["tracks"]["track"][i]["playcount"])
        varDuration.push(parsed_json["tracks"]["track"][i]["duration"])
        varName.push(parsed_json["tracks"]["track"][i]["name"])
        varArtist.push(parsed_json['tracks']['track'][i]['artist']['name'])
        try {varImage.push(parsed_json["tracks"]["track"][i]["image"][2]["#text"])}
        catch(err){varImage.push("images/undefined.jpg")}
            console.log(playCounts[i]);
            console.log(varImage[i]);
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
                "<p class='name'>"+"Name  : "+varName[i]+"</classp>"+
                "<p class='artist'>"+"Artist name  : "+varArtist[i]+"</p>"+
                "<p class='duration'>"+"Duration  : "+varDuration[i]+"  Seg."+"</p>"+
                "<p class='playCounts'>"+"Play counts  : "+playorder[i]+"</p>"+
            "</div>"+
        "</div>"+
    "</div>"
      );
    }
    }
  });
});




function order(a, b){
a = a/60
b = b/60
if (a<b) {return 1}else{return 0};
};

 $("#counts").click(
      function() {
            $(".songs").empty();
        $("#Top").removeClass("selecfiltr");
        $("#counts").addClass("selecfiltr");
        $("#time").removeClass("selecfiltr");
        $("#alpha").removeClass("selecfiltr");
        $(".oculto").removeClass("selecfiltr");
        $("#top").removeClass("selecfiltr");
        playCounts.sort(order);
        for (var x = 0; x <50; x++) {
            for (var i = 0; i <50; i++) {

        if (playCounts[x] === playorder[i]) {
            var play = "playorder[i]"
            songs(play);
        };
            };
        };
});



/*
public class Prueba {
  public static void main(String[] args) {

    String a[] = {"Ramon", "Maria", "Juan"};

    ArrayList lista = new ArrayList(); 

    for(int i = 0; i < a.length; i++){

      lista.add(a[i]);

    }

    Collections.sort(lista);

    System.out.println(lista);



  }

}*/








/*
 $(".bottons").hover(
      function() {
        $(this).addClass("hover_button");
    },
      function() {
        $(this).removeClass("hover_button");
    });

 $("#Top").click(
      function(ListTop) {
        $("#Top").addClass("selecfiltr");
        $("#time").removeClass("selecfiltr");
        $("#alpha").removeClass("selecfiltr");
        $(".oculto").removeClass("selecfiltr");
        $("#counts").removeClass("selecfiltr");

    for (var i = 0; i <= 50; i++) {
        playCounts.push(ListTop["tracks"]["track"][i]["playcount"])
        varDuration.push(ListTop["tracks"]["track"][i]["duration"])
        varName.push(ListTop["tracks"]["track"][i]["name"])
        varArtist.push(ListTop['tracks']['track'][i]['artist']['name'])
        try {varImage.push(ListTop["tracks"]["track"][i]["image"][2]["#text"])}
        catch(err){varImage.push("images/undefined.jpg")}

            console.log(playCounts[i]);
            console.log(varImage[i]);

        for(s=0; s<playCounts[i].length; s++){
            console.log(playCounts[s]);
            }

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
                    "<p class='name'>"+"Name  : "+varName[i]+"</classp>"+
                    "<p class='artist'>"+"Artist name  : "+varArtist[i]+"</p>"+
                    "<p class='duration'>"+"Duration  : "+varDuration[i]+"  Seg."+"</p>"+
                    "<p class='playCounts'>"+"Play counts  : "+playCounts[i]+"</p>"+
                "</div>"+
            "</div>"+
        "</div>"
            );
}
    });


 $("#counts").click(
      function() {
        $("#Top").removeClass("selecfiltr");
        $("#counts").addClass("selecfiltr");
        $("#time").removeClass("selecfiltr");
        $("#alpha").removeClass("selecfiltr");
        $(".oculto").removeClass("selecfiltr");
        $("#top").removeClass("selecfiltr");
    });



 $("#time").click(
      function() {
        $("#Top").removeClass("selecfiltr");
        $("#time").addClass("selecfiltr");
        $("#counts").removeClass("selecfiltr");
        $("#alpha").removeClass("selecfiltr");
        $(".oculto").removeClass("selecfiltr");
        $("#top").removeClass("selecfiltr");
    });



 $("#alpha").click(
      function(event) {
        $(".oculto").addClass("selecfiltr");
        $("#alpha").addClass("selecfiltr");
        $("#counts").removeClass("selecfiltr");
        $("#time").removeClass("selecfiltr");
        $("#Top").removeClass("selecfiltr");
        $("#alpha").click(function(event){
        event.preventDefault();
        $(".oculto").show("fast");
        $(".muestra").hide("fast");
        });
        $(".oculto").click(function(event){
        event.preventDefault();
        $(".muestra").show(100);
        $(".oculto").hide(100);
        $(".oculto").addClass("selecfiltr");
        $("#alpha").addClass("selecfiltr");
        $("#counts").removeClass("selecfiltr");
        $("#time").removeClass("selecfiltr");
        $("#Top").removeClass("selecfiltr");
        });

    });*/

