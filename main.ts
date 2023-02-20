namespace SpriteKind {
    export const Coin = SpriteKind.create()
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
let coin: Sprite = null
let Gub: Sprite = null
scene.setBackgroundColor(9)
Gub = sprites.create(assets.image`GubStanding`, SpriteKind.Player)
controller.moveSprite(Gub, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
Gub.ay = 350
scene.cameraFollowSprite(Gub)
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
