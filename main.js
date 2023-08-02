// API
// let url = 'https://dog.ceo/api/breeds/image/random';
// let dogUrl = 'https://dog.ceo/api/breeds/list/all';
// const img = document.getElementById('img');
// const select = document.getElementById('select');

// function fetchApi(url) {
//     fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//         let object = data.message;
//         console.log(object);
//         let objectOfArray = Object.keys(object);
//         objectOfArray.map((item) => {
//             const option = document.createElement('option');
//             option.value = item;
//             option.innerText = item;
//             select.appendChild(option)
//         })
//     })
// }
// fetchApi(dogUrl)




// select.addEventListener('change', (e) => {
    // let selectedImg = `https://dog.ceo/api/breed/${e.target.value}/images/random`;
//     fetch(selectedImg)
//     .then((res) => res.json())
//     .then((data) => {
//         let newImg = data.message;
//         img.src = newImg
//     })
// })


// Homework

let namozUrl = 'https://islomapi.uz/api/present/day?region=Toshkent';
const select = document.getElementById('select');
const container = document.querySelector('.container');
const tong_saharlik = document.getElementById('tong_saharlik');
const quyosh = document.getElementById('quyosh');
const peshin = document.getElementById('peshin');
const asr = document.getElementById('asr');
const shom_iftor = document.getElementById('shom_iftor');
const hufton = document.getElementById('hufton');

function fetchApi(url) {
    fetch(url)
    .then((res) => res.json()) 
    .then((data) => {
        console.log(data);
            tong_saharlik.textContent = data.times.tong_saharlik;
            quyosh.textContent = data.times.quyosh;
            peshin.textContent = data.times.peshin;
            asr.textContent = data.times.asr;
            shom_iftor.textContent = data.times.shom_iftor;
            hufton.textContent = data.times.hufton;
    })

}

fetchApi(namozUrl)


select.addEventListener('change', (e) => {
    let url = `https://islomapi.uz/api/present/day?region=${e.target.value}`;
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
            tong_saharlik.textContent = data.times.tong_saharlik;
            quyosh.textContent = data.times.quyosh;
            peshin.textContent = data.times.peshin;
            asr.textContent = data.times.asr;
            shom_iftor.textContent = data.times.shom_iftor;
            hufton.textContent = data.times.hufton;
    })
})
