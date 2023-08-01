//uyguluma çalıştırma mantığım herhangi birinin değrrinin arttırıp azattığımda yani tıkladığımda diğerlerinin değeri değişiyor
// onchange="calculateTemp(event)" html kısmında inputlara ekliyorum çünkü biri tetiklendiğinde hepsinin tetiklenmesini istiyorum
const celsius =document.getElementById('celsius');
const fahrenheit =document.getElementById('fahrenheit');
const kelvin =document.getElementById('kelvin');
//değerlerin atadığım id leri çekiyorum




function calculateTemp(event){
    debugger;
    const currentValue = Number(event.target.value);

    switch(event.target.name){
        case 'celsius':
            kelvin.value= (currentValue + 273.32).toFixed(2);
            fahrenheit.value= (currentValue*1.8 + 32).toFixed(2);
            break;
        case 'fahrenheit':
            celsius.value= ((currentValue - 32) /1.8).toFixed(2);
            kelvin.value= ((currentValue - 32) /1.8 + 273.32).toFixed(2);
            break;
        case 'kelvin':
            celsius.value= (currentValue - 273.32).toFixed(2);
            fahrenheit.value= ((currentValue - 273.32) *1.8 + 32).toFixed(2);
            break;
            default:
                break;
    }
}
/*debugger;: Bu ifade, hata ayıklama işlemi için bir duraklama noktası ekler. Kod bu noktaya geldiğinde, tarayıcının geliştirme araçlarındaki hata ayıklama modunda 
duracak ve izlenebilir hale gelecektir. Bu, kodun belirli bir noktada nasıl çalıştığını incelemek ve değişkenlerin değerlerini kontrol etmek için kullanılır.

const currentValue = Number(event.target.value);: Bu satır, bir olayın hedef öğesinin değerini bir sayıya dönüştürerek currentValue adlı bir sabit değişkene atar. 
Yukarıda açıklanan gibi, event.target.value kullanıcıdan alınan bir değeri temsil eder.

switch(event.target.name): Bu yapı, event.target.name değerine göre bir durum değerlendirmesi yapar. event.target.name, olayın hedef öğesinin ismini temsil eder. 
Bu durum değerlendirmesi, sıcaklık biriminin hangi birim olduğunu belirlemek için kullanılır.

case 'celsius':, case 'fahrenheit':, case 'kelvin': : Bu durumlar, farklı sıcaklık birimlerine karşılık gelir. Örneğin, 'celsius' durumunda, Celsius birimine göre 
yapılacak işlemler yer alır.

Her bir durumun içinde, o birime özgü işlemler gerçekleştirilebilir. Burada her bir durum için belirli bir işlem bulunmadığından, break; ifadeleriyle durumlar 
sonlandırılıyor. Bu, her durumun ardından diğer durumların çalışmasını engeller.

default: ifadesi, hiçbir durumun eşleşmediği durumu temsil eder. Burada herhangi bir işlem yapılmamış, sadece bir durumu belirtmek için yer almıştır. */