# Taiko Bot

Bot ini digunakan untuk melakukan operasi deposit dan withdraw otomatis pada jaringan Taiko dengan dukungan untuk multiple wallets.

## Persiapan

1. Clone repositori ini:

   ```bash
   git clone https://github.com/retrunv0id/Taiko-swap-v2.git
   ```
2. Masuk ke direktori proyek:

   ```bash
   cd Taiko-swap-v2
   ```

3. Instal dependensi:

   ```bash
   npm install
   ```

4. Setup konfigurasi:
   
    - File `.env`:

     ```env
       WALLET_PRIVATEKEY_1=isiPRIVATEKEYakun1
       WALLET_PRIVATEKEY_2=isiPRIVATEKEYakun2
       RANDOM_AMOUNT_MIN=0.0005
       RANDOM_AMOUNT_MAX=0.001
       RPC_URL=https://rpc.taiko.xyz
       WETH_CA=0xA51894664A773981C6C112C43ce576f315d5b1B6
     # EDIT WALLET_PRIVATEKEY 
     ```

5. Start bot:

   ```bash
   node swap.js
   ```

## Keamanan

- Jangan pernah membagikan private key
- Gunakan wallet terpisah untuk bot
- Pastikan file `.env` dalam .gitignore
- Monitor aktivitas bot secara berkala
- Backup private key dengan aman

## Masalah Error Yang Sering Terjadi

Error transaksi:

   - Periksa saldo ETH mencukupi
   - Pastikan gas price sesuai
   - Cek status jaringan Taiko

## Donasi

Jika Anda merasa terbantu dengan bot ini, Anda dapat memberikan dukungan melalui:

- EVM : `0x513569F2a68f29BA2feeEA57664fa919791F3E0D`
- Btc : `bc1pcmctyrzu302zm7u9hxd0usc3mt89vqzuj7n27xdksdvs6lsaylmsf60w7l`

## Disclaimer

Bot ini disediakan tanpa jaminan apapun. Pengguna bertanggung jawab penuh atas penggunaan bot dan resiko yang mungkin timbul.

## License

MIT License - lihat file [LICENSE](LICENSE) untuk detail lengkap.
