"use strict";

// Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.
// Страница добавления отзыва:
// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.
// Страница просмотра отзывов:
// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).

document.addEventListener("DOMContentLoaded", function () {
  showPage("add-review-page");
  loadReviews();
});

function viewReview() {
  showPage("view-reviews-page");
  loadReviews();
}

function backToAddReview() {
  location.reload();
}

document
  .querySelector(".add-review-button")
  .addEventListener("click", addReview);
document
  .querySelector(".view-review-button")
  .addEventListener("click", viewReview);
document
  .querySelector(".back-review-button")
  .addEventListener("click", backToAddReview);

function showPage(pageClass) {
  document.querySelectorAll(".page").forEach(function (page) {
    page.style.display = "none";
  });

  document.querySelector(`.${pageClass}`).style.display = "flex";
  document.querySelector(`.${pageClass}`).style.flexDirection = "column";
}

function addReview() {
  const productName = document.querySelector(".product-name").value;
  const reviewText = document.querySelector(".review-text").value;

  if (productName && reviewText) {
    const review = { productName, reviewText };

    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.push(review);
    localStorage.setItem("reviews", JSON.stringify(reviews));

    document.querySelector(".product-name").value = "";
    document.querySelector(".review-text").value = "";
  }
}

function loadReviews() {
  const productList = document.querySelector(".product-list");
  const reviewsContainer = document.querySelector(".reviews-container");

  productList.innerHTML = "";
  reviewsContainer.innerHTML = "";

  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  reviews.forEach(function (review) {
    if (
      !productList.querySelector(`li[data-product="${review.productName}"]`)
    ) {
      const listItem = document.createElement("li");
      listItem.textContent = review.productName;
      listItem.setAttribute("data-product", review.productName);
      listItem.addEventListener("click", function () {
        showProductReviews(review.productName);
      });
      productList.appendChild(listItem);
    }
  });
}

function showProductReviews(productName) {
  const reviewsContainer = document.querySelector(".reviews-container");
  reviewsContainer.innerHTML = "";

  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  reviews.forEach(function (review, index) {
    if (review.productName === productName) {
      const reviewDiv = document.createElement("div");
      reviewDiv.textContent = review.reviewText;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Удалить";
      deleteButton.addEventListener("click", function () {
        deleteReview(index);
        showProductReviews(productName);
      });

      reviewDiv.appendChild(deleteButton);
      reviewsContainer.appendChild(reviewDiv);
    }
  });
}

function deleteReview(index) {
  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  reviews.splice(index, 1);
  localStorage.setItem("reviews", JSON.stringify(reviews));
}
