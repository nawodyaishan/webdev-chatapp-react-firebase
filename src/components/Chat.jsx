import {useRef, useState, useEffect} from "react";
import Message from "./Message";
import {db} from '../firebase'
import {query, collection, onSnapshot, orderBy} from 'firebase/firestore'
import SendMessage from "./SendMessage";

const style = {
    main: `flex flex-col p-[10px]`
}

const Chat = () => {
    const [messages, setMessages] = useState([])
    const scroll = useRef()

    useEffect(() => {
        // Look at collection in db at messages document
        const q = query(collection(db, 'messages'), orderBy('timestamp'))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = []
            querySnapshot.forEach((doc) => {
                messages.push({...doc.data(), id: doc.id})
            })
            setMessages(messages)
        })
        return () => unsubscribe()
    }, []);


    return (<>
        <main className={style.main}>
            {messages && messages.map((messageElement) => (
                <Message key={messageElement.id} message={messageElement}/>))}
        </main>
        <SendMessage scroll={scroll}/>
        <span ref={scroll}></span>
    </>);
};

export default Chat;