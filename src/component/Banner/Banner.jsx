

const Banner = () => {
  return (
    <div className="my-10">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            'url(https://i.ibb.co/rsHNNgW/istockphoto-688461402-1024x1024.jpg)',
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold italic">
              {' '}
              Coca-Cola Brands
            </h1>
            <p className="mb-5 italic">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;