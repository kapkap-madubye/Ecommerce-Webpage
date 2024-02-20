let cartItems = [];
let total = 0;
  
  function addToCart(product, price) {
    cartItems.push({ product, price });
    updateCart();
  }
  
  function updateCart() {
    const cartList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    

    //adding to a list

    cartList.innerHTML = '';   
    cartItems.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.product} - R${item.price}`; 
      cartList.appendChild(li);
      total += item.price;
    });
    cartTotal.textContent = total;
  }
  
  function checkout() {
    if(total==0){
        alert('Please Select item!');
    }else{
        alert('Thank you for your purchase!');
        //cartItems = [];
        //updateCart();
        //total-=total;
    }
    total-=total;
    cartItems = [];
    updateCart();
    
    
  }