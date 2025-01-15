import {

    db,
    collection,
    addDoc,
    getDocs,

} from "./firebase.js";

// Functions

const addData = async () => { // Add Data Function

    let inp = document.getElementById("text");

    try {
        const docRef = await addDoc(collection(db, "todoData"), {
            todos: inp.value,
        })
        console.log("Document written with ID: ", docRef.id);
        console.log("Add Succesfully");
    } catch (e) {
        console.error("Error adding document: ", e);
    }

    inp.value = "";

    readData()
    location.reload()
}

const readData = async () => { // Read Data Function

    const querySnapshot = await getDocs(collection(db, "todoData"));
    querySnapshot.forEach((doc) => {
        let { todos } = doc.data()
        let elm = document.createElement("div");
        elm.innerHTML = `${todos} <button id="${doc.id}">Del</button>`;
        dataBox.appendChild(elm);
        console.log(doc.id)
    });

    
    const childArr = Array.from(dataBox.childNodes);

    // Add event listeners to the "Del" buttons
    childArr.forEach((child) => {
        const button = child.querySelector('button'); // Get the button element
        if (button) {
            button.addEventListener('click', (event) => {console.log(event.target.id)});
        }
    });

}

readData()

let deleteData = () => {

}

// Get Elements

var dataBox = document.getElementById("dataBox");
// console.log("Date =>", Number(new Date().getTime().toString().slice(9) + Math.floor(Math.random() * 100 + 100)));

const addBtn = document.getElementById("addBtn"); // Add Data Button
addBtn.addEventListener("click", addData); // Add onClick Event
