const WhyChooseMechaniqal = () => {
  return (
    <div className="flex flex-col text-center p-4 md:p-6 lg:p-8">
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title text-xl md:text-2xl font-medium">
          Why Choose Mechaniqal Keyboards?
        </div>
        <div className="collapse-content">
          <p className="text-left md:text-start font-bold text-gray-500 text-sm md:text-base">
            Mechanical keyboards offer a more enjoyable typing experience with
            their satisfying feedback and durability. They last longer and are
            perfect for gaming due to their fast response times and customizable
            features. Plus, you can personalize them with different keycaps and
            lighting.
          </p>
        </div>
      </div>

      <div className="collapse bg-base-200 mt-4 md:mt-6 lg:mt-8">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl md:text-2xl font-medium">
          What Makes Our Products Stand Out?
        </div>
        <div className="collapse-content">
          <p className="text-left md:text-start font-bold text-gray-500 text-sm md:text-base">
            Our products stand out due to their superior quality and
            cutting-edge design. We use premium materials and advanced
            technology to ensure durability and top performance. Additionally,
            our exceptional customer support ensures you get the best value and
            assistance.
          </p>
        </div>
      </div>

      <div className="collapse bg-base-200 mt-4 md:mt-6 lg:mt-8">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl md:text-2xl font-medium">
          Why to Buy from us?
        </div>
        <div className="collapse-content">
          <p className="text-left md:text-start font-bold text-gray-500 text-sm md:text-base">
            Choose us for our exceptional quality and personalized customer
            service. We offer competitive prices and a wide range of products to
            suit your needs. Our commitment to fast shipping and easy returns
            ensures a hassle-free experience. Plus, our knowledgeable team is
            always here to help you make the best choice.
          </p>
        </div>
      </div>

      <div className="collapse bg-base-200 mt-4 md:mt-6 lg:mt-8">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl md:text-2xl font-medium">
          What Kind of Support Can You Expect After Your Purchase?
        </div>
        <div className="collapse-content">
          <p className="text-left md:text-start font-bold text-gray-500 text-sm md:text-base">
            When you buy from us, you’ll get exceptional support and quick
            solutions from our expert team. Our comprehensive warranties and
            reliable service ensure you’re fully covered long after your
            purchase.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseMechaniqal;
