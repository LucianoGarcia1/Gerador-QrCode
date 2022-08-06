const download = (e)=>{
    e.preventDefault();
    const img = document.querySelector(".imgCode").src;

    const fetchQr = (img)=>{
        fetch(img)
        .then(response => response.blob())
        .then((file)=>{
            const createUrl = URL.createObjectURL(file);
            const element = document.createElement("a");
            element.href = createUrl;
            element.download = "QrCode";
            
            document.body.appendChild(element);

            element.click();
            element.remove();
        })
    }
    fetchQr(img);
}


const Restimg = ()=>{
    return(
        <div id="Res" className="Resposta">
            <img src="" alt="qrCode" className="imgCode"/>

            <div className="download-file">
                <div>
                    <h2>File Downloader</h2>
                    <p>Faça o download da imagem do qr code clicando no butão abaixo!</p>
                </div>

                <button type="button" onClick={download}>Download File</button>
            </div>
        </div>
    );
}
export default Restimg;