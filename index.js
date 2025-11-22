window.addEventListener("load", () => {
    chrome.storage.sync.get(["username", "password"], (data) => {
        if (!data.username || !data.password) {
            console.log("No saved credentials yet.");
            return;
        }
        setTimeout(() => {
            const checkbox = document.querySelector("#agreepolicy");
            if (checkbox && !checkbox.checked) {
                checkbox.checked = true;
                checkbox.dispatchEvent(new Event("click"));
            }
            const usernameInput = document.querySelector("input[name='username']");
            if (usernameInput) {
                usernameInput.value = data.username;
                usernameInput.dispatchEvent(new Event("input"));
            }
            const passwordInput = document.querySelector("input[name='password']");
            if (passwordInput) {
                passwordInput.value = data.password;
                passwordInput.dispatchEvent(new Event("input"));
            }
            const loginBtn = document.querySelector("#loginbtn");
            if (loginBtn) {
                loginBtn.removeAttribute("disabled");
                loginBtn.click();
            }
        }, 500);
    });
});
