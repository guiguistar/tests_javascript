/*
  Naming conventions
    
  Methods starting by draw_ are meant to drawn numbers on the grid. For exemple,
  draw_value_matrix() will put the coefficients of the matrix on the cancas.

  Method starting with reset_ put all the coefficient of a mtrix to 0.

  Methods starting with fill_ paint the cells of the grid.

  Methods starting with clear_ will clear the canvas.

  

  TODO:
  -rename methods
  -place_goal should be set_goal + fill_goal
  -clear value_matrix
*/

const actions = {
	'UP': 'Up',
	'DOWN': 'Down',
	'LEFT': 'Left',
	'RIGHT': 'Right',
	'NO_MOVE': 'NoMove',
}

const ways = {
	'UP': 1,
	'RIGHT': 2,
	'DOWN': 4,
	'LEFT': 8,
}

var matrix_test = [[6,10,10,10,12,6,10,10,12,2,10,14,10,14,12,2,14,10,8,6,14,10,10,10,12,6,12,6,14,12],
				   [5,6,10,10,13,5,4,6,9,6,12,3,12,5,3,12,3,10,14,9,3,12,2,12,3,9,5,5,5,1],
				   [5,5,2,10,13,3,13,5,6,9,3,12,5,5,2,11,10,12,1,6,12,5,6,9,6,10,9,1,3,12],
				   [5,5,6,12,3,12,5,3,11,10,8,5,5,3,12,6,12,3,10,9,3,9,7,10,9,2,10,14,12,5],
				   [5,3,9,3,12,5,5,2,12,6,10,9,5,4,3,9,3,12,6,10,14,12,5,6,10,10,12,5,3,9],
				   [5,2,10,12,5,1,3,10,13,5,6,8,3,13,2,12,6,9,5,6,9,5,5,5,4,6,9,5,6,12],
				   [3,12,6,13,3,10,10,10,9,5,5,6,12,5,6,9,5,6,9,5,4,5,3,9,5,5,2,11,9,5],
				   [4,3,9,5,2,10,14,10,12,5,3,9,3,11,13,6,9,3,8,5,5,5,6,10,9,3,12,6,10,9],
				   [7,8,6,9,6,12,5,6,9,5,6,10,10,8,5,5,6,14,10,13,3,11,9,6,10,10,9,7,10,12],
				   [7,10,9,6,9,3,9,5,4,3,9,6,10,12,1,5,1,5,2,9,6,12,6,9,2,10,10,9,6,13],
				   [5,6,14,9,6,10,12,3,13,6,14,9,4,3,12,3,12,5,6,10,9,3,9,2,14,10,10,10,9,5],
				   [5,5,3,10,9,6,9,4,5,1,5,6,11,10,9,6,9,5,3,12,6,12,6,10,9,6,14,8,6,9],
				   [5,3,10,10,12,3,12,7,9,6,9,3,10,12,4,7,12,3,12,3,9,5,3,12,6,13,1,6,9,4],
				   [3,12,6,10,9,6,9,3,10,9,2,12,6,9,3,9,5,6,13,6,8,3,10,9,5,1,6,9,6,13],
				   [6,9,3,10,8,5,6,10,10,10,10,13,3,10,10,12,5,5,3,13,6,14,8,6,11,12,3,10,9,5],
				   [5,6,10,12,6,9,5,6,12,2,10,9,6,10,12,3,9,3,12,5,5,3,12,5,6,11,10,10,12,5],
				   [3,9,6,9,5,6,11,9,5,6,10,12,5,4,7,8,6,14,9,1,3,12,3,9,3,10,12,2,13,5],
				   [6,8,3,10,9,3,10,12,3,9,4,5,3,13,3,12,5,3,10,12,6,9,2,10,14,12,3,12,1,5],
				   [7,10,10,14,10,10,8,5,6,12,5,3,12,3,12,3,9,4,6,9,3,12,6,12,5,3,12,5,6,9],
				   [3,10,8,3,10,10,10,11,9,3,11,8,3,10,11,10,10,9,3,10,10,11,9,3,9,2,9,3,11,8],]

var str = ["6C6AAAEAAC6AC2EC686EC2EAAAAC2C",
		   "15542C3AC53C3C553A953A946AA96D",
		   "6D57C3AC13C3C3D3AAC3C6E956C6D1",
		   "55395683C6969696AC3C513C39513C",
		   "53C453AC392BC169692B96ABC43AAD",
		   "3C3956ABAAAC3ABC56AAC56A97AC69",
		   "696A956EAAC3C6C5556A953AC54554",
		   "5696A913C43C39513952AFC2B97955",
		   "79692EAA95694696AC3AC53C2A9695",
		   "3C3AC56E8792D3A943AC51696AA92D",
		   "43AC5513EBAAD6AABE853C5692EAAD",
		   "7C43956C16C2D56AC3C3A953AC3EC5",
		   "553EAD53C53C1556B83EAAD6C3C551",
		   "53A9453C3943C513AEC3AC7916953C",
		   "3C6ABB856ABC53AC69386D16C52BC5",
		   "693AC6A93AC57AC53AAC556953AC15",
		   "56C2D3AAAA9556956C6D51543AA96D",
		   "793C3A86AAC5516953955697AAC695",
		   "52C3AAA96C393A9696853969685569",
		   "3ABAAAAA93AAAAA92BABAA92BAB938",]

var codes = [  0x20,   
			   0x2575, 
			   0x2576, 
			   0x2514, 
			   0x2577, 
			   0x2502, 
			   0x250c, 
			   0x251c, 
			   0x2574, 
			   0x2518, 
			   0x2500, 
			   0x2534, 
			   0x2510, 
			   0x2524, 
			   0x252c, 
			   0x253c, 
			]

class DP {
	constructor(canvas, matrix) {
		this.canvas = canvas; // once
		this.draw_value_matrix_on = true;
		this.init_matrix(matrix);
		this.attach_listeners();
	}
	init_matrix(matrix) {
		this.matrix = matrix;
		this.rows = matrix.length;
		this.cols = matrix[0].length;

		this.init_sizes();

		this.draw_grid();
		this.log();

		this.matrix           = matrix;
		this.reward_matrix    = this.create_matrix(this.rows, this.cols, (i, j) => -1);
		this.value_matrix     = this.create_matrix(this.rows, this.cols, (i, j) => 0);
		this.new_value_matrix = this.create_matrix(this.rows, this.cols, (i, j) => 0);

		this.buffer = document.createElement('canvas');
		this.buffer.width = this.canvas.width;
		this.buffer.height = this.canvas.height;
		this.bufferCtx = this.buffer.getContext('2d');
		//let section = document.getElementById('first_section');
		//section.appendChild(this.buffer);
		
		//this.fill_and_iterate();
		this.clear_maze();
		this.place_goal_randomly(0);

		this.bufferCtx.drawImage(this.canvas, 0, 0);
	}
	init_sizes(coeff=0.8) {
		let row_step = Math.floor(coeff * window.innerHeight / this.rows);
		let row_cols = Math.floor(window.innerWidth  / this.cols);

		this.size = Math.min(row_step, row_cols);		
		this.ctx = this.canvas.getContext('2d');

		this.canvas.width = (this.cols + 2) * this.size;
		this.canvas.height = (this.rows + 2) * this.size;
		this.ctx.lineWidth = 2;
		this.ctx.lineCap = 'round';
		this.ctx.font = '' + (this.size - 2 * this.ctx.lineWidth) / 3 + 'px monospace';
		
		this.row_step = this.size;
		this.col_step = this.size;

	}
	toggle_draw_value_matrix_on() {
		this.draw_value_matrix_on = !this.draw_value_matrix_on;
		this.clear_and_draw_buffer();
		this.fill_value_matrix();
		if(this.draw_value_matrix_on) {
			this.draw_value_matrix();
		}
	}
	create_matrix(n, p, f) {
		let matrix = []
		for(let i = 0; i < n; i++) {
			matrix.push([]);
			for(let j = 0; j < p; j++) {
				matrix[i].push(f(i, j));
			}
		}
		return matrix;
	}
	
	new_value(i, j, action, gamma) {
		let [I, J] = this.transition_function(i, j, action);
		let new_value = this.reward_matrix[i][j] + gamma * this.value_matrix[I][J];

		return new_value;
	}

	fill_after_iterations(n) {
		for(let i = 0; i <= n; i++) {
			this.copy_matrix(this.new_value_matrix, this.value_matrix);
			this.iteration();
		}
		this.clear_and_draw_buffer();
		this.fill_value_matrix();
		this.draw_value_matrix();
	}
	possible_actions(i, j) {
		let actions = ['NoMove'];
		let c = this.matrix[i][j];
		
		if(i > 0 && c & ways.UP) {
			actions.push('Up');
		}
		if(i < this.rows - 1 && c & ways.DOWN) {
			actions.push('Down');
		}
		if(j > 0 && c & ways.LEFT) {
			actions.push('Left');
		}
		if(j < this.cols - 1 && c & ways.RIGHT) {
			actions.push('Right');
		}
		
		return actions;
	}
	maximum_value(i, j, gamma) {
		let values = [];
		let c = this.matrix[i][j];
		if(i > 0 && c & ways.UP) {
			values.push(this.new_value(i, j, 'Up', gamma));
		}
		if(i < this.rows - 1 && c & ways.DOWN) {
			values.push(this.new_value(i, j, 'Down', gamma));
		}
		if(j > 0 && c & ways.LEFT) {
			values.push(this.new_value(i, j, 'Left', gamma));
		}
		if(j < this.cols - 1 && c & ways.RIGHT) {
			values.push(this.new_value(i, j, 'Right', gamma));
		}
		// NoMove
		values.push(this.value_matrix[i][j] + this.reward_matrix[i][j]);
		
		return Math.max(...values);
	}
	/* Not pure
	 * Depend on this.rows, this.cols
	 * Modify this.new_value_matrix
	 */
	iteration(gamma = 1) {
		for(let i = 0; i < this.rows; i++) {
			for(let j = 0; j < this.cols; j++) {
				this.new_value_matrix[i][j] = this.maximum_value(i, j, gamma);
			}
		}
	}
	
	transition_function(i, j, action) {
		let res_i = i;
		let res_j = j;

		switch(action) {
		case actions.UP:
			res_i -= 1;
			break;
		case actions.DOWN:	
			res_i += 1;
			break;
		case actions.LEFT:
			res_j -= 1;
			break;
		case actions.RIGHT:
			res_j += 1;
			break;
		case actions.NO_MOVE:
			break;
		default:
			break;
		}

		return [res_i, res_j];
	}
	
	draw_grid() {
		// Horizontal lines
		for(let i = 1; i < this.rows+2; i++) {
			this.ctx.moveTo(this.row_step, i*this.row_step);
			this.ctx.lineTo(this.canvas.width-this.row_step, i*this.row_step);
			this.ctx.stroke();
		}
		// Vertical lines
		for(let j = 1; j < this.cols+2; j++) {
			this.ctx.moveTo(j*this.col_step, this.col_step);
			this.ctx.lineTo(j*this.col_step, this.canvas.height-this.col_step);
			this.ctx.stroke();
		}
	}
	draw_goal() {
		this.draw_cell(this.i_goal, this.j_goal, 'yellow');
	}
	draw_cell(i, j, color) {
		let style = this.ctx.fillStyle;
		this.ctx.fillStyle = color;
		this.ctx.fillRect((j+1) * this.col_step + this.ctx.lineWidth / 2,
						  (i+1) * this.row_step + this.ctx.lineWidth / 2,
						  this.col_step - this.ctx.lineWidth,
						  this.row_step - this.ctx.lineWidth);
		this.ctx.fillStyle = style;
	}
	draw_reward_matrix() {
		for(let i = 0; i < this.rows; i++) {
			for(let j = 0; j < this.cols; j++) {
				let value = this.reward_matrix[i][j];
				if(value == 0) {
					this.draw_cell(i, j, 'yellow');
				}
				this.ctx.fillText(value, (j+1.25) * this.col_step, (i+1.7) * this.row_step);
			}
		}
	}
	draw_value_matrix() {
		for(let i = 0; i < this.rows; i++) {
			for(let j = 0; j < this.cols; j++) {
				let value = this.value_matrix[i][j];
				this.ctx.fillText(value, (j+1.15) * this.col_step, (i+1.7) * this.row_step);
			}
		}
	}
	fill_top(i, j, color)    { this.fill_cell(i, j, 0, -1, color); }
	fill_bottom(i, j, color) { this.fill_cell(i, j, 1, -1, color); }
	fill_left(i, j, color)   { this.fill_cell(i, j, 0,  0, color); }
	fill_right(i, j, color)  { this.fill_cell(i, j, 0,  1, color); }
	
	fill_cell(i, j, bottom, right, color) {
		let style = this.ctx.fillStyle;
		this.ctx.fillStyle = color

		let w = this.ctx.lineWidth;
		let h = w;

		let vertical = right != -1 ? 1 : 0;

		/*
		 * the fillRect cover the strokeline according to the bottom
		 * and right variables.
		 */
		this.ctx.fillRect((j+1+vertical*right) * this.row_step + w/2 - vertical * w,
					  (i+1+bottom) * this.col_step + h/2 - (1-vertical) * h,
					  w + (1-vertical) * (this.col_step - 2 * w),
					  h + vertical * (this.row_step -2 * h));
		
		this.ctx.fillStyle = style;
	}
	fill_digit(i, j, color) {
		//let digit = parseInt(str[i].charAt(j),16);
		let digit = this.matrix[i][j];

 		if(digit & ways.UP) {
			this.fill_top(i, j, color);
		}
 		if(digit & ways.RIGHT) {
			this.fill_right(i, j, color);
		}
 		if(digit & ways.DOWN) {
			this.fill_bottom(i, j, color);
		}
 		if(digit & ways.LEFT) {
			this.fill_left(i, j, color);
		}
	}
	fill_value_matrix() {
		for(let i = 0; i < this.rows; i++) {
			for(let j = 0; j < this.cols; j++) {
				let color = DP.compute_color_from_value(this.value_matrix[i][j]);
				this.draw_cell(i, j, color);
				this.fill_digit(i, j, color);
			}
		}
	}
	fill_until_converge() {
		let counter = 0;
		let that = this;
		
		function helper() {
			counter++;
			that.iteration(1);
		
			that.fill_value_matrix();
			if(that.draw_value_matrix_on) {
				that.draw_value_matrix();
			}

			console.log(DP.equal_matrix(that.value_matrix, that.new_value_matrix));
			
			if( counter < that.rows * that.cols ) {
				that.copy_matrix(that.new_value_matrix, that.value_matrix);
				that.animation_request = requestAnimationFrame( () => helper() );
			}
			else {
				console.log( (counter - 1) + " iterations before convergence.");
			}
		}

		this.animation_request = requestAnimationFrame(helper);
	}
	stop_fill_until_converge () {
		cancelAnimationFrame(this.animation_request);
	}
	// For animated maze creation
	remove_grid_and_iterate(counter = 0) {
		let j = counter % this.cols;
		let i = (counter - j) / this.cols;

		this.fill_digit(i, j, 'white');

		if(counter < this.rows * this.cols) {
			requestAnimationFrame(() => this.remove_grid_and_iterate(counter + 1));
		}
	}
	place_goal(i, j) {
		this.reward_matrix[i][j] = 0;
	}
	place_goal_randomly(value = 0) {
		this.i_goal = Math.floor(Math.random() * this.rows);
		this.j_goal = Math.floor(Math.random() * this.cols);

		console.log("goal: ", this.i_goal, this.j_goal);
		this.reward_matrix[this.i_goal][this.j_goal] = value;
	}
	clear_canvas() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
	clear_and_draw_buffer() {
		this.clear_canvas();
		this.ctx.drawImage(this.buffer, 0, 0);
	}
	clear_maze() {
		for(let i = 0; i < this.rows; i++) {
			for(let j = 0; j < this.cols; j++) {
				this.fill_digit(i, j, 'white');
			}
		}
	}
	reset_value_matrix() {
		DP.reset_matrix(this.value_matrix);
	}
	reset_all() {
		DP.reset_matrix(this.value_matrix);
		DP.reset_matrix(this.new_value_matrix);
		DP.reset_matrix(this.reward_matrix, -1);
	}
	log() {
		console.log(this.canvas);
		console.log(this.canvas.width, this.canvas.height);
		console.log("rows: ", this.rows, ", cols: ", this.cols);
		console.log("row_step: ",this.row_step, ", col_step: ", this.col_step);
	}
	action_one(i, j) {
		this.reset_all();
		this.place_goal(i, j);
		this.stop_fill_until_converge();
		this.fill_until_converge();
	}
	action_two(i, j) {
		console.log("i: " + i + " j: " + j);
		console.log(this.value_matrix[i][j]);
		console.log(this.reward_matrix[i][j]);
		console.log(this.maximum_value(i, j, 1));
	}
	attach_listeners() {
		let that = this;
		this.canvas.addEventListener('mousedown', function(event) {
			const rect = that.canvas.getBoundingClientRect();
			const x = -1 + Math.floor((event.clientX - rect.left) / that.col_step);
			const y = -1 + Math.floor((event.clientY - rect.top) / that.row_step);

			that.action_one(y, x);
			that.action_two(y, x);

		});
	}
	request_json_maze(rows=15, cols=15) {
		let request = new XMLHttpRequest();
		let url = "http://www.lespursetdurs.fr/maze/?rows=" + rows + "&cols=" + cols +"&json";
		let that = this;
		
		request.open("GET", url, true);
		request.responseType = "text";
		request.onload = function(e) {
			let matrix = JSON.parse(request.response);
			that.init_matrix(matrix);
			console.log(that.matrix);
		}
		request.send();	
	}

	// This four should be static
	static compute_color_from_value(value) {
		//let color = 'hsl(240, 80%, ' + (100 + 0.5 * this.value_matrix[i][j]) + '%)';
		let color = 'hsl(' + (360 - value) + ', 80%, 50%)';

		return color;
	}
	static reset_matrix(matrix, coeff = 0) {
		let n = matrix.length;
		let p = matrix[0].length;
		for(let i = 0; i < n; i++) {
			for(let j = 0; j < p; j++) {
				matrix[i][j] = coeff;
			}
		}
	}
	copy_matrix(src, dst) {
		let n = src.length;
		let p = src[0].length;
		
		for(let i = 0; i < n; i++) {
			for(let j = 0; j < p; j++) {
				dst[i][j] = src[i][j];
			}
		}
	}
	static equal_matrix(m1, m2, epsilon = 0.1) {
		let n = m1.length;
		let p = m1[0].length;

		if(n !=  m2.length || p != m2[0].length) {
			return false;
		}
		for(let i = 0; i < n; i++) {
			for(let j = 0; j < n; j++) {
				if(Math.abs(m1[i][j] - m2[i][j]) > epsilon) {
					return false;
				}
			}
		}
		return true;
	}
}

function request_json_maze(canvas, rows=15, cols=15) {
	let request = new XMLHttpRequest();
	let url = "http://www.lespursetdurs.fr/maze/?rows=" + rows + "&cols=" + cols +"&json";
	let that = this;
	
	request.open("GET", url, true);
	request.responseType = "text";
	request.onload = function(e) {
		let matrix = JSON.parse(request.response);
		console.log(matrix);

		return new DP(canvas, matrix);
	}
	request.send();	
}

var canvas = document.getElementById('main_canvas');
var canvas2 = document.getElementById('second_canvas');

var iter = new DP(canvas, matrix_test);
var iter2 = new DP(canvas2, matrix_test);


