import NavItems from "./Navigation/NavItems";
const Layout = ({props, children})=>{
    return(
        <>
        <NavItems/>
        <main>
            {children}
        </main>
        </>
        
    )
}

export default Layout;