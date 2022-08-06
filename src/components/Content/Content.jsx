const QrGenerator = ()=>{
    const Bgcolor = document.querySelector(".Bgcolor").value;
    const color = document.querySelector(".color").value;
    const LinkText = document.querySelector(".Link");
    const img = document.querySelector(".imgCode");
    const sucess = document.querySelector(".sucess");
    const res = document.querySelector(".Resposta");
    const btnDownload = document.querySelector(".download-file");

    if(LinkText.value === ""){
        alert("O campo não pode ficar vazio")
    }else{
        const gerador = async (Link, cor, bg)=>{
            const url = `https://api.invertexto.com/v1/qrcode?token=1223%7CLxpEsiduU4Iv8fxIi58JTVqdJz62mdz3&text=${Link}&foreground=${cor}&background=${bg}&scale=15`;
    
            sucess.classList.add("active");
    
            setTimeout(() => {
                sucess.classList.remove("active");
            }, 3000);

            res.classList.add("swapi");
            img.src = url;

            btnDownload.classList.add("active");
        
        }
        gerador(LinkText.value, color.replace('#', '%23'), Bgcolor.replace('#', '%23'));
    }
}


const Content = ()=>{
    return(
        <div className="Content">
            <h1>Gerador QrCode</h1>

            <div>
                <label>
                    <input type="text" placeholder="Digite aqui o texto" className="Link" required/>
                </label>
                <label>
                    Background color
                    <input type="color" defaultValue="#ffffff" className="Bgcolor" required/>
                </label>
                <label>
                    Color
                    <input type="color" defaultValue="#222222"  className="color" required/>
                </label>

                <button type="button" onClick={QrGenerator}>Gerar QrCode</button>


                <div className="sucess">
                    Gerado com Sucesso 😃
                </div>
            </div>
        </div>
    );
}
export default Content;