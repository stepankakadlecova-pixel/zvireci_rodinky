let cubs = 4;

document.getElementById("startBtn").onclick = () => {
    document.getElementById("intro").style.display = "none";
};

document.querySelectorAll(".animal").forEach(animal => {

    animal.onclick = () => {

        if(animal.classList.contains("found")) return;

        animal.classList.add("found");

        if(animal.dataset.type === "cub"){

            cubs--;

            document.getElementById("count").textContent = cubs;

            if(cubs === 0){

                setTimeout(() => {
                    alert("🎉 Našla jsi všechna liščata!");
                },300);

            }
        }
    };
});
