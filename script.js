const button = document.querySelector("button");
const h2 = document.querySelector("h2");

button.addEventListener("click", () => {
    if (button.innerHTML === "Follow") {
        h2.innerHTML = "Friends";
        h2.style.color = "royalblue";
        button.innerHTML = "Unfollow";
        button.style.backgroundColor = "royalblue";
    } else {
        h2.innerHTML = "Strange";
        h2.style.color = "tomato";
        button.innerHTML = "Follow";
        button.style.backgroundColor = "tomato";
    }
});
