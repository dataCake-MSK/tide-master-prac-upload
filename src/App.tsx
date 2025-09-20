import Header from './components/Header';
import Body from './components/Body';

export default function App(){  // 여기에만 export default
    return(
        <>
            <Header />  {/* 컴포넌트 사용 */}
            <Body name="Minsung" age={31}/>  {/* Main 직후에 커서 두고 CTRL + SPACE해서 import문 자동 생성 */}
        </>
  )
}
