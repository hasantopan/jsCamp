console.log("Hello World!!") // yorum satırı

// JS type safe değildir , en başta ne tanımlanmışsa ondan sonra onunla gidilir
let dolarDun = 9.20
let dolarBugun = 9.30

console.log(dolarDun)

const euroDun = 11.2 // const la atanan değere başka bi değer atanamaz

console.log(euroDun)

//array 
//camelCasing 
let konutKredileri = ["Konut Kredisi","Emlak Kredisi","Kamu Konut Kredisi","Özel KOnut Kredisi"] 

console.log("<ul>")

for(let i= 0; i<konutKredileri.length;i++)
{
    console.log("<li>"+konutKredileri[i]+"</li>")
}

console.log("</ul>")



