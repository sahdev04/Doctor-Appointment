import FrameComponent2 from "../components/frame-component2";

const Screen2 = () => {
  return (
    <div className="w-full relative bg-turquoise-100 overflow-hidden flex flex-row items-start justify-center py-[72px] pr-5 pl-[62px] box-border leading-[normal] tracking-[normal] mq1050:pl-[31px] mq1050:box-border">
      <section className="w-[980px] bg-white flex flex-col items-start justify-start pt-0 px-0 pb-[319px] box-border gap-[238px] max-w-full mq450:pb-[135px] mq450:box-border mq725:gap-[59px] mq1000:gap-[119px] mq1000:pb-[207px] mq1000:box-border">
        <div className="self-stretch h-[880px] relative bg-white hidden" />
        <header className="self-stretch shadow-[0px_5px_4px_rgba(0,_0,_0,_0.3)] bg-white flex flex-row items-start justify-center py-3.5 pr-5 pl-16 box-border top-[0] z-[99] sticky max-w-full text-left text-17xl text-black font-playfair-display mq725:pl-8 mq725:box-border">
          <div className="h-[76px] w-[980px] relative shadow-[0px_5px_4px_rgba(0,_0,_0,_0.3)] bg-white hidden max-w-full" />
          <div className="relative whitespace-nowrap z-[2]">
            Doctor Appointment Form
          </div>
        </header>
        <FrameComponent2 />
      </section>
    </div>
  );
};

export default Screen2;
