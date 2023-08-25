const petsDelete = document.getElementsByClassName('btn-delete');

for (const petDelete of petsDelete) {

    petDelete.addEventListener('click', async function handlerClick(event) {
        event.preventDefault();
        const msgConfirm = "Você realmente deseja excluir o pet selecionado?";
        if (confirm(msgConfirm) !== true) {
            return;
        }

        try {
            let deletePet = await fetch(`/delete-pet/${petDelete.getAttribute('data-id')}`,{
                method: 'delete'
            }).then(response => response.json())
            .then((response) => {
                return response;
            })
            .catch(err => err);

            if (deletePet.status != 200) {
                throw new Error(deletePet.message);
            }

            alert('Pet excluído com sucesso');

            window.location.reload();
        } catch (error) {
            alert(error.message);
        }
    })

}
