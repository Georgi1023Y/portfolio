import React, { useState } from "react";
import supabase from "../supabase/supabaseClient";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [form, setForm] = useState({ име: "", имейл: "", съобщение: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const notify = () => toast.success("Съобщението ви беше изпратено");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("contact_form_submissions")
      .insert([
        {
          име: form.име,
          имейл: form.имейл,
          съобщение: form.съобщение,
        },
      ]);

    if (error) {
      setError("An error occurred while submitting the form.");
      console.error(error);
    } else {
      notify();
      setForm({ име: "", имейл: "", съобщение: "" });
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-12 px-4 flex flex-col items-center bg-gradient-to-br from-[#232526] to-[#414345]"
    >
      <Toaster />
      <h2 className="text-3xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
        Let's work together!
      </h2>
      <p className="mb-8 text-gray-300 text-center max-w-lg">
        Contact me using the form below or directly at
        <a
          href="beshirovgeorgi3@gmail.com"
          className="text-cyan-400 underline ml-1"
        >
          beshirovgeorgi3@gmail.com
        </a>
      </p>
      <form
        className="w-full max-w-xl bg-[#2d2f38] rounded-2xl shadow-lg p-8 flex flex-col gap-5 border border-[#383a47]"
        onSubmit={handleSubmit}
      >
        <label className="flex flex-col text-sm text-gray-200">
          Name
          <input
            type="text"
            name="име"
            required
            value={form.име}
            onChange={handleChange}
            className="mt-1 px-4 py-2 rounded-md bg-[#232526] border border-[#383a47] text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="Your name"
          />
        </label>
        <label className="flex flex-col text-sm text-gray-200">
          Email
          <input
            type="email"
            name="имейл"
            required
            value={form.имейл}
            onChange={handleChange}
            className="mt-1 px-4 py-2 rounded-md bg-[#232526] border border-[#383a47] text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="Email"
          />
        </label>
        <label className="flex flex-col text-sm text-gray-200">
          Message
          <textarea
            name="съобщение"
            required
            rows={5}
            value={form.съобщение}
            onChange={handleChange}
            className="mt-1 px-4 py-2 rounded-md bg-[#232526] border border-[#383a47] text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
            placeholder="Your message"
          />
        </label>
        <button
          type="submit"
          className="bg-gradient-to-r from-cyan-400 to-pink-400 text-white font-bold py-2 px-8 rounded-full mt-2 hover:scale-105 transition-transform duration-150"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
