function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  
  
  let cartCheck1 = document.getElementById("cartCheck1")
  let cartCheck2 = document.getElementById("cartCheck2")
  let cartCheck3 = document.getElementById("cartCheck3")
  let cartCheck4 = document.getElementById("cartCheck4")
  let cartCheck5 = document.getElementById("cartCheck5")
  let cartCheck6 = document.getElementById("cartCheck6")
  
 let cartCount = 0;
  
  function change() {
  if (cartCheck1.checked){
    cartCount++
    localStorage.setItem("car1", cartCheck1.checked)
  }
  else {
    cartCount--
      localStorage.setItem("car1", cartCheck1.checked)
  }
  let cartNav = document.getElementById("cartDisplay").innerHTML = "Cart: " + cartCount + " items currently";
  localStorage.setItem("cartNum", cartCount)
  }
  
  
  function changeTwo() {
    if (cartCheck2.checked){
      cartCount++
        localStorage.setItem("car2", cartCheck2.checked)
    }
    else {
      cartCount--
      localStorage.setItem("car2", cartCheck2.checked)
    }
    let cartNav = document.getElementById("cartDisplay").innerHTML = "Cart: " + cartCount + " items currently";
    localStorage.setItem("cartNum", cartCount)
  }
  
  function changeThree() {
    if (cartCheck3.checked){
      cartCount++
      localStorage.setItem("car3", cartCheck3.checked)
    }
    else {
      cartCount--
      localStorage.setItem("car3", cartCheck3.checked)
    }
    let cartNav = document.getElementById("cartDisplay").innerHTML = "Cart: " + cartCount + " items currently";
    localStorage.setItem("cartNum", cartCount)
  }
  
  function changeFour() {
    if (cartCheck4.checked){
      cartCount++
      localStorage.setItem("car4", cartCheck4.checked)
    }
    else {
      cartCount--
      localStorage.setItem("car4", cartCheck4.checked)
    }
    let cartNav = document.getElementById("cartDisplay").innerHTML = "Cart: " + cartCount + " items currently";
    localStorage.setItem("cartNum", cartCount)
  }
  function changeFive() {
    if (cartCheck5.checked){
      cartCount++
      localStorage.setItem("car5", cartCheck5.checked)
    }
    else {
      cartCount--
      localStorage.setItem("car5", cartCheck5.checked)
    }
    let cartNav = document.getElementById("cartDisplay").innerHTML = "Cart: " + cartCount + " items currently";
    localStorage.setItem("cartNum", cartCount)
  }
  
  function changeSix() {
    if (cartCheck6.checked){
      cartCount++
      localStorage.setItem("car6", cartCheck6.checked)
    }
    else {
      cartCount--
      localStorage.setItem("car6", cartCheck6.checked)
    }
    let cartNav = document.getElementById("cartDisplay").innerHTML = "Cart: " + cartCount + " items currently";
    localStorage.setItem("cartNum", cartCount)
  }
  
    
  function checkForCartNum() {
      if (localStorage.getItem("cartNum") == null){
          return 0
      }
      else {
          return localStorage.getItem("cartNum")
      }
  }

    let cartNav = document.getElementById("cartDisplay").innerHTML = "Cart: " + checkForCartNum() + " items currently";