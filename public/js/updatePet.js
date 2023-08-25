document.getElementById('frm-updatepet').addEventListener('submit', async (e)=>{
    e.preventDefault();

    const file = document.getElementById('file').files[0];
    const petType = document.getElementById('pet_type').value;
    const name = document.getElementById('name').value;
    const color = document.getElementById('color').value;
    const sex = document.getElementById('sex').value;

    const formData = new FormData();
    if (file) {
        formData.append('file', file, name);
    }
    formData.append('pet_type', petType);
    formData.append('name', name);
    formData.append('color', color);
    formData.append('sex', sex);
    formData.append('id', document.location?.pathname.split('/')[2]);

    try {
        const createPet = await fetch('/update-pet',{
            method: 'put',
            body: formData,
        }).then(res => res.json())
        .then((response) => {
            return response;
        })
        .catch(err => console.log(err));

        if (createPet.status != 201) {
            throw new Error(createPet.message);
        }

        alert('Pet alterado com sucesso!');
        cleanForm();
    } catch (error) {
        alert(error.message);
    }

})