import ProductCard from "./ProductCard"


export default function ProductGrid({ products, onEdit, onDelete, onSelect }) {
  if (products.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-500">
        <div className="text-center">
          <p className="text-lg mb-2">No products found</p>
          <p className="text-sm">Try adjusting your search or filter criteria</p>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onEdit={onEdit} 
          onDelete={onDelete} 
          onSelect={onSelect} 
        />
      ))}
    </div>
  )
}