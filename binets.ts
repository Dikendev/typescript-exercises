const binets = (nth: number): number => {
    const first = Math.pow((1 + Math.sqrt(5)), nth);
    const second = Math.pow((1 - Math.sqrt(5)), nth);
    return (first - second) / (Math.pow(2, nth) * Math.sqrt(5));
};

console.log(binets(13))
