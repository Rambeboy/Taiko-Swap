async function displayName() {
    try {
        console.clear();
        console.log(chalk.magenta.bold('TAIKO SWAP BOT'));
        console.log();
        console.log(chalk.magenta.bold('AUTHOR : NOFAN RAMBE'));
        console.log(chalk.magenta('WELCOME & ENJOY SIR!'));

        const wallets = await initialize();

        console.log(chalk.blue('\n📌 Status Poin Awal:'));
        for (let i = 0; i < wallets.length; i++) {
            console.log(chalk.blue(`💎 Akun ${i + 1}:`));
            await displayInitialPoints(wallets[i]);
        }
        console.log('-------------------------------------------------------------');

        for (let i = 0; i < 80; i++) {
            console.log(chalk.yellow(`\n🔄 Siklus Transaksi ${i + 1}/80`));
            console.log('-------------------------------------------------------------');

            let depositSuccess = false;
            let withdrawSuccess = false;
            
            // Mencoba deposit sampai berhasil
            while (!depositSuccess) {
                try {
                    await performTransactions(wallets, true);
                    depositSuccess = true;
                } catch (error) {
                    console.log(chalk.red('❌ Gagal melakukan deposit, mencoba lagi dalam 5 detik...'));
                    await delay(5000);
                }
            }
            
            await countdown(30);

            // Mencoba withdraw sampai berhasil
            while (!withdrawSuccess) {
                try {
                    await performTransactions(wallets, false);
                    withdrawSuccess = true;
                } catch (error) {
                    console.log(chalk.red('❌ Gagal melakukan withdraw, mencoba lagi dalam 5 detik...'));
                    await delay(5000);
                }
            }
            
            await countdown(30);
        }

        console.log(chalk.blue('\n📌 Status Poin Akhir:'));
        for (let i = 0; i < wallets.length; i++) {
            console.log(chalk.blue(`💎 Akun ${i + 1}:`));
            await displayInitialPoints(wallets[i]);
        }
    } catch (error) {
        console.error(chalk.red('⚠️ Kesalahan fatal:', error.message));
        await delay(5000);
        console.log(chalk.yellow('🔄 Mencoba menjalankan ulang bot...'));
        await retrunvoid();
    }
}

module.exports = { displayName };
