import NavBar from "./components/NavBar";
import {auth} from "./firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import Chat from "./components/Chat";


const style = {
    appContainer: 'max-w-[728px] mx-auto test-center',
    sectionContainer: 'flex flex-col  h-[90h] bg-gray-100 mt-10 shadow-xl border relative',
}


function App() {
    // Getting Users in to array
    const [user] = useAuthState(auth)
    console.log(user)

    return (<div className={style.appContainer}>
        <section className={style.sectionContainer}>
            {/*Nav Bar Component*/}
            {<NavBar/>}
            {/*{Chat Component when user logged in}*/}
            {user ? <Chat /> : null}
        </section>
    </div>);
}

export default App;
