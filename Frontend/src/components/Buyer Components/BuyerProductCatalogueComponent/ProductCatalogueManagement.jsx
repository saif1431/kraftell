import { useState, useMemo } from "react"

import ProductCatelogueGrid from "./ProductCatelogueGrid"
import SearchFilter from "../../Manufacturer Components/MatchingProjectComponents/SearchFilter"


const mockProducts = [
  {
    id: "1",
    title: "Smart Watch Enclosure Design",
    rfqId: "#12512",
    category: "Consumer Goods",
    postedDate: "19 May, 2025",
    isSelected: false,
  },
  {
    id: "2",
    title: "Smart Watch Enclosure Design",
    rfqId: "#12512",
    category: "Consumer Goods",
    postedDate: "19 May, 2025",
    isSelected: false,
  },
  {
    id: "3",
    title: "Smart Watch Enclosure Design",
    rfqId: "#12512",
    category: "Consumer Goods",
    postedDate: "19 May, 2025",
    isSelected: false,
  },
  {
    id: "4",
    title: "Smart Watch Enclosure Design",
    rfqId: "#12512",
    category: "Consumer Goods",
    postedDate: "19 May, 2025",
    isSelected: true,
  },
  {
    id: "5",
    title: "Mobile Phone Case Design",
    rfqId: "#12513",
    category: "Electronics",
    postedDate: "18 May, 2025",
    isSelected: false,
  },
  {
    id: "6",
    title: "Laptop Stand Design",
    rfqId: "#12514",
    category: "Office Equipment",
    postedDate: "17 May, 2025",
    isSelected: false,
  },
]

 function ProductCatalogueManagement() {
  const [products, setProducts] = useState(mockProducts)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Get unique categories from products
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(products.map((product) => product.category)))
    return uniqueCategories
  }, [products])

  // Filter products based on search term and category
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.rfqId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [products, searchTerm, selectedCategory])

  const handleEdit = (id) => {
    console.log("Edit product:", id)
    alert(`Edit product with ID: ${id}`)
  }

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((product) => product.id !== id))
    }
  }

  const handleSelect = (id) => {
    setProducts(
      products.map((product) => ({
        ...product,
        isSelected: product.id === id,
      })),
    )
  }

  return (
    <div className="min-h-screen">
      <div className=" mx-auto">
        <div className="flex flex-col lg:flex-row gap-18">
          {/* Search and Filter Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <SearchFilter
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              categories={categories}
            />
          </div>

          {/* Product Grid */}
          <div className="flex-1">
  
            <ProductCatelogueGrid
              products={filteredProducts}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onSelect={handleSelect}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCatalogueManagement


