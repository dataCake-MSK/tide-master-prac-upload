export default function Body(props) {
    console.log(props)
    return (
        <>
            <p>Your are: {props.name}, and {props.age} years old</p>
        </>
    )
}
