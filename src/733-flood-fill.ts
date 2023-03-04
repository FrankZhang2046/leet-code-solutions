function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    function recursiveHelper(row: number, col: number, targetColor: number): void {
        if (row < 0 || col < 0) {
            return;
        }
        if ((image.length - 1) < row || (image[row].length - 1) < col) {
            return;
        }
        else {
            if (image[row][col] === targetColor) {
                if (image[row][col] !== color) {
                    image[row][col] = color;
                    recursiveHelper(row, col + 1, targetColor);
                    recursiveHelper(row, col - 1, targetColor);
                    recursiveHelper(row - 1, col, targetColor);
                    recursiveHelper(row + 1, col, targetColor);
                }
            } else {
                return;
            }
        }
    }

    recursiveHelper(sr, sc, image[sr][sc]);
    return image;
};