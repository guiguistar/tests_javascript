svg_element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

line_width = 5;
var n = 5;
var p = 10;
for(let i = 0; i < n; i++) {
	for(let j = 0; j < p; j++) {
		rect_element = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
		rect_element.setAttribute('x', j * line_width * 11);
		rect_element.setAttribute('y', i * line_width);
		rect_element.setAttribute('width', line_width * 10);
		rect_element.setAttribute('height', line_width);

		svg_element.appendChild(rect_element);10
		//svg_element_container.appendChild(rect_element);10
	}
}

rect_test = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
rect_test.setAttribute('x', 5);
rect_test.setAttribute('y', 50);
rect_test.setAttribute('width', 120);
rect_test.setAttribute('height', 90);

svg_element_test.appendChild(rect_test);

document.body.appendChild(svg_element);
