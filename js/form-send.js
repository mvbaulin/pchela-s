let form = document.querySelector(".echo-form"),
    infoMessage = document.querySelector(".echo-form__info-message");

form.addEventListener("submit", function(evt) {
    evt.preventDefault();

    let msg = {
        succes: "Спасибо! Ваша заявка принята",
        failure: "Произошла неизвестная ошибка!"
    }

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/send.php");
    
    let formData = new FormData(form);
    xhr.send(formData);

    xhr.addEventListener("readystatechange", function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            infoMessage.textContent = msg.succes;
        } else {
            infoMessage.textContent = msg.failure;
        }
    })
})

