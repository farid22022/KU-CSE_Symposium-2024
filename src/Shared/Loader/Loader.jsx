const Loader = () => {
  return (
    <div id="loader-body" className="min-h-screen flex justify-center items-center">
      <span
        className="loading loading-ring w-16 md:w-20 lg:w-24 xl:w-28 bg-gradient-to-r from-orange-500 to-red-500"
      ></span>
    </div>
  );
};

export default Loader;
