let HST = 0.13
let MATERIAL = 0.5
let RENT = 1
let LABOUR = 0.75
let diameter = game.askForNumber("\"what is the diameter of the pizza you want (inch)")
let subtotal = LABOUR + RENT + MATERIAL * diameter
let tax = subtotal * HST
let total = subtotal + tax
game.splash("your total is: $" + ("" + total))
