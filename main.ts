controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`weapon`, ducky, 0, -50)
})
info.onLifeZero(function () {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
})
let projectile: Sprite = null
let Alien: Sprite = null
let ducky: Sprite = null
info.setLife(4)
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
game.onUpdateInterval(2000, function () {
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
        `, randint(30, 100), 6)
    Alien.setKind(SpriteKind.Enemy)
})
