export default function Body(props: {name: string; age: number}) {
    console.log(props)
    return (
        <>
            <p>Your are: {props.name}, and {props.age} years old</p>
        </>
    )
}
