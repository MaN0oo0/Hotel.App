$( document ).ready(function() {

	// Message
	$("#but1").click(function(){
		var message = $("#message").val();
		if(message == ""){
			message  = "Your message";
		}
		swal(message);
	});

	// With message and title
	$("#but2").click(function(){
		var message = $("#message").val();
		var title = $("#title").val();
		if(message == ""){
			message  = "Your message";
		}
		if(title == ""){
			title = "Your message";
		}
		swal(title,message);
	});

	// Show image
	$("#but3").click(function(){
		var message = $("#message").val();
		var title = $("#title").val();
		if(message == ""){
			message  = "Your message";
		}
		if(title == ""){
			title = "Your message";
		}
		swal({
			title: title,
			text: message,
			imageUrl: '../assets/images/brand/logo.png'
		});
	});

	// Timer
	$("#but4").click(function(){
		var message = $("#message").val();
		var title = $("#title").val();
		if(message == ""){
			message  = "Your message";
		}
		if(title == ""){
			title = "Your message";
		}
		message += "(close after 2 seconds)";
		swal({
			title: title,
			text: message,
			timer: 2000,
			showConfirmButton: false
		});
	});
	
	//
	$("#click").click(function(){
		var type = $("#type").val();
		swal({
			title: "Title",
			text: "Your message",
			type: type
		});
	});
	
	// Prompt
	$("#prompt").click(function(){

		swal({
			title: "Add",
			text: "Enter your message",
			type: "input",
			showCancelButton: true,
			closeOnConfirm: false,
			inputPlaceholder: "Your message"
		},function(inputValue){


			if (inputValue != "") {
				swal("Input","You have entered : " + inputValue);

			}
		});
	});

	// Confirm
	$("#confirm").click(function(){
		swal({
			title: "Alert",
			text: "Are you really want to exit",
			type: "warning",
			showCancelButton: true,
			confirmButtonText: 'Exit',
			cancelButtonText: 'Stay on the page'
		});
	});

	
	$("#click").click(function(){
		swal('Congratulations!', 'Your message has been succesfully sent', 'success');
	});
	$("#click1").click(function(){
		swal({
			title: "Alert",
			text: "Waring alert",
			type: "warning",
			showCancelButton: true,
			confirmButtonText: 'Exit',
			cancelButtonText: 'Stay on the page'
		});
	});
	$("#click2").click(function(){
		swal({
			title: "Alert",
			text: "Danger alert",
			type: "error",
			showCancelButton: true,
			confirmButtonText: 'Exit',
			cancelButtonText: 'Stay on the page'
		});
	});
	$( "#demo-1" ).click(function() {
  $.sweetModal('This is a basic alert dialog.');
});
$( "#demo-2" ).click(function() {
  $.sweetModal.confirm('Are you sure?', function() {
  $.sweetModal('Thanks for confirming!');
});
});
$( "#demo-3" ).click(function() {
$.sweetModal.prompt('Whats your name?', 'Can I?', 'Nope', function(val) {
	$.sweetModal('You typed: ' + val);
});
});
$( "#demo-4" ).click(function() {
$.sweetModal({
	content: 'This is an error.',
	title: 'Oh noes…',
	icon: $.sweetModal.ICON_ERROR,
theme: $.sweetModal.THEME_DARK,
	buttons: {
		'That\'s fine': {
			classes: 'redB'
		}
	}
});
});
$( "#demo-5" ).click(function() {
$.sweetModal({
	title: {
		tab1: {
			label: 'Tab 1',
			icon: '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#000000" d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" /></svg>'
		},

		tab2: {
			label: 'Tab 2',
			icon: '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#000000" d="M12,17L7,12H10V8H14V12H17L12,17M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L5,8.09V15.91L12,19.85L19,15.91V8.09L12,4.15Z" /></svg>'
		}
	},

	content: {
		tab1: 'Tab 1',
		tab2: 'Tab 2'
	}
});
});
$( "#demo-6" ).click(function() {
  $.sweetModal({
	title: 'Black Theme',
	content: 'You can place <b>anything</b> <i>you</i> want in here.',
	theme: $.sweetModal.THEME_DARK
});
});
$( "#demo-7" ).click(function() {
  $.sweetModal({
	title: 'Youtube Video Modal',
	content: 'https://www.youtube.com/watch?v=h924kiLlvA0',
	theme: $.sweetModal.THEME_DARK
});
});
	
});