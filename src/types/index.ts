import type { FieldErrors, FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface UploadedFile {
  name: string;
  url: string;
  size: string;
}

export interface OrderFormData {
  fullName: string;
  email: string;
  countryCode?: string;
  phone: string;
  studyCountry?: string;
  assignmentTopic: string;
  department?: string;
  subject?: string;
  deadline: string;
  educationLevel?: string;
  paperType?: string;
  pagesWords?: string;
  references?: string;
  requirements?: string;
  uploadedFiles?: UploadedFile[];
}

export interface ApiSuccessResponse {
  success: true;
  message: string;
}

export interface ApiErrorResponse {
  success: false;
  error: string;
}

export type ApiResponse = ApiSuccessResponse | ApiErrorResponse;

export interface Country {
  name: string;
  code: string;
}

export type UploadStatus = 'uploading' | 'error';

export interface UploadingFile {
  name: string;
  progress: number;
  status: UploadStatus;
}

export type UploadingFilesMap = Record<string, UploadingFile>;

import type { Attachment } from 'nodemailer/lib/mailer';

export interface SendMailOptions {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
  attachments?: Attachment[];
}

export interface WrapEmailOptions {
  title: string;
  preheader?: string;
  bodyContent: string;
  accentColor?: string;
}

export type InfoBoxType = 'info' | 'success' | 'warning';

export interface UserContactConfirmationData {
  name: string;
}

export interface UserOrderConfirmationData {
  fullName: string;
  assignmentTopic: string;
  deadline?: string;
}

export interface LogoProps {
  className?: string;
  dark?: boolean;
}

export interface ProvidersProps {
  children: ReactNode;
}

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
  className?: string;
}

export interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  badge?: string;
  backgroundImage?: string;
  highlights?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  waveColor?: string;
}

export interface FormFieldOption {
  value?: string;
  label?: string;
}

export interface FormFieldProps<T extends FieldValues = FieldValues> {
  label?: string;
  name: Path<T>;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<T>;
  rules?: RegisterOptions<T, Path<T>>;
  errors?: FieldErrors<T>;
  className?: string;
  colSpan?: string;
  options?: (FormFieldOption | string)[];
  rows?: number;
}

export interface SubmitButtonProps {
  isSubmitting: boolean;
  label: string;
  loadingLabel?: string;
  icon?: LucideIcon;
  variant?: 'navy' | 'primary';
  className?: string;
}

export interface ServiceCardProps {
  name: string;
  desc: string;
  icon: LucideIcon;
  index: number;
}

export interface TestimonialCardProps {
  name: string;
  country: string;
  text: string;
  rating: number;
  index: number;
  animated?: boolean;
}

export interface FeatureCardProps {
  title: string;
  desc: string;
  icon: LucideIcon;
  index: number;
}

export interface ProcessStepProps {
  id: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  index: number;
}

export interface StickyHelpBannerProps {
  show: boolean;
}

export interface FormSectionTitleProps {
  children: ReactNode;
}

export interface FileUploadZoneProps {
  uploadedFiles: UploadedFile[];
  uploadingFiles: UploadingFilesMap;
  onFileChange: (files: FileList | File[]) => void;
  onRemove: (index: number) => void;
  maxFiles?: number;
}

export interface ContactCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  link?: string;
  color: string;
  desc: string;
  actionLabel?: string;
  index?: number;
}

export interface AnimatedCounterProps {
  value: string;
}
