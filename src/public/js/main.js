$(function () {
	const socket = io();

	//Obtaining DOM elements

	const $messageForm = $('#message-form');
	const $messageBox = $('#message');
	const $chat = $('#chat');

	//Events

	$messageForm.submit( e => {
		e.preventDefault();
		socket.emit('send message', $messageBox.val());
		$messageBox.val('');
	});

	socket.on('new message', function (data) {
		$chat.append(data + '<br/>');
	});
});