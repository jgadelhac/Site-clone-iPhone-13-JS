const botoes = document.querySelectorAll("#seletor li")
const img = document.querySelector("#imagem");

botoes.forEach((btn) => {

    btn.addEventListener("click", (e) => {
        console.log(e)

        botoes.forEach((btn) => {
            btn.querySelector(".cor").classList.remove("selecionada")
        })

        const botao = e.target
        const id = botao.getAttribute("id");

        botao.querySelector(".cor").classList.add("selecionada");

        img.classList.toggle("changing");
        img.setAttribute("src", `imagens/iphone_${id}.jpg`);

    })
})