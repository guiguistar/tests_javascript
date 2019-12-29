svg_element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg_element.setAttribute('width', 600);
svg_element.setAttribute('height', 600);

var line_width = 5;
var rect_width = 4;
var rect_height = 1;

var row_width = 20;
var row_height = 5;
var col_width = 8;
var col_height = 30;

var n = 5;
var p = 10;

function add_grid_element(parent, x_off_first, y_off_first, x_off, y_off, w, h, i, j) {
	let element = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
	element.setAttribute('x', x_off_first + (x_off + w) * j);
	element.setAttribute('y', y_off_first + (y_off + h) * i);
	element.setAttribute('width', w);
	element.setAttribute('height', h);
	
	parent.appendChild(element);		
}

for(let i = 0; i < n; i++) {
	for(let j = 0; j < p; j++) {
		add_grid_element(svg_element,
						 col_width, 0, col_width, col_height, row_width, row_height, i, j);
		add_grid_element(svg_element,
						 0, row_height, row_width, row_height, col_width, col_height, i, j);
	}
}

// Last row
for(let j = 0; j < p; j++) {
	add_grid_element(svg_element,
					 col_width, 0, col_width, col_height, row_width, row_height, n, j);
}
// Last col
for(let i = 0; i < n; i++) {
	add_grid_element(svg_element,
					 0, row_height, row_width, row_height, col_width, col_height, i, p);
}

document.body.appendChild(svg_element);
