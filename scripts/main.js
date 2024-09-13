let confetti = new Confetti('name');

confetti.setCount(75);
confetti.setSize(1);
confetti.setPower(25);
confetti.setFade(false);
confetti.destroyTarget(false);

let nameClicks = 0;

document.querySelector("#name").addEventListener("click", () => {
    
    nameClicks++;
    if(nameClicks === 100) {
        alert("You must really like confetti... clicking my name 100 times");
    }

});