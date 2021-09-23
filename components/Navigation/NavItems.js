import Link from 'next/link'
import classes from "../../styles/NavItems.module.css";
const NavItems = ({props, children})=>{
    return(
        <div className={classes.container}>
          <div className="container">
            <ul className={classes.ul2} >
                <li >
                    <Link href="/home">Home</Link>
                </li>
                <li>
                    <Link href="demo-api" >Api</Link>
                </li>
                <li >
                    <Link href="/index" >Index</Link>
                </li>
            </ul>
          </div>
        </div>
    )
}

export default NavItems;