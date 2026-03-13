// Inisialisasi TON Connect UI
const tonConnectUI = new TONConnectUI.TonConnectUI({
    manifestUrl: 'https://unremorsefully-committable-jammie.ngrok-free.dev/tonconnect-manifest.json',
    buttonRootId: 'ton-connect-button' // ID elemen tempat tombol muncul
});

// Fungsi untuk mulai makan (masuk ke game)
function mulaiMakan() {
    if (tonConnectUI.connected) {
        alert("Wallet terkoneksi! Selamat makan, Bears!");
        // Di sini kamu panggil fungsi untuk memulai game Phaser/Canvas
    } else {
        alert("Silakan hubungkan wallet TON kamu terlebih dahulu!");
    }
}