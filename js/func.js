const example = () => {
    const input = document.querySelector('#input').value
    document.querySelector('#txt').innerText = input
}
document.querySelector('#action').addEventListener('click', example)