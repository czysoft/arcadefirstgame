scene.onOverlapTile(SpriteKind.Player, assets.tile`instrument4`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`instrument1`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`门`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    KeyCount += -1
    if (KeyCount < 1) {
        门变成墙(true)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`key`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    KeyCount += 1
    门变成墙(false)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("钥匙数量：" + KeyCount)
})
function 门变成墙 (布尔值: boolean) {
    for (let r = 0; r <= tiles.tilemapRows(); r++) {
        for (let c = 0; c <= tiles.tilemapColumns(); c++) {
            if (tiles.tileIs(tiles.getTileLocation(c, r), assets.tile`门`)) {
                tiles.setWallAt(tiles.getTileLocation(c, r), 布尔值)
            }
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`instrument0`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`exit`, function (sprite, location) {
    game.over(true)
})
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim`,
    100,
    false
    )
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim`,
    100,
    true
    )
})
let KeyCount = 0
let mySprite: Sprite = null
scene.setBackgroundColor(13)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`rockstar`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`stage`)
