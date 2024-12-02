function makeTextBigger() {
    alert("Hello, world!"); // Test alert
    const textArea = document.getElementById("textarea");
    textArea.style.fontSize = "24pt";
}

// Function to increase font size to 24pt
function makeTextBigger() {
    const textArea = document.getElementById("textarea");
    textArea.style.fontSize = "24pt";
}

function applyFancyStyle() {
    alert("FancyShmancy selected!"); // Testing alert
    const textArea = document.getElementById("textarea");
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
}

function applyBoringStyle() {
    alert("BoringBetty selected!"); // Testing alert
    const textArea = document.getElementById("textarea");
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
}

// Function to apply FancyShmancy styles
function applyFancyStyle() {
    const textArea = document.getElementById("textarea");
    textArea.style.fontWeight = "bold";       // Make text bold
    textArea.style.color = "blue";           // Change text color to blue
    textArea.style.textDecoration = "underline"; // Underline the text
}

// Function to remove FancyShmancy styles (BoringBetty)
function applyBoringStyle() {
    const textArea = document.getElementById("textarea");
    textArea.style.fontWeight = "normal";    // Reset font weight
    textArea.style.color = "black";          // Reset text color to black
    textArea.style.textDecoration = "none"; // Remove underline
}

// Function to Mooify text: uppercase and add '-Moo'
function mooifyText() {
    const textArea = document.getElementById("textarea");
    let text = textArea.value.toUpperCase(); // Convert text to uppercase

    // Split sentences, add "-Moo" to the last word of each sentence
    const sentences = text.split(".");
    for (let i = 0; i < sentences.length - 1; i++) {
        sentences[i] = sentences[i].trim() + "-Moo";
    }

    // Join sentences back and update the text area
    textArea.value = sentences.join(". ");
}
