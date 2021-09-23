import NavItems from "../Navigation/NavItems";
import Meta from "./Meta";
const Layout = ({props, children})=>{
    return(
        <>
        <Meta/>
        <NavItems/>
        <main>
            {children}
        </main>
        </>
    );
}

export default Layout;