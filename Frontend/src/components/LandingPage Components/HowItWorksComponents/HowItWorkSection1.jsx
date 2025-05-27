import { User, Building2, Package, CreditCard } from "lucide-react"

 function HowItWorkSection1() {
  const steps = [
    {
      icon: <User className="w-8 h-8 text-white" />,
      title: "Create a Buyer Profile",
      step:"Step1",
      description: "Sign up and provide a few details about your business and product requirements.",
    },
    {
      icon: <Building2 className="w-8 h-8 text-white" />,
      title: "Get Matched with Vetted Manufacturers",
      step:"Step2",
      description: "Our AI connects you with manufacturers based on quality, materials, and supply chain timing.",
    },
    {
      icon: <Package className="w-8 h-8 text-white" />,
      title: "Request Prototypes",
      step:"Step3",
      description: "Upload files, request prototypes, and iterate through our secure platform.",
    },
    {
      icon: <CreditCard className="w-8 h-8 text-white" />,
      title: "Pay with Confidence",
      step:"Step4",
      description: "Make milestone-based payments via our secure escrow system when you're satisfied.",
    },
  ]

  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works – Simplify Your Sourcing Process</h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        Connect with vetted manufacturers for a seamless sourcing experience, from concept to production.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {steps.map((step, index) => (
             <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">{step.icon}</div>
      <span className="text-[#3977ED] font-semibold">{step.step}</span>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
    </div>
        ))}
      </div>

      <button className="bg-[#3977ED] text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300">Get Started with Kraftell</button>
    </div>  
  )
}

export default HowItWorkSection1
