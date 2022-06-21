function encrypt() {
  let encrypted = CryptoJS.AES.encrypt(
    document.getElementById("text").value,
    document.getElementById("password").value
  );
  document.getElementById("encryptedValue").innerHTML = encrypted;
  document.getElementById("decrypted").innerHTML = "";
}

function decrypt() {
  let decrypted = CryptoJS.AES.decrypt(
    document.getElementById("encryptedValue").innerHTML,
    document.getElementById("password").value
  ).toString(CryptoJS.enc.Utf8);

  document.getElementById("decrypted").innerHTML = decrypted;
  document.getElementById("encryptedValue").innerHTML = "";
}
