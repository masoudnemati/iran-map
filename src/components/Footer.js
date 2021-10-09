import React from "react";

const Footer = () => {
  return (
    <>
      <a href="https://github.com/masoudnemati/iran-map">
        <img
          loading="lazy"
          width="149"
          height="149"
          src="https://github.blog/wp-content/uploads/2008/12/forkme_left_green_007200.png?resize=149%2C149"
          className="attachment-full size-full"
          alt="Fork me on GitHub"
          data-recalc-dims="1"
        />
      </a>

      <style jsx>{`
        a {
          position: fixed;
          top: 0;
          left: 0;
        }
      `}</style>
    </>
  );
};

export default Footer;
