export default function Body(props: {userObj: { name: string; age: number; male: boolean;}}) {
    console.log(props)
    return (
        <>
            <p>Your are {props.userObj.name}, and {props.userObj.age} years old.</p>
            <p>{props.userObj.male ? "You are male" : "You are female" }.</p>
        </>
    )
}
