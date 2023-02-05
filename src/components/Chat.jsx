import {useRef} from "react";
import Message from "./Message";

const style = {
    main: `flex flex-col p-[10px] relative`
}

const Chat = () => {
    const scroll = useRef()

    return (<div>
        <main className={style.main}>
            <Message/>
        </main>
        {/*Send Message Componnent*/}
        <span ref={scroll}></span>
    </div>);
};

export default Chat;