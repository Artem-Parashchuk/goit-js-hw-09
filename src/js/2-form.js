const userData = JSON.parse(localStorage.getItem("feedback-form-state")) || {};
const formEl = document.querySelector('.feedback-form')

// Перевіряємо наявність даних у localStorage, якщо вони є - записуємо їх у поля
function checkForm() {
    const userDataFromLS = JSON.parse(localStorage.getItem("feedback-form-state"))
    try {

        if(userDataFromLS) {
            for(let key in userDataFromLS) {
                formEl.elements[key].value = userDataFromLS[key]
            }
        } 

    } catch (err) {
        console.log(err)
    }
}
checkForm()

// В localStorage записуємо дані які вводить користувач
function changeForm(event) {
    const changeValue = event.target.value.trim();
    const changeName = event.target.name;

    userData[changeName] = changeValue

    localStorage.setItem("feedback-form-state", JSON.stringify(userData))
}
formEl.addEventListener('input', changeForm)

// Після відправки форми очищуємо localStorage та поля форми
function checkFomSubmit(event) {
    event.preventDefault();

    localStorage.removeItem("feedback-form-state")
    formEl.reset()
    console.log(userData)
}
formEl.addEventListener('submit', checkFomSubmit)
