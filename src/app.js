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