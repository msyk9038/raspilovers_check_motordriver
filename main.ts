function A空転() {
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P14, 0)
}

function A逆転() {
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P14, 1023)
}

function A正転() {
    pins.analogWritePin(AnalogPin.P13, 1023)
    pins.analogWritePin(AnalogPin.P14, 0)
}

function Aブレーキ() {
    pins.analogWritePin(AnalogPin.P13, 1023)
    pins.analogWritePin(AnalogPin.P14, 1023)
}

function B空転() {
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, 0)
}

function B逆転() {
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, 1023)
}

function B正転() {
    pins.analogWritePin(AnalogPin.P15, 1023)
    pins.analogWritePin(AnalogPin.P16, 0)
}

function Bブレーキ() {
    pins.analogWritePin(AnalogPin.P15, 1023)
    pins.analogWritePin(AnalogPin.P16, 1023)
}

function 前進() {
    A正転()
    B正転()
}

function 後進() {
    A逆転()
    B逆転()
}

function 左回り() {
    Aブレーキ()
    B正転()
}

function 右回り() {
    A正転()
    Bブレーキ()
}

function ブレーキ() {
    Aブレーキ()
    Bブレーキ()
}

function 空転() {
    A空転()
    B空転()
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    前進()
    basic.pause(1000)
    空転()
    basic.pause(1000)
    後進()
    basic.pause(1000)
    空転()
    basic.pause(1000)
    左回り()
    basic.pause(1000)
    右回り()
    basic.pause(1000)
    ブレーキ()
    basic.pause(1000)
})
basic.forever(function on_forever() {
    
})
