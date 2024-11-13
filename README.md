## TAIKO SWAP BOT

This bot is used to automate deposit and withdrawal operations on the Taiko network, with support for multiple wallets.

---

# Installation

1. Clone project repository
   ```bash
   git clone https://github.com/Rambeboy/Taiko-Swap.git && cd Taiko-Swap

2. Install dependencies
   ```bash
   npm install
   ```

3. Configure Setup
   `.env` file:

   ```bash
   WALLET_PRIVATEKEY_1=YOURPRIVATEKEY
   WALLET_PRIVATEKEY_2=YOURPRIVATEKEY
   RANDOM_AMOUNT_MIN=0.0005
   RANDOM_AMOUNT_MAX=0.001
   RPC_URL=https://rpc.taiko.xyz.
   WETH_CA=0xA51894664A773981C6C112C43ce576f315d5b1B6
   ```

---

# Start the Bot

- Run
  ```bash
  node main.js
  ```

---

# Security

Never share your private key.
Use a separate wallet for the bot.
Ensure that the `.env` file is listed in `.gitignore.` Monitor the bot's activity periodically. Backup your private keys securely.

---

# Common Errors

Transaction errors:
- Check if there is sufficient ETH balance.
- Ensure the gas price is correct.
- Check the status of the Taiko network.

---

# Disclaimer

This bot is provided without any guarantees. Users are fully responsible for the use of the bot and any potential risks involved.

---
