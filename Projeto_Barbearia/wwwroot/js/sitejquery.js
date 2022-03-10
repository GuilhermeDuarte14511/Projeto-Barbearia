$(document).ready(function () {

	//Mostrar Senha
	$(function () {
		$('.js-block-view-password').each(function () {
			var $btnPassword = $(".js-btn-password", this);
			var $iconPassword = $(".js-icon-password", this);
			var $inputPassword = $(".js-input-password", this);
			$btnPassword.click(function () {
				if ($inputPassword.attr('type') === 'password') {
					$iconPassword.removeClass("fa-eye-slash").addClass("fa-eye");
					$inputPassword.attr('type', 'text');
				} else {
					$iconPassword.removeClass("fa-eye").addClass("fa-eye-slash");
					$inputPassword.attr('type', 'password');
				}
			});

		});
	});
});