window.addEventListener('DOMContentLoaded', function() {
    let btn = document.createElement('button'); 
    btn.innerHTML = 'Add Square';
    document.body.appendChild(btn);
    console.log('Button Added');
    // Create button upon loading.
    
    let sumOfBoxes = 0
    // Create variable to calculate div.id. 
   
    btn.addEventListener('click', function() {
        let div = document.createElement('div');
        div.className = 'boxy';
        document.body.appendChild(div);    
        // Add div when button is clicked. Assign class. 
        // alert('Hello World!'); 
        
        sumOfBoxes++;
        div.id = sumOfBoxes;
        //Set id to a variable with counter. This doesn't work. It makes me frustrated. :^/ 
        div.addEventListener("mouseEnter", function() {
            document.getElementById(id).display = sumOfBoxes;
            div.innerText = "Id: " + sumOfBoxes;

        })

        document.getElementById(sumOfBoxes).addEventListener('click', function () {
            let colorz = ['red', 'gray', 'white', 'crimson', 'dark gray'];
            div.style.backgroundColor = colorz[Math.floor(Math.random() * colorz.length)];
            // Change to random background color upon a click.
        })

        


    })
    
});

