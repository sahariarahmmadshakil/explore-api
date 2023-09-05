const loadPhone = async () => {
    const res =await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const phoneInfo = await res.json();
    const phone = phoneInfo.data;
    console.log(phone);

}
loadPhone()