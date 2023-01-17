import NavBar from "./components/NavBar";

const style = {
    appContainer: 'max-w-[728px] mx-auto test-center',
    sectionContainer: 'flex flex-col  h-[90h] bg-gray-100 mt-10 shadow-xl border relative',

}

function App() {
    return (<div className={style.appContainer}>
        <section className={style.sectionContainer}>
            {<NavBar/>}
            {/*{Chat Components}*/}
        </section>
    </div>);
}

export default App;
