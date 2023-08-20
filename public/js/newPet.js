const form = document.getElementById('frm-newpet');
form.addEventListener('submit', callbackFunction);

async function callbackFunction(event) {
    event.preventDefault();

    const frmData = new FormData(form);
    const data = Object.fromEntries(frmData)

    console.log(data)

    const requestConfig = {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data)
    }

    try {        
        const createPet = await fetch(`/create-pet`, requestConfig)
        .then(response => response.json())
        .then((response) => {
            return response;
        })

        if (createPet.status != 200) {         
            throw new Error(createPet.message);
        }

        alert('Pet cadastrado com sucesso!');



    } catch (error) {
        alert(error.message);
    }


}