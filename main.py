def A空転():
        pins.analog_write_pin(AnalogPin.P13, 0)
        pins.analog_write_pin(AnalogPin.P14, 0)
def A逆転():
    pins.analog_write_pin(AnalogPin.P13, 0)
    pins.analog_write_pin(AnalogPin.P14, 1023)
def A正転():
    pins.analog_write_pin(AnalogPin.P13, 1023)
    pins.analog_write_pin(AnalogPin.P14, 0)
def Aブレーキ():
    pins.analog_write_pin(AnalogPin.P13, 1023)
    pins.analog_write_pin(AnalogPin.P14, 1023)

def B空転():
    pins.analog_write_pin(AnalogPin.P15, 0)
    pins.analog_write_pin(AnalogPin.P16, 0)
def B逆転():
    pins.analog_write_pin(AnalogPin.P15, 0)
    pins.analog_write_pin(AnalogPin.P16, 1023)
def B正転():
    pins.analog_write_pin(AnalogPin.P15, 1023)
    pins.analog_write_pin(AnalogPin.P16, 0)
def Bブレーキ():
    pins.analog_write_pin(AnalogPin.P15, 1023)
    pins.analog_write_pin(AnalogPin.P16, 1023)

def 前進():
    A正転()
    B正転()
def 後進():
    A逆転()
    B逆転()
def 左回り():
    Aブレーキ()
    B正転()
def 右回り():
    A正転()
    Bブレーキ()
def ブレーキ():
    Aブレーキ()
    Bブレーキ()
def 空転():
    A空転()
    B空転()

def on_button_pressed_a():
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

input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    pass
basic.forever(on_forever)
