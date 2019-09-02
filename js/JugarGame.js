GamePlayManager = {
    init: function() {
        juego.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        juego.scale.pageAlignHorizontally = true;
        juego.scale.pageAlignVertically = true;
        this.flagFirstMouseDown = false;
    },
    preload: function() {
        juego.load.image(
            'background', 'assets/images/background.png');
        juego.load.spritesheet(
            'horse', 'assets/images/horse.png', 84, 156, 2); // wi, he, 2img
    },
    create: function() {
        juego.add.sprite(0, 0, 'background');
        this.caballito = juego.add.sprite(0, 0, 'horse'); // instancia
        this.caballito.frame = 0; // 1 open, 0 close
        this.caballito.x = juego.width/2; // posicion x 
        this.caballito.y = juego.height/2; // posicion y
        this.caballito.anchor.setTo(0.5); // (x, y) cambia el centro
        juego.input.onDown.add(this.onTap, this); // activa cursor
        // this.caballito.angle = 90; // rotacion
        // this.caballito.scale.setTo(4); // tamaño
        // this.caballito.alpha = 1; // (0,1) opacidad
    },
    onTap: function() {
        this.flagFirstMouseDown = true;
    },
    update: function() {
        // this.caballito.angle +=1; // gira
        if(this.flagFirstMouseDown) {
            var punteroX = juego.input.x;
            var punteroY = juego.input.y;

            var distX = punteroX - this.caballito.x;
            var distY = punteroY - this.caballito.y;
            if(distX>0) { this.caballito.scale.setTo(1,1); // mira a la izq
            } else { this.caballito.scale.setTo(-1,1); } // mira a la der

            // mueve el caballo
            this.caballito.x += distX * 0.02;
            this.caballito.y += distY * 0.02;
        }
    },
}
var juego = new Phaser.Game(1136, 640, Phaser.AUTO);

juego.state.add('gameplay', GamePlayManager);
juego.state.start('gameplay')