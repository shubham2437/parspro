export default function FeatureCard({ icon, title, description }:any) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl">
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-navy-blue mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    )
  }
  
  