document.querySelectorAll('input[name="category"]').forEach(function(checkbox) {
    checkbox.addEventListener('change', function(event) {
        const otherCourseInput = document.getElementById('other-category');
        if (event.target.value === 'outros' && event.target.checked) {
            otherCourseInput.style.display = 'block';
        } else if (event.target.value === 'outros' && !event.target.checked) {
            otherCourseInput.style.display = 'none';
        }
    });
});

document.querySelectorAll('input[name="bond"]').forEach(function(checkbox) {
    checkbox.addEventListener('change', function(event) {
        const otherLevelInput = document.getElementById('other-deficiency');
        if (event.target.value === 'outros' && event.target.checked) {
            otherLevelInput.style.display = 'block';
        } else if (event.target.value === 'outros' && !event.target.checked) {
            otherLevelInput.style.display = 'none';
        }
    });
});

document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const category = Array.from(document.querySelectorAll('input[name="category"]:checked'))
                         .map(checkbox => checkbox.value === 'outros' ? document.getElementById('other-category').value : checkbox.value);
    const bond = Array.from(document.querySelectorAll('input[name="bond"]:checked'))
                         .map(checkbox => checkbox.value === 'outros' ? document.getElementById('other-bond').value : checkbox.value);
    const UJ = document.getElementById('UJ').value;
    const gender = document.getElementById('gender').value;
    const race = document.getElementById('race').value;

    const deficiency = Array.from(document.querySelectorAll('input[name="deficiency"]:checked'))
                        .map(checkbox => checkbox.value === 'outros' ? document.getElementById('other-deficiency').value : checkbox.value);

    // Aqui você pode adicionar código para enviar os dados para um servidor ou processá-los conforme necessário
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Categoria:', category);
    console.log('Vinculo:', bond);
    console.log('UJ:', UJ);
    console.log('Gender:', gender);
    console.log('Race:', race);
    console.log('Deficiency:', deficiency);

    alert('Inscrição enviada com sucesso!');
});

