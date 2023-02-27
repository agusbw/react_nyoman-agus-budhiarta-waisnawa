addEventListener("DOMContentLoaded", () => {
  //declare semua element input
  const submitButton = document.getElementById("submitBtn");
  const productName = document.getElementById("productName");
  const productPrice = document.getElementById("productPrice");
  const productDescription = document.getElementById("productDescription");
  const productCategory = document.getElementById("productCategory");
  const radios = document.querySelectorAll('input[type="radio"]');
  const productImage = document.getElementById("productImage");

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

  let products = [];

  // Validasi input kosong, akan mengirim object dengan message dan isValid
  const validateIsEmpty = (fieldName, node) => {
    if (node.value == "") {
      return {
        message: `The ${fieldName} field must be filled in`,
        isEmpty: false,
      };
    } else {
      return {
        message: "",
        isEmpty: true,
      };
    }
  };

  const validateForm = () => {
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

    // const isRadioChecked = radio1.checked || radio2.checked || radio3.checked;
    var radiosArr = Array.from(radios);
    const isRadioChecked = radiosArr.some((radio) => radio.checked);

    if (!validatedName.isEmpty) {
      productName.classList.add("is-invalid");
      productNameFeedback.textContent = validatedName.message;
    }

    if (!validatedPrice.isEmpty) {
      productPrice.classList.add("is-invalid");
      productPriceFeedback.textContent = validatedPrice.message;
    }

    if (!validatedDescription.isEmpty) {
      productDescription.classList.add("is-invalid");
      productDescriptionFeedback.textContent = validatedDescription.message;
    }

    if (!validatedCategory.isEmpty) {
      productCategory.classList.add("is-invalid");
      productCategoryFeedback.textContent = validatedCategory.message;
    }

    if (!validatedImage.isEmpty) {
      productImage.classList.add("is-invalid");
      productImageFeedback.textContent = validatedImage.message;
    }

    if (!isRadioChecked) {
      radios.forEach((radio) => {
        radio.classList.add("is-invalid");
      });
      productFreshnessFeedback.textContent = "Please select one of the options";
    }

    return (
      validatedName.isEmpty &&
      validatedPrice.isEmpty &&
      validatedDescription.isEmpty &&
      validatedCategory.isEmpty &&
      validatedImage.isEmpty &&
      isRadioChecked
    );
  };

  // Cek apakah form sudah valid dengan menghitung jumlah class is-invalid
  const checkIsValid = () => {
    const invalids = document.querySelectorAll(".is-invalid");
    if (invalids.length <= 0) {
      return true;
    }
    return false;
  };

  //Submit form
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (validateForm()) {
      let productFreshness;
      radios.forEach((radio) => {
        radio.checked === true
          ? (productFreshness = radio.value)
          : productFreshness;
      });
      const product = {
        name: productName.value,
        category: productCategory.value,
        image: "default",
        freshness: productFreshness,
        description: productDescription.value,
        price: productPrice.value,
      };

      products.push(product);
      //render table
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
      dataAlert.innerHTML = `Data <strong>added</strong> succesfully`;
      dataAlert.style.display = "block";
      // remove all input value
      productName.value = "";
      productPrice.value = "";
      productDescription.value = "";
      productCategory.value = "";
      productImage.value = "";
      radios.forEach((radio) => (radio.checked = false));
      return true;
    }
    dataAlert.innerText = "";
    dataAlert.style.display = "none";
    submitButton.disabled = true;
    return false;
  });
  //Remove error altert ketika input diisi, dan cek apakah form sudah valid (tidak ada simbol dan tidak lebih dari 25 huruf)
  productName.addEventListener("input", () => {
    productName.classList.remove("is-invalid");
    productNameFeedback.textContent = "";

    if (productName.value.length > 25) {
      productName.classList.add("is-invalid");
      productNameFeedback.textContent =
        "The product name must be less than 25 letters";
    }

    const isNonWordRegex = /[!@#$%^&*(),.?":{}|<>'\\/\-_+=`~\]\[;]/;
    if (isNonWordRegex.test(productName.value)) {
      productName.classList.add("is-invalid");
      productNameFeedback.textContent =
        "Product name must not contain symbols.";
    }

    if (productName.value === "") {
      productName.classList.remove("is-invalid");
      productNameFeedback.textContent = "";
    }

    checkIsValid()
      ? (submitButton.disabled = false)
      : (submitButton.disabled = true);
  });

  //Remove error altert ketika input diisi
  productPrice.addEventListener("input", () => {
    productPrice.classList.remove("is-invalid");
    productPriceFeedback.textContent = "";

    checkIsValid()
      ? (submitButton.disabled = false)
      : (submitButton.disabled = true);
  });

  //Remove error altert ketika input diisi
  productDescription.addEventListener("input", () => {
    productDescription.classList.remove("is-invalid");
    productDescriptionFeedback.textContent = "";

    checkIsValid()
      ? (submitButton.disabled = false)
      : (submitButton.disabled = true);
  });

  //Remove error altert ketika input diisi
  productCategory.addEventListener("input", () => {
    productCategory.classList.remove("is-invalid");
    productCategoryFeedback.textContent = "";

    checkIsValid()
      ? (submitButton.disabled = false)
      : (submitButton.disabled = true);
  });

  //Remove error altert ketika input diisi
  productImage.addEventListener("input", () => {
    productImage.classList.remove("is-invalid");
    productImageFeedback.textContent = "";

    checkIsValid()
      ? (submitButton.disabled = false)
      : (submitButton.disabled = true);
  });

  //Remove error altert ketika input diisi
  radios.forEach((radio) => {
    radio.addEventListener("input", () => {
      radios.forEach((radio) => radio.classList.remove("is-invalid"));
      productFreshnessFeedback.textContent = "";
      checkIsValid()
        ? (submitButton.disabled = false)
        : (submitButton.disabled = true);
    });
  });
});
