// JavaScript Document
var whole = document.getElementById('whole');
var active = document.getElementById('active');
var center = document.getElementById('center');
var bnt = document.getElementById('bnt');
var spans = bnt.getElementsByTagName('span');
var level = document.getElementById('level');
var level_spans = level.getElementsByTagName('span');
var whole_width = active.clientWidth;
var index = 0;
var t;
for (var i = 0; i < spans.length; i++) {
	spans[i].onclick = function(argument) {
		for (var k = 0; k < spans.length; k++) {
			if (this == spans[k]) {
				index = k;
				ant(k);
			}
		};
	}
};

function ant(k) {
	clear_move();
	spans_color(k);
	var start_scroll = active.scrollLeft; //起始的scrollLeft
	var end_scroll = whole_width * k;
	var t_length = 20; //总步数
	var t_index = 0; //当前步数
	var card_scroll = (end_scroll - start_scroll) / t_length;
	t = setInterval(function() {
		start_scroll += card_scroll;
		active.scrollLeft = start_scroll;
		t_index++;
		if (t_index >= t_length) {
			clearInterval(t);
			set_move();
		};
	}, 20)
}

function spans_color(k) {
	for (var i = 0; i < spans.length; i++) {
		if (i == k) {
			spans[i].className = "index";
		} else {
			spans[i].className = "";
		};
	};
}
level_spans[0].onclick = function() {
	index--;
	if (index < 0) {
		index = spans.length - 1;
	};
	dert = 0;
	ant(index);
}
level_spans[1].onclick = function() {
		index++;
		if (index >= spans.length) {
			index = 0;
		};
		dert = 1;
		ant(index);
	}
	//无缝滚动//自动滚动
var time_move = 3000;
var timeout_move;
var dert = 1;

function clear_move() {
	clearInterval(t);
	clearTimeout(timeout_move);
}

function set_move() {
	if (dert == 0) { //0为向左边滚动
		timeout_move = setTimeout(move_l, time_move);
	} else { //否者1向右边滚动
		timeout_move = setTimeout(move_r, time_move);
	};
}

function move_l() { //向左边滚动
	index--;
	if (index < 0) {
		index = spans.length - 1;
	};
	ant(index);
}

function move_r() { //向右边滚动
	index++;
	if (index >= spans.length) {
		index = 0;
	};
	ant(index);
}
set_move();