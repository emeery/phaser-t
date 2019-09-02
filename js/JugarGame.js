GamePlayManager = {
    init: function() {

    },
    preload: function() {
        juego.load.image('background', 'assets/images/background.png')
    },
    create: function() {
        juego.add.sprite('background')
    },
    update: function() { console.log('update'); },
}
var juego = new Phaser.Game(1136, 640, Phaser.AUTO);

juego.state.add('gameplay', GamePlayManager);
juego.state.start('gameplay')