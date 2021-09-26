import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { SocialIcon } from 'react-social-icons';

const BookInfo = (props) => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    const { img, author, PubName, established, price, TotalBooks } = props.publish;
    return (
        <div className=" mt-4">
            <div className="card shadow " style={{ width: '18rem', backgroundColor: '#F7F7F7' }}>
                <img src={img} className="card-img-top img-fluid" alt="..." style={{ height: '160px' }} />
                <div className="card-body">
                    <h6><span className="fw-bold">Author:</span>  {author}</h6>
                    <h6><span className="fw-bold">Publisher:</span>  {PubName}</h6>
                    <h6><span className="fw-bold">Established:</span>  {established}</h6>
                    <h6><span className="fw-bold">Total-books:</span>  {TotalBooks}</h6>
                    <h6><span className="fw-bold">Price:</span>  {price}</h6>

                    <div className="text-center mt-3">
                        <button onClick={() => props.handlerAddBook(props.publish)} className="btn btn-success">{element} Add to cart</button>
                        <div className="mt-3  d-flex justify-content-evenly">
                            <SocialIcon url="https://twitter.com/jaketrent" />
                            <SocialIcon url="https://facebook.com/jaketrent" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookInfo;