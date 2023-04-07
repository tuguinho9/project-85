//Criar uma referência para tela
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
//Dê altura e largura específicas para a imagem do carro
carwidth = 75;
carheight = 100;
backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

//Defina a posição inicial para uma imagem de carro.
carX = 5;
carY = 225;
function add() {
	//carregar carro e imagens de fundo na tela.
	backgroundImgTag = new Image();
	backgroundImgTag.onload = uploadBackground;
	backgroundImgTag.src = backgroundImage;
	carImgTag = new Image();
	carImgTag.onload = uploadGreenCar;
	carImgTag.src = greencarImage;
}
function uploadBackground() {
	//Defina a função ‘uploadBackground’
	ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadGreenCar() {
	//Defina a função ‘uploadGreenCar’.
	ctx.drawImage(carImgTag, carX, carY, carwidth, carheight);
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Definir função para mover o carro para cima
	if(carY>=0){
		carY= carY - 10;
		uploadBackground();
		uploadGreenCar();
	}
}

function down()
{
	//Definir função para mover o carro para baixo
	if(carY<=500){
		carY = carY + 10;
		uploadBackground();
		uploadGreenCar();
	}
}

function left()
{
	//Definir função para mover o carro para o lado esquerdo
	if(carX>=0){
		carX = carX - 10;
		uploadBackground();
		uploadGreenCar();
	}
}

function right()
{
	//Definir função para mover o lado direito do carro
	if(carX<=700){
		carX = carX + 10;
		uploadBackground();
		uploadGreenCar();
	}
}