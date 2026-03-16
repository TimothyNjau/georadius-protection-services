import { useEffect, useState } from "react";
import Image from "next/image";
import InputField from "@/components/common/InputField";
import SelectField from "@/components/common/SelectField";
import TextAreaField from "@/components/common/TextAreaField";

const services = [
  "Manned Guarding",
  "Event Security",
  "CCTV Installation",
  "Alarm System Installation",
  "Dog Training",
  "Investigation",
  "Security Consultation",
];

const propertyTypes = [
  "Residential",
  "Office",
  "Warehouse",
  "Construction site",
];
const securityDurations = ["One day", "One week", "Monthly contract"];

const Quote = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    location: "",
    propertyType: "",
    securityDuration: "",
    guards: "",
    eventDate: "",
    message: "",
    fullName: "",
    company: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!showSuccess) return;
    const timer = setTimeout(() => setShowSuccess(false), 4000);
    return () => clearTimeout(timer);
  }, [showSuccess]);

  const updateField = (field: string, value: string) => {
    if (showSuccess) {
      setShowSuccess(false);
      setSubmitted(false);
    }
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    setError("");
    // validation per step
    if (step === 1 && !formData.service) {
      setError("Please select a service.");
      return;
    }
    if (step === 2) {
      if (
        !formData.location ||
        !formData.propertyType ||
        !formData.securityDuration ||
        !formData.guards
      ) {
        setError("Please fill all required service details.");
        return;
      }
      if (formData.service === "Event Security" && !formData.eventDate) {
        setError("Please select event date.");
        return;
      }
    }
    if (step === 3 && !formData.message) {
      setError("Please describe your security needs.");
      return;
    }
    if (step === 4) {
      if (!formData.fullName || !formData.email || !formData.phone) {
        setError("Please fill all required contact info.");
        return;
      }
      if (!/^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
        setError("Invalid email.");
        return;
      }
    }
    setStep((s) => Math.min(5, s + 1));
  };

  const prevStep = () => setStep((s) => Math.max(1, s - 1));

  const submitQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "quote",
          data: formData,
        }),
      });

      if (!res.ok) throw new Error("Failed to send email");

      setSubmitted(true);
      setShowSuccess(true);
      setStep(1);
      setFormData({
        service: "",
        location: "",
        propertyType: "",
        securityDuration: "",
        guards: "",
        eventDate: "",
        message: "",
        fullName: "",
        company: "",
        email: "",
        phone: "",
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };
  const successMessage = submitted ? (
    <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900">
      <h3 className="font-semibold">Quote Submitted</h3>
      <p>
        Thank you! We received your request. We will get back to you within 24
        hours.
      </p>
    </div>
  ) : null;

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto w-full max-w-5xl px-4 pb-10 pt-8 sm:px-6 lg:px-8">
        <section className="mb-6 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-900 to-emerald-600 p-4 text-white sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">Security Quote</p>
              <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">Get Trusted Protection for Your Property</h1>
              <p className="mt-3 text-slate-200 sm:text-lg">Choose your service and get a tailored quote from our experienced security team.</p>
              <div className="mt-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-100">5 Steps · Fast Response</div>
            </div>
            <div className="relative h-48 w-full overflow-hidden rounded-xl border border-white/20 md:h-56">
              <Image src="/assets/images/event-security.jpg" alt="Security professionals on site" fill className="object-cover" />
            </div>
          </div>
        </section>

        <div className="mx-auto w-full max-w-3xl rounded-2xl bg-white p-4 sm:p-6 shadow-md">
          <div className="mb-4 flex items-center justify-between rounded-xl bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700">
            <span>Step {step} of 5</span>
            <span className="hidden sm:inline">Progress: {(step / 5) * 100}%</span>
          </div>

          <h2 className="text-2xl font-bold text-slate-900">Request a quote</h2>
          <p className="text-slate-600 mt-1">Complete the form below to receive a quote within 24 hours.</p>

          {showSuccess && (
            <div className="mt-4 rounded-lg bg-emerald-50 border border-emerald-200 p-3 text-emerald-900">
              <h3 className="font-semibold">Quote Submitted</h3>
              <p className="text-sm">Thank you! We received your request and will get back to you within 24 hours.</p>
            </div>
          )}

          <form onSubmit={submitQuote} className="space-y-4 mt-4">
          {step === 1 && (
            <SelectField
              id="service"
              label="Service"
              value={formData.service}
              options={services}
              onChange={(v) => updateField("service", v)}
              required
            />
          )}

          {step === 2 && (
            <>
              <InputField
                id="location"
                label="Location"
                value={formData.location}
                onChange={(v) => updateField("location", v)}
                required
              />
              <SelectField
                id="propertyType"
                label="Property Type"
                value={formData.propertyType}
                options={propertyTypes}
                onChange={(v) => updateField("propertyType", v)}
                required
              />
              <SelectField
                id="securityDuration"
                label="Security Duration"
                value={formData.securityDuration}
                options={securityDurations}
                onChange={(v) => updateField("securityDuration", v)}
                required
              />
              <InputField
                id="guards"
                label="Number of Guards"
                type="number"
                value={formData.guards}
                onChange={(v) => updateField("guards", v)}
                required
              />
              {formData.service === "Event Security" && (
                <InputField
                  id="eventDate"
                  label="Event Date"
                  type="date"
                  value={formData.eventDate}
                  onChange={(v) => updateField("eventDate", v)}
                  required
                />
              )}
            </>
          )}

          {step === 3 && (
            <TextAreaField
              id="message"
              label="Describe your security needs"
              value={formData.message}
              onChange={(v) => updateField("message", v)}
              required
            />
          )}

          {step === 4 && (
            <>
              <InputField
                id="fullName"
                label="Full Name"
                value={formData.fullName}
                onChange={(v) => updateField("fullName", v)}
                required
              />
              <InputField
                id="company"
                label="Company (optional)"
                value={formData.company}
                onChange={(v) => updateField("company", v)}
              />
              <InputField
                id="email"
                label="Email"
                type="email"
                value={formData.email}
                onChange={(v) => updateField("email", v)}
                required
              />
              <InputField
                id="phone"
                label="Phone"
                type="tel"
                value={formData.phone}
                onChange={(v) => updateField("phone", v)}
                required
              />
            </>
          )}

          {error && (
            <p className="text-red-700 bg-red-50 px-3 py-2 rounded">{error}</p>
          )}

          <div className="flex gap-2 mt-4">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 border rounded border-slate-300 hover:bg-slate-100"
              >
                Back
              </button>
            )}
            {step < 5 && (
              <button
                type="button"
                onClick={nextStep}
                className="px-4 py-2 bg-prim text-white rounded hover:bg-indigo-600"
              >
                Next
              </button>
            )}
            {step === 5 && (
              <button
                type="submit"
                disabled={isLoading}
                className={`px-4 py-2 rounded text-white ${isLoading ? "bg-slate-400" : "bg-emerald-600 hover:bg-emerald-700"}`}
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  </div>
  )
};

export default Quote;
