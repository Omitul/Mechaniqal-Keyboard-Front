import { useEffect, useState } from "react";

const CustomerReviewDetails = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("customerReview.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
        return response.json();
      })
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  const getreviews = (index: number) => {
    if (reviews.length > index && index >= 0) {
      const { name, email, testimonial, image } = reviews[index];
      return { name, email, testimonial, image };
    } else return null;
  };

  const reviews1 = getreviews(0);
  const reviews2 = getreviews(1);
  const reviews3 = getreviews(2);
  const reviews4 = getreviews(3);

  return (
    <div>
      <div>
        <div>
          <h1 className="text-4xl text-center mb-4 font-bold">
            Customer Reviews
          </h1>
        </div>
        <div className="carousel w-full bg-slate-800 ">
          <div
            id="slide1"
            className="carousel-item relative w-full  justify-center items-center"
          >
            <div className="flex flex-col h-full">
              <div className="flex-1">
                <img src={reviews1?.image} className="w-full h-96" />
              </div>
              <div className="flex-1 border border-red-300 bg-black p-4">
                <p className="text-white font-semibold mt-2">
                  {reviews1?.name}
                </p>
                <p className="text-white font-semibold mt-2">
                  {reviews1?.email}
                </p>
                <p className="text-white font-semibold mt-2">
                  {reviews1?.testimonial}
                </p>
              </div>
            </div>

            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div
            id="slide2"
            className="carousel-item  w-full  justify-center items-center relative"
          >
            <div className="flex flex-col h-full">
              <div className="flex-1">
                <img src={reviews2?.image} className="w-full h-96" />
              </div>
              <div className="flex-1 border border-red-300 bg-black p-4">
                <p className="text-white font-semibold mt-2">
                  {reviews2?.name}
                </p>
                <p className="text-white font-semibold mt-2">
                  {reviews2?.email}
                </p>
                <p className="text-white font-semibold mt-2">
                  {reviews2?.testimonial}
                </p>
              </div>
            </div>

            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div
            id="slide3"
            className="carousel-item relative w-full  justify-center items-center"
          >
            <div className="flex flex-col h-full">
              <div className="flex-1">
                <img src={reviews3?.image} className="w-full h-96" />
              </div>
              <div className="flex-1 border border-red-300 bg-black p-4">
                <p className="text-white font-semibold mt-2">
                  {reviews3?.name}
                </p>
                <p className="text-white font-semibold mt-2">
                  {reviews3?.email}
                </p>
                <p className="text-white font-semibold mt-2">
                  {reviews3?.testimonial}
                </p>
              </div>
            </div>

            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide4"
            className="carousel-item relative w-full  justify-center items-center"
          >
            <div className="flex flex-col h-full">
              <div className="flex-1">
                <img src={reviews4?.image} className="w-full h-96" />
              </div>
              <div className="flex-1 border border-red-300 bg-black p-4">
                <p className="text-white font-semibold mt-2">
                  {reviews4?.name}
                </p>
                <p className="text-white font-semibold mt-2">
                  {reviews4?.email}
                </p>
                <p className="text-white font-semibold mt-2">
                  {reviews4?.testimonial}
                </p>
              </div>
            </div>

            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviewDetails;
