var maze_test = [[6,14,10,10,8,6,10,10,10,14,10,10,12,6,10,8,6,14,12,6,10,10,8,6,14,12,6,10,10,12],
				 [5,5,6,10,10,9,6,10,12,3,10,12,3,9,6,12,5,5,5,5,6,10,10,9,5,5,5,6,10,9],
				 [5,5,5,6,12,6,9,2,11,10,10,13,6,12,5,3,9,5,3,9,5,6,12,4,5,3,9,3,12,4],
				 [5,1,3,9,5,5,6,12,2,10,10,9,5,5,3,10,12,3,10,12,7,9,3,9,3,12,6,12,5,5],
				 [3,12,6,10,9,3,9,5,6,10,10,12,5,3,10,10,9,6,12,3,9,6,10,10,10,9,5,3,9,5],
				 [6,9,5,4,6,10,12,3,13,2,12,3,9,6,10,10,12,5,3,14,10,9,2,10,14,10,9,2,14,13],
				 [5,6,11,9,3,12,3,12,3,10,13,6,12,3,8,6,13,5,2,9,6,10,10,12,3,10,10,10,9,5],
				 [5,7,8,6,12,5,4,3,12,6,9,5,3,10,10,9,1,5,6,10,9,6,8,5,6,10,10,10,10,9],
				 [5,5,6,9,5,5,5,6,9,3,10,13,6,10,10,12,6,9,5,6,14,9,6,9,5,6,10,10,12,4],
				 [7,9,5,6,9,5,5,5,2,14,12,1,5,2,10,11,9,6,9,5,1,6,9,4,5,7,12,6,9,5],
				 [3,12,5,3,10,9,5,3,10,9,5,6,13,6,12,6,10,9,2,11,12,1,4,7,9,5,5,3,10,9],
				 [6,9,3,10,10,12,7,10,10,12,5,5,1,5,5,5,6,10,10,12,3,10,13,3,12,1,7,10,10,12],
				 [5,6,10,10,10,9,5,2,10,13,5,3,12,5,3,9,5,6,8,3,10,10,13,4,3,12,3,12,4,5],
				 [1,5,6,12,6,10,11,14,12,1,7,10,9,5,2,14,9,7,14,10,8,6,11,11,8,5,4,7,9,5],
				 [6,9,5,5,1,6,12,5,3,10,13,6,10,9,6,9,6,9,3,10,10,9,6,10,10,9,7,9,6,13],
				 [3,12,5,5,6,9,5,5,6,12,1,3,12,6,9,6,9,4,6,10,12,6,9,6,10,12,5,4,5,5],
				 [4,3,9,3,9,6,9,1,5,3,14,8,5,5,2,11,10,13,5,4,5,5,6,11,8,3,11,13,5,1],
				 [5,6,10,10,12,3,10,10,9,4,3,10,9,5,6,10,12,1,3,13,3,9,1,6,12,6,12,1,3,12],
				 [5,5,6,12,3,14,10,12,6,11,10,12,6,9,3,12,3,14,8,5,2,10,14,9,3,9,3,10,10,13],
				 [5,5,1,7,8,5,4,3,9,6,10,11,9,6,12,3,12,3,10,9,6,10,9,6,10,12,2,12,6,9],
				 [5,5,6,13,6,9,3,14,10,9,6,12,6,9,7,12,3,10,12,2,11,12,6,9,6,11,10,9,3,12],
				 [5,3,9,5,3,10,12,3,10,10,9,1,3,12,5,7,10,8,3,10,10,9,5,2,15,8,6,12,6,9],
				 [5,6,10,9,6,8,5,6,10,12,6,10,10,9,5,1,6,10,14,10,8,6,11,12,5,6,9,3,9,4],
				 [5,5,6,12,3,12,5,3,12,3,9,6,10,12,3,12,3,12,3,10,12,5,4,5,1,3,10,12,6,13],
				 [3,11,9,3,10,9,3,10,11,10,10,9,2,11,8,3,10,11,10,8,3,11,9,3,10,10,10,11,9,1]];

svg_element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg_element.setAttribute('width', 600);
svg_element.setAttribute('height', 600);

var line_width = 5;
var rect_width = 4;
var rect_height = 1;

var row_width = 12;
var row_height = 3;
var col_width = 4;
var col_height = 10;

var n = maze_test.length;
var p = maze_test[0].length;

function add_grid_element(parent, x_off_first, y_off_first, x_off, y_off, w, h, i, j, classList=[]) {
	let element = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
	element.setAttribute('x', x_off_first + (x_off + w) * j);
	element.setAttribute('y', y_off_first + (y_off + h) * i);
	element.setAttribute('width', w);
	element.setAttribute('height', h);

	for(let c of classList) {
		element.classList.add(c);
	}
	
	parent.appendChild(element);		
}

for(let i = 0; i < n; i++) {
	for(let j = 0; j < p; j++) {
		// row
		add_grid_element(svg_element,
						 col_width, 0, col_width, col_height, row_width, row_height, i, j,
						['row']);
		// col
		add_grid_element(svg_element,
						 0, row_height, row_width, row_height, col_width, col_height, i, j,
						 ['col']);
		// corner
		add_grid_element(svg_element,
						 0, 0, row_width, col_height, col_width, row_height, i, j,
						 ['corner']);		
	}
}

// Last row
for(let j = 0; j < p; j++) {
	// row
	add_grid_element(svg_element,
					 col_width, 0, col_width, col_height, row_width, row_height, n, j,
					['row']);
	// corner
	add_grid_element(svg_element,
					 0, 0, row_width, col_height, col_width, row_height, n, j,
					 ['corner']);		
}
// Last col
for(let i = 0; i < n; i++) {
	// col
	add_grid_element(svg_element,
					 0, row_height, row_width, row_height, col_width, col_height, i, p,
					['col']);
	// corner
	add_grid_element(svg_element,
					 0, 0, row_width, col_height, col_width, row_height, i, p,
					 ['corner']);
}
// last corner
add_grid_element(svg_element,
				 0, 0, row_width, col_height, col_width, row_height, n, p,
				 ['corner']);

document.body.appendChild(svg_element);
