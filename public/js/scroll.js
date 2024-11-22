const targets= document.querySelectorAll('.target')

targets.forEach((target)=>{
    console.log(target)
})
// Bizim herbir elementimizde scroll animasyonu var;benim elementlerle yazacağım animasyon arasında
//bağlantı kurmam gerekiyor;elementlerin sahip olduğu bir alana benim de sahip olmam gerekiyor ki buradan 
//o elementlere müdahele edebileyim.örn benim herbie elementle aramda className gibi bir bağlantı olsa;ben 
//artık bu elemntlerin sahip old claasName'yle haberleşebilirim;

// class değeri target olan bütün elemntlere erişim sağlayacaksın  document.querySelectorAll ile yani birden 
//çok seçeceğim için bu yapıyı ekledim ve . koyarak bu bir class olacak ve adı target olacak=)
// Kod hali yukarıda ama ben yine de kopyaladım;
// const target= document.querySelectorAll('.target')

//Döngülerile ekrana yazdırmak için;
// targets.forEach((target)=>{
//     console.log(target)
// })
//Projeme baktığımda consolde bir çıktı yok;class değeri target olan bir element yok sayfada fakat ben projemin
//içerisinde herhangi bir elementin(index.html'de) clss değerine target verdiğimde artık elemnetim bizaatin kendisi olur.
//Yani id ile seçmiyoruz hata verebilir;sayfa içinde herzaman olma durumu söz konusu değil.Biz bu sayfa içerisinin görün-
//tüleniyorsa git onu çek göster diycez ve bu nedenle bir döngüyle ekrana yazdırıcaz 
// Birden çok elementi tek seferde bir animasyon vericem aslında Daha sonra bunlara css kod yazarak bunları değiştiricez.

// Projemizin baş kahramanı  IntersectionObserver