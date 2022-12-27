//increment home number

let homeNumber = document.getElementById("home-number")
let homeNumberValue = 0

function homeIncrement1() {
    homeNumberValue += 1    
    homeNumber.textContent = homeNumberValue
}

function homeIncrement2() {
    homeNumberValue += 2    
    homeNumber.textContent = homeNumberValue
}

function homeIncrement3() {
    homeNumberValue += 3    
    homeNumber.textContent = homeNumberValue
}

//increment guest number

let guestNumber = document.getElementById("guest-number")
let guestNumberValue = 0

function guestIncrement1() {
    guestNumberValue += 1
    guestNumber.textContent = guestNumberValue
}

function guestIncrement2() {
    guestNumberValue += 2
    guestNumber.textContent = guestNumberValue
}

function guestIncrement3() {
    guestNumberValue += 3
    guestNumber.textContent = guestNumberValue
}