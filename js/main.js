const bankroll      = document.getElementById('bankroll'),
      bet           = document.getElementById('bet'),
      selectedColor = document.getElementById('color'),
      rollBtn       = document.getElementById('rollBtn'),
      log           = document.getElementById('log');

/**
 * Array - a list of multiple values
 */
// The index for retrievning the elements in the array are 0-36, as following
// table[0] = 'green'
// table[1] = 'red'
// table[2] = 'black'
// table[3] = 'red'
// And so on ...
const table     = ['green','red','black','red','black','red','black','red','black','red','black',
                   'black','red','black','red','black','red','black','red','red','black',
                   'red','black','red','black','red','black','red','black','black','red',
                   'black','red','black','red','black','red'];

rollBtn.addEventListener('click', rollGame);

function rollGame(event) {
  console.log(event);
  // Prevents all default behavior of the element that the event is attached to
  event.preventDefault();

  // Input validation
  const betAmount = parseInt(bet.value, 10);
  const chosencolor = selectedColor.value;

  if (isNaN(betAmount) || betAmount <= 0) {
    logMessage('Please enter a valid bet amount.');
    return;
  }

  if (betAmount > bankroll.value) {
    logMessage('You cannot bet more than your current bankroll.');
    return;
  }
  // Rondom number between 0-36
  const random = Math.floor(Math.random() * 37) + 0;
  const color  = table[random];

  console.log(`Number: ${random}, color: ${color}`);

  console.log('You just rolled :)')
  const logMessage = `<p>Bet on ${chosencolor}. spinning the wheel...Stopped at ${color}.</p>`
  log.innerHTML = logMessage + log.innerHTML;

  // Determine win or loss
  if (color === chosencolor) {
    bankroll.value = parseInt(bankroll.value) + betAmount; //Player wins
    logMessage(`You won! Your new bankroll is: ${bankroll.value}`);
  } else {
    bankroll.value = parseInt(bankroll.value) - betAmount; //Player loses
    logMessage(`You lost! Your new  bankroll is: ${bankroll.value}`);
  }

  // Reset the bet input field
  bet.value = '';
}

function logMessage(message) {
  log.innerHTML = `<p>${message}</p>` + log.innerHTML;
}


/**
 * Exercises
 */
// 1. Skapa korrekt logik för att bestämma om spelaren vann eller ej
// 2. Justera bankroll och vissa korrekt meddelande i log, beroende om Spelaren Vann eller inte
// 3. Errorhantering: Lägg till validering på textfälten, så att endast nummer kan anges i textfältet, annars visa ett felmeddelande
// 4. Errorhantering: Se till att man ej kan satsa mer än vad man har i bankroll. Dvs undvik att spelaren kan spela med minus i bankroll
// 5. Avancerat: Skapa ett GUI där du via en loop generar alla element för ett visuellt skapa Roulette bordet.
// 6. Avancerat: Se till att animera så att för för varje "Roll", det hoppar mellan 10 random tal innan det landar på ett tal
// 7. Avancerat: Refactorera all kod till mindre funktioner
// 8. Avancerat: Skapa logik för att kunna spela/betta på siffror, och inte bara färg 
