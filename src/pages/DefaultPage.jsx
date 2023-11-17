import NavBar from "../componets/NavBar";

export default function Default(props){
    return (
        <div style={{backgroundColor:"#FFF"}}>
            <NavBar/>
            <div className="mx-auto">{props.children}</div>
        </div>
    )
}