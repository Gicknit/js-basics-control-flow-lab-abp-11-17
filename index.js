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
  city === "NYC"? city = true : city= false;
  return "Ok, sounds good."
}
