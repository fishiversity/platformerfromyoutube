scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.dissolve)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Gub.vy == 0) {
        Gub.vy = -160
    }
})
let Gub: Sprite = null
scene.setBackgroundColor(9)
Gub = sprites.create(assets.image`GubStanding`, SpriteKind.Player)
controller.moveSprite(Gub, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
Gub.ay = 350
scene.cameraFollowSprite(Gub)
