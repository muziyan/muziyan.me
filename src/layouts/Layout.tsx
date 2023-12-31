import type {PropsWithChildren} from "react";
import Header from '../components/Header'
import Footer from "../components/Footer";

const Layout = (props:PropsWithChildren) => {
  return (
    <div className={'layout'}>
      <Header />
      <main className={'layout-main'}>
        {props.children}
      </main>
      <Footer />
      <svg id={"bg-animation"}></svg>
    </div>
  )
}

export default Layout
