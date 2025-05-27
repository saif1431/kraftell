import Image from "/OurMissionImg1.jpg"

 function OurMissionSection3() {
  const metrics = ["50% reduction in material waste", "30% lower carbon emissions", "100% ESG compliant partners"]

  return (
    <div className=" mx-auto px-4 rounded-md sm:px-6 lg:px-2 py-4 bg-white">
      <div className="grid lg:grid-cols-2 gap-8 ">
        <div className="p-4 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Built for Sustainable Manufacturing</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Sustainability is a strategic imperative. Kraftell empowers businesses to make data-driven decisions that
            reduce overconsumption, minimize waste, and lower emissions. We prioritize partnerships with manufacturers
            that meet stringent environmental and labor standards, aligning sourcing operations with ESG goals.
          </p>

          <div className="space-y-4">
            {metrics.map((metric, index) => (
              <div key={index} className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-gray-700 font-medium">{metric}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 lg:p-12">
          <div className="">
            <img
              src={Image}
              alt="Business professionals in a meeting discussing sustainable manufacturing strategies"
              className="rounded-lg object-cover w-full "
            />
          </div>
        </div>
      </div>
    </div>
  )
}


export default OurMissionSection3
