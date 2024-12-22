const tg = window.Telegram.WebApp;
tg.ready();
document.addEventListener('DOMContentLoaded', () => {
    const waitAmountDisplay = document.getElementById('wait-amount');
    const dynamicTextDisplay = document.getElementById('dynamic-text');
    const communityTaskButton = document.getElementById('community-task');
    const leaderboardButton = document.getElementById('leaderboard-btn');
    const waitButton = document.getElementById('wait-btn');
    const friendsButton = document.getElementById('friends-btn');
    const navButtons = document.querySelectorAll('.nav-btn');

    // Function to set a random WAIT amount between 10,000 and 20,000
    function setRandomWaitAmount() {
        const randomWaitAmount = Math.floor(Math.random() * (20000 - 10000 + 1)) + 10000;
        waitAmountDisplay.textContent = randomWaitAmount;
    }

    // Function to set a new dynamic text
    const dynamicTexts = [
        "Let's wait, let's see what happens",
        "The journey is the reward.",
        "Patience is a virtue."
    ];
    let currentTextIndex = 0;

    function setDynamicText() {
        dynamicTextDisplay.textContent = dynamicTexts[currentTextIndex];
        currentTextIndex = (currentTextIndex + 1) % dynamicTexts.length;
        setTimeout(setDynamicText, 24 * 60 * 60 * 1000)
    }

        // Function to handle button active
    function handleNavButtonClick(event) {
      navButtons.forEach(button => button.classList.remove('active'));
      event.target.classList.add('active');
    }

    // Initial setup
    setRandomWaitAmount();
    setDynamicText()

    // Event listeners for navigation buttons
    leaderboardButton.addEventListener('click', handleNavButtonClick);
    waitButton.addEventListener('click', handleNavButtonClick);
    friendsButton.addEventListener('click', handleNavButtonClick);

    // Event listener for community task button
    communityTaskButton.addEventListener('click', () => {
      const currentWaitAmount = parseInt(waitAmountDisplay.textContent, 10);
      waitAmountDisplay.textContent = currentWaitAmount + 1000;
      communityTaskButton.disabled = true;
      communityTaskButton.textContent = 'Subscribed! (+1000 WAIT)';
      tg.sendData('community_task_completed'); // отправляем событие в бот
    });
});
