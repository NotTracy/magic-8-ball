input.onButtonPressed(Button.A, function () {
    random = randint(0, 2)
    if (random == 2) {
        basic.showString("Yes")
    } else if (random == 1) {
        basic.showString("No")
    } else {
        basic.showString("Maybe")
    }
})
let random = 0
basic.showLeds(`
    . # # # .
    # . # . #
    # # . # #
    # . # . #
    . # # # .
    `)
basic.clearScreen()
basic.pause(500)
basic.showString("Ask A Question")
random = 0
