const poll = { 
    question: "What is your favourite programming language?", 
    options: ["0: JavaScript\n", "1: Python\n", "2: Rust\n", "3: C++\n"], 
    answers: new Array(4).fill(0),
    };

    

    function registerNewAnswer() {
        const ans= window.prompt(`${poll.question}\n\n${poll.options.join('\n')}`);
        const answer = Number(ans);
        poll.answers[answer]++;
        displayResults();
    
    }
    function displayResults() {
        console.log("Poll Results:");
        for (let i = 0; i < poll.options.length; i++) {
          console.log(`${poll.options[i]}: ${poll.answers[i]} votes`);
        }
      }
      registerNewAnswer();
    

