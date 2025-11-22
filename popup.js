document.addEventListener("DOMContentLoaded", () => {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const saveButton = document.getElementById("login");
    const status = document.getElementById("status");

    chrome.storage.sync.get(["username", "password"], (data) => {
        if (data.username) usernameInput.value = data.username;
    });


    saveButton.addEventListener("click", () => {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username && password) {
            chrome.storage.sync.set({ username, password }, () => {
                status.textContent = "Credentials saved!";
            });
        } else {
            status.textContent = "Please enter both fields!";
        }
    });
});
