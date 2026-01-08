document.addEventListener("mousemove", (e) => {
    const fire = document.createElement("div");
    fire.classList.add("fire");

    fire.style.left = e.clientX + "px";
    fire.style.top = e.clientY + "px";

    document.body.appendChild(fire);

    setTimeout(() => {
        fire.remove();
    }, 600);
});
