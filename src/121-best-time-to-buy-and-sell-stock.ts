function maxProfit(prices: number[]): number {
    let maxProfit = 0;
    let min = Infinity;
    for (let i=0; i<prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        } 
        if (prices[i] > min) {
            const newProfit = prices[i] - min;
            if (newProfit > maxProfit) {
                maxProfit = newProfit;
            }
        }
    }
    return maxProfit;
};