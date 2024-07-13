import PropTypes from "prop-types";
import { useRouter } from "next/router";

const FrameComponent = ({ className = "" }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/screen2'); // Replace '/target-page' with the path of the page you want to navigate to
  };

  return (
    <button
      className={`cursor-pointer [border:none] py-[10.5px] px-5 bg-turquoise-200 w-[309px] flex flex-row items-start justify-center box-border z-[2] hover:bg-lightseagreen ${className}`}
      onClick={handleClick}
    >
      <div className="h-[43px] relative text-17xl font-bebas-neue text-black text-left inline-block min-w-[87px] mq450:text-3xl mq975:text-10xl">
        Submit
      </div>
    </button>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
