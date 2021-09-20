(function() {
  
  const product_data = {
    'price' : 289.00,
    'discounted_price' : 199.00, 
    'on_stock': 10,
    'sold_items' : 0,
    'expiry_date' : '2021-09-23 12:00:00',
  };

  const saving = document.querySelector('p.saving');
  let discount;

  const addToFav = document.querySelector('.add-to-fav');

  const btnAdd = document.querySelector('.add-to-cart');
  
  const progressBar = document.getElementById('progress-bar');

  const max = product_data.on_stock + 1;
  progressBar.setAttribute('max', max);

  


  price();

  addToFav.addEventListener ('click', changeHeart);

  btnAdd.addEventListener('click', changeAvailability)

  setInterval(countingDown, 1000)


  function price () {
    discount = (product_data.price - product_data.discounted_price).toFixed(2);
    saving.textContent = `oszczędź ${discount} zł`;
    }
  
  function changeHeart() {
    const heartSelected = document.querySelector('.heart-selected');
    const heartUnselected = document.querySelector('.heart-unselected');

    heartSelected.classList.toggle("active");
    heartUnselected.classList.toggle("active");
    }

  function changeAvailability () { 
    const soldItems = document.querySelector('p.sold-items');
    const onStock = document.querySelector('p.on-stock');
    let value = progressBar.value;
    
    if (product_data.on_stock == 0){
      return }
      value++; 
      progressBar.setAttribute('value', value);
      soldItems.textContent = `Sprzedano ${++product_data.sold_items} sztuk`;
      onStock.textContent = `Pozostało ${--product_data.on_stock} sztuk`;
    }

  function countingDown () {
  
    const spanD = document.querySelector('.timer-box.d');
    const spanH = document.querySelector('.timer-box.h');
    const spanM = document.querySelector('.timer-box.m');
    const spanS = document.querySelector('.timer-box.s');
    const nowTime = new Date().getTime();
    const endTime = new Date(product_data.expiry_date).getTime();  

    const days = Math.floor((endTime / (1000*60*60*24)) - (nowTime / (1000*60*60*24)));
    spanD.textContent = days;

    let hours = Math.floor((endTime / (1000*60*60)) - (nowTime / (1000*60*60)))%24;
    hours = hours < 10 ? `0${hours}` : hours;
    spanH.textContent = hours;

    let minutes = Math.floor((endTime / (1000*60)) - (nowTime / (1000*60)))%60;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    spanM.textContent = minutes;

    let seconds = Math.floor((endTime / 1000) - (nowTime / 1000))%60;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    spanS.textContent = seconds;
  }

})();