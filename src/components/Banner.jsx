import Google from "../assets/google.png";
import Meta from "../assets/meta.png";
import Netflix from "../assets/netflix.png";
import Amazon from "../assets/amazon.png";

const Banner = () => {
  const images = [
    {
      src: Google,
      alt: "google",
    },
    {
      src: Amazon,
      alt: "amazon",
    },
    {
      src: Netflix,
      alt: "netflix",
    },
    {
      src: Meta,
      alt: "meta",
    },
  ];

  return (
    <div className="w-[100%] bg-[#fafbff] py-8">
      <div className="w-[90%] md:w-[80%] flex flex-col md:flex-row items-center gap-4 m-auto">
        <div className="flex-[3] md:border-r-[1px] border-neutral-700 px-2">
          <p className="text-neutral-800 text-[22px] font-medium leading-[2.5rem] text-center md:text-left">
            Trusted By Over 1200+ Companies All Around the World
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between flex-[7] gap-6">
          {images.map((image) => (
            <div className="w-[50%] pl-8">
              <img src={image.src} alt={image.alt} className="w-[75%]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
