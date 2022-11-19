//Write a for loop that logs 0-15
//for (let i = 0; i <= 15; i++) {console.log(i)}

//Write a for loop that counts from 15-0
//for (let i = 15; i >= 0; i--) {console.log(i)}

//Make variable laps = 0; write a for loop that logs (“that’s another lap!”) and adds 1 to the laps variable. AFTER the loop, log laps.
//laps = 0 ; for(let i = 0; i < 15; i++) {laps++;console.log("that’s another lap!")}; console.log(laps);


/* -----git add, commit, push----- */

//Make variable age. Make a loop from 0-100. In every loop check if i == age, if so log something, else say “age doesn’t match”.
//age = Math.floor(Math.random()*120);
//
//for (let i = 0; i <= 100; i++) 
//{
//    if(i == age){console.log(`The age is ${age}`);break}; 
//    if(i == 100){console.log(`The age doesn’t match`)}
//}

//Write a loop that logs all even numbers from 0-700.
//for (let i = 0; i <= 700; i++) {if(i % 2 == 0)console.log(i)}

//Write a loop that logs all odd numbers from 0-700.
//for (let i = 0; i <= 700; i++) {if(i % 2 !== 0)console.log(i)}

//Write a loop with some “if else” statements. The loop should start at 1900 and go to 1949 and log when things were invented. For example when i = 1902 the code should log “it is 1902 - the teddy bear is invented!”
for (let i = 1900; i < 1949; i++) 
{
    //I wrote shortened if statement Hope it is okay 
    i == 1900? console.log(`it is ${i} - the Zeppelin is invented!`): 
    i == 1902? console.log(`it is ${i} - the Teddy Bear is invented!`):
    i == 1910? console.log(`it is ${i} - the Talking Motion Picture is invented!`):
    i == 1913? console.log(`it is ${i} - the Bra is invented!`):
    i == 1918? console.log(`it is ${i} - the Fortune Cookie is invented!`):
    i == 1923? console.log(`it is ${i} - the Traffic Signal is invented!`):
    i == 1935? console.log(`it is ${i} - the Radar is invented!`):
    i == 1938? console.log(`it is ${i} - the Ballpoint Pen is invented!`):
    i == 1943? console.log(`it is ${i} - the Slinky is invented!`):null
}


/* git add, commit, push */