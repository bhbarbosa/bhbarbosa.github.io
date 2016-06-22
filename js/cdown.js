$(function(){
	
	var note = $('#note'),
		ts = new Date(2016, 8, 6, 19, 0), // 06/09/2016 - 19:00
		ferias = true;
	
	if((new Date()) > ts){
		ts = new Date(2016, 9, 24, 9, 0), // 24/10/2016 - 09:00
		ferias = false;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " dia" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hora" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minuto" + ( minutes==1 ? '':'s' ) + " e ";
			message += seconds + " segundo" + ( seconds==1 ? '':'s' ) + " <br />";
			
			if(ferias){
				message += "até as minhas férias!";
			}
			else {
				message += "até o meu retorno!";
			}
			
			note.html(message);
		}
	});
	
});
