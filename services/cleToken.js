const fs = require('fs');
const crypto = require('crypto');

// Générer une paire de clé RSA
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
});

// Convertir les clés en format PEM
const publicKeyPEM = publicKey.export({ type: 'spki', format: 'pem' });
const privateKeyPEM = privateKey.export({ type: 'pkcs8', format: 'pem' });

// Enregistrer les clés dans le fichier .env
fs.writeFileSync('.env', `PRIVATE_KEY=${privateKeyPEM}\nPUBLIC_KEY=${publicKeyPEM}`);

console.log('Clé publique :', publicKeyPEM);
console.log('Clé privée :', privateKeyPEM);