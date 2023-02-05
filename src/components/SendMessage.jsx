import {useState} from "react";
import {auth, db} from "../firebase";
import {collection, addDoc, serverTimestamp} from "firebase/firestore";


const style = {
    form: `h-14 w-full max-w-[728px]  flex text-xl absolute bottom-0`,
    input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
    button: `w-[20%] bg-green-500`,
};
const SendMessage = ({scroll}) => {
    const [input, setInput] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault()
        if (input === '') {
            alert('Please enter a valid message')
            return
        }
        const {uid, displayName} = auth.currentUser
        await addDoc(collection(db, 'messages'), {
            text: input, name: displayName, uid, timestamp: serverTimestamp()
        })
        setInput('')
        scroll.current.scrollIntoView({behavior: 'smooth'})
    }

    return (<form onSubmit={sendMessage} className={style.form}>
        {/*Getting Input Value from form input*/}
        <input value={input} onChange={_ => setInput(_.target.value)} className={style.input} type={"text"}
               placeholder={'Enter new message here'}/>
        <button className={style.button}>Send</button>
    </form>);
};

export default SendMessage;