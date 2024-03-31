// 이름 입력 검사
function nameCheck() {
    const name = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    if (name.value.trim() === '') {
        nameError.style.color = '#FC0E0E';
        nameError.textContent = '필수 입력 항목입니다.';
        return false;
    } else {
        nameError.style.color = '#03711B';
        nameError.textContent = '멋진 이름이네요!';
        return true;
    }
}

document.getElementById('name').addEventListener('input', nameCheck);