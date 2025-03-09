radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("help")
    music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
})
radio.setGroup(1)
