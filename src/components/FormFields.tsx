"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface BaseFieldProps {
  label: string;
  id?: string;
  error?: string;
  hint?: string;
  required?: boolean;
  className?: string;
}

export interface InputFieldProps
  extends BaseFieldProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "id"> {
  id?: string;
}

export function InputField({
  label,
  id,
  error,
  hint,
  required,
  className,
  ...props
}: InputFieldProps) {
  const inputId = id || props.name;

  return (
    <div className={cn("space-y-1.5 text-start", className)}>
      <label
        htmlFor={inputId}
        className="block font-heading text-xs font-semibold uppercase tracking-wider text-charcoal-700 dark:text-charcoal-300"
      >
        {label}
        {required && <span className="text-brand-red ms-1">*</span>}
      </label>
      <input
        id={inputId}
        required={required}
        className={cn(
          "w-full px-3.5 py-2.5 text-sm bg-white dark:bg-charcoal-800 text-charcoal-900 dark:text-white border transition-colors duration-150 rounded-sm",
          "placeholder:text-charcoal-400 dark:placeholder:text-charcoal-500",
          "focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red",
          error
            ? "border-brand-red"
            : "border-charcoal-200 dark:border-charcoal-700 hover:border-charcoal-300"
        )}
        {...props}
      />
      {hint && !error && (
        <p className="font-mono text-xs text-charcoal-400 dark:text-charcoal-500">
          {hint}
        </p>
      )}
      {error && (
        <p className="font-mono text-xs text-brand-red font-medium">{error}</p>
      )}
    </div>
  );
}

export interface SelectFieldProps
  extends BaseFieldProps,
    Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "id"> {
  id?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

export function SelectField({
  label,
  id,
  options,
  placeholder,
  error,
  hint,
  required,
  className,
  ...props
}: SelectFieldProps) {
  const selectId = id || props.name;

  return (
    <div className={cn("space-y-1.5 text-start", className)}>
      <label
        htmlFor={selectId}
        className="block font-heading text-xs font-semibold uppercase tracking-wider text-charcoal-700 dark:text-charcoal-300"
      >
        {label}
        {required && <span className="text-brand-red ms-1">*</span>}
      </label>
      <select
        id={selectId}
        required={required}
        className={cn(
          "w-full px-3.5 py-2.5 text-sm bg-white dark:bg-charcoal-800 text-charcoal-900 dark:text-white border transition-colors duration-150 rounded-sm",
          "focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red",
          error
            ? "border-brand-red"
            : "border-charcoal-200 dark:border-charcoal-700 hover:border-charcoal-300"
        )}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {hint && !error && (
        <p className="font-mono text-xs text-charcoal-400 dark:text-charcoal-500">
          {hint}
        </p>
      )}
      {error && (
        <p className="font-mono text-xs text-brand-red font-medium">{error}</p>
      )}
    </div>
  );
}

export interface TextareaFieldProps
  extends BaseFieldProps,
    Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "id"> {
  id?: string;
}

export function TextareaField({
  label,
  id,
  error,
  hint,
  required,
  className,
  rows = 4,
  ...props
}: TextareaFieldProps) {
  const textareaId = id || props.name;

  return (
    <div className={cn("space-y-1.5 text-start", className)}>
      <label
        htmlFor={textareaId}
        className="block font-heading text-xs font-semibold uppercase tracking-wider text-charcoal-700 dark:text-charcoal-300"
      >
        {label}
        {required && <span className="text-brand-red ms-1">*</span>}
      </label>
      <textarea
        id={textareaId}
        rows={rows}
        required={required}
        className={cn(
          "w-full px-3.5 py-2.5 text-sm bg-white dark:bg-charcoal-800 text-charcoal-900 dark:text-white border transition-colors duration-150 rounded-sm resize-y",
          "placeholder:text-charcoal-400 dark:placeholder:text-charcoal-500",
          "focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red",
          error
            ? "border-brand-red"
            : "border-charcoal-200 dark:border-charcoal-700 hover:border-charcoal-300"
        )}
        {...props}
      />
      {hint && !error && (
        <p className="font-mono text-xs text-charcoal-400 dark:text-charcoal-500">
          {hint}
        </p>
      )}
      {error && (
        <p className="font-mono text-xs text-brand-red font-medium">{error}</p>
      )}
    </div>
  );
}

export interface FileUploadFieldProps extends BaseFieldProps {
  onFileSelect?: (file: File | null) => void;
  accept?: string;
}

export function FileUploadField({
  label,
  id,
  error,
  hint,
  required,
  accept = "image/*,.pdf",
  className,
}: FileUploadFieldProps) {
  const [fileName, setFileName] = useState<string | null>(null);
  const fileId = id || "file-upload-input";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFileName(file ? file.name : null);
  };

  return (
    <div className={cn("space-y-1.5 text-start", className)}>
      <label
        htmlFor={fileId}
        className="block font-heading text-xs font-semibold uppercase tracking-wider text-charcoal-700 dark:text-charcoal-300"
      >
        {label}
        {required && <span className="text-brand-red ms-1">*</span>}
      </label>
      <div className="relative">
        <input
          type="file"
          id={fileId}
          accept={accept}
          onChange={handleChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
        />
        <div
          className={cn(
            "w-full px-3.5 py-3 text-sm bg-white dark:bg-charcoal-800 border border-dashed rounded-sm flex items-center justify-between gap-3",
            "border-charcoal-300 dark:border-charcoal-600 hover:border-brand-red transition-colors"
          )}
        >
          <span className="text-charcoal-500 dark:text-charcoal-400 truncate">
            {fileName || "Select or drop nameplate photo (JPEG, PNG, PDF)"}
          </span>
          <span className="font-mono text-xs uppercase bg-charcoal-100 dark:bg-charcoal-700 text-charcoal-800 dark:text-charcoal-200 px-2 py-1 flex-shrink-0">
            Browse
          </span>
        </div>
      </div>
      {hint && (
        <p className="font-mono text-xs text-charcoal-400 dark:text-charcoal-500">
          {hint}
        </p>
      )}
      {error && (
        <p className="font-mono text-xs text-brand-red font-medium">{error}</p>
      )}
    </div>
  );
}
