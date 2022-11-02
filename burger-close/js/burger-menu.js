$(document).ready(function () {
	$('.header__burger, .close').click(function (event) {
		$('.header__burger, .header__menu, .close').toggleClass('active');
		$('body').toggleClass('lock');
	});
});