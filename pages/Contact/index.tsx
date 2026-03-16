import { useState } from "react"
import Image from "next/image"
import SecImage from "@/public/assets/images/context-contact.jpg"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [error, setError] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields.")
      setLoading(false)
      return
    }

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "contact",
          data: formData,
        }),
      })

      if (!res.ok) throw new Error("Failed to send message.")

      setSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message || "Something went wrong.")
    } finally {
      setLoading(false)
      setTimeout(() => setSubmitted(false), 4000)
    }
  }

  return (
    <section>
      {/* Hero Section */}
      <section className="h-[30vh] relative overflow-hidden">
        <Image
          src={SecImage}
          alt="Contact Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="z-10 absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold text-center">
            Reach Out To Us
          </h2>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 px-4 md:px-8">
        {/* Info Panel */}
        <div className="flex flex-col gap-6">
          <h1 className="uppercase text-2xl md:text-3xl text-prim font-semibold">
            Trust Us With Your Safety
          </h1>
          <div className="flex flex-col gap-4 text-gray-700">
            <p>First Floor, Rowini House, Ruiru Town</p>
            <div>
              <h2 className="font-semibold">Email Us</h2>
              <p>georadiusprotection@gmail.com</p>
            </div>
            <div>
              <h2 className="font-semibold">Call Us</h2>
              <p>0725 572 720</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Send Us A Message</h2>

          {submitted && (
            <div className="p-4 mb-4 text-green-900 bg-green-50 border border-green-200 rounded">
              Message sent successfully! We will get back to you soon.
            </div>
          )}

          {error && (
            <div className="p-4 mb-4 text-red-900 bg-red-50 border border-red-200 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name *"
              value={formData.name}
              onChange={e => handleChange("name", e.target.value)}
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-prim"
              required
            />

            <input
              type="email"
              placeholder="Email *"
              value={formData.email}
              onChange={e => handleChange("email", e.target.value)}
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-prim"
              required
            />

            <input
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={e => handleChange("subject", e.target.value)}
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-prim"
            />

            <textarea
              placeholder="Message *"
              rows={5}
              value={formData.message}
              onChange={e => handleChange("message", e.target.value)}
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-prim"
              required
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="bg-prim text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </section>
  )
}

export default Contact