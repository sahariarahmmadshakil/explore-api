const cart = () => {
    const product = document.getElementById('name').value;
    const quantity = document.getElementById('quantity').value;
    setproducts(product, quantity);
    // setCart(product, quantity)
    saveValues(product, quantity)

}

const setproducts = (a, b) => {
    const ul = document.getElementById('ul');
    const li = document.createElement('li');
    li.innerText = `${a} : ${b}`
    ul.appendChild(li)
}

// Step-1: check product is avaliable or not
// step-2 : jode thake tahole string hisabe thakbe then oita k object e convert korte hobe

// Step-3: get the value
// step-4 save the vale 
const checkProducts = () => {
    let cart = {};
    const getCart = localStorage.getItem('cart');
    if (getCart) {
        cart = JSON.parse(getCart);
    }
    return cart;
}

const saveValues = (product,quantity) => {
    const cart = checkProducts();
    cart[product] = quantity;
    const createString=JSON.stringify(cart)
    localStorage.setItem('cart', createString  )
}

const showCart = () => {
    const getproduct = checkProducts();
    for (const product in getproduct) {
        const quantity = getproduct[product]
        setproducts(product,quantity)
    }
}
showCart()