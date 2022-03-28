import "./portlist.css"
import Port from "../portitem/Portitem"
import { portf } from "../../data"  


const Portlist = () =>{

    return(
        <div className="pl" >
            <div className="pltexto">
                <h1 className="pltitulo">Meu Portfolio ai glr</h1>
                    <p className="pldesc">brigado pela oportunidade pode ver oq eu fiz ai tmj flw fml</p>
            </div>
            <div className="pllist">
                
                {portf.map(item => (<Port key={item.id} img={item.img} link={item.link} titulo={item.titulo} />))}

            </div>




        </div>




    )

}
export default Portlist
