Feature: Checkout Aplikasi SauceDemo

Feature: Checkout Mobile
  Scenario: Melakukan pembelian sampai selesai
    Given Saya membuka aplikasi SauceDemo di mobile
    When Saya login dengan user "standard_user"
    And Saya menambah barang ke keranjang dan lanjut checkout
    And Saya menyelesaikan pesanan
    Then Saya melihat pesan sukses pembelian