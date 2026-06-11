'use client';

import type { FieldValues } from 'react-hook-form';
import type { FormFieldOption, FormFieldProps } from '@/types';

function FormField<T extends FieldValues = FieldValues>({
  label,
  name,
  type = 'text',
  placeholder,
  register,
  rules,
  errors,
  className = '',
  colSpan = '',
  options = [],
  rows,
  ...rest
}: FormFieldProps<T>) {
  const error = errors?.[name];
  const inputBase = `w-full bg-gray-50 p-4 rounded-xl border transition-all outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 ${
    error ? 'border-primary' : 'border-gray-100'
  }`;

  const labelClass = 'block text-xs font-black text-navy uppercase tracking-widest mb-2';

  return (
    <div className={`${colSpan} ${className}`}>
      {label && <label htmlFor={name} className={labelClass}>{label}</label>}

      {type === 'select' ? (
        <select id={name} {...register(name, rules)} className={inputBase} {...rest}>
          {options.map((opt) => {
            const option = opt as FormFieldOption | string;
            const value = typeof option === 'string' ? option : (option.value ?? option.label ?? '');
            const labelText = typeof option === 'string' ? option : (option.label ?? option.value ?? '');
            return (
              <option key={value} value={value}>
                {labelText}
              </option>
            );
          })}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          id={name}
          placeholder={placeholder}
          rows={rows || 5}
          {...register(name, rules)}
          className={`${inputBase} resize-none`}
          {...rest}
        />
      ) : (
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          {...register(name, rules)}
          className={inputBase}
          {...rest}
        />
      )}

      {error && (
        <span className="text-primary text-[10px] font-black mt-1 uppercase tracking-widest block">
          {error.message as string}
        </span>
      )}
    </div>
  );
}

export default FormField;
