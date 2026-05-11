const form = document.getElementById('bookingForm');
const phoneInput = document.getElementById('phone');
const successMessage = document.getElementById('successMessage');

phoneInput.addEventListener('input', function () {

  this.value = this.value.replace(/[^\d+\-\(\)\s]/g, '');

});

form.addEventListener('submit', function (e) {

  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = phoneInput.value.trim();

  if (name === '' || phone === '') {

    alert('Заполните обязательные поля');
    return;
  }

  successMessage.textContent =
  'Заявка успешно отправлена!';

  form.reset();

});

fetch('price.json')
  .then(response => response.json())
  .then(data => {

    const table = document.getElementById('priceTable');

    data.forEach(item => {

      const row = `
        <tr>
          <td>${item.service}</td>
          <td>${item.r13}</td>
          <td>${item.r16}</td>
          <td>${item.r19}</td>
        </tr>
      `;

      table.innerHTML += row;

    });

  })
  .catch(error => {

    console.error('Ошибка загрузки прайса:', error);

  });