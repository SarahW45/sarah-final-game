controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`weapon`, ducky, 0, -50)
})
info.onCountdownEnd(function () {
    speed = 2 * speed
    info.startCountdown(15)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let projectile: Sprite = null
let speed = 0
let Alien: Sprite = null
let ducky: Sprite = null
info.startCountdown(15)
info.setLife(5)
info.setScore(0)
game.splash("Help the ducky defend his planet by fighting the aliens")
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
speed = 50
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
        `, randint(20, 100), speed)
    Alien.setPosition(randint(15, 145), 0)
    Alien.setKind(SpriteKind.Enemy)
})
