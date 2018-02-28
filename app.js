'use strict';

const Readline = require("readline");
const matcher  = require("./matcher");

//creates a REPL instance with commandline as stdin and std out
//terminal is set to false to avoid it to behave like normal tele type  which echoes back user input
const rl = Readline.createInterface({
    input:process.stdin,
    output:process.stdout,
    terminal:false
})

//sets the visible prompt to >
rl.setPrompt('> ');
//rendering the prompt
rl.prompt();
//line is an inbuilt event which is called at the end of line
rl.on("line", reply =>{
   matcher(reply, data => {
    switch (data.intent) {
        case 'Hello':
            console.log(`${data.entities.greeting} to you too`);
            rl.prompt();
            break;
        case'Exit':
            console.log("Have a good one");
            process.exit(0);

        default:{
            console.log("I don't know what you mean !!! Can you tell me more clearly");
            rl.prompt();
        }
    }
   });
});
