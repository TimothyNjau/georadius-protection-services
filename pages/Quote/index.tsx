import { useEffect, useState } from "react";
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

const Quote = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    location: "",
    propertyType: "",
    guards: "",
    numberOfDays: "",
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

    const serviceNeedsGuards =
      formData.service === "Manned Guarding" ||
      formData.service === "Event Security";

    if (step === 1 && !formData.service) {
      setError("Please select a service.");
      return;
    }

    if (step === 2) {
      if (!formData.location || !formData.propertyType) {
        setError("Please fill location and property type.");
        return;
      }

      if (serviceNeedsGuards && !formData.guards) {
        setError("Please specify the number of guards.");
        return;
      }

      if (serviceNeedsGuards && !formData.numberOfDays) {
        setError("Please specify the number of days.");
        return;
      }

      if (formData.service === "Event Security" && !formData.eventDate) {
        setError("Please select the event date.");
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
        guards: "",
        numberOfDays: "",
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
    }
  };

  const serviceNeedsGuards =
    formData.service === "Manned Guarding" ||
    formData.service === "Event Security";

  return (
    <div className="min-h-screen py-10 px-4 sm:px-8 md:px-16 bg-slate-50">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Get a Security Quote
        </h1>
        <p className="text-slate-600 mb-4">
          Step-by-step form to request a tailored quote.
        </p>

        {showSuccess && (
          <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 mb-3">
            <h3 className="font-semibold">Quote Submitted</h3>
            <p>
              Thank you! We received your request and will get back to you
              within 24 hours.
            </p>
          </div>
        )}

        <form onSubmit={submitQuote} className="space-y-4">
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

              {serviceNeedsGuards && (
                <>
                  <InputField
                    id="guards"
                    label="Number of Guards"
                    type="number"
                    value={formData.guards}
                    onChange={(v) => updateField("guards", v)}
                    required
                  />

                  <InputField
                    id="numberOfDays"
                    label="Number of Days"
                    type="number"
                    value={formData.numberOfDays}
                    onChange={(v) => updateField("numberOfDays", v)}
                    required
                  />
                </>
              )}

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
                className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Quote;
