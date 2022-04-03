import { useNavigate } from 'react-router-dom';
import useReviews from '../../hook/useReviews';
import './Home.css';
const Home = () => {
    const [reviews, setReview] = useReviews();
    const reviewsSlice = reviews.slice(1, 4);
    const navigate = useNavigate();
    return (
        <div className='main'>
            <div className='into-section'>
                <div className='image'>
                    <img src={'https://ychef.files.bbci.co.uk/976x549/p03gg1lc.jpg'} alt="" />
                </div>
                <div className='text'>
                    <h1>Find your best book.</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora quis nisi beatae? Eaque ullam necessitatibus maxime. Sint voluptatum, dolorum sed illo, deleniti optio dolores eum a, fuga rem dolor iste?</p>
                    <div className='button'>
                        <button>Live Demo</button>
                    </div>

                </div>
            </div>
            <h1 className='client-text'>Client Review</h1>
            <div className='reviews'>
                {
                    reviewsSlice.map(review =>
                        <div className='review'>
                            <div>
                                <p><img src={review.img} alt="" /></p>
                                <p>{review.name}</p>
                            </div>
                            <p>{review.review}</p>
                            <p>Ratting: {review.ratings}</p>
                        </div>
                    )
                }
            </div>
            <div className='button'>
                <button onClick={() => navigate('/reviews')}>All Review</button>
            </div>
        </div>
    );
};

export default Home;