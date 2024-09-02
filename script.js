document.addEventListener("DOMContentLoaded", function() {
    const pixelContainer = document.getElementById("pixel-container");
    const colorPicker = document.getElementById("color-picker");
    const purchaseButton = document.getElementById("purchase-pixel");
    let selectedPixel = null;

    // Create 10,000 blocks, each representing a 10x10 grid of pixels
    for (let i = 0; i < 10000; i++) {
        const block = document.createElement("div");
        block.classList.add("pixel");
        block.addEventListener("click", () => {
            selectedPixel = block;
        });
        pixelContainer.appendChild(block);
    }

    // Purchase and color the selected block (simulating 10x10 pixels)
    purchaseButton.addEventListener("click", () => {
        if (selectedPixel) {
            // In a real implementation, you would integrate payment processing here
            selectedPixel.style.backgroundColor = colorPicker.value;
            selectedPixel = null; // Deselect pixel after purchase
        } else {
            alert("Please select a pixel to purchase.");
        }
    });
});
