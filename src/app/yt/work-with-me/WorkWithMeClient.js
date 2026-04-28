'use client';

import { useRef, useState } from 'react';

const contactOptions = [
  {
    label: 'E-mail',
    description: 'Send the context and I will reply directly.',
    href: 'mailto:albin@niblah.com',
  },
  {
    label: 'WhatsApp',
    description: 'Send a quick message if the project is urgent.',
    href: 'https://wa.me/31648728828',
  },
  {
    label: 'Book a call',
    description: 'Pick a time and walk me through the work.',
    href: 'https://calendly.com/niblah/30min',
  },
];

const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  message: '',
};

export default function WorkWithMeClient() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState('');
  const detailsRef = useRef(null);

  const showProjectOptions = () => {
    setIsOpen(true);
    window.requestAnimationFrame(() => {
      detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Contact request failed');
      }

      setStatus('success');
      setFormData(initialFormData);
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <div className="mt-8 w-full">
      {!isOpen && (
        <button
          type="button"
          onClick={showProjectOptions}
          className="inline-flex h-12 items-center justify-center rounded-[3px] border border-black bg-black px-5 text-sm font-semibold text-white transition-colors hover:bg-black/90"
        >
          Start a project
        </button>
      )}

      {isOpen && (
        <div ref={detailsRef} className="mx-auto mt-10 w-full max-w-4xl text-left">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {contactOptions.map((option) => (
              <a
                key={option.label}
                href={option.href}
                target={option.href.startsWith('http') ? '_blank' : undefined}
                rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group rounded-[3px] border border-black/10 bg-white/80 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.06)] transition-colors hover:border-black hover:bg-black hover:text-white"
              >
                <div className="flex items-center justify-between gap-4">
                  <h2 className="!font-sans text-lg font-semibold text-black transition-colors group-hover:text-white">
                    {option.label}
                  </h2>
                  <span className="flex h-8 w-8 items-center justify-center rounded-[3px] border border-black/10 text-sm text-black transition-colors group-hover:border-white/20 group-hover:text-white">
                    +
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-black/55 transition-colors group-hover:text-white/68">
                  {option.description}
                </p>
              </a>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-6 rounded-[3px] border border-black/10 bg-white p-5 shadow-[0_24px_70px_rgba(0,0,0,0.08)] md:p-8"
          >
            <div className="mb-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/40">
                Project form
              </p>
              <h2 className="mt-3 !font-sans text-3xl font-semibold tracking-normal text-black md:text-4xl">
                Tell me what you want to build.
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-black/55">
                Share the workflow, page, system or automation you want implemented. I will use this to understand scope before replying.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Field
                label="First name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Mionel"
                required
              />
              <Field
                label="Last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Lessi"
                required
              />
              <Field
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                required
              />
              <Field
                label="Phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+31 6 ..."
              />
            </div>

            <div className="mt-4">
              <Field
                label="Company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company name"
                required
              />
            </div>

            <div className="mt-4">
              <label htmlFor="message" className="mb-2 block text-sm font-semibold text-black">
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full resize-none rounded-[3px] border border-black/15 bg-white px-4 py-3 text-sm text-black outline-none transition-colors placeholder:text-black/35 focus:border-black"
                placeholder="What do you want to build, what is the current bottleneck, and when do you want to start?"
              />
            </div>

            {status === 'success' && (
              <div className="mt-5 rounded-[3px] border border-black bg-black px-4 py-3 text-sm font-semibold text-white">
                Message sent. I will get back to you soon.
              </div>
            )}

            {status === 'error' && (
              <div className="mt-5 rounded-[3px] border border-black/20 bg-white px-4 py-3 text-sm font-semibold text-black">
                Something went wrong. Try again or use one of the direct contact options above.
              </div>
            )}

            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
              <p className="text-xs leading-5 text-black/45">
                No newsletter. Just the context needed to reply properly.
              </p>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex h-12 w-full items-center justify-center rounded-[3px] border border-black bg-black px-5 text-sm font-semibold text-white transition-colors hover:bg-black/90 disabled:cursor-not-allowed disabled:bg-black/50 sm:w-auto"
              >
                {status === 'loading' ? 'Sending...' : 'Send project'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

function Field({ label, type = 'text', name, value, onChange, placeholder, required = false }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-black">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="h-12 w-full rounded-[3px] border border-black/15 bg-white px-4 text-sm text-black outline-none transition-colors placeholder:text-black/35 focus:border-black"
      />
    </div>
  );
}
