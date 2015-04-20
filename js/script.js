// Javascript Code.
var playCounts = [];
var playorder =[];
var varName = [];
var namOrder =[];
var varDuration = [];
var durationOrder=[];
var varArtist = [];
var varImage = [];
var durationMins=[];

 $(".bottons").hover(
      function() {
        $(this).addClass("hover_button");
    },
      function() {
        $(this).removeClass("hover_button");
    });// The Hover bootons of navegation

function orderPlay(first, second){
    var first = first
    var second = second
        if (first<second) {return 1}else{return 0};
};// the function ordered playconts

function orderPlayDesen (first, second) {
    var first = first
    var second = second
        if (first<second) {return 0}else{return 1};
};// the function orderd playconts

function orderAlphabetic (a, b) {
    var A = a
    var B = b
        if (A < B){return -1;}else if (A > B){return 1;}else{return 0;}
};//the function ordered alphabetical A-Z

function orderAlphabeticZA (a, b) {
    var A = a
    var B = b
        if (A > B){return -1;}else if (A < B){return 1;}else{return 0;}
};//the function ordered alphabetical Z-A

jQuery(document).ready(function($) {
  $.ajax({
  url : "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=16d8b076f9808ebbd4b7908e74fe1154&format=json",
  dataType : "jsonp",
  success : function(parsed_json,variables) {
    for (var i = 0; i <50; i++) {
        playCounts.push(parsed_json["tracks"]["track"][i]["playcount"])
        playorder.push(parsed_json["tracks"]["track"][i]["playcount"])
        varDuration.push(parsed_json["tracks"]["track"][i]["duration"])
        durationOrder.push(parsed_json["tracks"]["track"][i]["duration"])
        varName.push(parsed_json["tracks"]["track"][i]["name"])
        namOrder.push(parsed_json["tracks"]["track"][i]["name"])
        varArtist.push(parsed_json['tracks']['track'][i]['artist']['name'])

        //the function convert the seconds to minuts
        var minutes = Math.floor(varDuration[i] / 60 );
        var seconds = varDuration[i] % 60;
        //Anteponiendo un 0 a los minutos si son menos de 10 
        minutes = minutes < 10 ? '0' + minutes : minutes;
        //Anteponiendo un 0 a los segundos si son menos de 10 
        seconds = seconds < 10 ? '0' + seconds : seconds;
        var result = minutes + ":" + seconds;  // 161:30
        durationMins.push(result)
        durationOrder.push(result)
        console.log(durationMins)
        console.log(result)

         try {varImage.push(parsed_json["tracks"]["track"][i]["image"][2]["#text"])}
         catch(err){varImage.push("images/undefined.jpg")}
      $('.songs').append(
    "<div class='col-md-8 col-md-offset-1 ord'>"+
        "<hr/>"+
        "<div class='col-md-2'>"+
            "<p class='noSong'>"+(i+1)+"</p>"+
        "</div>"+
        "<div class='col-md-2'>"+
            "<div class='images'>"+"<img src=\""+varImage[i] +"\" class='imgbig'width= 100px>"+"</div>"+
        "</div>"+
        "<div class='col-md-8'>"+
            "<div class='infoSong'>"+
                "<p class='name'>"+"Name  : "+varName[i]+"</classp>"+
                "<p class='artist'>"+"Artist name  : "+varArtist[i]+"</p>"+
                "<p class='duration'>"+"Duration  : "+durationMins[i]+"  Mins."+"</p>"+
                "<p class='playCounts'>"+"Play counts  : "+playorder[i]+"</p>"+
            "</div>"+
        "</div>"+
    "</div>"
      );
    }
            console.log(playCounts[i]);
            console.log(varImage[i]);
    }
  });
});

 $("#counts").click(
      function(event) {event.preventDefault();
$(".songs").slideDown();
 $(".ord").slideUp();
        $("#Top").removeClass("selecfiltr");
        $("#time").removeClass("selecfiltr");
        $("#alpha").removeClass("selecfiltr");
        $(".oculto").removeClass("selecfiltr");
        $("#counts").addClass("selecfiltr");
        $(".up").addClass("selecfiltr");
        $("#counts2").removeClass("selecfiltr");
        $("#time2").removeClass("selecfiltr");
        playCounts.sort(orderPlay);
        for (var s = 0; s <=50; s++) {
            for (var i = 0; i <50; i++) {
        if (playCounts[s] === playorder[i]) {
            console.log(playCounts)
      $('.songs').append(
    "<div class='col-md-8 col-md-offset-1 ord'>"+
        "<hr/>"+
        "<div class='col-md-2'>"+
            "<p class='noSong'>"+(i+1)+"</p>"+
        "</div>"+
        "<div class='col-md-2'>"+
            "<div class='images'>"+"<img src=\""+varImage[i] +"\" class='imgbig'width= 100px>"+"</div>"+
        "</div>"+
        "<div class='col-md-8'>"+
            "<div class='infoSong'>"+
                "<p class='name'>"+"Name  : "+varName[i]+"</classp>"+
                "<p class='artist'>"+"Artist name  : "+varArtist[i]+"</p>"+
                "<p class='duration'>"+"Duration  : "+durationMins[i]+"  Mins."+"</p>"+
                "<p class='playCounts'>"+"Play counts  : "+playorder[i]+"</p>"+
            "</div>"+
        "</div>"+
    "</div>"
      );
        };
            };
        };
    console.log("orden countplay decendente")
});//the booton of playcount

$("#counts2").click(function(event){event.preventDefault();
$(".songs").slideDown();
 $(".ord").slideUp();
    $("#Top").removeClass("selecfiltr");
    $("#time").removeClass("selecfiltr");
    $("#alpha").removeClass("selecfiltr");
    $(".oculto").removeClass("selecfiltr");
    $("#counts").removeClass("selecfiltr");
    $("#down").addClass("selecfiltr");
    $("#time2").removeClass("selecfiltr");
        $("#counts2").addClass("selecfiltr");
        playCounts.sort(orderPlayDesen);
        for (var s = 0; s <=50; s++) {
            for (var i = 0; i <50; i++) {
        if (playCounts[s] === playorder[i]) {
            console.log(playCounts)
      $('.songs').append(
    "<div class='col-md-8 col-md-offset-1 ord'>"+
        "<hr/>"+
        "<div class='col-md-2'>"+
            "<p class='noSong'>"+(i+1)+"</p>"+
        "</div>"+
        "<div class='col-md-2'>"+
            "<div class='images'>"+"<img src=\""+varImage[i] +"\" class='imgbig'width= 100px>"+"</div>"+
        "</div>"+
        "<div class='col-md-8'>"+
            "<div class='infoSong'>"+
                "<p class='name'>"+"Name  : "+varName[i]+"</classp>"+
                "<p class='artist'>"+"Artist name  : "+varArtist[i]+"</p>"+
                "<p class='duration'>"+"Duration  : "+durationMins[i]+"  Mins."+"</p>"+
                "<p class='playCounts'>"+"Play counts  : "+playorder[i]+"</p>"+
            "</div>"+
        "</div>"+
    "</div>"
      );
        };
            };
        };
    console.log("orden countplay acendente")
    });//the booton of playcounts

 $("#time").click(function(event) {event.preventDefault();
$(".songs").slideDown();
 $(".ord").slideUp();
        $("#Top").removeClass("selecfiltr");
        $("#time").addClass("selecfiltr");
        $("#time2").removeClass("selecfiltr");
        $("#counts").removeClass("selecfiltr");
        $("#alpha").removeClass("selecfiltr");
        $(".oculto").removeClass("selecfiltr");
        $("#top").removeClass("selecfiltr");
        $("#counts2").removeClass("selecfiltr");
        durationMins.sort(orderPlay);
        for (var s = 0; s <=50; s++) {
            for (var i = 0; i <50; i++) {
        if (durationMins[s] === durationOrder[i]) {
            console.log(durationMins[i])
      $('.songs').append(
    "<div class='col-md-8 col-md-offset-1 ord'>"+
        "<hr/>"+
        "<div class='col-md-2'>"+
            "<p class='noSong'>"+(i+1)+"</p>"+
        "</div>"+
        "<div class='col-md-2'>"+
            "<div class='images'>"+"<img src=\""+varImage[i] +"\" class='imgbig'width= 100px>"+"</div>"+
        "</div>"+
        "<div class='col-md-8'>"+
            "<div class='infoSong'>"+
                "<p class='name'>"+"Name  : "+varName[i]+"</classp>"+
                "<p class='artist'>"+"Artist name  : "+varArtist[i]+"</p>"+
                "<p class='duration'>"+"Duration  : "+durationOrder[i]+"  Mins."+"</p>"+
                "<p class='playCounts'>"+"Play counts  : "+playorder[i]+"</p>"+
            "</div>"+
        "</div>"+
    "</div>"
      );
        };
            };
        console.log(varDuration)
        console.log(durationOrder);
        console.log("bien")
        };
    console.log("orden duration decendente")
    });

$("#time2").click(function(event){
    event.preventDefault();
$(".songs").slideDown();
$(".ord").slideUp();
    $("#Top").removeClass("selecfiltr");
    $("#time").removeClass("selecfiltr");
    $("#time2").addClass("selecfiltr");
    $("#counts").removeClass("selecfiltr");
    $("#alpha").removeClass("selecfiltr");
    $(".oculto").removeClass("selecfiltr");
    $("#Top").removeClass("selecfiltr");
    $("#counts2").removeClass("selecfiltr");
        durationMins.sort(orderPlayDesen);
        for (var s = 0; s <=50; s++) {
            for (var i = 0; i <=50; i++) {
        if (durationMins[s] === durationOrder[i]) {
            console.log(durationMins)
      $('.songs').append(
    "<div class='col-md-8 col-md-offset-1 ord'>"+
        "<hr/>"+
        "<div class='col-md-2'>"+
            "<p class='noSong'>"+(i+1)+"</p>"+
        "</div>"+
        "<div class='col-md-2'>"+
            "<div class='images'>"+"<img src=\""+varImage[i] +"\" class='imgbig'width= 100px>"+"</div>"+
        "</div>"+
        "<div class='col-md-8'>"+
            "<div class='infoSong'>"+
                "<p class='name'>"+"Name  : "+varName[i]+"</classp>"+
                "<p class='artist'>"+"Artist name  : "+varArtist[i]+"</p>"+
                "<p class='duration'>"+"Duration  : "+durationOrder[i]+"  Mins."+"</p>"+
                "<p class='playCounts'>"+"Play counts  : "+playorder[i]+"</p>"+
            "</div>"+
        "</div>"+
    "</div>"
      );
        };
            };
            console.log("hola qu hace");
        };
    console.log("orden duration acendente")
});





 $("#alpha").click(
      function(event) {
$(".songs").slideDown();
$(".ord").slideUp();
        $(".oculto").removeClass("selecfiltr");
        $("#alpha").addClass("selecfiltr");
        $("#counts").removeClass("selecfiltr");
        $("#time").removeClass("selecfiltr");
        $("#Top").removeClass("selecfiltr");
        $("#counts2").removeClass("selecfiltr");
        $("#time2").removeClass("selecfiltr");
        varName.sort(orderAlphabetic);
        for (var s = 0; s <=50; s++) {
            for (var i = 0; i <=50; i++) {
        if (varName[s] === namOrder[i]) {
            console.log(varName)
     $('.songs').append(
    "<div class='col-md-8 col-md-offset-1 ord'>"+
        "<hr/>"+
        "<div class='col-md-2'>"+
            "<p class='noSong'>"+(i+1)+"</p>"+
        "</div>"+
        "<div class='col-md-2'>"+
            "<div class='images'>"+"<img src=\""+varImage[i]+"\" class='imgbig' width= 100px>"+"</div>"+
        "</div>"+
        "<div class='col-md-8'>"+
            "<div class='infoSong'>"+
                "<p class='name'>"+"Name  : "+namOrder[i]+"</classp>"+
                "<p class='artist'>"+"Artist name  : "+varArtist[i]+"</p>"+
                "<p class='duration'>"+"Duration  : "+durationMins[i]+"  Mins."+"</p>"+
                "<p class='playCounts'>"+"Play counts  : "+playorder[i]+"</p>"+
            "</div>"+
        "</div>"+
    "</div>"
      );
        };
            };
            console.log("si ordena alfabeticamente a-z");
        };
    console.log("orden a-z")
});

$("#zeta").click(function(event){
    event.preventDefault();
$(".songs").slideDown();
$(".ord").slideUp();
    $(".oculto").addClass("selecfiltr");
    $("#alpha").removeClass("selecfiltr");
    $("#counts").removeClass("selecfiltr");
    $("#time").removeClass("selecfiltr");
    $("#Top").removeClass("selecfiltr");
    $("#counts2").removeClass("selecfiltr");
    $("#time2").removeClass("selecfiltr");
        varName.sort(orderAlphabeticZA);
        for (var s = 0; s <=50; s++) {
            for (var i = 0; i <=50; i++) {
        if (varName[s] === namOrder[i]) {
            console.log(varName)
     $('.songs').append(
    "<div class='col-md-8 col-md-offset-1 ord'>"+
        "<hr/>"+
        "<div class='col-md-2'>"+
            "<p class='noSong'>"+(i+1)+"</p>"+
        "</div>"+
        "<div class='col-md-2'>"+
            "<div class='images'>"+"<img src=\""+varImage[i]+"\" class='imgbig'width= 100px>"+"</div>"+
        "</div>"+
        "<div class='col-md-8'>"+
            "<div class='infoSong'>"+
                "<p class='name'>"+"Name  : "+namOrder[i]+"</classp>"+
                "<p class='artist'>"+"Artist name  : "+varArtist[i]+"</p>"+
                "<p class='duration'>"+"Duration  : "+durationMins[i]+"  Mins."+"</p>"+
                "<p class='playCounts'>"+"Play counts  : "+playorder[i]+"</p>"+
            "</div>"+
        "</div>"+
    "</div>"
      );
        };
            };
            console.log("si ordena alfabeticamente z-a");
        };
    console.log("orden z-a")
});

 $("#Top").click(
       function(event) {
     event.preventDefault();
 $(".songs").slideDown();
 $(".ord").slideUp();
         $("#Top").addClass("selecfiltr");
         $("#time").removeClass("selecfiltr");
         $("#alpha").removeClass("selecfiltr");
         $(".oculto").removeClass("selecfiltr");
         $("#counts").removeClass("selecfiltr");
         $("#time2").removeClass("selecfiltr");
         $("#counts2").removeClass("selecfiltr");
     for (var i = 0; i <50; i++) {
       $('.songs').append(
     "<div class='col-md-8 col-md-offset-1 ord'>"+
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
                 "<p class='duration'>"+"Duration  : "+durationMins[i]+"  Mins."+"</p>"+
                 "<p class='playCounts'>"+"Play counts  : "+playorder[i]+"</p>"+
             "</div>"+
         "</div>"+
     "</div>"
       );
     }
     });
