// console.log("Hi");

//adding an element
const arr = ["Pram", "Sineth", "Dil"];
localStorage.setItem('user', JSON.stringify(arr));
// console.log(JSON.parse(localStorage.getItem('user')))

// localStorage.removeItem('user');
temparr = JSON.parse(localStorage.getItem('user'))
// console.log(JSON.parse(localStorage.getItem('user')))
temparr[3] = "Dul"
console.log()



temparr.forEach(element => {
            let myDiv = document.getElementById("myDiv");

            // creating checkbox element
            let checkbox = document.createElement('input');
 
            // Assigning the attributes to created checkbox
            checkbox.type = "text";
            checkbox.name = "name";
            checkbox.value = element;
            checkbox.id = "id";
 
            //creating a br tag for each
            myDiv.appendChild(document.createElement('br'))
 
            // appending the checkbox and label to div
            myDiv.appendChild(checkbox);
            // myDiv.appendChild(label);
            let button = document.createElement('input');
            button.type = "submit";
            button.name = "name";
            // button.value = ;
            button.id = "id";



            myDiv.appendChild(button);

});