input.onButtonPressed(Button.A, function () {
    while (pins.digitalReadPin(DigitalPin.P2) == 0) {
        servos.P0.run(Motor2)
        servos.P1.run(Motor1)
        basic.pause(100)
    }
    servos.P0.stop()
    servos.P1.stop()
})
let Motor1 = 0
let Motor2 = 0
Motor2 = -20
Motor1 = 10
basic.forever(function () {
    basic.showNumber(pins.digitalReadPin(DigitalPin.P2))
})
