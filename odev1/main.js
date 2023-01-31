let form = document.getElementById('formSubmit').addEventListener('click', function(event){
    //Varsayılan değerleri görmezden gel
   
    event.preventDefault();
    return kontrol()
});
let form2 = document.getElementById('temizle').addEventListener('click', function(event){
    //Varsayılan değerleri görmezden gel
   
    event.preventDefault();
    return temizle()
});
let p = document.getElementById('dogruyanlis')
let kullanici =document.getElementById('kullanici_adi')
let sifre =document.getElementById('sifre')
let sifreTekrar =document.getElementById('sifre_tekrar')
function kontrol() {
    p.style.color = 'red'
    p.innerHTML = "Bilgileri düzgün girmediniz"
    if(kullanici.value && sifre.value && sifreTekrar.value){
        p.style.color='green'
        p.innerHTML = "Giriş başarıyla yapıldı"
    }
    
}

function temizle() {
    p.innerHTML = ""
    kullanici.value =""
    sifre.value =""
    sifreTekrar.value=""
}