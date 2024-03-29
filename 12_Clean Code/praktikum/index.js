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

//declare array untuk menampung data product
const products = [];

/**
 * Validasi input kosong, akan mengirim object dengan message dan isEmpty
 *
 * @param {string} fieldName - Nama field yang dicek
 * @param {node} inputNode = Node dari element input yang dicek
 * @return {Object} - object alert message dan isEmpty
 */
function validateIsEmpty(fieldName, inputNode) {
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
}

/**
 * fungsi untuk show alert pada input yang kosong
 *
 *  @returns {boolean} apakah semua input terisi/tidak
 */
function validateAllInputsFilled() {
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
}

/**
 * fungsi untuk check form sudah valid dengan menghitung jumlah class is-invalid
 *
 * @returns {boolean} apakah form valid/tidak
 */
function checkIsValid() {
  const invalidClassses = document.querySelectorAll(".is-invalid");
  return invalidClassses.length <= 0;
}

/**
 * Fungsi untuk merender tabel
 *
 * @param {Array} products - Property array products.
 */
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

/**
 * Fungsi untuk menampilkan alert
 *
 * @param {string} message - message pada alert
 */
function showAlert(message) {
  const dataAlert = document.querySelector("#dataAlert");
  const alertTimeout = 2000;
  dataAlert.innerHTML = message;
  dataAlert.style.display = "block";
  //set timeout untuk menghilangkan alert
  setTimeout(() => {
    dataAlert.style.display = "none";
  }, alertTimeout);
}

//Submit form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //cek apakah semua input sudah terisi dan valid
  if (validateAllInputsFilled() && checkIsValid()) {
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
    rederTable(products);
    showAlert("Data <strong>added</strong> succesfully");

    // reset semua input manjadi kosong
    inputs.forEach((input) => {
      if (input.type !== "radio") {
        input.value = "";
      }
      input.checked = false;
    });

    return true;
  }
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

/**
 * Fungsi untuk search product
 *
 * @param {string} params - keyword pencarian
 * @returns {Array} - array hasil pencarian
 */
function searchProduct(params) {
  return products.filter((product) =>
    product.name.toLowerCase().includes(params.toLowerCase())
  );
}

//Handling search button untuk search product berdasarkan product name
document.getElementById("search").addEventListener("click", () => {
  const searchParameter = document.getElementById("searchProduct").value;
  const searchResult = searchProduct(searchParameter);
  rederTable(searchResult);
});

//Handling deletion button untuk delete data terakhir yang dimasukkan user
document.getElementById("deletion").addEventListener("click", () => {
  products.pop();
  rederTable(products);
  showAlert("Data <strong>deleted</strong> succesfully");
});
