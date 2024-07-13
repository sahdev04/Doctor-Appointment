import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";

const Screen1 = () => {
  return (
    <div className="w-full relative bg-turquoise-100 overflow-hidden flex flex-col items-center justify-start py-[72px] px-5 box-border leading-[normal] tracking-[normal] text-left text-17xl text-black font-playfair-display">
      <div className="w-[990px] flex flex-row items-start justify-start py-0 px-[5px] box-border max-w-full">
        <div className="flex-1 shadow-[0px_5px_4px_rgba(0,_0,_0,_0.3)] bg-white flex flex-row items-start justify-center py-3.5 px-5 box-border max-w-full z-[1]">
          <div className="h-[76px] w-[980px] relative shadow-[0px_5px_4px_rgba(0,_0,_0,_0.3)] bg-white hidden max-w-full" />
          <h3 className="m-0 relative text-inherit font-normal font-inherit z-[2] text-3xl sm:text-10xl">
            Doctor Appointment Form
          </h3>
        </div>
      </div>
      <section className="w-[980px] bg-white flex flex-col items-start justify-start pt-[129px] pb-[50px] pr-[45px] pl-[55px] box-border gap-[31px] max-w-full mt-[-76px] text-left text-5xl text-black font-playfair-display sm:pb-[21px] sm:gap-[15px] sm:pl-[27px] sm:pr-[22px] sm:pb-8">
        <div className="w-[980px] h-[880px] relative bg-white hidden max-w-full" />
        <FrameComponent1 />
        <div className="w-[784px] flex flex-col items-start justify-start gap-[27px] max-w-full">
          <div className="w-[707px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <FrameComponent />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Screen1;
