const generateBtn = document.getElementById('generate')
const passwordInput = document.getElementById('password')
const passwordShow = document.getElementById('passwordShow')
const numberInput = document.getElementById('numberOfChars')

const generatePassword = (len) => {
    let result = '';
    const chars = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    const max_position = chars.length - 1;
    for (i = 0; i < len; ++i) {
        position = Math.floor(Math.random() * max_position);
        result = result + chars[position];
    }
    return result;
}

generateBtn.onclick = () => {
    const num = numberInput.value
    const psw = generatePassword(num)
    passwordInput.value = psw
    passwordShow.value = psw
}