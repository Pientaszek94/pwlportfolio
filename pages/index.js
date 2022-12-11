import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Contact from '../components/Contact'
import Hero from '../components/parts/Hero'
import pwl from '../public/pwl_screen.jpg'
import strider from '../public/strider.jpg'
import flash from '../public/flash.JPG'
import Footer from '../components/Footer'

const Motto= ({copy, role})=>{
  return (
            <span aria-label={copy} role={role} className="sub">
                {copy.split("").map((char, index)=>{
                    let style={"animation-delay": (0.5+index/10)+"s"}

                    return(
                        <span aria-hidden='true' key={index} style={style} className="child">
                         {char}
                        </span>
                    )
                })}
            </span>
  )
}


export default function Home() {


 const pages=[
    {
      img: pwl, alt:"PWL", url:"https://pwlfrontdev.herokuapp.com"
    },
    {
      img:strider, alt:"Strider", url:"https://pientaszek94.github.io/maps"
    },
    {
      img: flash, alt:"TechNews", url:"https://technews-nine.vercel.app/"
    }
    
  ];
  
  return (
    <div className='whole'>

      <Head>
        <title>PWL FrontDev portfolio</title>
        <meta name='description' content='Welcome to my humble portfolio website.'/>
        <meta name="google-site-verification" content="jH1PVnBIylnNgSjlU1KGvmwx7fTCIQ79e5lumLKTKoI" />
      </Head>


        <div className="hero">
            <Hero/>
        </div>
            <div className="motto_sec">
                <h1 className="motto">
                  <Motto copy="Welcome and, please, enjoy your scrolling."/> 
                </h1>

            </div>

        {/* Section Portfolio */}
        <div className="section">
            <h3 className="watermark"> WORK</h3>

            <div className="text">
                <h2 className="title">
                  My Portfolio
                </h2>
                <p>
                  I humbly present to you my experimental 
                  work on various types of applications with 
                  newer APIs and special libraries.

                </p>

                <div className="sitecon">

                    {
                      pages.map((page, index)=>(

                        <Link href={page.url} key={index}>

                              <div className="site" >
                      
                                <Image src={page.img} alt={page.alt} className="screen"/>
                                <div className="try">
                                  <h2>TRY ME</h2>
                                </div>
                              </div>

                        </Link>
                        


                      ))
                    }
                </div>
                

            </div>
        </div>
              {/* Section About me */}
            <div className="section">
                      <h3 className="watermark"> Mail</h3>

                      <div className="text">
                          <h2 className="title">
                            Contact Me
                          </h2>
                        <Contact/>
                        
                      </div>
            </div>          
             {/* Section About me */}
             <div className="section">
              <h3 className="watermark"> Me</h3>

                  <div className="text">
                      <h2 className="title">
                        About Me
                      </h2>
                      <p>
                        Hi, I&apos;m Paweł and I&apos;m here to help you build new web apps or just keep your code in a good shape.
                        I am, probably, interested in everything I&apos;ve ever heard of. My special interests are cutting-edge technology, automotive and listening to a good Jazz.
                        <br/>
                        Having fun with coding started in high school when I learnt about primitive programming. Back then I made 
                        very first calculator or HTML web site with no style sheets or logic, mechanics, APIs. It looked a bit weird
                        but eventually I found in it something interesting... So I have started to learn various programming languages and
                        decided to  submit my documents to the Universtity of Technology and now I am here with You.
                      </p>
                    
                  </div>
            </div>
            {/* END of Sections */}
  
              <Footer/>


        

    </div>
  )
}
