$(document).ready(function () {
	if (window.location.href.indexOf("index") > -1) {
		$(".bxslider").bxSlider({
			auto: true,
			autoControls: true,
			stopAutoOnClick: true,
			pager: true,
			slideWidth: 1200,
		});
	}
	if (window.location.href.indexOf("index") > -1) {
		var posts = [
			{
				title: "Title Proof 1",
				date:
					"Realeased on: " +
					moment().format("MMMM") +
					" " +
					moment().day() +
					" in " +
					moment().format("YYYY"),
				content:
					"loremos somdkasm dkmas ksmdkmask dllasmdask dmkma slkdm asm lkdm kas ldmklas",
			},
			{
				title: "Title Proof 2",
				date:
					"Realeased on: " +
					moment().format("MMMM") +
					" " +
					moment().day() +
					" in " +
					moment().format("YYYY"),
				content:
					"loremos somdkasm dkmas ksmdkmask dllasmdask dmkma slkdm asm lkdm kas ldmklas",
			},
			{
				title: "Title Proof 3",
				date:
					"Realeased on: " +
					moment().format("MMMM") +
					" " +
					moment().day() +
					" in " +
					moment().format("YYYY"),
				content:
					"loremos somdkasm dkmas ksmdkmask dllasmdask dmkma slkdm asm lkdm kas ldmklas",
			},
			{
				title: "Title Proof 4",
				date:
					"Realeased on: " +
					moment().format("MMMM") +
					" " +
					moment().day() +
					" in " +
					moment().format("YYYY"),
				content:
					"loremos somdkasm dkmas ksmdkmask dllasmdask dmkma slkdm asm lkdm kas ldmklas",
			},
			{
				title: "Title Proof 5",
				date:
					"Realeased on: " +
					moment().format("MMMM") +
					" " +
					moment().day() +
					" in " +
					moment().format("YYYY"),
				content:
					"loremos somdkasm dkmas ksmdkmask dllasmdask dmkma slkdm asm lkdm kas ldmklas",
			},
			{
				title: "Title Proof 6",
				date:
					"Realeased on: " +
					moment().format("MMMM") +
					" " +
					moment().day() +
					" in " +
					moment().format("YYYY"),
				content:
					"loremos somdkasm dkmas ksmdkmask dllasmdask dmkma slkdm asm lkdm kas ldmklas",
			},
		];
		var post;
		posts.forEach((item, index) => {
			post = `
		<article>
		<h2>${item.title}</h2>
		<span class="datePost">${item.date}</span>
		<p>
			${item.content}
		</p>
		<a
			class="readMore"
			href="http://"
			target="_blank"
			rel="noopener noreferrer"
			>Read more...</a
		>
	</article>
		`;
			$("#posts").append(post);
		});
	}

	var theme = $("#theme");
	$("#toGreen").click(function () {
		theme.attr("href", "css/greenTemplate.css");
	});
	$("#toBlue").click(function () {
		theme.attr("href", "css/blueTemplate.css");
	});
	$("#toRed").click(function () {
		theme.attr("href", "css/redTemplate.css");
	});

	// SCROLL WEB up
	$("#goUp").click(function () {
		$("html, body").animate(
			{
				scrollTop: 0,
			},
			500
		);

		return false;
	});

	// LOGIN FAKE:

	$("#login form").submit(function () {
		var form_name = $("#form_name").val();

		localStorage.setItem("form_name", form_name);
	});

	var form_name = localStorage.getItem("form_name");

	if (form_name != null && form_name != "undefined") {
		var about_parr = $("#about p");

		about_parr.html("<strong>" + "Bienvenido, " + form_name + "</strong>");
		about_parr.append("<a href='#' id='logout'> Log out</a>");
		$("#login").hide();

		$("#logout").click(function () {
			localStorage.clear();
			location.reload();
		});
	}

	// CUIDADO CON LOS ESPACIOOOOOOOOOS*************************** SE PUEDE GASTAR MUCHO TIEMPO BUSCANDO UN PEQUEÑO ERROR

	if (window.location.href.indexOf("about") > -1) {
		$("#accordion").accordion();
	}

	if (window.location.href.indexOf("watch") > -1) {
		setInterval(function () {
			var watch = moment().format("h:mm:ss");
			$("#watch").html(watch);
		}, 1000);
	}

	//VALIDATE FORM
	if (window.location.href.indexOf("contact") > -1) {
		$.validate({
			lang: "en",
			errorMessagePosition: "top",
			scrollToTopOnError: true,
		});
	}
});
