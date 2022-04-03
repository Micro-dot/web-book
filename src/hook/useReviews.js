import { useEffect, useState } from "react"

const useReviews =() => {
    const [reviews, setreview] = useState([]);
    useEffect(()=>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setreview(data));
    },[]);
    return [reviews, setreview];
}

export default useReviews;