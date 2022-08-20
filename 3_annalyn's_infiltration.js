const knightIsAwake = true;
const archerIsAwake = true;
const prisonerIsAwake = true;
const petDogIsPresent = true;
// can Execute Fast Attack
export function canExecuteFastAttack(knightIsAwake) {
  return knightIsAwake ? false : true;
}
// can Spy
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  if(!knightIsAwake && !archerIsAwake && !prisonerIsAwake){
      return false;
    }
     else if(knightIsAwake && archerIsAwake && prisonerIsAwake){
      return true;
    }
   else if(knightIsAwake && !archerIsAwake){
      return true;
    }
   else if(!knightIsAwake && archerIsAwake){
      return true;
    }
  else  if(!knightIsAwake && !archerIsAwake){
      return true;
    }
  else{
    return false;
  }
}
// can Signal Prisoner
export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  if (prisonerIsAwake && !archerIsAwake)
    return true;
  else 
    return false;
}
// can Free Prisoner
export function canFreePrisoner( 
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
 ) {
if(petDogIsPresent&&!archerIsAwake)
  return true;
else if (prisonerIsAwake && !knightIsAwake &&  !archerIsAwake)
  return true;
else 
  return false;
}
