//typescript -- javaScript type güvenli bi dil değil, microsoft bunu güvenilir hale getirdiği dil "typeScript"

// var, let , const  değişken tanımlamaları
//  jS  file baseli(dosya bazlı) bir dildir dosya yukardan aşağıya taranır
//  sayi1= {} obje tanımlamadır

let sayi1 = 10
sayi1="Hasan Topan"
let student = {id :1, name:"Hasan"}  //  sayi1= {} obje tanımlamadır
console.log(student)


// FONKSİYON TANIMLAMA
function save (ogrenci) { //TYPESCRIPTte  function save (ogrenci:student) / buraya ancak student gönderebilirsin aksi takdirde çalışmaz, JS de böyle bi şey yok
    console.log(ogrenci)    
}
save(student)
save(15  + "  save1 çalıştı")


function save2 (ogrenci, puan=10) { 
    console.log(ogrenci.name + ": " + puan + "  save2 çalıştı")    
}
save2(student)


function save3 (ogrenci, puan=10) { 
    console.log(ogrenci.name + ": " + puan + "  save3 çalıştı")    
}
save3(student,100)


function save4 (puan=10, ogrenci) { 
    console.log(ogrenci.name + ": " + puan + "  save4 çalıştı")    
}
save4(undefined , student)  // UNDEFINED :  ben aslımda yoğum


let students = ["Hasan Topan","Duygu Sezgin","Engin"]// array oluşturma, yeni bir referans alınmış olur
console.log(students)

let students2 = [student, {id:2, name:"Duygu Sezgin"}]
console.log(students2)

let students3 = [student, {id:2, name:"Duygu Sezgin"}, "Ankara", {city:"Uşak"}]
console.log(students3)

console.log("\n\n")
console.log("\n\n")

console.log("*** REST ***")


//////////////////////
// ******  REST ****//
//////////////////////
//rest: geriye kalan parametrelerdir , C# daki karşılığı "params"  ,  Java daki karşılığı "varArgs"

let showProducts = function name(id,...products) { // ...products bir arraydir
    console.log(id)
    console.log(products)
}

console.log(typeof showProducts)

console.log("showProducts() çalışacak şimdi...")
showProducts()
console.log("showProducts() çalıştı")

console.log("\n\n")

console.log("showProducts(10,'Elma","Armut","Karpuz') çalışacak şimdi...")
showProducts(10,"Elma","Armut","Karpuz")
console.log("showProducts(10,'Elma","Armut","Karpuz') çalıştı")

// ** showProducts fonksiyonunda "products[0]" ile sadece Elmaya ulaşabilirisn

console.log("\n\n")
console.log("\n\n")

console.log("*** SPREAD ***")

//////////////////////
// ******  SPREAD ****//
//////////////////////
//... spraed : ayrıştırmak. "rest"in tersi olarak düşünülebiilir

console.log("console.log(Math.max(1,2,5,60,14,25,-5,9)) çalışacak şimdi...")
console.log(Math.max(1,2,5,60,14,25,-5,9))
console.log("console.log(Math.max(1,2,5,60,14,25,-5,9)) çalıştı")

console.log("\n\n")


let puanlar = [1,2,5,60,14,25,-5,9]

console.log("console.log(...puanlar)  ve  console.log(Math.max(...puanlar)) çalışacak şimdi...")
console.log(...puanlar)// dizi olarak değil de ayrı ayrı olarak basar, spread yapmış olur
console.log(Math.max(...puanlar))
console.log("console.log(...puanlar)  ve  console.log(Math.max(...puanlar)) çalıştı")

console.log("\n\n")

console.log("console.log('ABC','D','EFG') , console.log(...'ABC','D',...'EFG')---- çalışacak şimdi...")
console.log("ABC","D","EFG")
console.log(..."ABC","D",..."EFG")
console.log("console.log('ABC','D','EFG') , console.log(...'ABC','D',...'EFG')---- çalıştı")



console.log("\n\n")
console.log("\n\n")

console.log("*** DESTRUCTURING ***")


//////////////////////
// ******  DESTRUCTURING ****//
//////////////////////