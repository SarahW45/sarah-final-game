controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`weapon`, ducky, 0, -50)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let projectile: Sprite = null
let Alien: Sprite = null
let ducky: Sprite = null
info.startCountdown(15)
info.setLife(4)
game.showLongText("Help the ducky fight the aliens!", DialogLayout.Center)
scene.setBackgroundColor(15)
ducky = sprites.create(assets.image`ducky`, SpriteKind.Player)
ducky.setPosition(80, 101)
controller.moveSprite(ducky)
Alien = sprites.createProjectileFromSprite(img`
    . . . . c c c c c c c . . . . . 
    . . . c c c c c c c c c . . . . 
    . . a c a c a c a c a c a . . . 
    . c c c c c c c c c c c c c . . 
    . c c 1 1 1 c c 1 1 1 c c c . . 
    . c c c c c c c c c c c c c . . 
    . c c c c c c c c c c c c c . . 
    . c c c c 1 1 1 1 c c c c c . . 
    . c c c c 1 1 1 1 c c c c c . . 
    . c c c c c c c c c c c c c . . 
    . . c c c c c c c c c c c . . . 
    . . . c c c c c c c c c . . . . 
    . . . . c c c c c c c . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, Alien, 31, 35)
Alien.setKind(SpriteKind.Enemy)
ducky.setStayInScreen(true)
game.onUpdateInterval(1000, function () {
    Alien.setBounceOnWall(true)
    Alien.setStayInScreen(true)
    Alien = sprites.createProjectileFromSide(img`
        . . . . c c c c c c c . . . . . 
        . . . c c c c c c c c c . . . . 
        . . a c a c a c a c a c a . . . 
        . c c c c c c c c c c c c c . . 
        . c c 1 1 1 c c 1 1 1 c c c . . 
        . c c c c c c c c c c c c c . . 
        . c c c c c c c c c c c c c . . 
        . c c c c 1 1 1 1 c c c c c . . 
        . c c c c 1 1 1 1 c c c c c . . 
        . c c c c c c c c c c c c c . . 
        . . c c c c c c c c c c c . . . 
        . . . c c c c c c c c c . . . . 
        . . . . c c c c c c c . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(20, 100), 50)
    Alien.setKind(SpriteKind.Enemy)
})
