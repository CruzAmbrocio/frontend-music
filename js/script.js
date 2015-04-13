// Javascript Code.
var playCounts = [];
var varName = [];
var varDuration = [];
var varArtist = [];
var varImage = [];
var azZA="";

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
                    "<p class='playCounts'>"+"Play counts  : "+playCounts[i]+"</p>"+
                "</div>"+
            "</div>"+
        "</div>"
            );
    }

  }
  });
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






















 $(".bottons").hover(
      function() {
        $(this).addClass("hover_button");
    },
      function() {
        $(this).removeClass("hover_button");
    });

 $("#Top").click(
      function() {
        $("#Top").addClass("selecfiltr");
        $("#time").removeClass("selecfiltr");
        $("#alpha").removeClass("selecfiltr");
        $(".oculto").removeClass("selecfiltr");
        $("#counts").removeClass("selecfiltr");
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

    });

