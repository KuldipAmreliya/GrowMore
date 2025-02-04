function SendMail(){
		var params={
			Name:document.getElementById("name").value,
			Email:document.getElementById("email").value,
			Mobile:document.getElementById("number").value,
			Message:document.getElementById("message").value

		 }
		// Service id and template id
		emailjs.send("service_d3cnqwh","template_y7uo5hk",params).then(function(res){
			alert("Thank you"+res.status);
		})
		
	}