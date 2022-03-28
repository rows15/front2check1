import "./portitem.css"




const Port = ({img,link,titulo}) =>{

    return(
            <div className="p">
                <h4>{titulo}</h4>
                <a href={link} target="_blank" rel="noreferrer">
                    <img src={img} alt="" className="p-img" />




                </a>
            </div>




    )

}


export default Port