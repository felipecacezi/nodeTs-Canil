document.getElementById('frm-newpet').addEventListener('submit', async (e)=>{
    e.preventDefault();

    const file = document.getElementById('file').files[0];
    const petType = document.getElementById('pet_type').value;
    const name = document.getElementById('name').value;
    const color = document.getElementById('color').value;
    const sex = document.getElementById('sex').value;

    const formData = new FormData();
    formData.append('file', file, name);
    formData.append('pet_type', petType);
    formData.append('name', name);
    formData.append('color', color);
    formData.append('sex', sex);

    try {  
        const createPet = await fetch('/create-pet',{
            method: 'post',
            body: formData,
        }).then(res => res.json())
        .then((response) => {
            return response;
        })
        .catch(err => console.log(err));

        if (createPet.status != 201) {         
            throw new Error(createPet.message);
        }

        alert('Pet cadastrado com sucesso!');
        cleanForm();
    } catch (error) {
        alert(error.message);
    }

})

const cleanForm = () => {
    document.getElementById('file').value = '';
    document.getElementById('pet_type').value = '';
    document.getElementById('name').value = '';
    document.getElementById('color').value = '';
    document.getElementById('sex').value = '';
}