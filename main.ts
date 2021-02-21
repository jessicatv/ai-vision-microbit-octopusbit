input.onButtonPressed(Button.B, function () {
    PlanetX_AILens.initModule()
    PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.Ball)
    PlanetX_AILens.cameraImage()
    if (PlanetX_AILens.ballColor(PlanetX_AILens.ballColorList.Red)) {
        music.playMelody("E D C G - - - - ", 120)
        basic.showLeds(`
            . . . . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
    }
})
PlanetX_AILens.initModule()
PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.Ball)
basic.forever(function () {
    PlanetX_AILens.cameraImage()
    if (PlanetX_AILens.ballColor(PlanetX_AILens.ballColorList.Red)) {
        music.playMelody("E D C G - - - - ", 120)
        basic.showLeds(`
            . . . . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
    }
})
