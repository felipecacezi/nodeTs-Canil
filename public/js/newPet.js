async function saveNewPet(event) {
    event.preventDefault();

    console.log(event);
    

    const petRequest = {
        method: 'POST',
        body: [],
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    };

    await fetch(`/create-pet`)
    .then(response => json())
    .then(json => console.log(json))
    .catch(err => console.log('Request is failed', err));
}

document.getElementById("btn-newpet")
.addEventListener(
    "click",
    saveNewPet,
    false
);