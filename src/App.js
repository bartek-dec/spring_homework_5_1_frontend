import axios from "axios";
import {useState, useEffect} from "react";

const url = 'http://localhost:8080/categories';

function App() {
    const [categories, setCategories] = useState([]);
    const [isError, setIsError] = useState(false)

    const getData = async () => {
        try {
            const {data} = await axios.get(url);
            setCategories(data);
            setIsError(false);
        } catch (error) {
            setCategories([]);
            setIsError(true);
        }
    }

    useEffect(() => {
        getData();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <section className='page'>
                <header className='header'>
                    <h1>Kolekcje lektur pobrane z serwisu "Wolnelektury.pl"</h1>
                </header>

                {isError && <p className='warning'>Not Found</p>}

                {categories.map((item, index) => {
                    const {title} = item;
                    return (
                        <article key={index} className='item'>
                            <div className='index'>{index + 1}</div>
                            <p className='title'>{title}</p>
                        </article>
                    )
                })}
            </section>
        </>
    );
}

export default App;
