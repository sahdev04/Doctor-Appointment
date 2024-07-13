import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <button
      className={`cursor-pointer [border:none] py-[11px] px-[70px] bg-turquoise-200 flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-lightseagreen mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <div className="h-[43px] relative text-17xl font-bebas-neue text-black text-left inline-block">
        Back to Home
      </div>
    </button>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
