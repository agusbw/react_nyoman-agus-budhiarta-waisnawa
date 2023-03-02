addEventListener("DOMContentLoaded", () => {
  //declare semua element input
  const form = document.getElementById("form");
  const submitButton = document.getElementById("submitBtn");
  const productName = document.getElementById("productName");
  const productPrice = document.getElementById("productPrice");
  const productDescription = document.getElementById("productDescription");
  const productCategory = document.getElementById("productCategory");
  const productFreshness = document.querySelectorAll('input[type="radio"]');
  const productImage = document.getElementById("productImage");
  const inputs = [
    productName,
    productPrice,
    productDescription,
    productCategory,
    productImage,
    ...productFreshness,
  ];

  // declare semua element feedback (element untuk menampilkan pesan error)
  const productNameFeedback = document.getElementById("productNameFeedback");
  const productPriceFeedback = document.getElementById("productPriceFeedback");
  const productDescriptionFeedback = document.getElementById(
    "productDescriptionFeedback"
  );
  const productCategoryFeedback = document.getElementById(
    "productCategoryFeedback"
  );
  const productImageFeedback = document.getElementById("productImageFeedback");
  const productFreshnessFeedback = document.getElementById(
    "productFreshnessFeedback"
  );

  //declare element alert untuk menampilkan alert
  const dataAlert = document.querySelector("#dataAlert");
  dataAlert.style.display = "none";

  //declare array untuk menampung data product
  const products = [];

  /**
   *
   * @param {string} fieldName - Nama field yang dicek
   * @param {node} inputNode = Node dari element input yang dicek
   * @return Object
   */
  // Validasi input kosong, akan mengirim object dengan message dan isEmpty
  const validateIsEmpty = (fieldName, inputNode) => {
    //Cek apakah value input kosong
    if (inputNode.value == "") {
      return {
        message: `The ${fieldName} field must be filled in`,
        isEmpty: true,
      };
    }
    return {
      message: `Input filled`,
      isEmpty: false,
    };
  };

  // Validasi form apakah sudah terisi semua
  const validateAllInputFilled = () => {
    const validatedName = validateIsEmpty("product name", productName);
    const validatedPrice = validateIsEmpty("product price", productPrice);
    const validatedDescription = validateIsEmpty(
      "product description",
      productDescription
    );
    const validatedCategory = validateIsEmpty(
      "product category",
      productCategory
    );
    const validatedImage = validateIsEmpty("product image", productImage);
    const isProductFreshnessChecked = Array.from(productFreshness).some(
      (radio) => radio.checked
    );

    if (validatedName.isEmpty) {
      productName.classList.add("is-invalid");
      productNameFeedback.textContent = validatedName.message;
    }

    if (validatedPrice.isEmpty) {
      productPrice.classList.add("is-invalid");
      productPriceFeedback.textContent = validatedPrice.message;
    }

    if (validatedDescription.isEmpty) {
      productDescription.classList.add("is-invalid");
      productDescriptionFeedback.textContent = validatedDescription.message;
    }

    if (validatedCategory.isEmpty) {
      productCategory.classList.add("is-invalid");
      productCategoryFeedback.textContent = validatedCategory.message;
    }

    if (validatedImage.isEmpty) {
      productImage.classList.add("is-invalid");
      productImageFeedback.textContent = validatedImage.message;
    }

    if (!isProductFreshnessChecked) {
      productFreshness.forEach((radio) => {
        radio.classList.add("is-invalid");
      });
      productFreshnessFeedback.textContent = "Please select one of the options";
    }

    // return true jika semua input sudah valid
    return (
      !validatedName.isEmpty &&
      !validatedPrice.isEmpty &&
      !validatedDescription.isEmpty &&
      !validatedCategory.isEmpty &&
      !validatedImage.isEmpty &&
      isProductFreshnessChecked
    );
  };

  // Cek apakah form sudah valid dengan menghitung jumlah class is-invalid (untuk enable/disable button)
  const checkIsValid = () => {
    const invalidClassses = document.querySelectorAll(".is-invalid");
    return invalidClassses.length <= 0;
  };

  /**
   *
   * @param {Array} products - Property array products.
   */
  //fungsi untuk merender tabel
  function rederTable(products) {
    const tableBody = document.querySelector("#tableBody");
    tableBody.innerHTML = "";
    products.forEach((product, index) => {
      tableBody.innerHTML += `
        <tr>
          <td>${index + 1}</td>
          <td>${product.name}</td>
          <td>${product.category}</td>
          <td>${product.image}</td>
          <td>${product.freshness}</td>
          <td>${product.description}</td>
          <td>${product.price}</td>
        </tr>
        `;
    });
  }

  //Submit form
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    //cek apakah semua input sudah terisi dan valid
    if (validateAllInputFilled() && checkIsValid()) {
      let productFreshnessSelected;
      productFreshness.forEach((radio) => {
        radio.checked === true
          ? (productFreshnessSelected = radio.value)
          : productFreshnessSelected;
      });

      const product = {
        name: productName.value,
        category: productCategory.value,
        image: productImage.value,
        freshness: productFreshnessSelected,
        description: productDescription.value,
        price: productPrice.value,
      };

      products.push(product);

      //render table
      rederTable(products);

      //munculkan alert sukses
      dataAlert.innerHTML = `Data <strong>added</strong> succesfully`;
      dataAlert.style.display = "block";

      //set timeout untuk menghilangkan alert
      setTimeout(() => {
        dataAlert.style.display = "none";
      }, 2000);

      // reset semua input manjadi kosong
      productName.value = "";
      productPrice.value = "";
      productDescription.value = "";
      productCategory.value = "";
      productImage.value = "";
      productFreshness.forEach((radio) => (radio.checked = false));
      return true;
    }

    dataAlert.innerText = "";
    dataAlert.style.display = "none";
    submitButton.disabled = true;
  });

  //Remove error altert ketika input diisi
  inputs.forEach((input) => {
    //cek apakah input tipe radio button atau tidak
    if (input.type !== "radio") {
      input.addEventListener("input", () => {
        //remove alert ketika input diisi
        input.classList.remove("is-invalid");
        input.nextElementSibling.textContent = "";

        //jika input id productName, lakukan validasi tambahan
        if (input.id === "productName") {
          if (productName.value.length > 25) {
            productName.classList.add("is-invalid");
            productNameFeedback.textContent =
              "The product name must not exceed 25 characters.";
          }

          const isNonWordRegex = /[!@#$%^&*(),.?":{}|<>'\\/\-_+=`~\]\[;]/;
          if (isNonWordRegex.test(productName.value)) {
            productName.classList.add("is-invalid");
            productNameFeedback.textContent =
              "Product name must not contain symbols.";
          }
        }

        checkIsValid()
          ? (submitButton.disabled = false)
          : (submitButton.disabled = true);
      });
    } else {
      input.addEventListener("input", () => {
        //Jika 1 radio button dipilih, hilangkan alert di semua input tipe radio
        productFreshness.forEach((radio) => {
          radio.classList.remove("is-invalid");
        });
        productFreshness[2].nextElementSibling.nextElementSibling.textContent =
          "";

        checkIsValid()
          ? (submitButton.disabled = false)
          : (submitButton.disabled = true);
      });
    }
  });

  //Handling deletion button untuk delete data terakhir yang dimasukkan user
  document.getElementById("deletion").addEventListener("click", () => {
    products.pop();

    //re-render table
    rederTable(products);

    //munculkan alert
    dataAlert.innerHTML = `Latest data <strong>deleted</strong> succesfully`;
    dataAlert.style.display = "block";

    //set timeout untuk menghilangkan alert
    setTimeout(() => {
      dataAlert.style.display = "none";
    }, 2000);
  });

  //Handling seatch button untuk search product berdasarkan product name
  document.getElementById("search").addEventListener("click", () => {
    const searchParameter = document.getElementById("searchProduct").value;
    const searchResult = products.filter((product) =>
      product.name.toLowerCase().includes(searchParameter.toLowerCase())
    );
    rederTable(searchResult);
  });
});
