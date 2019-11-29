/*
  Naming conventions
    
  Methods starting by draw_ are meant to drawn numbers on the grid. For exemple,
  draw_value_matrix() will put the coefficients of the matrix on the cancas.

  Method starting with reset_ put all the coefficient of a mtrix to 0.

  Methods starting with fill_ paint the cells of the grid.

  Methods starting with clear_ will clear the canvas.

  

  TODO:
  - conflict draw_cell fill_cell
*/

var bug = "[[6,8,6,14,14,8,6,10,14,12,6,10,12,6,10,12,2,14,14,8,6,10,14,12,2,14,10,10,10,14,12,2,10,14,10,12,6,12,6,10,10,10,12,2,10,14,10,12,2,10,10,14,14,14,8,6,10,14,12,6,12,6,10,14,10,10,10,10,10,10,12,6,10,14,10,8,6,14,10,12],[5,6,9,5,5,6,9,4,5,3,9,4,5,7,12,3,12,1,3,14,11,8,5,3,12,1,6,10,10,9,5,6,10,9,6,9,5,5,3,12,2,12,5,6,12,3,12,3,12,6,12,1,5,1,6,11,8,5,5,5,5,3,12,3,12,6,12,4,6,12,5,1,6,13,6,10,9,3,12,1],[3,9,6,9,5,5,6,13,5,6,10,9,5,1,3,12,3,10,12,1,6,10,9,4,3,12,3,12,4,6,9,5,6,12,5,6,9,7,12,5,6,13,3,9,5,6,9,4,3,9,3,12,3,10,9,6,10,9,5,5,7,8,5,4,3,9,5,5,5,3,9,6,9,1,3,10,10,12,3,12],[6,12,5,6,9,5,1,5,5,3,10,12,3,10,10,9,6,8,7,10,9,6,12,3,14,9,6,9,3,11,12,3,9,5,5,3,12,5,1,5,5,1,6,12,3,9,2,15,10,10,8,5,6,10,10,9,4,6,9,5,1,6,9,7,12,6,9,5,5,6,10,11,10,10,14,12,4,5,4,5],[5,3,9,1,6,9,6,9,3,12,6,13,6,10,14,12,7,10,9,6,10,9,3,12,5,2,11,10,12,4,3,10,10,9,5,2,9,5,6,9,3,14,9,5,6,14,12,5,6,10,12,3,9,4,6,10,11,9,6,11,12,3,12,5,1,5,4,7,9,3,12,4,6,10,9,3,9,5,5,5],[7,10,12,6,9,2,15,12,6,9,5,1,5,4,5,5,3,12,6,9,2,14,12,5,3,10,10,10,9,7,10,14,10,8,5,6,10,13,3,10,12,3,12,5,5,5,3,9,5,4,3,10,10,11,9,4,6,12,3,12,3,10,9,5,6,9,7,9,2,14,11,9,3,10,12,6,10,11,9,5],[1,6,13,5,6,12,1,5,5,6,13,6,11,9,5,1,6,9,3,10,12,5,1,3,10,12,6,10,8,5,4,3,10,10,11,9,4,7,10,8,5,6,9,3,9,3,10,12,5,7,14,8,6,10,10,11,9,7,10,11,10,10,10,13,3,12,3,10,12,1,6,12,6,12,3,9,6,10,12,5],[6,9,1,5,5,5,6,13,5,5,3,9,6,12,7,12,5,2,14,12,5,5,6,10,10,9,3,10,10,15,11,8,6,10,12,6,11,9,6,12,5,3,10,10,12,6,12,3,9,5,1,6,11,8,6,10,12,5,6,10,10,10,12,3,12,3,12,4,3,10,9,3,9,3,10,10,9,6,9,5],[7,10,12,3,9,3,9,5,5,3,8,6,9,5,1,3,11,12,5,1,5,5,3,10,12,6,10,10,12,5,6,10,9,6,9,3,12,6,9,3,9,6,8,6,9,5,5,6,10,11,10,13,6,10,9,6,9,1,5,6,10,8,5,6,9,4,5,7,12,6,10,10,10,10,10,10,10,9,2,13],[5,4,7,8,6,10,10,9,5,6,10,11,8,3,10,10,12,7,9,6,9,7,10,12,3,9,6,10,9,5,5,2,12,5,2,10,9,3,12,6,8,7,10,9,6,9,5,3,8,6,12,1,5,6,10,9,6,14,9,7,10,10,9,5,2,13,5,5,3,9,6,10,10,10,12,6,8,6,14,9],[3,9,5,6,9,6,12,6,13,5,6,10,10,10,12,6,9,1,6,9,4,3,12,3,14,8,3,12,2,9,3,12,5,3,10,12,6,10,9,7,10,9,6,12,5,4,3,12,6,9,3,12,5,3,12,6,9,5,4,3,12,6,8,3,14,9,5,3,10,12,5,6,12,6,9,7,10,9,3,12],[6,12,3,11,8,5,3,9,1,5,5,6,10,10,9,7,10,12,5,2,15,12,3,12,3,10,12,3,10,10,10,9,7,10,10,9,3,12,2,11,12,6,9,5,5,7,8,7,9,2,10,13,3,12,5,1,6,9,5,6,9,3,14,8,5,6,9,2,10,11,9,5,5,5,4,5,2,14,12,5],[5,3,10,10,14,9,6,10,10,9,5,5,6,10,12,1,6,13,5,6,9,3,12,5,6,12,7,10,8,6,14,8,3,12,2,10,14,9,6,12,3,9,6,9,5,7,10,9,6,10,12,3,12,5,5,6,9,6,9,3,10,12,5,6,9,3,12,6,10,12,4,5,3,9,5,3,10,9,5,5],[3,12,4,6,9,6,9,6,12,6,9,7,9,2,11,14,9,1,5,5,6,8,5,5,1,5,3,10,10,9,3,10,12,3,10,12,3,14,9,5,6,12,5,6,9,7,10,8,3,12,5,4,5,5,3,9,4,7,10,10,10,9,3,11,10,12,5,5,6,9,7,9,6,10,13,6,10,10,9,5],[6,9,3,13,4,3,12,5,1,5,2,9,6,12,2,9,6,10,9,5,3,12,5,5,6,11,10,12,2,12,6,12,3,14,12,3,12,3,8,5,5,3,9,5,2,9,6,12,6,9,5,5,3,9,6,12,7,9,4,6,14,12,6,10,12,1,3,13,5,4,3,12,7,12,1,3,12,4,6,9],[5,6,12,3,11,8,5,5,6,13,6,10,9,3,10,12,5,6,12,7,12,3,9,5,7,12,2,11,10,13,5,3,12,5,5,4,3,10,10,9,3,12,6,9,6,10,9,3,9,6,9,7,12,6,9,3,9,2,15,9,5,5,5,4,3,10,12,5,5,7,8,5,5,3,10,10,11,9,7,12],[5,5,3,10,12,6,9,5,5,1,5,2,14,12,4,5,3,9,5,1,3,14,10,9,1,3,12,4,6,9,5,2,11,9,3,15,10,10,10,8,6,9,3,14,11,8,6,10,12,5,2,13,1,5,2,14,10,12,1,6,9,3,9,7,12,6,9,1,5,3,10,13,3,10,12,6,10,12,1,5],[3,11,8,6,9,5,2,13,3,10,9,6,9,3,13,3,10,12,5,2,12,3,10,12,6,10,9,5,5,4,5,6,12,2,10,9,6,10,10,10,9,6,12,3,8,6,9,4,3,9,6,9,6,9,6,9,6,9,6,9,6,10,8,5,5,3,10,12,3,10,12,3,10,12,1,5,4,3,10,13],[6,10,10,9,6,9,6,13,2,14,12,3,12,6,9,4,6,9,3,10,9,6,12,5,5,6,14,9,5,5,3,9,3,10,10,12,5,2,14,12,2,13,5,6,12,5,6,11,8,6,11,12,5,6,9,4,3,12,5,6,13,6,10,9,5,6,12,5,6,12,5,6,8,5,6,9,7,8,6,9],[3,10,10,10,11,10,9,3,10,9,3,10,9,3,10,9,3,10,10,10,10,9,3,11,9,1,3,10,11,11,10,10,10,10,8,3,11,10,9,3,10,9,3,9,3,9,3,10,10,11,8,3,11,9,2,11,10,11,9,1,3,11,10,8,3,9,3,11,9,3,9,3,10,11,9,2,11,10,11,8]]"

i_bug = 3;
j_bug = 28;

const actions = {
	'UP': 'Up',
	'DOWN': 'Down',
	'LEFT': 'Left',
	'RIGHT': 'Right',
	'NO_MOVE': 'NoMove',
}
const moves = {
	'Up':     [-1, +0],
	'Down':   [+1, +0],
	'Left':   [+0, -1],
	'Right':  [+0, +1],
	'NoMove': [+0, +0],
}
const direction_bit = {
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
		this.reward_matrix    = DP.create_matrix(this.rows, this.cols, (i, j) => -1);
		this.value_matrix     = DP.create_matrix(this.rows, this.cols, (i, j) => 0);
		this.new_value_matrix = DP.create_matrix(this.rows, this.cols, (i, j) => 0);

		this.buffer = document.createElement('canvas');
		this.buffer.width = this.canvas.width;
		this.buffer.height = this.canvas.height;
		this.bufferCtx = this.buffer.getContext('2d');
		//let section = document.getElementById('first_section');
		//section.appendChild(this.buffer);
		
		//this.fill_and_iterate();
		this.clear_maze();

		
		//this.place_goal_randomly(0);
		this.place_goal(this.rows / 2, this.cols / 2);
		
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
		let digit = this.matrix[i][j];
		
		if(i > 0 && digit & direction_bit.UP) {
			actions.push('Up');
		}
		if(i + 1 < this.rows && digit & direction_bit.DOWN) {
			actions.push('Down');
		}
		if(j > 0 && digit & direction_bit.LEFT) {
			actions.push('Left');
		}
		if(j + 1 < this.cols && digit & direction_bit.RIGHT) {
			actions.push('Right');
		}
		
		return actions;
	}
	maximum_value(i, j, gamma) {
		let actions = this.possible_actions(i, j);
		let that = this;
		
		let values = actions.map(function(action) {
			let [I, J] = that.transition_function(i, j, action);
			return that.reward_matrix[i][j] + gamma * that.value_matrix[I][J];
		});
		
		return Math.max(...values);
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
	draw_value_matrix() {
		this.draw_matrix(this.value_matrix);
	}
	draw_reward_matrix() {
		this.draw_goal();
		this.draw_matrix(this.reward_matrix, 1.7, 1.25);
	}
	draw_matrix(matrix, di=1.7, dj=1.15) {
		let n = matrix.length;
		let p = matrix[0].length;
		for(let i = 0; i < n; i++) {
			for(let j = 0; j < p; j++) {
				let value = matrix[i][j];
				this.ctx.fillText(value, (j+dj) * this.col_step, (i+di) * this.row_step);
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
		 * the fillRect cover the rect + the strokeline according to the bottom
		 * and right variables.
		 */
		this.ctx.fillRect((j+1+vertical*right) * this.row_step + w/2 - vertical * w,
					  (i+1+bottom) * this.col_step + h/2 - (1-vertical) * h,
					  w + (1-vertical) * (this.col_step - 2 * w),
					  h + vertical * (this.row_step -2 * h));
		
		this.ctx.fillStyle = style;
	}
	fill_digit(i, j, color) {
		let digit = this.matrix[i][j];

 		if(digit & direction_bit.UP) {
			this.fill_top(i, j, color);
		}
 		if(digit & direction_bit.RIGHT) {
			this.fill_right(i, j, color);
		}
 		if(digit & direction_bit.DOWN) {
			this.fill_bottom(i, j, color);
		}
 		if(digit & direction_bit.LEFT) {
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
	/* Not pure
	 * Depend on this.rows, this.cols
	 * Modify this.new_value_matrix
	 */
	iteration(gamma=1) {
		for(let i = 0; i < this.rows; i++) {
			for(let j = 0; j < this.cols; j++) {
				this.new_value_matrix[i][j] = this.maximum_value(i, j, gamma);
			}
		}
	}
	converge() {
		let I = 0;
		this.iteration(1);
		while(!DP.equal_matrix(this.value_matrix, this.new_value_matrix)) {
			this.copy_matrix(this.new_value_matrix, this.value_matrix);
			this.iteration(1);
			I++;
		}
		return I;
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

			let eq = DP.equal_matrix(that.value_matrix, that.new_value_matrix);
			console.log(eq);
			
			if(!eq) {
			//if( counter < that.rows * that.cols ) {
				that.copy_matrix(that.new_value_matrix, that.value_matrix);
				that.animation_request = requestAnimationFrame(helper);
			}
			else {
				console.log( (counter - 1) + " iterations before convergence.");
			}
		}

		this.animation_request = requestAnimationFrame(helper);
	}
	fill_path_to_goal_from(i, j) {
		let that = this;
		let current_i = i;
		let current_j = j;
		
		function helper() {
			//console.log('(i,j)=' + '(' + i + ',' + j + ')');
			[current_i, current_j] = that.maximum_neighbor(that.value_matrix, current_i, current_j);
			that.ctx.strokeRect((current_j+1.25)*that.col_step, (current_i+1.25)*that.row_step, 10, 10);
			//that.ctx.fillText(that.value_matrix[current_i][current_j], (current_j+1.5)*that.col_step, (current_i+0.5)*that.row_step, 10, 10);
			if( current_i != that.i_goal || current_j != that.j_goal) {
				requestAnimationFrame(helper);
			}
		}
		requestAnimationFrame(helper);		
	}
	maximum_neighbor(matrix, i, j) {
		let actions = this.possible_actions(i, j);
		let max = matrix[i][j];
		let I = i;
		let J = j;
		for(let k = 0; k < actions.length; k++) {
			let [dI, dJ] = moves[actions[k]];
			if(matrix[I+dI][J+dJ] > max) {
				max = matrix[I+dI][J+dJ];
				I += dI;
				J += dJ; 
			}
		}
		return [I, J]
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
	action_three(i, j) {
		this.reset_all();
		this.clear_and_draw_buffer();
		this.place_goal_randomly();
		this.draw_goal();
		this.converge();
		this.draw_reward_matrix();
		this.fill_value_matrix();
		this.fill_path_to_goal_from(i, j);
	}
	attach_listeners() {
		let that = this;
		this.canvas.addEventListener('mousedown', function(event) {
			const rect = that.canvas.getBoundingClientRect();
			const x = -1 + Math.floor((event.clientX - rect.left) / that.col_step);
			const y = -1 + Math.floor((event.clientY - rect.top) / that.row_step);

			//that.action_one(y, x);
			that.action_two(y, x);
			//that.action_three(y, x);
			console.log(that.possible_actions(y, x));
			console.log(that.maximum_neighbor(that.value_matrix, y, x));
			that.ctx.strokeRect((x+1.25)*that.col_step, (y+1.25)*that.row_step, 10, 10);
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

	// static method
	copy_matrix(src, dst) {
		let n = src.length;
		
		for(let i = 0; i < n; i++) {
			dst[i] = src[i].slice();
		}
	}
	static create_matrix(n, p, f) {
		let matrix = []
		for(let i = 0; i < n; i++) {
			matrix.push([]);
			for(let j = 0; j < p; j++) {
				matrix[i].push(f(i, j));
			}
		}
		return matrix;
	}	
	static compute_color_from_value(value) {
		//let color = 'hsl(240, 80%, ' + (100 + 0.5 * this.value_matrix[i][j]) + '%)';
		let color = 'hsl(' + (360 - value) + ', 80%, 50%)';

		return color;
	}
	static reset_matrix(matrix, coeff = 0) {
		let n = matrix.length;
		let p = matrix[0].length;
		for(let i = 0; i < n; i++) {
			// is that clear?
			matrix[i].forEach( function(value, index){ this[index] = coeff; },
							   matrix[i]);
		}
	}
	static equal_matrix(m1, m2, epsilon = 0.1) {
		let n = m1.length;
		let p = m1[0].length;

		if(n !=  m2.length || p != m2[0].length) {
			return false;
		}
		for(let i = 0; i < n; i++) {
			for(let j = 0; j < p; j++) {
				if(Math.abs(m1[i][j] - m2[i][j]) > epsilon) {
					return false;
				}
			}
		}
		return true;
	}
	static min(matrix) {
		return Math.min(...matrix.map(row => Math.min(...row)))
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

var iter2 = new DP(canvas2, JSON.parse(bug));
iter2.reward_matrix = DP.create_matrix(iter2.rows, iter2.cols, (i, j) => -1);
iter2.place_goal(3, 28);
iter2.draw_reward_matrix();
