let cubsLeft = 3;

document.getElementById("startBtn").onclick = () => {
    document.getElementById("startScreen").style.display = "none";
};

document.querySelectorAll(".cub").forEach(cub => {

    cub.onclick = () => {

        if(cub.classList.contains("found")) return;

        cub.classList.add("found");

        cubsLeft--;

        document.getElementById("count").textContent = cubsLeft;

        if(cubsLeft === 0){

            setTimeout(() => {

                alert("🎉 Našla jsi všechna liščata!");

            },300);
        }
    };
});
