const form = document.querySelector("#orderForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const categorySelect = document.querySelector("#category");
const productSelect = document.querySelector("#product");
const quantityInput = document.querySelector("#quantity");
const confirmationDiv = document.querySelector("#confirmation");

categorySelect.addEventListener("change", function() {
  const selectedCategory = this.value;
  productSelect.innerHTML = "";
  productSelect.disabled = false;
  switch (selectedCategory) {
    case "cpu":
      productSelect.innerHTML = `
        <option value="i5">Intel Core i5</option>
        <option value="i7">Intel Core i7</option>
        <option value="ryzen3">AMD Ryzen 3</option>
        <option value="ryzen5">AMD Ryzen 5</option>
      `;
      break;
    case "gpu":
      productSelect.innerHTML = `
        <option value="gtx1650">Nvidia GTX 1650</option>
        <option value="gtx1660">Nvidia GTX 1660</option>
        <option value="gtx1660ti">Nvidia GTX 1660 Ti</option>
        <option value="rx580">AMD Radeon RX 580</option>
      `;
      break;
    case "ram":
      productSelect.innerHTML = `
        <option value="8gb">8 GB</option>
        <option value="16gb">16 GB</option>
        <option value="32gb">32 GB</option>
        <option value="64gb">64 GB</option>
      `;
      break;
    case "storage":
      productSelect.innerHTML = `
        <option value="ssd128">128 GB SSD</option>
        <option value="ssd256">256 GB SSD</option>
        <option value="ssd512">512 GB SSD</option>
        <option value="hdd1tb">1 TB HDD</option>
      `;
      break;
    case "motherboard":
      productSelect.innerHTML = `
        <option value="b450">B450</option>
        <option value="b460">B460</option>
        <option value="b550">B 550</option>
        <option value="x570">X570</option>
      `;
      break;
    case "power_supply":
      productSelect.innerHTML = `
        <option value="450w">450 W</option>
        <option value="550w">550 W</option>
        <option value="650w">650 W</option>
        <option value="750w">750 W</option>
      `;
      break;
    default:
      productSelect.innerHTML = "";
      productSelect.disabled = true;
      break;
  }
});

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  const category = categorySelect.value;
  const product = productSelect.value})
