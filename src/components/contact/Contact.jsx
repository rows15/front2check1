import "./contact.css";
import React from 'react'


const icons = [
    {
        icon: "https://download.flaticon.com/br/download/icon/174857?icon_id=174857&author=166&team=166&keyword=linkedin&pack=174834&style=0&style_id=6&format=png&color=%23000000&colored=2&size=512&selection=1&premium=0&type=standard&token=03AGdBq27wGY2xK2KLhKQSoNa190B9Cqow9CRM1c94tpfiQO4TqSwaym2TCJI2WW2RT0iSZpaTd_ZZO-zdGwSTUzgCBDf3rAcfhDHpJBneY3UNup0wwCQA2nVzlsLl6aK6d07SiOEzBULm2esMAvKpgNwF8KCy7HvLWbzXGKZaJGKEZmHpSLcio2Uj7JtVTOCXaOiwVXBSpx68kTpNSq6lqDk5LZUOsQkGZ8LwKhPc-KDOd9oIRpJiqN5JH33-HGxGCs2WqqsFxE_v-Bne3kH4JvedjDK4TQwQcZUhnLsXQuAzJNblJoVlv2kChVUbqWIDsKDW6pEXLLIKPNgJgXsHdzFbbsccgDVe2qySRV-Xz7mK4WLyYQJTYwWb2Cg9tiEPajU8qcwOUMbkzs3_s2WvBSdhGyZ3iiudhz8jbJt83L7y-M0KrieCNNHoiA55VG8px26IPE9xT_A1T6QBmCOcnbKHAc_Ekgsk1VdpM3ixQNL2De_vw3hBXgx4Y_1IXQDoQuuGISsNL0a2Md1pJzqa6y6JgcB34HiCctgpcqSbg7-mytPLfG1VucwwchEqwTLxoZnXN_Fmvm3Sj427MwWDxO0nC5o3Wa1afbQhkf3CDLQM8Avw2EIoDptCqRVdKP8QUPf-lTycD9vcFCqrpCOG4lUO7QOji6XsebuGCHibvleGV48kNaLfF1Y7Isrq6lXI5874fqIsEHzKPm6wkwva_jW6aGHAxVYhPZs5id91oFQYz8IvS8vVU5KxnNWxalVCZB9mm1wJsm0Rirwh1wZC5WmaIx6NuvYczq95dD4k02bTdNXFU7C_xXPxJEPBe5udSKbeDI3aprq_WvlNftJK14L0v-NlVVStkxjGNQ-ZiCsr5QA3aB0fej2HPsUqrmLdeCo1a6NU4L-wMRHD1PeJ-dE-BEnOsZUV9xx5IbJKskNg-LPdTNstrE41sM_1WyNJEmKpRLvwJTMuW6fNN6iLbhknGFu8atOq97Pe5UNj14_6v2aovyhUht3_SbtTB7P5s6ozXyUkhUKSj0p4twqsxaZ7EAK2bUQNSmbpLDtNaojOSMITGlV9ydQp9wJAMFJENz0txILHAxzRQgPt-Wbsoh8YYJ0XZcksvZvzFQbLrQY-ZQ5aIncxViqOmcv3yQ1fwh3ypdh8rlcUt8aqp2wrdx33CNMoiACJMA",
        link: "https://www.linkedin.com/in/marcelo-ramos-a35868121/",
    },
    {
        icon: "https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png",
        link: "https://www.instagram.com/rows15/",
    },
    {
        icon: "https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-1-2-2048x2048.png",
        link: "https://web.facebook.com/Rows15",
    },
    {
        icon: "https://logosmarcas.net/wp-content/uploads/2020/11/Gmail-Logo-650x366.png",
        link: "mailto:marcelo.199.cheese@gmail.com",
    },
]

export default function Footer() {
  return (
      <section id='Contact' className="Contact">
        <footer >
            <div  className='container-footer'>
                
                <h2 >Entre em contato comigo pelos meios a seguir!</h2>
                <p >Vamos criar um projeto juntos.</p>
                <ul className="aaaaaaaa">
                  
                    {
                        icons.map(({icon, link}) => <a  href={link} rel="noreferrer" target="_blank" > <li ><img className="roberto" src={icon}  /></li></a>)
                    }
                </ul>

            </div>

        </footer>
    </section>
  )
}