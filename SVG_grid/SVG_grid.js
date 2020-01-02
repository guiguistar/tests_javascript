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

maze_test2 = [[0b0010, 0b1010, 0b1110, 0b1000, 0b0100],
			  [0b0100, 0b0010, 0b1111, 0b1010, 0b1101],
			  [0b0011, 0b1010, 0b1001, 0b0010, 0b1001]]

maze_test3 = [[0b0010, 0b1010, 0b1100],
			  [0b0100, 0b0010, 0b1101],
			  [0b0011, 0b1010, 0b1001]]

class Mazer {
	constructor(maze) {
		// class field not currently supported
		this.up_bit = 0b0001;
		this.right_bit = 0b0010;
		this.down_bit = 0b0100;
		this.left_bit = 0b1000;

		this.row_width = 18;
		this.row_height = 4;
		this.col_width = 4;
		this.col_height = 15;

		this.maze = maze;
		
		this.n = maze.length;
		this.p = maze[0].length;

		this.viewBox_width = this.p * (this.col_width + this.row_width) + this.col_width;
		this.viewBox_height = this.n * (this.row_height + this.col_height) + this.row_height;

		this.r = 3;
		this.path_width = 2;
		
		console.log(this.viewBox_width, this.viewBox_height);
	}
	createSVG() {
		let svg_element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		svg_element.setAttribute('width', this.viewBox_width);
		svg_element.setAttribute('height', this.viewBox_height);
		//svg_element.setAttribute('viewBox', '0 0 ' + this.viewBox_width + ' ' + this.viewBox_height); 

		let grid = this.create_grid(svg_element);
		this.make_maze(grid);
		this.create_path(svg_element);

		return svg_element;
	}
	add_grid_element(parent, x_off_first, y_off_first, x_off, y_off, w, h, i, j, classList=[]) {
		let element = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
		
		element.setAttribute('x', x_off_first + (x_off + w) * j);
		element.setAttribute('y', y_off_first + (y_off + h) * i);
		element.setAttribute('width', w);
		element.setAttribute('height', h);

		for(let c of classList) {
			element.classList.add(c);
		}
		element.classList.add('c' + i + '-' + j);
		
		parent.appendChild(element);

		return element;
	}
	create_grid(svg_el) {
		let grid = new Array();
		for(let i = 0; i <= this.n; i++) {
			grid.push(new Array());
			for(let j = 0; j <= this.p; j++) {
				grid[i].push(new Array());
				let classList = [];
				// row
				classList = ['row'];
				if(j == this.p) {
					classList.push('hide');
				}
				grid[i][j].push(this.add_grid_element(svg_el,
													  this.col_width, 0,
													  this.col_width, this.col_height,
													  this.row_width, this.row_height,
													  i, j,
													  classList));
				// col
				classList = ['col'];
				if(i == this.n) {
					classList.push('hide');
				}
				grid[i][j].push(this.add_grid_element(svg_el,
													  0, this.row_height,
													  this.row_width, this.row_height,
													  this.col_width, this.col_height,
													  i, j,
													  classList));
				// corner
				classList = ['corner'];
				grid[i][j].push(this.add_grid_element(svg_el,
													  0, 0,
													  this.row_width, this.col_height,
													  this.col_width, this.row_height,
													  i, j,
													  classList));
			}
		}

		return grid;
	}
	
	// remove proper walls
	make_maze(grid) {
		for(let i = 0; i < this.n; i++) {
			for(let j = 0; j < this.p; j++) {
				let cell = this.maze[i][j];
				let [row, col, corner] = grid[i][j];

				if(cell & this.up_bit) {
					row.classList.add('hide');
				}
				if(cell & this.left_bit) {
					col.classList.add('hide');
				}
			}
		}
	}

	// create the path
	create_path(svg_el) {
		for(let i = 0; i < this.n; i++) {
			for(let j = 0; j < this.p; j++) {
				let cell = this.maze[i][j];

				let center = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
				let cx = j * (this.col_width + this.row_width) + this.col_width + this.row_width / 2;
				let cy = i * (this.row_height + this.col_height) + this.row_height + this.col_height / 2;
				
				if(cell & this.up_bit) {
					this.add_grid_element(svg_el,
										  cx - this.path_width / 2 , cy + this.r - (this.row_height + this.col_height),
										  0, 0, this.path_width, this.col_height, 0, 0,
										  ['path']);				
				}
				if(cell & this.right_bit) {
					this.add_grid_element(svg_el,
										  cx + this.r, cy - this.path_width / 2,
										  0, 0, this.row_width, this.path_width, 0, 0,
										  ['path']);				
				}

				center.setAttribute('cx', cx);
				center.setAttribute('cy', cy);
				center.setAttribute('r', this.r);
				center.classList.add('center');
				
				svg_el.appendChild(center);
			}
		}
	}
}


function request_new_maze (rows=10, cols=10) {
	return new Promise(function (resolve, reject) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'http://www.lespursetdurs.fr/maze/?rows=' +
				 rows + '&cols=' + cols +'&json');
		xhr.onload = function () {
			if (this.status >= 200 && this.status < 300) {
				resolve(xhr.response);
			} else {
				reject({
					status: this.status,
					statusText: xhr.statusText
				});
			}
		};
		xhr.onerror = function () {
			reject({
				status: this.status,
				statusText: xhr.statusText
			});
		};
		xhr.send();
	});
}

request_new_maze().then(function(response) {
	maze = JSON.parse(response);
	m = new Mazer(maze);
	document.body.appendChild(m.createSVG());
},null);

