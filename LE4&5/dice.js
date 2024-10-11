document.getElementById('rollButton').addEventListener('click', function() {
    // Generate a Random Number Between 1 and 6
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    // Update the Dice Image Based on the Random Number
    const diceImage = document.getElementById('diceImage'); // Changed ID to match HTML
    diceImage.src = `dice${randomNumber}.png`; // dice1.png to dice-6.png

    // Display the Result
    const result = document.getElementById('result');
    result.textContent = `You rolled a ${randomNumber}!`;
});