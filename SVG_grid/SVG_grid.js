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

for(let i = 0; i < n; i++) {
	for(let j = 0; j < p; j++) {
		let row_element = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
		row_element.setAttribute('x', col_width + (col_width + row_width) * j);
		row_element.setAttribute('y', (row_height + col_height) * i);
		row_element.setAttribute('width', row_width);
		row_element.setAttribute('height', row_height);

		svg_element.appendChild(row_element);		
		
		let col_element = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
		col_element.setAttribute('x', (row_width + col_width) * j);
		col_element.setAttribute('y', row_height + (row_height + col_height) * i);
		col_element.setAttribute('width', col_width);
		col_element.setAttribute('height', col_height);
		
		svg_element.appendChild(col_element);
	}
}

// Last row
for(let j = 0; j < p; j++) {
	let row_element = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
	let i = n;
	row_element.setAttribute('x', col_width + (col_width + row_width) * j);
	row_element.setAttribute('y', (row_height + col_height) * i);
	row_element.setAttribute('width', row_width);
	row_element.setAttribute('height', row_height);

	svg_element.appendChild(row_element);		
}
// Last col
for(let i = 0; i < n; i++) {
	let col_element = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
	let j = p;
	
	col_element.setAttribute('x', (row_width + col_width) * j);
	col_element.setAttribute('y', row_height + (row_height + col_height) * i);
	col_element.setAttribute('width', col_width);
	col_element.setAttribute('height', col_height);
	
	svg_element.appendChild(col_element);
}

document.body.appendChild(svg_element);
