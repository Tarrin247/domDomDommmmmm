window.addEventListener('DOMContentLoaded', function () {
    let btn = document.createElement('button');
    btn.innerHTML = 'Add Square';
    document.body.appendChild(btn);
    console.log('Button Added');
    // Create button upon loading.

    let sumOfBoxes = 0
    // Create variable to calculate div.id. 

    btn.addEventListener('click', function () {
        let div = document.createElement('div');
        div.className = 'boxy';
        
        document.body.appendChild(div);

        let numSpan = document.createElement('span');
        numSpan.style.color = 'white';
        numSpan.innerText = sumOfBoxes;
        numSpan.style.visibility = 'hidden';
        numSpan.id = 'sumBoxy'
        div.appendChild(numSpan);

        sumOfBoxes++;
        div.id = sumOfBoxes;
        div.addEventListener("mouseover", function () {
            document.getElementById('sumBoxy').style.visibility = "visable";
            console.log(numSpan);
        })

        document.getElementById(sumOfBoxes).addEventListener('click', function () {
            let colorz = ['red', 'gray', 'white', 'crimson', 'dark gray'];
            div.style.backgroundColor = colorz[Math.floor(Math.random() * colorz.length)];
            // Change to random background color upon a click.
        })




    })

});

