$.getJSON( "asset/json/record.json", function( data ) {
	for (var i = 0; i < 5; i++) {
		var id = parseInt(i)+2;
		 $('#firstportion').append('<article class="col-md-12 main_post"><h2><a href="postdetail.html?newsid='+id+'">'+data.firstportion[i].news_title+'</a></h2></article>');
	}
 });
$.getJSON( "asset/json/record.json", function( rec ) {
		 $("#about_us").html(rec.about_us[0].about);
 });
$.getJSON( "asset/json/record.json", function( rec ) {
		 $("#backsory").html(rec.backstory[0].story);
 });

function submit(){
	alert("Thank you for contact us");
	window.location.href="contact_us.html";
	
}





$.ajax({
    type: "POST",
    cache: false,
    data: {id:'test'},
    url:"asset/json/record.json",
    dataType: "json",
    success:function(data){
      for(var i = 0 ; i<=11 ; i++ ){
      	id = parseInt(i)+1;

      	$('#allnews').append('<div class="col-md-3 col-sm-3 portion all"><div class="main_post second-portion main_post feature_post"><img src="asset/img/'+data.allnews[i].news_image+'" class="img-responsive" /><h2><a href="postdetail.html?newsid='+id+'" class="title_of_news">'+data.allnews[i].news_title+'</a></h2></div></div>');
    }
    }
  });

function searching() {
  var str = $("#type_search").val();
  if(str == '' || str == null ){
    window.location.href="post.html";
  }
  $.ajax({
    type: "POST",
    cache: false,
    data: {id:'test'},
    url:"asset/json/record.json",
    dataType: "json",
    success:function(data){
      $("#allnews").html('');
      for(var i = 0 ; i<=11 ; i++ ){
        id = parseInt(i)+1;
        if(data.allnews[i].news_title.indexOf(str) > -1){

        $('#allnews').append('<div class="col-md-3 col-sm-3 portion all"><div class="main_post second-portion main_post feature_post"><img src="asset/img/'+data.allnews[i].news_image+'" class="img-responsive" /><h2><a href="postdetail.html?newsid='+id+'" class="title_of_news">'+data.allnews[i].news_title+'</a></h2></div></div>');
      }
    }
    }
  });

}
var newsid = location.search.split('newsid=')[1];
newsid	   = parseInt(newsid)-1;
$.ajax({
    type: "POST",
    cache: false,
    data: {id:'test'},
    url:"asset/json/record.json",
    dataType: "json",
    success:function(data){

      	$('#newsdetail').append('<h2>'+data.allnews[newsid].news_title+'</h2><img src="asset/img/'+data.allnews[newsid].news_image+'" class="img-responsive" style="width:100%" /><br><p>'+data.allnews[newsid].news_detail+'</p>'); 
    }
  });
  
