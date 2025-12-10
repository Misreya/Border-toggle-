const button = document.querySelector('button');

const colors = [document.querySelector('.pink'), document.querySelector('.blue'), document.querySelector('.yellow')];

const [pink, blue, yellow] = colors;

const display = document.querySelector('p');

let clicks = 0;

function cycle() {
    colors.forEach((element) => element.classList.remove('border'));
    let i = clicks % colors.length;
    colors[i].classList.add('border');
    display.innerText = `${i} + ${clicks}`;
    clicks++;
};

button.addEventListener("click", function(){
    cycle();
});


if (i == colors.length - 1) {
    i = 0;
}


// const colorIndex = timeElapsed % COLORS.length;
//Need 3 variables for a circular array loop
//Index = increment variable (i.e clicks, seconds passed) % array.length
//clicks outside the loop, i inside
