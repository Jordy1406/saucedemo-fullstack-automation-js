SauceDemo Automation Framework (Web & Mobile)
Project ini berisi automation testing untuk website dan aplikasi mobile SauceDemo menggunakan Cucumber (BDD).

1. Tech Stack
• Web: Playwright (JavaScript)
• Mobile: Appium + WebdriverIO (JavaScript)
• Framework: Cucumber JS
• Reporting: Cucumber HTML Reporter
2. Prasyarat Setup (Installation)
Umum:
• Node.js: Pastikan sudah terinstall (versi 16 ke atas).
• VS Code: Editor koding.

Untuk Web (Playwright):

• Run `npm install @playwright/test`
• Run `npm install @cucumber/cucumber`

Untuk Mobile (Appium):

• Appium Server GUI: Download dan install aplikasi desktop Appium.
• Java JDK & Android Studio: Untuk emulator dan SDK (set environment `ANDROID_HOME` & `JAVA_HOME`).
• Appium Inspector: Untuk mencari ID elemen di HP.
• Driver: Run `appium driver install uiautomator2`

3. Cara Menjalankan Test
Web Testing:

```

npm run test:web

```

Mobile Testing:

## 1. Buka Appium Server GUI -> Start Server (Port 4723).

## 2. Hubungkan HP Android atau buka Emulator.

## 3. Jalankan perintah:

```

npm run test:app

```

## 4. Folder Structure
- `saucedemo-pro-automation/` (Web Project)
- `saucedemo-app-automation/` (Mobile Project)
  - `features/`: Skenario tes (Gherkin).
  - `pages/`: Page Object Model (Selectors & Actions).
  - `step_definitions/`: Penghubung scenario ke kodingan.
  - `hooks/`: Setup browser/app & screenshot logic.
  - `reports/`: HTML Test Reports.

## 5. Flow Testing (Checkout)
1. Login dengan user standar.

2. Pilih produk (Backpack).

3. Masuk ke Keranjang (Cart).

4. Checkout & Isi data informasi (Nama, ZIP).

5. Klik Finish & Verifikasi pesan sukses.


----------------------------------------------------------

## 6. Arsitektur Proyek: Page Object Model (POM)

Project ini menggunakan design pattern **Page Object Model (POM)** untuk memisahkan antara *Selector/UI Elements* dengan *Test Logic*. 

### Keuntungan POM dalam Proyek Ini:
- **Maintainability:** Jika ada perubahan ID elemen pada aplikasi, kita hanya perlu mengubahnya di satu file Page saja.
- **Readability:** Step definitions menjadi lebih bersih dan mudah dibaca karena hanya berisi alur bisnis.
- **Reusability:** Fungsi-fungsi umum (seperti Login) dapat digunakan kembali di berbagai skenario tanpa menulis ulang kode.

### Struktur Folder POM:
- `pages/`: Berisi class JavaScript yang menyimpan selector (menggunakan `get`) dan fungsi aksi (seperti - `login()`, `addToCart()`).
- `LoginPage.js`: Mengelola elemen di halaman login.
- `ProductPage.js`: Mengelola elemen daftar produk.
- `CheckoutPage.js`: Mengelola proses input data hingga finish.
- `step_definitions/`: Hanya berisi pemanggilan fungsi-fungsi yang ada di dalam folder `pages/`.

# SauceDemo Automation Framework (Web & Mobile)

This repository contains an end-to-end automation testing framework for SauceDemo.

## 7. 📁 Project Structure
- **/saucedemo-pro-automation**: Web automation using Playwright and Cucumber JS.
- **/saucedemo-app-automation**: Mobile automation using Appium and WebdriverIO.

## 8. 🚀 CI/CD Integration
The Web automation project is integrated with **GitHub Actions**. Every push to the main branch will trigger the automated regression suite.

## 9. 🛠 Tech Stack
- **Languages:** JavaScript
- **Patterns:** Page Object Model (POM)
- **Reporting:** Cucumber HTML Reporter