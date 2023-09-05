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
    phonesArea.innerText = ''
    const showBtn = document.getElementById('show');
    if (phoneElements.length > 12) {
        showBtn.classList.remove('hidden');
    } else {
        showBtn.classList.add('hidden');
    }
    
    phoneElements = phoneElements.slice(0, 12);
    console.log(phoneElements)
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

    });
    spinner(false)
}

const handleSearch = () => {
    const searchArea = document.getElementById('search').value;
    loadPhone(searchArea);
    spinner(true);
}

const spinner =(isLoading)=> {
    const getSpinner = document.getElementById('spinner');
    if (isLoading) {
        getSpinner.classList.remove('hidden')
    } else {
        getSpinner.classList.add('hidden')
    }
    

}