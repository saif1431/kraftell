"use client"

import PrototypeCard from "./PrototypeCard"

export default function PrototypeGrid({ projects }) {
  // Add null/undefined check
  if (!projects || !Array.isArray(projects)) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-500">
        <div className="text-center">
          <p className="text-lg mb-2">No projects available</p>
          <p className="text-sm">Projects data is not loaded</p>
        </div>
      </div>
    )
  }

  // Check for empty array
  if (projects.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-500">
        <div className="text-center">
          <p className="text-lg mb-2">No projects found</p>
          <p className="text-sm">Try adjusting your search or filter criteria</p>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
      {projects.map((project) => (
        <PrototypeCard key={project.id} project={project} />
      ))}
    </div>
  )
}
