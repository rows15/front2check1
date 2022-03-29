import "./portlist.css"
import Port from "../portitem/Portitem"
import { portf } from "../../data"  


const Portlist = () =>{

    return(
        <div className="pl" >
            <div className="pltexto">
                <h1 className="pltitulo">Meus trabalhos feitos</h1>
                    <p className="pldesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="pllist">
                
                {portf.map(item => (<Port key={item.id} img={item.img} link={item.link} titulo={item.titulo} />))}

            </div>




        </div>




    )

}
export default Portlist
