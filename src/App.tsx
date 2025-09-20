import Header from './components/Header';
import Body from './components/Body';

export default function App(){  // 여기에만 export default
    const userObj = {
        name: "Minsung", // js 객체이므로 속성 입력 때랑 달리 =말고 :, 콤마 붙이기, {}표현식 제거
        age: 31,
        male: true
    };
    
    const clickHandler = () => {
        console.log('saved')
    }

    return(
        <>
            <Header />  {/* 컴포넌트 사용 */}
            <Body userObj={userObj} clickHandler={clickHandler}>
                <p>by MrAutoFin</p>    
            </ Body>  {/* Main 직후에 커서 두고 CTRL + SPACE해서 import문 자동 생성 */}
        </>
  )
}
