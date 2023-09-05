const loadPhone = async (searchPhones) => {
    const res = await fetch(`
    https://openapi.programming-hero.com/api/phones?search=${searchPhones}
    `);
    const phoneInfo = await res.json();
    const phoneElements = phoneInfo.data;
    displayPhones(phoneElements)

}

const displayPhones = phoneElements => {
    const phonesArea = document.getElementById('phones');
    phonesArea.innerText=''
    phoneElements.forEach(phone => {       
        const phoneContainer = document.createElement('div');        
        phoneContainer.innerHTML = `
    <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
         <img src="${phone.image}" />
        </figure>
        <div class="card-body">
         <h2 class="card-title">${phone.phone_name}</h2>
         <h2 class="card-title">${phone.brand}</h2>
         <p>${phone.slug}</p>
         
    </div>
    </div>
    `
        phonesArea.appendChild(phoneContainer)
        console.log()
    });
}

const handleSearch = () => {
    const searchArea = document.getElementById('search').value;
    loadPhone(searchArea)
}

loadPhone()