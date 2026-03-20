//konstante/promenljive

//product 1
const PRODUCT1_NAME = "Sneakers"
const PRODUCT1_PRICE = 16499; //RSD
let PRODUCT1_QTY = 1;



//product 2
const PRODUCT2_NAME = "Sportswear";
const PRODUCT2_PRICE = 6200;//RSD
let PRODUCT2_QTY = 2;


const VAT_RATE = 0.2;
const CURRENCY = "EUR";
const USD_PER_EUR = 1.16;
let VALID_COUPONS = ["SAVE10", "SAVE15", "FREESHIP"];


//typeof

console.log("typeof za VAT_RATE je " + typeof VAT_RATE);
console.log("typeof za CURRENCY je " + typeof CURRENCY);
console.log("typeof za USD_PER_EUR je " + typeof USD_PER_EUR);





//funkcija uklanja razmake, prebacuje u velika slova i vraća modifikovani kupon
function normalizeCupon(code) {

        return code.trim().toUpperCase();



};


//provera postojanja kupona

function isValidCoupon(code) {


        return boolValidate = VALID_COUPONS.includes(code);


}



//validacija kupona i obaveštenja

function validateAndNotify() {

        //učitavanje vrednosti

        let code = document.getElementById('promoInput').value;


        //pozivanje funkcije normalizacije kupona

        code = normalizeCupon(code);


        //pozivanje funkcije za proveru da li kupon postoji

        let coupon = isValidCoupon(code);


        //ispisivanje ispravne poruke i brisanje koda ukoliko kod nije ispravan

        document.getElementById('promoInput').value = "";

        while (coupon) {


                if (code === VALID_COUPONS[0]) {
                        alert("Vaš kupon donosi 10% popusta.");
                        document.getElementById('promoInput').value = code;
                        break;
                } else if (code === VALID_COUPONS[1]) {
                        alert("Vaš kupon donosi 15% popusta.");
                        document.getElementById('promoInput').value = code;
                        break;
                } else {
                        alert("Vaš kupon donosi besplatnu dostavu.");
                        document.getElementById('promoInput').value = code;
                        break;
                }


        }

}


