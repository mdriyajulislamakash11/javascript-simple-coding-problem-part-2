hello part to 22 er
//______________________________module 22 part-02 ___________________________/
// 23-2 Who is the tallest? Find the max number in an array
// \_______________________ big number ________________________/
const  height = [21, 23, 53, 63, 63, 26, 43, 95];
function getMax (numbers) {
      let leages = numbers[0];
      for(const num of numbers){
            if(num > leages){
                  leages = num
            }
      }
      console.log(leages)
      return leages
}
const max = getMax(height);
console.log("max value is : ", max);

// \_____________ practice ______________/
const height = [23, 24, 42, 53, 62, 25, 13, 4, 15, 22]
function getMIn(numbers) {
      let min = numbers[0];
      for(const num of numbers){
            if(num < min){
                  min = num
            }
      }
      console.log(min)
      return min;
}

const min = getMIn(height);
console.log("the min values: " ,min);
//__________________________________________________________/.


//______________________________module 22 part-02 ___________________________/
// 23-3 Use add and multiplication to calculate wood requirements.

function woodQuantity(chaireQuantity, tableQuantity, bedQuantity) {
      const perChairWood = 3;
      const perTableWood = 6;
      const perBedWood = 10;

      const chaireTotalWood = chaireQuantity * perChairWood;
      const tableTotalWood = tableQuantity * perTableWood;
      const bedTotalWood = bedQuantity * perBedWood;

      const totalWood = chaireTotalWood + tableTotalWood + bedTotalWood;
      return totalWood;
}

const totalWoodQuantity = woodQuantity(2, 3, 2);
console.log("wood quantity is: ", totalWoodQuantity);

//_________________ practice _______________/.
function  prices(shirtPrice, pentPrice, shozPrice){
      const perShirtPrice = 500;
      const perPentPrice = 300;
      const perShozPrice = 900;

      const shitTotalQuantity = shirtPrice * perShirtPrice;
      const pentTotalQuantity = perPentPrice * pentPrice;
      const shozTotalQuantity = perShozPrice * shozPrice;

      const totalPrice = shitTotalQuantity + pentTotalQuantity + shozTotalQuantity;
      return totalPrice;
};

const totalPrices = prices(1, 1, 0);
console.log("total prices: ", totalPrices);
//_____________________________________________________________/.



//______________________________module 22 part-02 ___________________________/
// 23-4 Find the cheapest phone from an array of phone objects.

const phones = [
      { name: "samsang", price: 20000, camera: "18mp", color: "black" },
      { name: "xoumi", price: 30000, camera: "18mp", color: "black" },
      { name: "oppo", price: 40000, camera: "18mp", color: "black" },
      { name: "vivo", price: 50000, camera: "18mp", color: "black" },
      { name: "i phone", price: 100000, camera: "18mp", color: "black" },
];

function getMin(mobile) {
      let min = mobile[0];
      for(const phone of phones){
            if(phone.price < min.price){
                  min = phone;
            }
      }
      return min;
}
const cheps = getMin(phones);
console.log("phone chepes price: ", cheps)

///_____________ big price phone _______________/
const phones = [
      { name: "samsang", price: 20000, camera: "18mp", color: "black" },
      { name: "xoumi", price: 30000, camera: "18mp", color: "black" },
      { name: "oppo", price: 40000, camera: "18mp", color: "black" },
      { name: "vivo", price: 50000, camera: "18mp", color: "black" },
      { name: "i phone", price: 100000, camera: "18mp", color: "black" },
];

function getMin(mobile) {
      let min = mobile[0];
      for(const phone of phones){
            if(phone.price > min.price){
                  min = phone;
            }
      }
      return min;
}
const cheps = getMin(phones);
console.log("phone chepes price: ", cheps)
//________________________________________________________/.



//______________________________module 22 part-02 ___________________________/
// 23-5 Calculate the total cost of the products in a shopping cart.
const products = [
      {name: "tel", price: 300,},
      {name: "sempo", price: 300,},
      {name: "shirt", price: 300,},
      {name: "pent", price: 300,},
]

function getPrice (products){
      let sum = 0;
      for(const product of products){
            sum = sum + product.price;
      }
      return sum
}

const totalPrice = getPrice(products);
console.log("total prices: ", totalPrice)

//________________ practice task ________________/
const products = [
      {name: "tel", price: 300, quantity: 5},
      {name: "sempo", price: 300, quantity: 3},
      {name: "shirt", price: 300, quantity: 7},
      {name: "pent", price: 300, quantity: 10},
]

function getPrice (products){
      let sum = 0;
      for(const product of products){
            const productCost = product.price * product.quantity;
            sum = sum + productCost;
      }
      return sum
};
const totalPrice = getPrice(products);
console.log("total prices: ", totalPrice);
//_________________________________________________/.



//______________________________module 22 part-02 ___________________________/
// 23-6 (advanced) Multi-layer discount price calculation.
//________________ discount calculator ______________/
function setCalculate(quantity){
      if(quantity <= 100){
            const total = quantity * 100;
            return total;
      }else if(quantity <= 200){
            const total = quantity * 90;
            return total;
      }else{
            const total = quantity * 70;
            return total
      }
};
const total = setCalculate(201)
console.log(total);

// calcylator _____________________________/
function add (num1, num2){
      return num1 + num2;
};

function substrac(num1, num2){
      return num1 - num2;
}

function multiplay (num1 , num2){
     return num1 * num2
}

function divide (num1 , num2){
      return num1 / num2;
}

function calculator (a, b, oparetion){
      if(oparetion === "+"){
            const result = add(a, b);
            return result
      }else if(oparetion === "-"){
            const result = substrac(a, b);
            return result;
      }else if(oparetion === "*"){
            const result = multiplay(a, b)
            return result;
      }else if(oparetion === "/"){
            const result = divide(a, b);
            return result;
      }else{
            return "only, add, substruc, multiplay, divaide, oparetion is allowed"
      }
}

const result = calculator(5, 10, "-");
console.log(result)
//__________________________________________________/.




//______________________________module 22 part-02 ___________________________/
// 23-8 Handle unexpected function input parameter error.



