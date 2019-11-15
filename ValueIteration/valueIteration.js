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

class ValueIteration {
	constructor(rows, cols) {
		this.rows = rows;
		this.cols = cols;

		this.size = 30
		
		this.canvas = document.getElementById('main_canvas');
		this.ctx = this.canvas.getContext('2d');

		this.canvas.width = (this.cols + 2) * this.size;
		this.canvas.height = (this.rows + 2) * this.size;
		
		this.row_step = this.size;
		this.col_step = this.size;

		this.counter = 0;
		
		this.draw_grid();
		this.log();

		this.matrix = []
		this.reward_matrix = []
		this.value_matrix = []
		this.new_value_matrix = [];
		
		for(let i = 0; i < str.length; i++) {
			this.matrix.push([]);
			this.reward_matrix.push([]);
			this.value_matrix.push([]);
			this.new_value_matrix.push([]);
			
			for(let j = 0; j < str[0].length; j++) {
				this.matrix[i].push(parseInt(str[i].charAt(j),16));
				this.reward_matrix[i].push(-1);
				this.value_matrix[i].push(0);
				this.new_value_matrix[i].push(0);
			}
		}

		this.buffer = document.createElement('canvas');
		this.buffer.width = this.canvas.width;
		this.buffer.height = this.canvas.height;
		this.bufferCtx = this.buffer.getContext('2d');
		let section = document.getElementById('first_section');
		//section.appendChild(this.buffer);
		
		//this.erase_next();
		this.erase_maze();
		this.place_goal();

		this.bufferCtx.drawImage(this.canvas, 0, 0);

		//this.draw_reward_matrix();
	}

	helper(i, j, action, gamma) {
		let move = this.transition(i, j, action);
		let new_value = this.reward_matrix[i][j] + gamma * this.value_matrix[move[0]][move[1]];

		return new_value;
	}

	iterate(n) {
		for(let i = 0; i < n; i++) {
			this.iteration(1);
			this.clear_and_draw_buffer();
			this.draw_value_matrix();
		}
	}
	
	iteration(gamma) {
		// Traiter le cas NoMove
		for(let i = 0; i < this.rows; i++) {
			for(let j = 0; j < this.cols; j++) {
				let values = [];
				let c = this.matrix[i][j];
				//console.log(c);
				if(i > 0 && c & ways.UP) {
					//console.log(c & ways.UP);
					values.push(this.helper(i, j, 'Up', gamma, values));
				}
				if(i < this.rows - 1 && c & ways.DOWN) {
					//console.log(c & ways.DOWN);
					values.push(this.helper(i, j, 'Down', gamma, values));
				}
				if(j > 0 && c & ways.LEFT) {
					//console.log(c & ways.LEFT);
					values.push(this.helper(i, j, 'Left', gamma, values));
				}
				if(j < this.cols - 1 && c & ways.RIGHT) {
					//console.log(c & ways.RIGHT);
					values.push(this.helper(i, j, 'Right', gamma, values));
				}
				// NoMove
				values.push(this.value_matrix[i][j] + this.reward_matrix[i][j]);

				let maximum = Math.max(...values);
				this.new_value_matrix[i][j] = maximum;
			}
		}
		for(let i = 0; i < this.rows; i++) {
			for(let j = 0; j < this.cols; j++) {
				this.value_matrix[i][j] = this.new_value_matrix[i][j];
			}
		}
	}
	
	transition(i, j, action) {
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
		default:
			break;
		}

		return [res_i, res_j];
	}
	
	draw_grid() {
		this.ctx.lineWidth = 6;
		this.ctx.lineCap = 'square'
		for(let i = 1; i < this.rows+2; i++) {
			this.ctx.moveTo(this.row_step, i*this.row_step);
			this.ctx.lineTo(this.canvas.width-this.row_step, i*this.row_step);
			this.ctx.stroke();
		}
		for(let j = 1; j < this.cols+2; j++) {
			this.ctx.moveTo(j*this.col_step, this.col_step);
			this.ctx.lineTo(j*this.col_step, this.canvas.height-this.col_step);
			this.ctx.stroke();
		}
	}
	erase_top(i,j)    { this.erase(i, j, 0, -1); }
	erase_bottom(i,j) { this.erase(i, j, 1, -1); }
	erase_left(i,j)   { this.erase(i, j, 0,  0); }
	erase_right(i,j)  { this.erase(i, j, 0,  1); }
	
	erase(i, j, bottom, right) {
		let style = this.ctx.fillStyle;
		this.ctx.fillStyle = 'white'

		let w = this.ctx.lineWidth;
		let h = w;

		let vertical = right != -1 ? 1 : 0;
		
		this.ctx.rect((j+1+vertical*right) * this.row_step + w/2 - vertical * w,
					  (i+1+bottom) * this.col_step + h/2 - (1-vertical) * h,
					  w + (1-vertical) * (this.col_step - 2 * w),
					  h + vertical * (this.row_step -2 * h));
		this.ctx.fill();
		
		this.ctx.fillStyle = style;
	}
	erase_digit(i,j) {
		//let digit = parseInt(str[i].charAt(j),16);
		let digit = this.matrix[i][j];
 		if(digit & ways.UP){
			this.erase_top(i,j);
			//console.log(i, j, "top", String.fromCharCode(codes[digit]), digit);
		}
 		if(digit & ways.RIGHT) {
			this.erase_right(i,j);
			//console.log(i, j, "right", String.fromCharCode(codes[digit]), digit);
		}
 		if(digit & ways.DOWN) {
			this.erase_bottom(i,j);
			//console.log(i, j, "bottom", String.fromCharCode(codes[digit]), digit);
		}
 		if(digit & ways.LEFT) {
			this.erase_left(i,j);
			//console.log(i, j, "left", String.fromCharCode(codes[digit]), digit);
		}
	}
	erase_maze() {
		for(let i = 0; i < this.rows; i++) {
			for(let j = 0; j < this.cols; j++) {
				this.erase_digit(i,j);
			}
		}
	}
	erase_next() {
		let j = this.counter % this.cols;
		let i = (this.counter - j) / this.cols;

		this.erase_digit(i,j);
		//console.log(i,j);
		this.counter++;

		if(this.counter < this.rows * this.cols) {
			requestAnimationFrame(() => this.erase_next());
		}
	}
	place_goal() {
		let i = Math.floor(Math.random() * this.rows);
		let j = Math.floor(Math.random() * this.cols);

		console.log("goal: ", i, j);
		this.reward_matrix[i][j] = 0;
		console.log(this.value_matrix);
	}
	clear_and_draw_buffer() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.ctx.drawImage(this.buffer, 0, 0);
	}
	draw_reward_matrix() {
		for(let i = 0; i < this.rows; i++) {
			for(let j = 0; j < this.cols; j++) {
				let value = this.reward_matrix[i][j];
				if(value == 0) {
					let style = this.ctx.fillStyle;
					console.log(style);
					this.ctx.fillStyle = 'yellow';
					this.ctx.fillRect((j+1) * this.col_step + this.ctx.lineWidth / 2,
								  (i+1) * this.row_step + this.ctx.lineWidth / 2,
								  this.col_step - this.ctx.lineWidth,
								  this.row_step - this.ctx.lineWidth);
					this.ctx.fillStyle = style;
					console.log(this.ctx.fillStyle);
				}
				this.ctx.fillText(value, (j+1.25) * this.col_step, (i+1.7) * this.row_step);
			}
		}
	}
	draw_value_matrix() {
		for(let i = 0; i < this.rows; i++) {
			for(let j = 0; j < this.cols; j++) {
				let value = this.value_matrix[i][j];
				this.ctx.fillText(value, (j+1.25) * this.col_step, (i+1.7) * this.row_step);
			}
		}
	}
	log() {
		console.log(this.canvas);
		console.log(this.canvas.width, this.canvas.height);
		console.log("rows: ", this.rows, ", cols: ", this.cols);
		console.log("row_step: ",this.row_step, ", col_step: ", this.col_step);
	}
}

var iter = new ValueIteration(str.length, str[0].length);
