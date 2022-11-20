/* 1. Write a function named tellFortune that:
● takes 4 arguments: number of children, partner's name, geographic location, job title.
● outputs your fortune to the screen like so: &quot;You will be a X in Y, and married to Z with N kids.&quot;
Call that function 3 times with 3 different values for the arguments. */

function tellFortune(children, location, partner, job) {
      
    return `You will be a ${job} in ${location} and married to ${partner} with ${children} kids.`;
}
  
  
  console.log(tellFortune("2", "Belgrade", "Vuk", "QA"));
  console.log(tellFortune("4", "London", "Steve", "architect"));
  console.log(tellFortune("3", 'NYC', 'Tom', "developer"));