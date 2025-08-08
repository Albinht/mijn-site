export default function AdminPage({ params }) {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">
            Admin interface - Route: {params?.index?.join('/') || 'admin'}
          </p>
        </div>
      </div>
    </div>
  )
}