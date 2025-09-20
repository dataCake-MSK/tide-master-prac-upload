type BodyProps = {
    userObj: {name: string; age: number; male: boolean}; 
    clickHandler: () => void;
    children: React.ReactNode
}

/**
 * @param userObj 사용자 정보 객체 { name, age, male }
 * @param clickHandler 버튼 클릭 시 실행할 이벤트 핸들러 함수
 * @param children 하위에 표시할 주석
 * 
 * 사용 예시:
 * <Body userObj={{ name: "Minsung", age: 31, male: true }} clickHandler={() => console.log("saved")}>
 *   <p>by MrAutoFin</p>
 * </Body>
 */
export default function Body(props: BodyProps) {
    const {userObj, clickHandler, children} = props;
    return (
        <>
            <p>Your are {userObj.name}, and {userObj.age} years old.</p>
            <p>{userObj.male ? "You are male" : "You are female" }.</p>
            <button onClick={clickHandler}>SAVE (console print)</button>
            <small>{children}</small>
        </>
    )

}
