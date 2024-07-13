import { useMemo } from "react";
import PropTypes from "prop-types";

const Selector = ({ className = "", propMinWidth }) => {
  const selectorStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`w-[165px] flex flex-row items-start justify-start pt-0 px-0 pb-[109px] box-border min-w-[165px] z-[1] text-left text-17xl text-black font-bebas-neue mq450:flex-1 ${className}`}
      style={selectorStyle}
    >
      <div className="flex-1 rounded-mini flex flex-row items-start justify-start py-px px-[13px] gap-[26px] border-[1.5px] border-solid border-black">
        <div className="h-[43px] relative inline-block min-w-[79px] mq450:text-3xl mq975:text-10xl">{`Select `}</div>
        <div className="flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0">
          <img
            className="w-[30px] h-[22px] relative object-contain"
            alt=""
            src="/polygon-1.svg"
          />
        </div>
      </div>
      <div className="h-[98px] w-[70px] rounded-mini box-border hidden flex-col items-start justify-start border-[1.5px] border-solid border-black">
        <div className="self-stretch rounded-mini hidden flex-row items-center justify-center py-[3px] px-3.5">
          <div className="h-[43px] flex-1 relative inline-block mq450:text-3xl mq975:text-10xl">
            Yes
          </div>
        </div>
        <div className="self-stretch rounded-mini hidden flex-row items-center justify-center py-[3px] px-[15px] text-center">
          <div className="h-[43px] w-[30px] relative inline-block shrink-0 mq450:text-3xl mq975:text-10xl">
            NO
          </div>
        </div>
      </div>
    </div>
  );
};

Selector.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default Selector;
