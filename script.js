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
    "TokenA": 33,
    "TokenB": 25,
    "TokenC": 133,
    "TokenD": 102,
    "TokenE": 98,
    "TokenF": 73
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


