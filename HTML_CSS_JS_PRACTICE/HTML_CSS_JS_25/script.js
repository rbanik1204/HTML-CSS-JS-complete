try {
    let age =+ prompt("Enter your Age:");
    if (age>100)
        throw new ReferenceError("This is Probably not the case of running this")
    console.log("This script is still running!")//control will come to this line after execution of if block meaning if the control goes to catch still the control will return back
} catch (error) {
    console.log(error.message);
    console.log(error.stack);
}
console.log("This script is still running!")