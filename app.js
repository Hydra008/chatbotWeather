'use strict';

const Readline = require("readline");

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
   console.log(`you said ${reply}`);
   rl.prompt();
});
