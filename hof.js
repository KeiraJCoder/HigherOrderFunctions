// Define a function to log a greeting based on the time of day.
const whichGreeting = (timeOfDay) => {
    // Corrected to use template literals for variable substitution.
    console.log(`Good ${timeOfDay}`);
};

// Define a function to determine the part of the day and execute a callback function.
const greet = (time, fn) => {
    // Check if the time is in the morning (less than 1200).
    if (time < 1200) {
        // If it's morning, execute the callback with 'Morning'.
        fn('Morning');
    } 
    // Check if the time is in the afternoon (between 1200 and 1800).
    else if (time >= 1200 && time < 1800){
        // If it's afternoon, execute the callback with 'Afternoon'.
        fn('Afternoon')
    } 
    // If it's neither morning nor afternoon, it must be evening.
    else {
        // If it's evening, execute the callback with 'Evening'.
        fn('Evening')
    }
}

// Example usage:
// greet(1000, whichGreeting); // Outputs: Good Morning
// greet(1500, whichGreeting); // Outputs: Good Afternoon
// greet(1900, whichGreeting); // Outputs: Good Evening