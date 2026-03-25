const clearBtn = document.getElementById("clear");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const cityInput = document.getElementById("city");
const hobbyInput = document.getElementById("hobby");
const result = document.getElementById("formResult");

clearBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const age = ageInput.value.trim();
    const city = cityInput.value.trim();
    const hobby = hobbyInput.value.trim();
    let s = 0;

    // Сбрасываем цвет полей ввода и result
    nameInput.style.color = "";
    ageInput.style.color = "";
    cityInput.style.color = "";
    hobbyInput.style.color = "";
    result.style.color = "";

    if (name === "") {
        result.textContent = "Ошибка: Имя не может быть пустым!";
        result.style.color = "red";
        nameInput.style.color = "red";
        s++;
        return;
    }
    if (age === "") {
        result.textContent = "Ошибка: Возраст не может быть пустым!";
        result.style.color = "red";
        ageInput.style.color = "red";
        s++;
        return;
    }
    if (city === "") {
        result.textContent = "Ошибка: Город не может быть пустым!";
        result.style.color = "red";
        cityInput.style.color = "red";
        s++;
        return;
    }
    if (hobby === "") {
        result.textContent = "Ошибка: Хобби не может быть пустым!";
        result.style.color = "red";
        hobbyInput.style.color = "red";
        s++;
        return;
    }
    if (s === 0) {
        result.textContent = `Данные сохранены: ${name}, ${age} лет, ${city}, ${hobby}`;
        nameInput.value = "";
        ageInput.value = "";
        cityInput.value = "";
        hobbyInput.value = "";
        nameInput.style.color = "";
        ageInput.style.color = "";
        cityInput.style.color = "";
        hobbyInput.style.color = "";
    }
});