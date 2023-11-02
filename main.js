let totalPrice = document.getElementById("totalP");
let sum = 0;

function plusClick(id) {
  let quantity = document.getElementById("q" + id[1]);
  quantity.innerHTML = parseInt(quantity.innerHTML) + 1;
  let price = document.getElementById("s" + id[1]);
  let total = document.getElementById("t" + id[1]);
  total.innerHTML = +total.innerHTML + parseInt(price.innerHTML);
  sum = +price.innerHTML + sum;
  totalPrice.innerHTML = sum;
}

function minusClick(id) {
  let quantity = document.getElementById("q" + id[1]);
  if (+quantity.innerHTML > 0) {
    quantity.innerHTML = parseInt(quantity.innerHTML) - 1;

    let price = document.getElementById("s" + id[1]);
    let total = document.getElementById("t" + id[1]);
    total.innerHTML = +total.innerHTML - +price.innerHTML;

    sum = sum - +price.innerHTML;
    totalPrice.innerHTML = sum;
  }
}

let deleteButtons = document.getElementsByClassName("delete-btn");

for (let i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener("click", function () {
    deleteButtons[i].parentElement.remove();
  });
}

let heartButtons = document.getElementsByClassName("fas fa-heart");

for (let i = 0; i < heartButtons.length; i++) {
  heartButtons[i].addEventListener("click", function (event) {
    event.target.classList.toggle("like");
    console.log(event.target);
  });
}