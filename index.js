// Carrito

const shopIcons = document.querySelector('#shop-icon');
const cart = document.querySelector('.cart');

shopIcons.addEventListener('click', e => {
    cart.classList.toggle('show-cart');
})

// Añadir al carrito

const table = document.querySelector('#table-body');
const playaBtn = document.querySelectorAll('.playa-btn');

playaBtn.forEach(btn => {
    btn.addEventListener('click', e => {
        const img = e.target.parentElement.parentElement.children[0].innerHTML;
        const name = e.target.parentElement.children[0].innerHTML;

        const exist = [... table.children].find(Element => Element.children[1].innerHTML == name);
        if (exist) {
            exist.children[3].innerHTML = Number(exist.children[3].innerHTML) + 1;
        } else {
             const row = document.createElement('tr');
        row.innerHTML = `
        <td>${img}</td>
        <td>${name}</td>
        <td>40$</td>
        <td>1</td>
        <td><svg xmlns="http://www.w3.org/2000/svg" class="delete-btn" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        </td>
        `;
// Eliminar cosas del carrito
        row.children[4].addEventListener('click', e => {
            e.currentTarget.parentElement.remove()
        });

        table.append(row);
        }
    });
});

// Vaciar carrito
const tableRemove = document.querySelector('#table-remove');

tableRemove.addEventListener('click', e => {
    table.innerHTML = '';
});