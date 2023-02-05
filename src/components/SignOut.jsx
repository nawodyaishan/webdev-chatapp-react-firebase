import {auth} from '../firebase'

const style = {
    button: "bg-blue-200  px-4 py-2 hover:bg-blue-100"
}

const SignOut = () => {
    const signOut = () => {
        signOut(auth)
    }
    return (<button className={style.button} onClick={() => auth.signOut()}>Sign Out</button>)
}

export default SignOut;