function setup() {
	createCanvas(600,600);
	level = 1;
	blocks = [];
	teleporters = [];
	/*blocks.push(new Block(0, 200, width, 20));
	blocks.push(new Block(width / 2 + 9, height - 150, 50, 50));
	blocks.push(new Block(width / 2 + 9, height / 2, 50, 50));
	blocks.push(new Block(width / 2 - 109, height / 2 + 75, 50, 50));
	teleporters.push(new Teleporter(width - 100, 50, 30, 30));
	teleporters.push(new Teleporter(width - 100, 450, 30, 30));
	blocks.push(new Block(0, 500, width, 20)); */
	blocks.push(new Block(96, 448, 32, 32));
	blocks.push(new Block(96, 352, 32, 32));
	blocks.push(new Block(160, 416, 32, 32));
	blocks.push(new Block(208, 496, 32, 32));
	blocks.push(new Block(256, 352, 32, 32));
	blocks.push(new Block(272, 416, 32, 32));
	blocks.push(new Block(176, 240, 32, 32));
	blocks.push(new Block(144, 176, 32, 32));
	blocks.push(new Block(208, 176, 32, 32));
	blocks.push(new Block(304, 272, 32, 32));
	blocks.push(new Block(320, 208, 32, 32));
	blocks.push(new Block(528, 416, 32, 32));

	me = new Player(108, 400);
}

function draw () {
	background(150);
	//camera(me.x - width / 2, 0, 50)
	for (var i = 0; i < blocks.length; i++){
		blocks[i].show();
	}
	for (var i = 0; i < teleporters.length; i++){
		teleporters[i].show();
		teleporters[i].update();
	}
	me.update();
	me.show();
}

function keyPressed() {
	if (keyCode == 32 && me.accel == 0) {
		me.jump();
	}
}