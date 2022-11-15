Kitronik_Piano.setNoteLength(250)
Kitronik_Piano.setKeySensitivity(16)
Kitronik_Piano.setKeyNoiseThreshold(14)
let Oktav = 0
basic.showIcon(IconNames.EigthNote)
basic.pause(1000)
basic.showString("roboTop by Arina")
basic.forever(function () {
    basic.clearScreen()
    if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K0)) {
        basic.showArrow(ArrowNames.North)
        Oktav = 0
    }
    if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K8)) {
        basic.showArrow(ArrowNames.South)
        Oktav = 1
    }
    if (Oktav == 0) {
        if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K9)) {
            basic.showLeds(`
                # # # . .
                # . # . .
                # . . . .
                # . # . .
                # # # . .
                `)
            music.playTone(262, music.beat(BeatFraction.Half))
        }
        if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K1)) {
            basic.showLeds(`
                # # # . .
                # . # . #
                # . . . #
                # . # . #
                # # # . .
                `)
            music.playTone(277, music.beat(BeatFraction.Half))
        }
        if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K10)) {
            basic.showLeds(`
                # # . . .
                # . # . .
                # . # . .
                # . # . .
                # # . . .
                `)
            music.playTone(294, music.beat(BeatFraction.Half))
        }
        if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K2)) {
            basic.showLeds(`
                # # . . .
                # . # . #
                # . # . #
                # . # . #
                # # . . .
                `)
            music.playTone(311, music.beat(BeatFraction.Half))
        }
        if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K11)) {
            basic.showLeds(`
                # # # . .
                # . . . .
                # # . . .
                # . . . .
                # # # . .
                `)
            music.playTone(330, music.beat(BeatFraction.Half))
        }
        if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K12)) {
            basic.showLeds(`
                # # # . .
                # . . . .
                # # . . .
                # . . . .
                # . . . .
                `)
            music.playTone(349, music.beat(BeatFraction.Half))
        }
        if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K3)) {
            basic.showLeds(`
                # # # . .
                # . . . #
                # # . . #
                # . . . #
                # . . . .
                `)
            music.playTone(370, music.beat(BeatFraction.Half))
        }
        if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K13)) {
            basic.showLeds(`
                # # # . .
                # . . . .
                # . . . .
                # . # . .
                # # # . .
                `)
            music.playTone(392, music.beat(BeatFraction.Half))
        }
        if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K4)) {
            basic.showLeds(`
                # # # . .
                # . . . #
                # . . . #
                # . # . #
                # # # . .
                `)
            music.playTone(415, music.beat(BeatFraction.Half))
        }
        if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K14)) {
            basic.showLeds(`
                . # . . .
                # . # . .
                # # # . .
                # . # . .
                # . # . .
                `)
            music.playTone(440, music.beat(BeatFraction.Half))
        }
        if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K5)) {
            basic.showLeds(`
                . # . . .
                # . # . #
                # # # . #
                # . # . #
                # . # . .
                `)
            music.playTone(466, music.beat(BeatFraction.Half))
        }
        if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K6)) {
            basic.showLeds(`
                # # . . .
                # . # . .
                # # . . .
                # . # . .
                # # . . .
                `)
            music.playTone(494, music.beat(BeatFraction.Half))
        }
        if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K7)) {
            basic.showLeds(`
                # # # . .
                # . # . .
                # . . . .
                # . # . .
                # # # . .
                `)
            music.playTone(523, music.beat(BeatFraction.Half))
        }
    }
    if (Oktav == 1) {
        if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K9)) {
            basic.showLeds(`
                # # # . .
                # . # . .
                # . . . .
                # . # . .
                # # # . .
                `)
            music.playTone(131, music.beat(BeatFraction.Half))
        }
        if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K1)) {
            basic.showLeds(`
                # # # . .
                # . # . #
                # . . . #
                # . # . #
                # # # . .
                `)
            music.playTone(139, music.beat(BeatFraction.Half))
        }
        if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K10)) {
            basic.showLeds(`
                # # . . .
                # . # . .
                # . # . .
                # . # . .
                # # . . .
                `)
            music.playTone(147, music.beat(BeatFraction.Half))
        }
        if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K2)) {
            basic.showLeds(`
                # # . . .
                # . # . #
                # . # . #
                # . # . #
                # # . . .
                `)
            music.playTone(156, music.beat(BeatFraction.Half))
        }
        if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K11)) {
            basic.showLeds(`
                # # # . .
                # . . . .
                # # . . .
                # . . . .
                # # # . .
                `)
            music.playTone(165, music.beat(BeatFraction.Half))
        }
        if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K12)) {
            basic.showLeds(`
                # # # . .
                # . . . .
                # # . . .
                # . . . .
                # . . . .
                `)
            music.playTone(175, music.beat(BeatFraction.Half))
        }
        if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K3)) {
            basic.showLeds(`
                # # # . .
                # . . . #
                # # . . #
                # . . . #
                # . . . .
                `)
            music.playTone(185, music.beat(BeatFraction.Half))
        }
        if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K13)) {
            basic.showLeds(`
                # # # . .
                # . . . .
                # . . . .
                # . # . .
                # # # . .
                `)
            music.playTone(196, music.beat(BeatFraction.Half))
        }
        if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K4)) {
            basic.showLeds(`
                # # # . .
                # . . . #
                # . . . #
                # . # . #
                # # # . .
                `)
            music.playTone(208, music.beat(BeatFraction.Half))
        }
        if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K14)) {
            basic.showLeds(`
                . # . . .
                # . # . .
                # # # . .
                # . # . .
                # . # . .
                `)
            music.playTone(220, music.beat(BeatFraction.Half))
        }
        if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K5)) {
            basic.showLeds(`
                . # . . .
                # . # . #
                # # # . #
                # . # . #
                # . # . .
                `)
            music.playTone(233, music.beat(BeatFraction.Half))
        }
        if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K6)) {
            basic.showLeds(`
                # # . . .
                # . # . .
                # # . . .
                # . # . .
                # # . . .
                `)
            music.playTone(247, music.beat(BeatFraction.Half))
        }
        if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K7)) {
            basic.showLeds(`
                # # # . .
                # . # . .
                # . . . .
                # . # . .
                # # # . .
                `)
            music.playTone(262, music.beat(BeatFraction.Half))
        }
    }
})
basic.forever(function () {
    Kitronik_Piano.fullPianoPlay()
})
