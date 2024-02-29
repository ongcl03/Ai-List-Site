import "../index.css";

const Card = ({ name, link, description, image }) => {
  return (
    <div
      className="w-[300px] sm:w-96 rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-1.5 transform transition duration-300 white-shadow glowing-shadow"
      style={{
        background: "linear-gradient(to bottom, #0f0c29, #302b63, #24243e)",
        // boxShadow: "0px 0px 15px 0px rgba(255, 255, 255, 0.2)", // Added white shadow
      }}
    >
      <div className="p-8">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            className="rounded-full h-[136px] mx-auto"
            src={image}
            alt={name}
          />
        </a>
        <h2 className="text-2xl font-bold mt-6 text-white">{name}</h2>
        <p className="mt-[5px] text-sm text-gray-300 leading-[22px] ">
          {description}
        </p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="mt-7 py-[12px] px-6 bg-gray-200 text-blue-800 rounded-full font-bold tracking-wider block mx-auto hover:scale-105 transform transition duration-200">
            Visit Site
          </button>
        </a>
      </div>
    </div>
  );
};

export default Card;
