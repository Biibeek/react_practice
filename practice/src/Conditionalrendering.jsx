
function Conditionalrendering(props) {
    if (props.isLogged) {
        return (
            <h2 className="container">welcome {props.name}!!!</h2>
        )
    }
}
export default Conditionalrendering