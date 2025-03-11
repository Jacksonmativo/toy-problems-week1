function speedDetector(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        let points = Math.floor((speed - speedLimit) / kmPerPoint);
        console.log(`Points: ${points}`);
        if (points > 12) {
            console.log("License suspended");
        }
    }
}

// Example usage:
speedDetector(80); // Output: Points: 2
