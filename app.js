const form = document.getElementById('main-form');
const result = document.getElementById('result');

function nominalDolar(num) {
  if (num.endsWith(1)) {
    return 'долар';
  } else if (num.endsWith(2) || num.endsWith(3) || num.endsWith(4)) {
    return 'долара';
  } else {
    return 'доларів';
  }
}

function nominalCent(num) {
  if (num.endsWith(1)) {
    return 'цент';
  } else if (num.endsWith(2) || num.endsWith(3) || num.endsWith(4)) {
    return 'цента';
  } else {
    return 'центів';
  }
}

function allnumeric(inputtxt) {
  var numbers = /^[0-9]+$/;
  if (inputtxt.value.match(numbers)) {
    return true;
  } else {
    return false;
  }
}

function CheckDecimal(inputtxt) {
  var decimal = /^[-+]?[0-9]+\.[0-9]+$/;
  if (inputtxt.value.match(decimal)) {
    return true;
  } else {
    return false;
  }
}

function submitForm() {
  let sum = form.sum.value;
  let price = form.price.value;

  if (!CheckDecimal(form.sum) && !allnumeric(form.sum)) {
    alert('Введіть коректну суму');
  } else if (!CheckDecimal(form.price) && !allnumeric(form.price)) {
    alert('Введіть коректну ціну');
  } else if (sum < 0 || price < 0) {
    alert('Число не може бути меншим за 0');
  } else if (sum < price) {
    alert('Сума не може бути меншою за ціну');
  } else {
    let rest = (sum - price).toFixed(2).split('.');

    const dolar = rest[0];
    const cent = rest[1];

    const res = `${dolar} ${nominalDolar(dolar)}, ${cent} ${nominalCent(cent)}`;

    result.innerText = `Ваша решта: ${res}.`;
    form.reset();
  }
}

form.addEventListener('submit', e => {
  e.preventDefault();

  submitForm();
});
