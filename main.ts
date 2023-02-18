scene.setBackgroundColor(9)
let mySprite = sprites.create(assets.image`GubStanding`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite.ay = 200
