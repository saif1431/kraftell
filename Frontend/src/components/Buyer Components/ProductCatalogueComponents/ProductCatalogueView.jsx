import { DollarSign, Package, Truck, Clock, Layers, Ruler, Calculator } from "lucide-react"

export default function ProductCatalogueView() {
  const specifications = [
    {
      icon: DollarSign,
      label: "Unit Price",
      value: "$ 800",
    },
    {
      icon: Package,
      label: "Minimum Order Quantity (MOQ)",
      value: "200",
    },
    {
      icon: Truck,
      label: "Available Quantity",
      value: "1000",
    },
    {
      icon: Clock,
      label: "Estimated Production Time",
      value: "2 Hours",
    },
    {
      icon: Truck,
      label: "Estimated Delivery Time",
      value: "5 Days",
    },
    {
      icon: Layers,
      label: "Material",
      value: "Steel",
    },
    {
      icon: Ruler,
      label: "Dimensions",
      value: "150×166",
    },
  ]

  return (
    <div className="min-h-screen ">
      <div className=" mx-auto">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col-reverse lg:flex-row lg:items-start justify-between">
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900 mb-3">CNC Machined Aluminum Parts</h1>
              <p className="text-gray-600 text-md leading-relaxed">
                Our CNC machined aluminum parts are crafted to meet the highest standards of accuracy and durability.
                Manufactured using advanced multi-axis CNC machines, these components are ideal for industries demanding
                exceptional precision, such as aerospace, automotive, electronics, robotics, and medical devices.
              </p>
            </div>
            <div className="lg:ml-6 w-fit bg-gray-200 p-4 rounded-lg">
              <Calculator className="w-16 h-full text-gray-600" />
            </div>
          </div>
        </div>

        {/* Specifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {specifications.map((spec, index) => {
            const IconComponent = spec.icon
            return (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex flex-col gap-4">
                  <div className="bg-black rounded-full p-2 flex-shrink-0 w-fit">
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-md text-primary mb-1">{spec.label}</p>
                    <p className="text-lg font-semibold text-gray-900">{spec.value}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
