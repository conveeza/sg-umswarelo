async function generateSHA512Hash() {
    const siteCode = "CON-CON-013";
    const countryCode = "ZA";
    const currencyCode = "ZAR";
    const amount = document.getElementById('amount').value;
    const transactionReference = document.getElementById('transactionRef').value;
    const bankReference = document.getElementById('bankReference').value;
    const privateKey = "CFh0SYHCcmAvMjcZsk1027OA6PKCHkXA";
    const Customer = document.getElementById('customername').value;
    const isTest = false;

    const inputString = `${siteCode}${countryCode}${currencyCode}${amount}${transactionReference}${bankReference}${Customer}${isTest}${privateKey}`;
    //start convert
    const encoder = new TextEncoder();
    const data = encoder.encode(inputString.toLocaleLowerCase());

    const hashBuffer = await crypto.subtle.digest('SHA-512', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

    document.getElementById('hashCheck').value = hashHex;
    console.log(inputString.toLocaleLowerCase());
    console.log(hashHex);
}