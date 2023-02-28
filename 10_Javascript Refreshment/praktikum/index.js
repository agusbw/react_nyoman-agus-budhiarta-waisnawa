addEventListener("DOMContentLoaded", () => {
  //declare semua element input
  const form = document.getElementById("form");
  const submitButton = document.getElementById("submitBtn");
  const productName = document.getElementById("productName");
  const productPrice = document.getElementById("productPrice");
  const productDescription = document.getElementById("productDescription");
  const productCategory = document.getElementById("productCategory");
  const radios = document.querySelectorAll('input[type="radio"]');
  const productImage = document.getElementById("productImage");
  const inputs = [
    productName,
    productPrice,
    productDescription,
    productCategory,
    productImage,
    ...radios,
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

  //declare element alert untuk menampilkan data
  const dataAlert = document.querySelector("#dataAlert");
  dataAlert.style.display = "none";

  // Validasi input kosong, akan mengirim object dengan message dan isValid
  const validateIsEmpty = (fieldName, node) => {
    if (node.value == "") {
      return {
        message: `The ${fieldName} field must be filled in`,
        isEmpty: true,
      };
    }
    return false;
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

    const radiosArr = Array.from(radios);
    const isRadioChecked = radiosArr.some((radio) => radio.checked);

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

    if (!isRadioChecked) {
      radios.forEach((radio) => {
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
      isRadioChecked
    );
  };

  // Cek apakah form sudah valid dengan menghitung jumlah class is-invalid (untuk enable/disable button)
  const checkIsValid = () => {
    const invalids = document.querySelectorAll(".is-invalid");
    return invalids.length <= 0;
  };

  //Submit form
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Cek apakah form sudah valid
    if (validateAllInputFilled() && checkIsValid()) {
      let productFreshness;
      radios.forEach((radio) => {
        radio.checked === true
          ? (productFreshness = radio.value)
          : productFreshness;
      });
      const product = {
        name: productName.value,
        category: productCategory.value,
        image: productImage.value,
        freshness: productFreshness,
        description: productDescription.value,
        price: productPrice.value,
      };
      dataAlert.innerHTML = `<strong>Product Name</strong>: ${product.name}<br>
        <strong>Product Category:</strong> ${product.category}</br>
        <strong>Product Freshness:</strong> ${product.freshness} </br>
        <strong>Product Image:</strong> ${product.image}</br>
        <strong>Product Description:</strong> ${product.description}</br>
        <strong>Product Price:</strong> $${product.price}</br>
    `;
      dataAlert.style.display = "block";
      return true;
    }
    dataAlert.innerText = "";
    dataAlert.style.display = "none";
    submitButton.disabled = true;
  });

  //Remove error altert ketika input diisi
  inputs.forEach((input) => {
    if (input.type !== "radio") {
      input.addEventListener("input", () => {
        input.classList.remove("is-invalid");
        input.nextElementSibling.textContent = "";
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
        radios.forEach((radio) => {
          radio.classList.remove("is-invalid");
        });
        radios[2].nextElementSibling.nextElementSibling.textContent = "";
        checkIsValid()
          ? (submitButton.disabled = false)
          : (submitButton.disabled = true);
      });
    }
  });
});
