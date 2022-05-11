input.onButtonPressed(Button.A, function () {
    radio.sendNumber(10)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(30)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(20)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(40)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(50)
})
basic.forever(function () {
    radio.setGroup(154)
})
