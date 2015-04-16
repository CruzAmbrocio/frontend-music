// Javascript Code.
var playCounts = [];
var playorder =[];
var varName = [];
var namOrder =[];
var varDuration = [];
var durationOrder=[];
var varArtist = [];
var varImage = [];
var varurlImage=[];

 $(".bottons").hover(
      function() {
        $(this).addClass("hover_button");
    },
      function() {
        $(this).removeClass("hover_button");
    });

function orderPlay(first, second){
    var first = first
    var second = second
        if (first<second) {return 1}else{return 0};
};

function orderPlayDesen (first, second) {
    var first = first
    var second = second
        if (first<second) {return 0}else{return 1};
};

function orderAlphabetic (a, b) {
    var A = a
    var B = b
        if (A < B){return -1;}else if (A > B){return 1;}else{return 0;}
};
function orderAlphabeticZA (a, b) {
    var A = a
    var B = b
        if (A > B){return -1;}else if (A < B){return 1;}else{return 0;}
};

jQuery(document).ready(function($) {
  $.ajax({
  url : "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=16d8b076f9808ebbd4b7908e74fe1154&format=json",
  dataType : "jsonp",
  success : function(parsed_json,variables) {
    for (var i = 0; i <= 50; i++) {
        playCounts.push(parsed_json["tracks"]["track"][i]["playcount"])
        playorder.push(parsed_json["tracks"]["track"][i]["playcount"])
        varDuration.push(parsed_json["tracks"]["track"][i]["duration"])
        durationOrder.push(parsed_json["tracks"]["track"][i]["duration"])
        varName.push(parsed_json["tracks"]["track"][i]["name"])
        namOrder.push(parsed_json["tracks"]["track"][i]["name"])
        varArtist.push(parsed_json['tracks']['track'][i]['artist']['name'])
        varurlImage.push(parsed_json['tracks']['track'][i]['image'])
        console.log('Esta es la imagen'+varurlImage)
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
                "<p class='duration'>"+"Duration  : "+varDuration[i]/60+"  Seg."+"</p>"+
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
        for (var s = 0; s <50; s++) {
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
            "<div class='images'>"+"<img src=\""+varImage[i]+"\" class='imgbig'width= 100px>"+"</div>"+
        "</div>"+
        "<div class='col-md-8'>"+
            "<div class='infoSong'>"+
                "<p class='name'>"+"Name  : "+varName[i]+"</classp>"+
                "<p class='artist'>"+"Artist name  : "+varArtist[i]+"</p>"+
                "<p class='duration'>"+"Duration  : "+varDuration[i]/60+"  Seg."+"</p>"+
                "<p class='playCounts'>"+"Play counts  : "+playorder[i]+"</p>"+
            "</div>"+
        "</div>"+
    "</div>"
      );
        };
            };
        };
    console.log("orden countplay decendente")
});

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
        for (var s = 0; s <50; s++) {
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
            "<div class='images'>"+"<img src=\""+varImage[i]+"\" class='imgbig'width= 100px>"+"</div>"+
        "</div>"+
        "<div class='col-md-8'>"+
            "<div class='infoSong'>"+
                "<p class='name'>"+"Name  : "+varName[i]+"</classp>"+
                "<p class='artist'>"+"Artist name  : "+varArtist[i]+"</p>"+
                "<p class='duration'>"+"Duration  : "+varDuration[i]/60+"  Seg."+"</p>"+
                "<p class='playCounts'>"+"Play counts  : "+playorder[i]+"</p>"+
            "</div>"+
        "</div>"+
    "</div>"
      );
        };
            };
        };
    console.log("orden countplay acendente")
    });

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
        varDuration.sort(orderPlay);
        for (var s = 0; s <50; s++) {
            for (var i = 0; i <50; i++) {
        if (varDuration[s] === durationOrder[i]) {
            console.log(varDuration)
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
                "<p class='name'>"+"Name  : "+varName[i]+"</classp>"+
                "<p class='artist'>"+"Artist name  : "+varArtist[i]+"</p>"+
                "<p class='duration'>"+"Duration  : "+durationOrder[i]/60+"  Seg."+"</p>"+
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
        varDuration.sort(orderPlayDesen);
        for (var s = 0; s <50; s++) {
            for (var i = 0; i <50; i++) {
        if (varDuration[s] === durationOrder[i]) {
            console.log(varDuration)
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
                "<p class='name'>"+"Name  : "+varName[i]+"</classp>"+
                "<p class='artist'>"+"Artist name  : "+varArtist[i]+"</p>"+
                "<p class='duration'>"+"Duration  : "+durationOrder[i]/60+"  Seg."+"</p>"+
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
        for (var s = 0; s <50; s++) {
            for (var i = 0; i <50; i++) {
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
                "<p class='duration'>"+"Duration  : "+durationOrder[i]/60+"  Seg."+"</p>"+
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
        for (var s = 0; s <50; s++) {
            for (var i = 0; i <50; i++) {
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
                "<p class='duration'>"+"Duration  : "+durationOrder[i]/60+"  Seg."+"</p>"+
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
            "<div class='images'>"+"<img src=\""+varImage[i]+"\" class='imgbig'width= 100px>"+"</div>"+
        "</div>"+
        "<div class='col-md-8'>"+
            "<div class='infoSong'>"+
                "<p class='name'>"+"Name  : "+varName[i]+"</classp>"+
                "<p class='artist'>"+"Artist name  : "+varArtist[i]+"</p>"+
                "<p class='duration'>"+"Duration  : "+varDuration[i]/60+"  Seg."+"</p>"+
                "<p class='playCounts'>"+"Play counts  : "+playorder[i]+"</p>"+
            "</div>"+
        "</div>"+
    "</div>"
      );
    }
    });




