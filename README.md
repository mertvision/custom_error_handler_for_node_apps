# Node.js ve Express.js İçin Özel Hata İşleyicisi

## 1. Açıklama

Hata yönetimi bir web uygulamasındaki en önemli konulardan biridir. Eşzamansız kodlardaki hataları `try {} catch (err) {return next(err)}` yapısıyla yakalar ve bunları özel hata işleyici ara yazılımına gönderirsiniz. Bu depo, hatayı işleyen ve hatayı özel mesaj ve hata durum koduyla gönderen özel bir özel hata işleyici ara yazılımı sağlar. 

`import customErrorHandler from './customErrorHandler';`

Bundan sonra uygulamanıza bir ara katman yazılımı olarak dahil etmelisiniz çünkü bu her istekte çalışacak bir ara katman yazılımıdır: `app.use(customErrorHandler)`.

## 2. Dosya Yapısı

Dosya yapısı:

+ `index.ts`: Sunucunun ana dosyasıdır.

+ `CustomError.ts`: CustomError sınıfı, Error sınıfı kullanılarak oluşturuldu. Error sınıfı message özelliğine sahipti ancak durum kodu özelliğine sahip değildi. CustomError sınıfı durum kodu özelliğine sahiptir. Bu dosyayı, özel hata mesajı ve durum kodunu göndermek istediğiniz yere ekleyin. Ardından yeni bir CustomError mesajı oluşturun ve gönderin 
'next()' ile 'customErrorHandler'a. Bu dosyadaki ara katman yazılımı hatayı yakalayacak ve kullanıcıya geri gönderecektir. Bunun gibi:

```
if(!userInput){
    return next(new CustomError("Girişlerinizi Kontrol Edin", 400))
};
```

+ `customErrorHandler.ts`:customErrorHandler bir ara katman yazılımıdır. Error'u parametre olarak tutar. Kod gelen hata bilgilerini CustomError'a atar. Daha sonra hata adı veya koduna göre CustomError sınıfı ile yeni bir hata mesajı oluşturulur. 

## 3. Projeyi Çalıştırma

Projeyi bilgisayarınıza indirdikten sonra sırayla aşağıdaki komutları çalıştırın:
 + `npm install`: Uygulamanın ayağa kalkması için gerekli Node modüllerini indirir.
 + `npx tsc`: Uygulama kodlarını derleyerek TypeScript kodlarına çevirir ve dist klasörü altında .ts uzantılı dosya çıktıları verir.
