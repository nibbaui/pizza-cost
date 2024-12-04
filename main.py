HST = 0.13
MATERIAL = 0.5
RENT = 1
LABOUR = 0.75
diameter = game.ask_for_number("\"what is the diameter of the pizza you want (inch)")
subtotal = LABOUR + RENT + (MATERIAL * diameter)
tax = subtotal * HST
total = subtotal + tax
game.splash("your total is: $" + str(total))