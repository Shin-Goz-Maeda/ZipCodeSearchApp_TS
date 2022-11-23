let inputBox: any = document.getElementById('inputBox');
let address1: any = document.getElementById('address1');
let address2: any = document.getElementById('address2');
let address3: any = document.getElementById('address3');
let button: any = document.getElementById('button');

function getAddress() {
  let zipCode: number = inputBox.value;
  let url = `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipCode}`;
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(address) {
      address1.value = address.results[0].address1;
      address2.value = address.results[0].address2;
      address3.value = address.results[0].address3;
    })
    .catch(function(error) {
      console.warn(error.message);
    });
}

button.addEventListener('click', function() {
  getAddress();
});