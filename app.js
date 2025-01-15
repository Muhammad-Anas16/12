import {

    db,
    collection,
    addDoc,
    getDocs,
    doc,
    deleteDoc,

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
    });


    const arr = Array.from(dataBox.childNodes);
    arr.forEach((child) => {
        const button = child.querySelector('button'); // Get the button element
        if (button) {
            // Add a click event listener to the button
            button.addEventListener('click', deleteData);
        }
    });

}

readData()

const deleteData = async (event) => {
    // Access the clicked button using event.target
    const button = event.target;

    // Access the button's ID
    const buttonId = button.id; // This is equivalent to your "doc.id"

    console.log(buttonId); // Print the ID (or perform other operations with it)

    await deleteDoc(doc(db, "todoData", buttonId));

    readData();
    location.reload()
}

// Get Elements

var dataBox = document.getElementById("dataBox");

const addBtn = document.getElementById("addBtn"); // Add Data Button
addBtn.addEventListener("click", addData); // Add onClick Event
