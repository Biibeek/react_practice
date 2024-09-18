function Button() {
    const handleOnclick = (e) => e.target.textContent = "submitted";
    return (
        <>
            <button onClick={handleOnclick}>click</button>
            <button onClick={(e) => { handleOnclick(e) }}>submit</button>
        </>
    )
}
export default Button