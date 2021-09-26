import React, { useEffect, useState } from 'react';
import FakeData from '../AllData/FakeData.json';
import Cart from './Cart';
import './Home.css';
import BookInfo from './BookInfo';


const Home = () => {
    const [publish, setPublish] = useState([])
    useEffect(() => {
        setPublish(FakeData);
    }, [])

    const [cart, setCart] = useState([])

    const handlerAddBook = (publish) => {
        const newCart = [...cart, publish];
        setCart(newCart);
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="text-center mt-5 mb-5">
                        <header>
                            <h1>Book Publishing Academy </h1>
                            <h5>Get your self the Best Publication</h5>
                            <h3>Total Budget: 50000</h3>
                        </header>
                    </div>
                    <div className="col-md-10">
                        <div className="row row-cols-md-3">
                            {
                                publish.map(publish => <BookInfo handlerAddBook={handlerAddBook} publish={publish} key={publish.id} />)
                            }
                        </div>

                    </div>

                    {/* cart section */}
                    <div className="col-md-2 mt-4 ">
                        <div className=" text-center sticky-top">
                            <Cart cart={cart} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;