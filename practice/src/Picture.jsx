
function Picture() {
    const imageUrl = './calculator1/src/assets/photo.jpg'
    const handlee = () => console.log("hy bibek!!!")

    return (
        <img onClick={handlee} src={imageUrl}></img>
    )
}
export default Picture