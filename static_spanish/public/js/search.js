const searchIcon=document.getElementById('searchIcon')
const searchEngine=document.getElementById('searchEngine')


searchIcon.addEventListener('click', ()=>{
    searchEngine.classList.toggle('active')
})
// Bu element olarak oradada ki ikon elementine erişecek;ona tıklayıp açacağımız için.İconun ismide
// searchIcon Ona erişim sağladıktan sonra ebeveyn alanına da erişim sağlamam gerekiyor;bizim animas-
// yonumuz aslında elementin içerisinde ki child'lere değilde ebeveyn elemente verilmiş bir değer;index.html
// 
// de searchEngin'e id değeri veriyorum searchEngin olsun ve const searchIcon=document.getElementById('searchIcon')i
// kopyaladım bunu search engine olarak değiştirip click işlemi gerçekleştiğinde classList ekliyeceksin
// toggle işlemi de eğer içinde aktiv değeri varsa kaldıracak yoksa ekleyecek 
