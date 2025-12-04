📋 İçindekiler

🤖 Giriş

⚙️ Teknoloji Stack

🔋 Özellikler

🤸 Hızlı Başlangıç

🕸️ Kopyalanabilir Kodlar

🔗 Assets

🚀 Daha Fazlası

🤖 Giriş

Bu proje, Expo ve TypeScript kullanarak popüler filmleri listeleyen, arama özelliğine sahip ve kullanıcı etkileşimine göre popülerlik algoritması oluşturan mobil bir film uygulamasıdır.

Uygulama, TMDB Film API’sinden veri alır ve Appwrite ile kullanıcı davranışlarına göre popüler filmleri sıralamak için basit bir algoritma kullanır. Modern UI/UX prensipleri ile geliştirilmiş olup ölçeklendirilebilir yapıya sahiptir.

⚙️ Teknoloji Stack

Expo: Android/iOS uygulama geliştirme platformu.

React Native: Component tabanlı mobil UI framework’ü.

Appwrite: Kimlik doğrulama, database ve veri depolama için Backend servisleri.

TypeScript: Tip güvenliği sağlayarak hataları azaltan JavaScript üst kümesi.

TailwindCSS + NativeWind: Utility-first mobile UI stil sistemi.

🔋 Özellikler

🎬 Gerçek Zamanlı Veri
TMDB API üzerinden anlık film verileri.

🏠 Anasayfa
Öne çıkan filmler + keşfet alanı.

🔍 Arama Sayfası
Favori filmini bul, detaylarını gör.

🔥 Popülerlik Algoritması
Kullanıcı aramalarına göre filmleri sıralar.

✨ Temiz Mimari & Yeniden Kullanılabilir Kodlar
Component bazlı ölçeklenebilir yapı.

🤸 Hızlı Başlangıç
Gereksinimler

Git

Node.js

npm

Repository’yi Klonla
git clone https://github.com/your-repo/rn-movie-app.git
cd rn-movie-app

Paketleri Kur
npm install

Ortam Değişkenlerini Ayarla

Projenin kök dizinine .env dosyası ekle:

EXPO_PUBLIC_MOVIE_API_KEY=
EXPO_PUBLIC_APPWRITE_PROJECT_ID=
EXPO_PUBLIC_APPWRITE_DATABASE_ID=
EXPO_PUBLIC_APPWRITE_COLLECTION_ID=


TMDB API Key ve Appwrite bilgilerini kendi hesabından al.

Projeyi Çalıştır
npx expo start


Cihazında Expo Go ile QR kodunu okut ve projeyi aç.