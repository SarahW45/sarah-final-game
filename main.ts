controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`weapon`, ducky, 0, -50)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
	
})
let projectile: Sprite = null
let ducky: Sprite = null
scene.setBackgroundColor(15)
ducky = sprites.create(assets.image`ducky`, SpriteKind.Player)
ducky.setPosition(80, 101)
controller.moveSprite(ducky)
let Alien = sprites.createProjectileFromSide(img`
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
    `, 20, 20)
Alien.setKind(SpriteKind.Enemy)
