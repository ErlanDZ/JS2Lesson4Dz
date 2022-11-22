//GET

// fetch('http://localhost:3000/cards')
// .then(res => res.json())
// .then(res => console.log(res));

// POST

let btn_create = document.querySelector('.btn_create');
let form = document.querySelector('.form');
let btn_delete = document.querySelector('.btn_delete');

// btn_create.addEventListener('submit', () => {
     
//     fetch('http://localhost:3000/cards',{
//         method: 'POST',
//         headers: {
//             'Content-Type': "aplication/json"
//         },
//         body: JSON.stringify()
//     }).then(res => alert("Вы удачно создали данные", res))
//     .catch(err => alert('Проблема создании карточки', err));
// })

form.addEventListener('submit', (e) => {
     e.preventDefault();
    fetch('http://localhost:3000/cards',{
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
         },
            body: JSON.stringify({
                name: e.target[0].value,
                surname: e.target[1].value
        })
    }).then((result) => console.log(result))
      .catch((err) => console.log(err))

      btn_delete.addEventListener('click', () =>{
        fetch('http://localhost:3000/cards',{
            method: 'DELETE'
        }).then(() => alert("Успешно удалено"))
          .catch((err) => alert("Ошибка при удалении"))
      })
})


