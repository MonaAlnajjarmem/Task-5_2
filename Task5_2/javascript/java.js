const inpnumber = document.querySelector(".first-number");
const btn = document.querySelector(".calculate"); // Corrected selector
const from = document.getElementById("from"); // Corrected selector
const to = document.getElementById("to"); // Corrected selector
const resultSpan = document.querySelector(".resultSpan");
const Switch = document.querySelector(".switch");

function calculate() {
    let result = 0;

    // Get the selected values
    const fromValue = from.value;
    const toValue = to.value;

    // Convert the input number based on selected units
    if (fromValue === "meters") {
        if (toValue === "meters") {
            result = inpnumber.value;
        } else if (toValue === "kilometers") {
            result = inpnumber.value * 0.001; // Corrected conversion factor
        } else if (toValue === "cm") {
            result = inpnumber.value * 100; // Corrected conversion factor
        }
    } else if (fromValue === "kilometers") {
        if (toValue === "meters") {
            result = inpnumber.value * 1000; // Corrected conversion factor
        } else if (toValue === "kilometers") {
            result = inpnumber.value;
        } else if (toValue === "cm") {
            result = inpnumber.value * 100000; // Corrected conversion factor
        }
    } else if (fromValue === "cm") {
        if (toValue === "meters") {
            result = inpnumber.value / 100; // Corrected conversion factor
        } else if (toValue === "kilometers") {
            result = inpnumber.value * 0.00001; // Corrected conversion factor
        } else if (toValue === "cm") {
            result = inpnumber.value;
        }
    }

    // Display the result
    resultSpan.textContent = result; // Update the displayed result
}
function sw() {
    const temp = from.value;
    from.value = to.value;
    to.value = temp;
}
Switch.addEventListener("click", sw);

btn.addEventListener("click", calculate);