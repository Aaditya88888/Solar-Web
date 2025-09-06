const BecomePartner = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 font-inter text-gray-800">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-semibold mb-4">
        Work With Us, Become a{" "}
        <span className="font-bold">DIVY Solar Partner</span>
      </h1>

      {/* Intro Paragraph */}
      <p className="text-base leading-relaxed text-justify mb-8">
        Join hands with <strong>DIVY Solar</strong>, one of India’s leading
        solar energy solution providers, and be a part of the clean energy
        revolution. We are actively expanding our dealer and partner network
        across India and are looking for passionate, driven, and growth-oriented
        individuals or businesses to collaborate with us.
      </p>

      {/* Why Partner */}
      <h2 className="text-xl font-semibold text-brandBlue mb-3">
        Why Partner with DIVY Solar?
      </h2>
      <ul className="list-disc list-inside space-y-2 text-base leading-relaxed mb-8">
        <li>
          <strong>Trusted Brand:</strong> Recognized for quality, innovation,
          and customer satisfaction.
        </li>
        <li>
          <strong>High-Quality Products:</strong> MNRE-approved, efficient, and
          durable solar panels and systems.
        </li>
        <li>
          <strong>Marketing & Technical Support:</strong> Complete training,
          marketing material, and on-ground support to help you succeed.
        </li>
        <li>
          <strong>Attractive Margins:</strong> Competitive pricing and strong
          profit potential.
        </li>
        <li>
          <strong>Fast-Growing Industry:</strong> Be a part of India’s booming
          solar sector with massive future potential.
        </li>
      </ul>

      {/* Who Can Join */}
      <h2 className="text-xl font-semibold text-brandBlue mb-3">
        Who Can Join?
      </h2>
      <ul className="list-disc list-inside space-y-2 text-base leading-relaxed mb-8">
        <li>Solar product dealers or distributors</li>
        <li>Electrical contractors and engineers</li>
        <li>Entrepreneurs and startups interested in renewable energy</li>
        <li>Real estate and infrastructure professionals</li>
        <li>NGOs or institutions promoting sustainable energy</li>
      </ul>

      {/* What We Offer */}
      <h2 className="text-xl font-semibold text-brandBlue mb-3">
        What We Offer
      </h2>
      <ul className="list-disc list-inside space-y-2 text-base leading-relaxed mb-8">
        <li>Product supply and logistics support</li>
        <li>Installation and technical guidance</li>
        <li>Sales training and business consultation</li>
        <li>Assistance with government schemes and subsidies</li>
        <li>Lead generation and local promotion support</li>
      </ul>

      {/* Call to Action */}
      <p className="text-base font-bold mt-6">
        Ready to Partner with Us?{" "}
        <span className="text-brandBlue underline cursor-pointer font-bold">
          Click the Link Below
        </span>
      </p>
    </div>
  );
};

export default BecomePartner;
