const targets= document.querySelectorAll('.target')

const options ={
    treshold:0.3
}

const callBack=(entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('active')
        }
        else{
            entry.target.classList.remove('active')
        }
    })
} 


const observer =new IntersectionObserver(callBack,options);

targets.forEach((target=>{
    observer.observe(target)
}))

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

// Projemizin baş kahramanı  IntersectionObserver;
// const observer =new IntersectionObserver()içine iki parametre ister;1.si callback 2.de options gönder()içine yazmıyoruz=)
// Daha güzel bir görüntü elde etmek adına bunları dışarı yazıp daha sonra içerisine göndericem.
// Optionslar birden fazla şekl olabiliyor;biz treshold kullanıcz=Sayfa içinde gösterilme oranını temsil ediyor.Daha sonra bu
// bir tane callback parantezi almakta içinde entries değerlerini barındıracak bu değerlerde birdern çok olduğu için foreach
// döngüzü ile içersine girmek gerekiyor.içinde ki değerleri entry ile alıcam ve clg ile(enty)değerlerini bastırıcam en sonunda
// ıntersectionobserver içine (callback,options)değerini gönderdim.Daha sonra da elde etmiş old. observeri kullanarak biz ilk önce
// yazmış old elementlere(targets)müdehelelerimizi gerçekleştirmiş olruz.Bunun içinde targets.forEach((target)=>{
    // observer.observe(target)
    // })
// targets.forEach diycem ve bütün target değerlerim de observer observe özelliğini ekle,artık bunlar observe edilmiş;kont edilmiş
// olacaklar observer tarafından