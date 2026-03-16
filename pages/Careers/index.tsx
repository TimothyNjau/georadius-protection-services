import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import InputField from "@/components/common/InputField";
import TextAreaField from "@/components/common/TextAreaField";
import SelectField from "@/components/common/SelectField";
import Investigating from "@/public/assets/images/investigation.jpg";

const genders = ["Male", "Female", "Other"];

const Careers = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    nationalId: "",
    age: "",
    gender: "",
    residency: "",
    experience: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Basic validation
    if (
      !formData.name ||
      !formData.phone ||
      !formData.nationalId ||
      !formData.age ||
      !formData.gender ||
      !formData.residency
    ) {
      setError("Please fill all required fields.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "career",
          data: formData,
        }),
      });

      if (!res.ok) throw new Error("Failed to send application");

      setSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        nationalId: "",
        age: "",
        gender: "",
        residency: "",
        experience: "",
        message: "",
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Careers | GeoRadius Protection Services</title>
        <meta
          name="description"
          content="Apply for security guard positions at GeoRadius Protection Services in Kenya. Join our team for growth, training, and reliable security careers."
        />
        <meta
          name="keywords"
          content="security jobs Kenya, guard jobs, security careers, apply security company"
        />
      </Head>
      <div className="min-h-screen bg-slate-50">
        <section className="relative h-72 w-full overflow-hidden sm:h-80 md:h-96">
          <Image
            src={Investigating}
            alt="Search for career"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4 text-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-indigo-200">
                Career
              </p>
              <h1 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
                Join Our Security Team
              </h1>
              <p className="mt-2 text-sm text-slate-200 sm:text-base">
                Apply in minutes and start building a secure career with trusted
                professionals.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-4xl px-4 pb-10 pt-6 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white p-4 shadow-lg sm:p-6">
            <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Apply for Guard Position
                </h2>
                <p className="text-slate-600">
                  Fill in your details below to apply. We will review your
                  application and contact you.
                </p>
              </div>
            </div>

            {submitted && (
              <div className="mb-4 rounded-lg bg-emerald-50 border border-emerald-200 p-3 text-emerald-900">
                <h3 className="font-semibold">Application Submitted</h3>
                <p>
                  Thank you! Your application has been received. We will contact
                  you soon.
                </p>
              </div>
            )}

            {error && (
              <p className="mb-4 rounded bg-red-50 px-3 py-2 text-red-700">
                {error}
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <InputField
                  id="name"
                  label="Full Name"
                  value={formData.name}
                  onChange={(v) => updateField("name", v)}
                  required
                />
                <InputField
                  id="phone"
                  label="Phone Number"
                  value={formData.phone}
                  onChange={(v) => updateField("phone", v)}
                  required
                />
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <InputField
                  id="nationalId"
                  label="National ID Number"
                  value={formData.nationalId}
                  onChange={(v) => updateField("nationalId", v)}
                  required
                />
                <InputField
                  id="age"
                  label="Age"
                  type="number"
                  value={formData.age}
                  onChange={(v) => updateField("age", v)}
                  required
                />
              </div>

              <SelectField
                id="gender"
                label="Gender"
                value={formData.gender}
                options={genders}
                onChange={(v) => updateField("gender", v)}
                required
              />
              <InputField
                id="residency"
                label="Place of Residency"
                value={formData.residency}
                onChange={(v) => updateField("residency", v)}
                required
              />
              <TextAreaField
                id="experience"
                label="Experience (optional)"
                value={formData.experience}
                onChange={(v) => updateField("experience", v)}
              />
              <TextAreaField
                id="message"
                label="Additional Message (optional)"
                value={formData.message}
                onChange={(v) => updateField("message", v)}
              />

              <button
                type="submit"
                disabled={loading}
                className={`w-full rounded-lg px-4 py-3 text-white font-semibold ${loading ? "bg-gray-400" : "bg-prim hover:bg-indigo-600"}`}
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Careers;
