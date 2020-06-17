sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    bunny.vy += -100
})
let rock: Sprite = null
let bunny: Sprite = null
bunny = sprites.create(img`
. . . . 3 1 . . 3 1 . . . . . . 
. . . . 3 1 . 3 3 1 . . . . . . 
. . . . 3 1 . 3 1 . . . . . . . 
. . . . . 1 1 . 1 . . . . . . . 
. . . . 1 1 1 1 1 . . . . . . . 
. . . . 1 f 1 f 1 . . . . . . . 
. . . . 1 1 1 1 1 . . . . . . . 
. 1 1 . . . 1 1 . . . 1 1 . . . 
. 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
. 1 1 . . . 1 1 . . . 1 1 . . . 
. . . . . . 1 1 . . . . . . . . 
. . . . . . 1 1 . . . . . . . . 
. . . . . 1 1 1 1 . . . . . . . 
. . . . . 1 . . 1 . . . . . . . 
. . . . 1 1 . . 1 1 . . . . . . 
. . . . 1 . . . . 1 . . . . . . 
`, SpriteKind.Player)
scene.setBackgroundColor(15)
bunny.setPosition(13, 79)
game.onUpdateInterval(2000, function () {
    rock = sprites.createProjectileFromSide(img`
. . . . . . . . b b b b b . . . 
. . . . . . b b d d d d b b . . 
. . . . . b d d d d d d d c . . 
. . . . c d d d d d d d d c . . 
. . . c b d d d d d d d b c c . 
. . . c b b d d d d b c c c c . 
. . c c d b b b c c c c c c c . 
. . c c c d d d d c c d d d c c 
. c d b c c b b c c d d d d d c 
. c b d d b b b c c d d d d d c 
. c c b b b b c b c b d d d b c 
c b b c c c c c b b b b b c c c 
c c b b c c c c c d d d d d b c 
c c c c c c b b b b b c c c c c 
c c c c c c c b b b b b c c c c 
c c c c c c c c b b b b b c c c 
`, -100, 0)
    rock.y = 79
    info.changeScoreBy(1)
})
game.onUpdate(function () {
    if (bunny.y < 79) {
        bunny.ay = 200
    } else {
        bunny.vy = 0
        bunny.ay = 0
    }
})
game.onUpdate(function () {
    if (info.score() == 5) {
        game.over(true)
    }
})
