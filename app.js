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
}

const readData = async () => { // Read Data Function

    const querySnapshot = await getDocs(collection(db, "todoData"));
    querySnapshot.forEach((doc) => {
        let {todos} = doc.data()
        console.log("ID => ", doc.id);
        console.log("Data => ", todos);
        let elm = `<div id ${doc.id}>${todos}</div>`;
        dataBox.innerHTML += elm;

    });

}

readData()


// Get Elements

const dataBox = document.getElementById("dataBox");

const addBtn = document.getElementById("addBtn"); // Add Data Button
addBtn.addEventListener("click", addData); // Add onClick Event