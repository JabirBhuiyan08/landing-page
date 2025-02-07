

const Dropdown = () => {
  return (
    <div className="w-full max-w-md mx-auto mt-10">
      {/* First Dropdown */}
      <div className="collapse collapse-plus bg-gradient-to-r from-[#a14ee9] via-[#8226e6] to-[#4b048a] border border-transparent rounded-lg shadow-lg mb-4">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-lg font-bold text-white">
          Open this and close others
        </div>
        <div className="collapse-content px-4 py-2 bg-white rounded-b-lg text-gray-700">
          <p>This is the content of the first dropdown.</p>
        </div>
      </div>

      {/* Second Dropdown */}
      <div className="collapse collapse-plus bg-gradient-to-r from-[#a14ee9] via-[#8226e6] to-[#4b048a] border border-transparent rounded-lg shadow-lg mb-4">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-lg font-bold text-white">
          Open this and close others
        </div>
        <div className="collapse-content px-4 py-2 bg-white rounded-b-lg text-gray-700">
          <p>This is the content of the second dropdown.</p>
        </div>
      </div>

      {/* Third Dropdown */}
      <div className="collapse collapse-plus bg-gradient-to-r from-[#a14ee9] via-[#8226e6] to-[#4b048a] border border-transparent rounded-lg shadow-lg">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-lg font-bold text-white">
          Open this and close others
        </div>
        <div className="collapse-content px-4 py-2 bg-white rounded-b-lg text-gray-700">
          <p>This is the content of the third dropdown.</p>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
