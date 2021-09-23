import classes from "../../styles/NavItems.module.css";
const NavItems = ({props, children})=>{
    return(
        <div className={classes.container}>
          <ul>
            <li><a class="active" href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
    )
}

export default NavItems;