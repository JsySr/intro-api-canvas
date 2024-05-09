document.addEventListener('DOMContentLoaded', function () {
    // Function to draw a centered square in each canvas
    const drawCenteredSquare = (canvasId, color) => {
        const canvas = document.getElementById(canvasId);
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = color; // Set fill color
        let size = 100; // Size of the square
        let x = (canvas.width - size) / 2; // Center the square horizontally
        let y = (canvas.height - size) / 2; // Center the square vertically
        ctx.fillRect(x, y, size, size); // Draw the square
    };

    // Draw squares in all canvases with the color yellow
    ['canvas1', 'canvas2', 'canvas3', 'canvas4', 'canvas5', 'canvas6'].forEach(canvasId => {
        drawCenteredSquare(canvasId, 'PINK');
    });
});