    let productQuantityControls = document.querySelectorAll(".product__quantity-control");
    let addToCartButtons = document.querySelectorAll(".product__add");

    for (let control of productQuantityControls) {
      control.addEventListener("click", function () {
        let product = control.closest(".product");
        let productCount = product.querySelector(".product__quantity-value");
        let value = productCount.textContent;

        if (control.classList.contains("product__quantity-control_inc")) {
          value++;
        } else if (
          control.classList.contains("product__quantity-control_dec")
        ) {
          value--;
          if (value < 1) {
            value = 1;
          }
        }
        productCount.textContent = value;
      });
    }

    for (let addButton of addToCartButtons) {
      addButton.addEventListener("click", function () {
        let product = addButton.closest(".product");
        let productId = product.dataset.id;
        let img = product.querySelector(".product__image");
        let productImg = img.getAttribute("src");
        let productCount = product.querySelector(".product__quantity-value");
        let value = Number(productCount.textContent);

        let cartProduct = null;
        let products = document.querySelectorAll(".cart__product");
        for (let oneProduct of products) {
          if (oneProduct.dataset.id == productId) {
            cartProduct = oneProduct;
          }
        }

        if (cartProduct) {
          let cartProductCount = cartProduct.querySelector(
            ".cart__product-count"
          );
          let cartProductValue = Number(cartProductCount.textContent);
          cartProductCount.textContent = cartProductValue + value;
        } else {
          let cartProducts = document.querySelector(".cart__products");

          let newCartProduct = document.createElement("div");
          newCartProduct.className = "cart__product";
          newCartProduct.dataset.id = productId;

          let newCartProductImg = document.createElement("img");
          newCartProductImg.classList.add("cart__product-image");
          newCartProductImg.src = productImg;
          newCartProduct.appendChild(newCartProductImg);

          let newCartProductCount = document.createElement("div");
          newCartProductCount.className = "cart__product-count";
          newCartProductCount.textContent = value;
          newCartProduct.appendChild(newCartProductCount);

          cartProducts.appendChild(newCartProduct);
        }
      });
    }
