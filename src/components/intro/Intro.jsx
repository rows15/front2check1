import { useEffect, useRef } from "react"
import {init} from 'ityped'
import "./intro.css"




export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current,{

      
      backDelay: 1500,
      backSpeed:60,
      strings: ["Programador","Designer","Editor de vídeos","Garoto de programa"]

    });

  }, []);

  return (
    <div className='Intro' id='IdIntro'>
      <div className="left">
        <div className="imgContainer"><img src="assets/man2.png" alt="" /></div>
      </div>
      <div className="right">
        
        <div className="wrapper"><h2>Olá, me chamo</h2>
        <h1>Marcelo Ramos</h1>
        <h3>e sou <span ref={textRef}></span>
        </h3>
        
        
        <p className="minhadescricao">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid optio praesentium necessitatibus, fugit, eius accusantium repudiandae nobis animi reprehenderit, dolores repellendus saepe provident totam quaerat consequatur soluta eligendi magnam molestias!</p>  
        </div>
      
      </div>

    </div>
  )
}
