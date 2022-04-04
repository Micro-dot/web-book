import React from 'react';
import useReviews from '../../hook/useReviews';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <div className='reviews'>
                {
                    reviews.map(review =>
                        <div key={review.id} className='review'>
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
        </div>
    );
};

export default Reviews;