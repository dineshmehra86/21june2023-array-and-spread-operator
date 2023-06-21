// Rest Operator (...) is used inside function defination argument. It store multiple aurguments

// 1. Function Defination
function getMyFullName(...args) {
console.log(args);
}
// 2. Function Calling/Invoking
getMyFullName('Komal', "Mehra", 30, 5.3, ["Ram", "Kush"]); // Actual Agruments/Parameter