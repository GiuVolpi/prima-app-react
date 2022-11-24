import "./style.css"

function Card(){
    return(
        <div ClassName="card">
            <div ClassName="card-body">
                {<img src="caffe.jpg" alt="foto caffè"></img>}
                <div>
                    <h1> Vanilla Latte</h1>
                    <p>21K</p>
                </div>
            </div>
            <div ClassName="card-footer">
                <div ClassName="etichette">
                    <span>Hot</span>
                    <span>Cold</span>
                </div>
                <button>Aggiungi</button>
            </div>
        </div>
    )

}

export default Card;