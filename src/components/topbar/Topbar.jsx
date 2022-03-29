import "./Topbar.css"

export default function Topbar() {

  function scroll(id){
    document.getElementById(id).scrollIntoView()

  }


  return (
    <header className='Topbar'>
      {/* <p>
      Portfólio em React
      </p> */}
      <ul className="headermenu">
        <li className="nada" id="isso">Marcelo Ramos</li>
        <li className="headeritemmenu" onClick={()=>scroll("IdIntro")}>Intro</li>
        <li className="headeritemmenu" onClick={()=>scroll("Works")}>Sobre mim</li>
        <li className="headeritemmenu" onClick={()=>scroll("listaport")}>Projetos</li>
        <li className="headeritemmenu" onClick={()=>scroll("Contact")}>Contato</li>
      </ul>
          </header>
  )
}

