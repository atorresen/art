$(document).ready(function() {
	$('.minus').click(function() {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 0 ? 0 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.plus').click(function() {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
});


// to toggle arrow (and update text color) on click
var showingMore = false;
var showingExplanation = false;

function toggleArrow(id) {
	var button = document.getElementById(id);

	var collapsedQ = false;
	if (id == "more") {
		showingMore = collapsedQ = !showingMore
	} else if (id == "explain") {
		showingExplanation = collapsedQ = !showingExplanation
	};

	console.log(button.innerHTML);

	if (collapsedQ) {
		button.innerHTML = button.innerHTML.replace("▽", "△");
		button.style = "color: #ddd";
	} else {
		button.innerHTML = button.innerHTML.replace("△", "▽");
		button.style = "color: gray";
	}
}
