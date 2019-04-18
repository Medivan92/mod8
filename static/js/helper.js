url = "http://sf-pyw.mosyag.in/m04/api/forecasts"
$("#pool").click(function() {
	$.getJSON(url,function(data){
		advice = data["prophecies"]
		set_content_in_divs(advice);
	})
});

function set_content_in_divs(paragraphs) {
  $.each(paragraphs, function(i, d) {
    p = $("#p-" + i)
    p.html("<p>" + d + "</p>")
  })
}

Data = new Date();
Year = Data.getFullYear();
Month = Data.getMonth();
Day = Data.getDate();

switch (Month)
{
  case 0: fMonth="января"; break;
  case 1: fMonth="февраля"; break;
  case 2: fMonth="марта"; break;
  case 3: fMonth="апреля"; break;
  case 4: fMonth="мае"; break;
  case 5: fMonth="июня"; break;
  case 6: fMonth="июля"; break;
  case 7: fMonth="августа"; break;
  case 8: fMonth="сентября"; break;
  case 9: fMonth="октября"; break;
  case 10: fMonth="ноября"; break;
  case 11: fMonth="декабря"; break;
}

$("#pool").html('Что  '+Day+' '+fMonth+' '+Year+' готовит?')