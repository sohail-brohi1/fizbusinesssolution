'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import SubmitButton from './ui/SubmitButton';
import FormSectionTitle from './order/FormSectionTitle';
import FileUploadZone from './order/FileUploadZone';
import { useFileUpload } from '@/hooks/useFileUpload';
import { sendOrderEmail } from '@/utils/api';
import {
  countries,
  paperTypes,
  educationLevels,
  pageOptions,
  referenceOptions,
} from '@/constants/orderOptions';
import type { OrderFormData } from '@/types';

const inputClasses =
  'bg-[#fce4ec] border border-[#f8bbd9] p-[10px_14px] rounded-[6px] text-[14px] outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all w-full text-navy placeholder:text-gray-400';
const labelClasses = 'block text-primary font-semibold text-[11px] uppercase mb-2 tracking-[1px]';

const OrderForm = () => {
  const { register, handleSubmit, reset } = useForm<OrderFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { uploadedFiles, uploadingFiles, handleFileChange, removeFile, clearFiles, maxFiles } = useFileUpload();

  const onSubmit = async (data: OrderFormData) => {
    setIsSubmitting(true);
    try {
      await sendOrderEmail({ ...data, uploadedFiles });
      toast.success('Order submitted! Check your email for confirmation.');
      reset();
      clearFiles();
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to submit order.';
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white rounded-xl p-5 md:p-6 shadow-[0_4px_24px_rgba(0,0,0,0.12)] max-h-[85vh] lg:max-h-[90vh] overflow-y-auto">
      <div className="mb-5 text-center">
        <h2 className="text-xl font-black text-navy mb-1 uppercase tracking-tight">Get Help Instantly</h2>
        <div className="w-12 h-1 bg-primary mx-auto" />
        <p className="text-gray-500 text-xs mt-2">Fill in your details — we respond within 2 hours</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormSectionTitle>Personal Details</FormSectionTitle>

          <div>
            <label className={labelClasses}>Full Name *</label>
            <input {...register('fullName', { required: true })} type="text" placeholder="Enter Your Name" className={inputClasses} />
          </div>
          <div>
            <label className={labelClasses}>Email Address *</label>
            <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} type="email" placeholder="Enter Your Email" className={inputClasses} />
          </div>

          <div className="flex gap-2">
            <div className="w-20 sm:w-24">
              <label className={labelClasses}>Code</label>
              <select {...register('countryCode')} className={inputClasses} defaultValue="+44">
                {countries.map((c) => (
                  <option key={c.name} value={c.code}>{c.code}</option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className={labelClasses}>WhatsApp *</label>
              <input {...register('phone', { required: true })} type="tel" placeholder="Phone Number" className={inputClasses} />
            </div>
          </div>

          <div>
            <label className={labelClasses}>Study Country *</label>
            <select {...register('studyCountry', { required: true })} className={inputClasses} defaultValue="">
              <option value="">Select Country</option>
              {countries.map((c) => (
                <option key={c.name} value={c.name}>{c.name}</option>
              ))}
            </select>
          </div>

          <FormSectionTitle>Assignment Info</FormSectionTitle>

          <div className="col-span-full">
            <label className={labelClasses}>Assignment Topic *</label>
            <input {...register('assignmentTopic', { required: true })} type="text" placeholder="e.g. Analysis of Market Trends" className={inputClasses} />
          </div>

          <div>
            <label className={labelClasses}>Department</label>
            <input {...register('department')} type="text" placeholder="e.g. Science, Arts" className={inputClasses} />
          </div>
          <div>
            <label className={labelClasses}>Subject</label>
            <input {...register('subject')} type="text" placeholder="Subject Name" className={inputClasses} />
          </div>
          <div>
            <label className={labelClasses}>Deadline *</label>
            <input {...register('deadline', { required: true })} type="datetime-local" className={inputClasses} />
          </div>
          <div>
            <label className={labelClasses}>Education Level</label>
            <select {...register('educationLevel')} className={inputClasses} defaultValue="University">
              {educationLevels.map((e) => (
                <option key={e} value={e}>{e}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClasses}>Paper Type</label>
            <select {...register('paperType')} className={inputClasses} defaultValue="Assignment">
              {paperTypes.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClasses}>Pages/Words</label>
            <select {...register('pagesWords')} className={inputClasses} defaultValue={pageOptions[0]}>
              {pageOptions.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClasses}>References</label>
            <select {...register('references')} className={inputClasses} defaultValue="">
              <option value="">Select Referencing Style</option>
              {referenceOptions.map((o) => (
                <option key={o} value={o}>
                  {o === 'Open' ? 'Open (No Specific Style)' : o === 'No References' ? 'No References Required' : o}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className={labelClasses}>Assignment Requirements</label>
          <textarea
            {...register('requirements')}
            placeholder="Paste your assignment prompts or specific requirements here..."
            className={`${inputClasses} h-24 resize-none`}
          />
        </div>

        <div>
          <label className={labelClasses}>Assignment Files (Max {maxFiles})</label>
          <FileUploadZone
            uploadedFiles={uploadedFiles}
            uploadingFiles={uploadingFiles}
            onFileChange={handleFileChange}
            onRemove={removeFile}
            maxFiles={maxFiles}
          />
        </div>

        <SubmitButton
          isSubmitting={isSubmitting}
          label="Submit My Assignment"
          loadingLabel="Submitting..."
          variant="navy"
          className="mt-4 rounded-lg text-base font-semibold normal-case tracking-normal"
        />

      </form>
    </div>
  );
};

export default OrderForm;
