namespace SpriteKind {
    export const Coin = SpriteKind.create()
    export const Computer = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.dissolve)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Gub.vy == 0) {
        Gub.vy = -160
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Computer, function (sprite, otherSprite) {
    Robot = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    Robot,
    [img`
        ................................
        ..............2...2.............
        ..............f...f.............
        ..............f...f.............
        ...........fffffffffff..........
        ...........fbbbbbbbbbf..........
        ...........fbffbbffbbf..........
        ...........fb2fbb2fbbf..........
        ...........fbbbbbbbbbf..........
        ...........fbbbbbbbbbf..........
        ...........fbbbfffbbbf..........
        ...........fbbbbbbbbbf..........
        ...........fbbbbbbbbbf..........
        ...........fffffffffff..........
        ....f..........fff..........f...
        ....fff........fff........fff...
        ......fffffffffffffffffffff.....
        .......fffffbbbbbbbbbffff.......
        ......ffffffbbbb44bbbffffff.....
        ....fff....fbbbb22bbbf....fff...
        ....f......fbbbb44bbbf......f...
        ...........fbbbb22bbbf..........
        ...........fbbbb44bbbf..........
        ...........fbbbb22bbbf..........
        ...........fbbbbbbbbbf..........
        ...........fbbbbbbbbbf..........
        ...........fffffffffff..........
        ............fff...fff...........
        ............fff...fff...........
        ...........ffff...ffff..........
        ...........ffff...ffff..........
        ...........ffff...ffff..........
        `,img`
        ................................
        ..............f...f.............
        ..............f...f.............
        ..............f...f.............
        ...........fffffffffff..........
        ...........fbbbbbbbbbf..........
        ...........fbffbbffbbf..........
        ...........fbffbbffbbf..........
        ...........fbbbbbbbbbf..........
        ...........fbbbbbbbbbf..........
        ...........fbbbfffbbbf..........
        ...........fbbbbbbbbbf..........
        ...........fbbbbbbbbbf..........
        ...........fffffffffff..........
        ...............fff..............
        ...............fff..............
        ....ffffffffffffffffffffffff....
        .......fffffbbbbbbbbbffff.......
        ....ffffffffbbbb44bbbfffffff....
        ...........fbbbbbbbbbf..........
        ...........fbbbb44bbbf..........
        ...........fbbbbbbbbbf..........
        ...........fbbbb44bbbf..........
        ...........fbbbbbbbbbf..........
        ...........fbbbbbbbbbf..........
        ...........fbbbbbbbbbf..........
        ...........fffffffffff..........
        ............fff...fff...........
        ............fff...fff...........
        ...........ffff...ffff..........
        ...........ffff...ffff..........
        ...........ffff...ffff..........
        `],
    200,
    true
    )
    sprites.destroy(otherSprite)
    Robot.setPosition(Gub.x + 80, Gub.y - 80)
    Robot.follow(Gub)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (Gub.y < otherSprite.y) {
        info.changeScoreBy(3)
    } else {
        info.changeLifeBy(-1)
    }
})
let Robot: Sprite = null
let Computer: Sprite = null
let coin: Sprite = null
let Gub: Sprite = null
scene.setBackgroundColor(9)
Gub = sprites.create(assets.image`GubJumping`, SpriteKind.Player)
controller.moveSprite(Gub, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
Gub.ay = 350
scene.cameraFollowSprite(Gub)
info.setLife(5)
for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
    coin = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f 5 5 5 7 5 5 5 f . . . 
        . . . f 5 4 5 5 7 5 5 4 5 f . . 
        . . f 5 4 5 5 7 7 7 7 5 4 5 f . 
        . . f 5 5 5 7 7 7 5 7 5 5 5 f . 
        . . f 5 5 5 7 5 7 5 5 5 5 5 f . 
        . . f 5 5 5 7 7 7 5 5 5 5 5 f . 
        . . f 5 5 5 5 5 7 7 7 5 5 5 f . 
        . . f 5 5 5 5 5 7 5 7 5 5 5 f . 
        . . f 5 4 5 7 5 7 5 7 5 4 5 f . 
        . . . f 5 4 7 7 7 7 7 4 5 f . . 
        . . . . f 5 5 5 7 5 5 5 f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Coin)
    animation.runImageAnimation(
    coin,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 4 4 4 4 5 5 5 f . . 
        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . . . f 5 5 4 4 4 4 4 5 5 f . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . f 5 5 4 4 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . f 5 4 5 5 5 5 5 5 5 f . . 
        . . . f 5 4 5 5 5 5 5 5 5 f . . 
        . . . f 5 4 5 5 5 5 5 5 5 f . . 
        . . . f 5 4 5 5 5 5 5 5 5 f . . 
        . . . f 5 4 5 5 5 5 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . . f 5 5 4 4 4 5 5 f . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . . f 5 5 4 5 5 f . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . f 5 4 5 5 5 f . . . . 
        . . . . . f 5 4 5 5 5 f . . . . 
        . . . . . f 5 4 5 5 5 f . . . . 
        . . . . . f 5 4 5 5 5 f . . . . 
        . . . . . f 5 4 5 5 5 f . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . . f 5 4 5 f . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . . f 4 f . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . f 5 4 5 5 5 f . . . . 
        . . . . . f 5 4 5 5 5 f . . . . 
        . . . . . f 5 4 5 5 5 f . . . . 
        . . . . . f 5 4 5 5 5 f . . . . 
        . . . . . f 5 4 5 5 5 f . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . . f 5 4 5 f . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . . f 5 5 4 5 5 f . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 4 4 4 4 5 5 5 f . . 
        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . . . f 5 5 4 4 4 4 4 5 5 f . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    25,
    true
    )
    tiles.placeOnTile(coin, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
    Computer = sprites.create(img`
        .....................ffff.......
        ....................ff5ffffff...
        ....................ff5555fffff.
        ....................ff5555555fff
        ....................ff55555555ff
        ....................ff55555555ff
        ....................ff55522555ff
        ....................ff55522555ff
        ....................ff55522555ff
        ....................ff55522555ff
        ....................ff55522555ff
        ....................ff55522555ff
        ....................ff55522555ff
        ....................ff55522555ff
        ....................ff55555555ff
        ....................ff55522555ff
        ...ffffffffffffffffffff5522555ff
        ...ffffffffffffffffffffff55555ff
        ...ffdddfddddfdddfddfddffff555ff
        ...fffdddfddfddfddfddddddffff5ff
        ....fffdddfddfddfddfdfdddddfffff
        .....fffdddfddfddfddddfddddddfff
        ......fffffffffffffffffffffffff.
        .......fffffffffffffffffffffff..
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `, SpriteKind.Computer)
    tiles.placeOnTile(Computer, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
game.onUpdate(function () {
    Gub.setImage(assets.image`GubJumping`)
    if (Gub.vx > 0) {
        Gub.image.flipX()
    }
    if (Gub.vy < 0) {
        Gub.setImage(assets.image`GubJumping`)
    } else {
    	
    }
})
