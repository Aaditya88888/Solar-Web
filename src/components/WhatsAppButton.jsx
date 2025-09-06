const WhatsAppButton = () => {
  const phoneNumber = "919266704044";
  const message = "Hello, I would like to connect with you!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
      />

      {/* WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        className="float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp my-float"></i>
      </a>

      {/* Inline Styles (can be moved to CSS) */}
      <style>{`
        .float {
          position: fixed;
          width: 60px;
          height: 60px;
          bottom: 40px;
          right: 40px;
          background-color: #25d366;
          color: #FFF;
          border-radius: 50px;
          text-align: center;
          font-size: 30px;
          box-shadow: 2px 2px 3px #999;
          z-index: 100;
        }
        .my-float {
          margin-top: 16px;
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;
