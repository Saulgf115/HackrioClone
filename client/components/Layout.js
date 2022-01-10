import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Router.onRouteChangeStart = url => NProgress.start()
Router.onRouteChangeComplete = url => NProgress.done()
Router.onRouteChangeError = url => NProgress.done()


const Layout = ({children}) => {

    const head = () =>(
       <>
         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossOrigin="anonymous"></link>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

        <link rel='stylesheet' href='/static/css/styles.css' ></link>
       </>
    )

    const nav = () => (
        //nav 
        <ul className="nav nav-tabs bg-dark">
            <li className="nav-item ">
                <Link href="/">
                    <a className="nav-link text-light" >Home</a>
                </Link>
                
            </li>

            <li className="nav-item">

                <Link href="/auth/login">
                  <a className="nav-link text-light" >Login</a>
                </Link>

               
            </li>

            <li className="nav-item">
                
                <Link href="/auth/register">
                
                 <a className="nav-link text-light" >Register</a>    

                </Link>

                
            </li>
        </ul>
    )

    return (
        <>
            <div>
                {head()}
                {nav()}
                <div className='container pt-5 pb-5'>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout