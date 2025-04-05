import { Star } from "lucide-react"

export default function TestimonialCard({ quote, author, location, rating }:any) {
  return (
    <div className="bg-blue-800 p-6 rounded-lg">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`h-5 w-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-blue-600"}`} />
        ))}
      </div>
      <p className="mb-6 italic">"{quote}"</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-blue-200 text-sm">{location}</p>
      </div>
    </div>
  )
}

