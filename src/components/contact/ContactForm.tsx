"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

export function ContactForm() {
  const { t } = useTranslation();
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Invalid email";
    if (!form.message.trim()) newErrors.message = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-aurora-gold/20 bg-aurora-gold/5 p-12 text-center">
        <CheckCircle className="text-aurora-gold" size={48} />
        <p className="mt-4 text-lg text-white">{t.common.messageSent}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-aurora-muted">
            {t.contact.form.name} *
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder={t.contact.form.namePlaceholder}
            className={cn(
              "w-full rounded-xl border bg-white/5 px-4 py-3 text-white placeholder:text-aurora-muted/50 transition-colors focus:border-aurora-gold/50 focus:outline-none focus:ring-1 focus:ring-aurora-gold/50",
              errors.name ? "border-red-500/50" : "border-white/10"
            )}
            aria-invalid={!!errors.name}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-aurora-muted">
            {t.contact.form.email} *
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder={t.contact.form.emailPlaceholder}
            className={cn(
              "w-full rounded-xl border bg-white/5 px-4 py-3 text-white placeholder:text-aurora-muted/50 transition-colors focus:border-aurora-gold/50 focus:outline-none focus:ring-1 focus:ring-aurora-gold/50",
              errors.email ? "border-red-500/50" : "border-white/10"
            )}
            aria-invalid={!!errors.email}
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-aurora-muted">
            {t.contact.form.projectType}
          </label>
          <select
            id="projectType"
            value={form.projectType}
            onChange={(e) => update("projectType", e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-white transition-colors focus:border-aurora-gold/50 focus:outline-none focus:ring-1 focus:ring-aurora-gold/50"
          >
            <option value="" className="bg-aurora-dark">
              —
            </option>
            {t.contact.form.projectTypes.map((type) => (
              <option key={type} value={type} className="bg-aurora-dark">
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="mb-2 block text-sm font-medium text-aurora-muted">
            {t.contact.form.budget}
          </label>
          <select
            id="budget"
            value={form.budget}
            onChange={(e) => update("budget", e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-white transition-colors focus:border-aurora-gold/50 focus:outline-none focus:ring-1 focus:ring-aurora-gold/50"
          >
            <option value="" className="bg-aurora-dark">
              —
            </option>
            {t.contact.form.budgetRanges.map((range) => (
              <option key={range} value={range} className="bg-aurora-dark">
                {range}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-aurora-muted">
          {t.contact.form.message} *
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder={t.contact.form.messagePlaceholder}
          className={cn(
            "w-full resize-none rounded-xl border bg-white/5 px-4 py-3 text-white placeholder:text-aurora-muted/50 transition-colors focus:border-aurora-gold/50 focus:outline-none focus:ring-1 focus:ring-aurora-gold/50",
            errors.message ? "border-red-500/50" : "border-white/10"
          )}
          aria-invalid={!!errors.message}
        />
      </div>

      <Button type="submit" size="lg" disabled={status === "sending"} className="w-full sm:w-auto">
        <Send size={16} />
        {status === "sending" ? t.common.sending : t.common.sendMessage}
      </Button>
    </form>
  );
}
