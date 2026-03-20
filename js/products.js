// range
const rangeInput = document.getElementById('range4');
const rangeOutput = document.getElementById('rangeValue');

rangeOutput.textContent = rangeInput.value;

rangeInput.addEventListener('input', function () {
    rangeOutput.textContent = this.value;
});


//globalna promenljiva
let iznos = 0; //$

//funkcija dodavanja cene na ukupan iznos

function dodajNaIznos(cena) {


    iznos += parseFloat(cena);

}

//primer
dodajNaIznos(50);
console.log(iznos);

dodajNaIznos(30);
console.log(iznos);

dodajNaIznos(120);
console.log(iznos);

dodajNaIznos(-200);
console.log(iznos);


//prikaz iznosa
function openCart() {

    alert("Ukupan iznos korpe je : $" + iznos.toFixed(2));
}




/* ------------------ DORADA NOVOG ZADATKA ---------------*/

// niz svih proizvoda

let allProducts = [
    { "name": "Nike Sportswear Swoosh", "price": 249.99, "qty": 1 },
    { "name": "Nike Shox Z SE", "price": 139.99, "qty": 7, },
    { "name": "Jordan Apex", "price": 16.49, "qty": 15, },
    { "name": "Jordan Brooklyn Essentials", "price": 54.99, "qty": 15, },
    { "name": "Nike Air Force 1 Shadow", "price": 64.99, "qty": 21, },
    { "name": "Nike Sportswear Phoenix", "price": 59.99, "qty": 17, },
    { "name": "Nike Icon Blazer", "price": 19.99, "qty": 9, },
    { "name": "Nike Club", "price": 32.99, "qty": 12, },
    { "name": "Nike V5 RNR", "price": 59.49, "qty": 17, }
];



//funkcija za računanje ukupnog lagera

function productQuantity() {

    let totalValue = 0;

    for (let i = 0; i < allProducts.length; i++) {
        valuePerProduct = (allProducts[i]['price'] * allProducts[i]['qty']);
        totalValue += valuePerProduct;
    }

    return totalValue.toFixed(2);
}

//ispisivanje ukupne vrednosti lagera

console.log("Ukupna vrednost lagera:", "$" + productQuantity());




//popunjavanje novog niza

let lowStock = [];
let j = 0;

for (let i = 0; i < allProducts.length; i++) {
    if (allProducts[i]['qty'] < 10) {
        lowStock[j] = allProducts[i];
        j++;
    }
}

//ispisivanje novog niza

for (l in lowStock) {
    console.log(lowStock[l]);

}





//funkcija za pretragu po nazivu

function findProductByName(list, searchName) {


    for (let i = 0; i < list.length; i++) {
        if (searchName.toLowerCase().trim() === list[i].name.toLowerCase().trim()) {
            return list[i];
        }
    }

    return null;
}

//testiranje funkcije

console.log("Testiranje funkcije findProductByName():");
console.log(findProductByName(allProducts, 'NikeSportswearSwoosh'));
console.log(findProductByName(allProducts, 'Nike Sportswear Phoenix'));