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

		this.erase_next();
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
		let digit = parseInt(str[i].charAt(j),16);
 		if(digit & 1){
			this.erase_top(i,j);
			//console.log(i, j, "top", String.fromCharCode(codes[digit]), digit);
		}
 		if(digit & 2) {
			this.erase_right(i,j);
			//console.log(i, j, "right", String.fromCharCode(codes[digit]), digit);
		}
 		if(digit & 4) {
			this.erase_bottom(i,j);
			//console.log(i, j, "bottom", String.fromCharCode(codes[digit]), digit);
		}
 		if(digit & 8) {
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
		console.log(i,j);
		this.counter++;

		if(this.counter < this.rows * this.cols) {
			requestAnimationFrame(() => this.erase_next());
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
