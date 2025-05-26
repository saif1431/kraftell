"use client"

import { useState, useMemo } from "react"
import PrototypeGrid from "./PrototypeGrid"
import PrototypeSearchFilter from "./PrototypeSearchFilter"
import { NavLink } from "react-router-dom"


const mockProjects = [
  {
    id: "1",
    title: "Aluminum Watch Case - Prototype",
    requestId: "#12512",
    clientName: "Esther Howard",
    category: "Electronics",
    requestedDate: "19 May, 2025",
    deliveryDeadline: "29 May, 2025",
    status: "In Progress",
    quoted: true,
    paymentStatus: "Unpaid",
  },
  {
    id: "2",
    title: "Smart Phone Case Design",
    requestId: "#12513",
    clientName: "John Doe",
    category: "Consumer Goods",
    requestedDate: "18 May, 2025",
    deliveryDeadline: "28 May, 2025",
    status: "Pending",
    quoted: false,
    paymentStatus: "Pending",
  },
  {
    id: "3",
    title: "Laptop Stand Prototype",
    requestId: "#12514",
    clientName: "Jane Smith",
    category: "Office Equipment",
    requestedDate: "17 May, 2025",
    deliveryDeadline: "27 May, 2025",
    status: "Completed",
    quoted: true,
    paymentStatus: "Paid",
  },
  {
    id: "4",
    title: "Gaming Mouse Design",
    requestId: "#12515",
    clientName: "Mike Johnson",
    category: "Electronics",
    requestedDate: "16 May, 2025",
    deliveryDeadline: "26 May, 2025",
    status: "In Progress",
    quoted: true,
    paymentStatus: "Unpaid",
  },
]

export default function PrototypeManagement() {
  const [projects, setProjects] = useState(mockProjects)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Debug: Log the projects to console
  console.log("Projects in PrototypeManagement:", projects)
  console.log("Projects length:", projects.length)

  // Get unique categories from projects
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(projects.map((project) => project.category)))
    console.log("Categories:", uniqueCategories)
    return uniqueCategories
  }, [projects])

  // Filter projects based on search term and category
  const filteredProjects = useMemo(() => {
    const filtered = projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.requestId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.clientName.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCategory = selectedCategory === "all" || project.category === selectedCategory

      return matchesSearch && matchesCategory
    })

    console.log("Filtered projects:", filtered)
    console.log("Filtered projects length:", filtered.length)
    return filtered
  }, [projects, searchTerm, selectedCategory])

  return (
    <div className="min-h-screen">
      <div className=" mx-auto">


        <div className="flex flex-col lg:flex-row gap-6">
          {/* Search and Filter Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <PrototypeSearchFilter
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              categories={categories}
            />
          </div>

          {/* Project Grid */}
          <div className="flex-1">
            <NavLink to='/PrototypePreview'>
            <PrototypeGrid projects={filteredProjects} />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}
