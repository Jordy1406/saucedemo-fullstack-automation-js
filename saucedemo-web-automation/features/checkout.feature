Feature: Checkout SauceDemo

  @web @mobile
  Scenario: User melakukan pembelian barang sampai selesai
    Given Saya login ke SauceDemo dengan user "standard_user"
    When Saya menambah barang ke keranjang
    And Saya checkout dengan data "Andi", "Wijaya", "12345"
    Then Muncul pesan sukses "Thank you for your order!"


