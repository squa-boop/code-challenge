function checkSpeed(speed) {
    // Set the speed limit for the road
    const speedLimit = 70;
    // Define the threshold for demerit points
    const demeritPointThreshold = 5;
    // Set the maximum number of demerit points before license suspension
    const maxDemeritPoints = 12;

    // Check if the speed is within the limit
    if (speed <= speedLimit) {
        console.log("Ok");  // Speed is okay; no action needed
    } else {
        // Calculate the number of demerit points based on how much the speed exceeds the limit
        const demeritPoints = Math.floor((speed - speedLimit) / demeritPointThreshold);
        console.log(`Points: ${demeritPoints}`); // Output the calculated demerit points

        // Check if the demerit points exceed the maximum allowed
        if (demeritPoints > maxDemeritPoints) {
            console.log("License suspended"); // License is suspended if points exceed maximum
        }
    }
}

// Test the function with different speed values
checkSpeed(60);  // Speed is within the limit, should output "Ok"
checkSpeed(70);  // Speed is exactly at the limit, should output "Ok"
