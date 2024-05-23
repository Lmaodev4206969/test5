document.getElementById("stakingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const amountInput = document.getElementById("amount");
    const stakedAmountDisplay = document.getElementById("stakedAmount");

    // Get the current staked amount
    let currentStakedAmount = parseFloat(stakedAmountDisplay.textContent);

    // Get the amount to stake from the input
    const amountToStake = parseFloat(amountInput.value);

    // Update the staked amount
    currentStakedAmount += amountToStake;
    stakedAmountDisplay.textContent = currentStakedAmount.toFixed(2);

    // Reset the input field
    amountInput.value = '';
});

const token1Select = document.getElementById("token1");
const apyDisplay = document.getElementById("apy");

const apyRates = {
    "TokenA": 113,
    "TokenB": 125,
    "TokenC": 133,
    "TokenD": 102,
    "TokenE": 198,
    "TokenF": 190
};

function updateAPY() {
    const token1 = token1Select.value;

    if (apyRates[token1]) {
        apyDisplay.textContent = `${apyRates[token1]}%`;
    } else {
        apyDisplay.textContent = "0%";
    }
}

token1Select.addEventListener("change", updateAPY);


