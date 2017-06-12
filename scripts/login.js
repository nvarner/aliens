$().ready(function () {
	var password_entry = $("#passcode");
	var form = $("#form");
	var link = $("#link");
	var load_gif = $("#load-gif");

	form.on("submit", function (event) {
		event.preventDefault();
		if (password_entry.val() == "Password1") {
			load_gif.removeClass("hidden");
			setTimeout(function () {
				load_gif.addClass("hidden");
				link.removeClass("hidden");
			}, 2000);
		}
	});
});
