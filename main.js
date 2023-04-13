const prices = {
    days: [
      {value: 4, price: 150},
      {value: 7, price: 190},
      {value: 10, price: 265},
      {value: 14, price: 350}
    ],
    internet: [
      {value: 3, price: 70},
      {value: 5, price: 100},
      {value: 10, price: 150},
      {value: 15, price: 185},
      {value: 20, price: 215},
      {value: 25, price: 235},
      {value: 30, price: 270}
    ],
    minutes: [
      {value: 100, price: 75},
      {value: 200, price: 100},
      {value: 300, price: 150},
      {value: 400, price: 200},
      {value: 500, price: 240},
      {value: 600, price: 270}
    ]
  };
  
  const daysSlider = document.getElementById('days-slider');
  const internetSlider = document.getElementById('internet-slider');
  const minutesSlider = document.getElementById('minutes-slider');
  const totalPriceValue = document.getElementById('total-price-value');
  const daysValue = document.getElementById('days-value');
  const internetValue = document.getElementById('internet-value');
  const minutesValue = document.getElementById('minutes-value');
  
  function calculatePrice() {
    const selectedDays = prices.days[daysSlider.value];
    const selectedInternet = prices.internet[internetSlider.value];
    const selectedMinutes = prices.minutes[minutesSlider.value];
    const totalPrice = selectedDays.price + selectedInternet.price + selectedMinutes.price;
    totalPriceValue.textContent = `${totalPrice}р`;
    daysValue.textContent = selectedDays.value + " дней";
    internetValue.textContent = selectedInternet.value + " ГБ";
    minutesValue.textContent = selectedMinutes.value + " мин";
  }
  
  daysSlider.addEventListener('input', calculatePrice);
  internetSlider.addEventListener('input', calculatePrice);
  minutesSlider.addEventListener('input', calculatePrice);
  
  calculatePrice();