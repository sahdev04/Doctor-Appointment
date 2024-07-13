import PropTypes from "prop-types";
import { useState } from "react";
import { submitForm } from './/services/api'; 

const FrameComponent1 = ({ className = "" }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    gender: '',
    diabetes: '',
    age: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await submitForm(formData);
      setSuccess('Form submitted successfully!');
      console.log('Form submitted successfully:', response);
    } catch (error) {
      setError('Failed to submit form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full text-left text-5xl text-black font-playfair-display ${className}`}
    >
      <div className="relative font-black z-[1] mq450:text-lgi">
        Patient Name *
      </div>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="self-stretch h-[70px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-white box-border z-[1] border-[1.5px] border-solid border-black p-2"
        required
      />
      <div className="w-[786px] flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap">
        <div className="relative font-black z-[1] mq450:text-lgi">
          Mobile No. *
        </div>
        <div className="relative font-black z-[1] mq450:text-lgi">
          Age *
        </div>
      </div>
      <div className="w-[824px] flex flex-row items-start justify-between max-w-full gap-[20px] mq700:flex-wrap">
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          className="h-[70px] w-[440px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-white box-border max-w-full z-[1] border-[1.5px] border-solid border-black p-2"
          required
        />
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="h-[70px] w-[110px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-white box-border z-[1] border-[1.5px] border-solid border-black p-2"
          required
        />
      </div>
      <div className="w-[786px] flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap">
        <div className="relative font-black z-[1] mq450:text-lgi">
          Gender *
        </div>
        <div className="relative font-black z-[1] mq450:text-lgi">
          Diabetes *
        </div>
      </div>
      <div className="w-[824px] flex flex-row items-start justify-between max-w-full gap-[20px] mq700:flex-wrap">
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="h-[70px] w-[440px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-white box-border max-w-full z-[1] border-[1.5px] border-solid border-black p-2"
          required
        >
          <option value="" disabled>Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <select
          name="diabetes"
          value={formData.diabetes}
          onChange={handleChange}
          className="h-[70px] w-[440px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-white box-border max-w-full z-[1] border-[1.5px] border-solid border-black p-2"
          required
        >
          <option value="" disabled>Select Diabetes Status</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      <button
        type="submit"
        className="mt-4 cursor-pointer [border:none] py-[10.5px] px-5 bg-turquoise-200 w-[309px] flex flex-row items-start justify-center box-border z-[2] hover:bg-lightseagreen"
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
