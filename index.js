// Write your code in this file!
function scuberGreetingForFeet (feet){
  if (feet <= 400){
    return "This one is on me!"
  } else if (feet > 2000 && feet < 2500){
    return "I will gladly take your thirty bucks."
  } else if (feet > 2500){
    return "No can do."
  }
}

function ternaryCheckCity(city){
  let message;
  city === "NYC"? "Ok, sounds good." = true : "No go." = false;
  return `${message}`
}
