import FrameComponent3 from "./frame-component3";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center max-w-full text-center text-17xl text-black font-playfair-display ${className}`}
    >
      <div className="w-[594px] flex flex-col items-start justify-start gap-[86px] max-w-full mq450:gap-[21px] mq725:gap-[43px]">
        <b className="relative z-[1] mq450:text-3xl mq1000:text-10xl">
          <p className="m-0 whitespace-pre-wrap">
            Your Appointment Has successfully
          </p>
          <p className="m-0">Booked</p>
        </b>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <FrameComponent3 />
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
