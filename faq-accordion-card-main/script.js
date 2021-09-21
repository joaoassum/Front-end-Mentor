//"collapse" esconde o conteudo do botão
//"collapsing" é a animação do abrir o accordion(sanfona)
//"open" mostra o conteudo do botão(accordion_btn)

let accordionBtn = document
  .querySelectorAll(".accordion_btn")
  .forEach((item) => {
    item.addEventListener("click", (event) => {
      let accCollapse = item.nextElementSibling;
      //Abrindo o accordion_btn
      if (!item.classList.contains("open")) {
        accCollapse.style.display = "block";
        let accHeight = accCollapse.clientHeight;

        setTimeout(() => {
          accCollapse.style.height = accHeight + "px";
          accCollapse.style.display = "";
        }, 200);

        accCollapse.classList = "accordion__collapse collapsing";

        setTimeout(() => {
          console.log("open");
          accCollapse.classList = "accordion__collapse collapse open";
          accCollapse.style.display = "";
        }, 200);
      } else {
        /*Fechando o accordion*/
        accCollapse.classList = "accordion__collapse collapsing";

        setTimeout(() => {
          accCollapse.style.height = '0px';
        }, 1)

        setTimeout(() => {
          accCollapse.classList = "accordion__collapse collapse";
          accCollapse.style.height = '';
        }, 200);
      }
      item.classList.toggle("open");
    });
  });
