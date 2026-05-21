import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Upload, Plus, Loader2, ShieldCheck, Phone, CheckCircle2, X, FileText, AlertCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const OrderForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadingFiles, setUploadingFiles] = useState({});

  const uploadToCloudinary = async (file) => {
    const cloudName = 'dn4pxyo3b';
    const uploadPreset = 'fizbs_uploads';
    
    // Check validation first
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/png', 'application/zip', 'application/x-zip-compressed'];
    const fileExt = file.name.split('.').pop().toLowerCase();
    const isAllowedExt = ['pdf', 'doc', 'docx', 'jpg', 'jpeg', 'png', 'zip'].includes(fileExt);

    if (file.size > 10 * 1024 * 1024) {
      toast.error(`File ${file.name} is too large (Max 10MB)`);
      return;
    }
    if (!isAllowedExt) {
      toast.error("Only PDF, DOC, DOCX, JPG, PNG, ZIP allowed");
      return;
    }

    const fileId = Math.random().toString(36).substring(7);
    setUploadingFiles(prev => ({ ...prev, [fileId]: { name: file.name, progress: 0, status: 'uploading' } }));

    // Fake progress
    const progressInterval = setInterval(() => {
      setUploadingFiles(prev => {
        if (!prev[fileId] || prev[fileId].progress >= 90) {
          clearInterval(progressInterval);
          return prev;
        }
        return { ...prev, [fileId]: { ...prev[fileId], progress: prev[fileId].progress + 10 } };
      });
    }, 200);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', uploadPreset);
      formData.append('cloud_name', cloudName);

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`,
        { method: 'POST', body: formData }
      );
      
      if (!response.ok) throw new Error('Upload failed');
      
      const resData = await response.json();
      
      clearInterval(progressInterval);
      setUploadingFiles(prev => {
        const next = { ...prev };
        delete next[fileId];
        return next;
      });

      const newFile = {
        name: file.name,
        url: resData.secure_url,
        size: (file.size / 1024).toFixed(1) + ' KB'
      };

      setUploadedFiles(prev => [...prev, newFile]);
      toast.success(`${file.name} uploaded successfully`);
    } catch (error) {
      clearInterval(progressInterval);
      setUploadingFiles(prev => ({ ...prev, [fileId]: { ...prev[fileId], status: 'error', progress: 0 } }));
      toast.error(`Upload failed for ${file.name}`);
    }
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (uploadedFiles.length + files.length > 5) {
      toast.error("Maximum 5 files allowed");
      return;
    }
    files.forEach(uploadToCloudinary);
  };

  const removeFile = (index) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // EmailJS logic
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS credentials missing.");
      toast.error('❌ Configuration error: API keys not found in settings.');
      setIsSubmitting(false);
      return;
    }

    try {
      emailjs.init(publicKey);

      const uploadedFilesText = uploadedFiles.length > 0
        ? uploadedFiles.map(f => `• ${f.name} (${f.size}) → ${f.url}`).join('\n')
        : 'No files uploaded';

      const templateParams = {
        student_name: data.fullName,
        student_email: data.email,
        country_code: data.countryCode,
        phone: data.phone,
        study_country: data.studyCountry,
        assignment_topic: data.assignmentTopic,
        department: data.department,
        subject: data.subject,
        deadline: data.deadline,
        education_level: data.educationLevel,
        paper_type: data.paperType,
        pages_words: data.pagesWords,
        references: data.references,
        requirements: data.requirements,
        uploaded_files: uploadedFilesText,
        to_email: 'mf9637311@gmail.com'
      };

      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (result.status === 200) {
        toast.success("✅ Order Submitted Successfully to your Gmail!");
        reset();
        setUploadedFiles([]);
      } else {
        throw new Error(`EmailJS returned status ${result.status}`);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      const errorMsg = error?.text || error?.message || "Unknown error";
      toast.error(`❌ Failed to send: ${errorMsg}. Please check EmailJS dashboard.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const countries = [
    { name: "Afghanistan", code: "+93" }, { name: "Albania", code: "+355" }, { name: "Algeria", code: "+213" },
    { name: "Andorra", code: "+376" }, { name: "Angola", code: "+244" }, { name: "Argentina", code: "+54" },
    { name: "Australia", code: "+61" }, { name: "Austria", code: "+43" }, { name: "Bahamas", code: "+1" },
    { name: "Bahrain", code: "+973" }, { name: "Bangladesh", code: "+880" }, { name: "Barbados", code: "+1" },
    { name: "Belgium", code: "+32" }, { name: "Belize", code: "+501" }, { name: "Brazil", code: "+55" },
    { name: "Canada", code: "+1" }, { name: "Chile", code: "+56" }, { name: "China", code: "+86" },
    { name: "Colombia", code: "+57" }, { name: "Croatia", code: "+385" }, { name: "Cyprus", code: "+357" },
    { name: "Czech Rep", code: "+420" }, { name: "Denmark", code: "+45" }, { name: "Egypt", code: "+20" },
    { name: "Finland", code: "+358" }, { name: "France", code: "+33" }, { name: "Germany", code: "+49" },
    { name: "Greece", code: "+30" }, { name: "Hong Kong", code: "+852" }, { name: "Hungary", code: "+36" },
    { name: "Iceland", code: "+354" }, { name: "India", code: "+91" }, { name: "Indonesia", code: "+62" },
    { name: "Ireland", code: "+353" }, { name: "Israel", code: "+972" }, { name: "Italy", code: "+39" },
    { name: "Japan", code: "+81" }, { name: "Jordan", code: "+962" }, { name: "Kenya", code: "+254" },
    { name: "Kuwait", code: "+965" }, { name: "Malaysia", code: "+60" }, { name: "Mexico", code: "+52" },
    { name: "Netherlands", code: "+31" }, { name: "New Zealand", code: "+64" }, { name: "Nigeria", code: "+234" },
    { name: "Norway", code: "+47" }, { name: "Oman", code: "+968" }, { name: "Pakistan", code: "+92" },
    { name: "Philippines", code: "+63" }, { name: "Poland", code: "+48" }, { name: "Portugal", code: "+351" },
    { name: "Qatar", code: "+974" }, { name: "Romania", code: "+40" }, { name: "Russia", code: "+7" },
    { name: "Saudi Arabia", code: "+966" }, { name: "Singapore", code: "+65" }, { name: "South Africa", code: "+27" },
    { name: "South Korea", code: "+82" }, { name: "Spain", code: "+34" }, { name: "Sri Lanka", code: "+94" },
    { name: "Sweden", code: "+46" }, { name: "Switzerland", code: "+41" }, { name: "Taiwan", code: "+886" },
    { name: "Thailand", code: "+66" }, { name: "Turkey", code: "+90" }, { name: "UAE", code: "+971" },
    { name: "UK", code: "+44" }, { name: "USA", code: "+1" }, { name: "Vietnam", code: "+84" }
  ];

  const paperTypes = [
    "Assignment", "Bibliography", "Case Study", "Course Work", "Dissertation", 
    "Dissertation Proposal", "Essay", "Home Work", "Report", "Research Paper", 
    "Thesis", "Thesis Proposal", "Other"
  ];

  const educations = ["UnderGraduate", "College", "University", "Masters", "PHD"];
  
  const pageOptions = Array.from({ length: 200 }, (_, i) => {
    const p = i + 1;
    return `${p} Page${p > 1 ? 's' : ''} / ${p * 250} Words`;
  });

  const referenceOptions = [
    "Harvard", "APA", "MLA", "Chicago", "Vancouver", "Oxford", "OSCOLA", "AGLC", 
    "Footnotes", "Footnotes and Bibliography", "BMJ", "MHRA", "Turabian", "ACS", 
    "AMA", "IEEE", "Open", "No References"
  ];

  const inputClasses = "bg-[#fce4ec] border border-[#f8bbd9] p-[10px_14px] rounded-[6px] text-[14px] outline-none focus:border-[#C41E3A] focus:ring-2 focus:ring-[#C41E3A]/15 transition-all w-full text-navy placeholder:text-gray-400";
  const labelClasses = "block text-[#C41E3A] font-semibold text-[11px] uppercase mb-2 tracking-[1px]";

  return (
    <div className="w-full bg-white rounded-[12px] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.12)] max-h-[90vh] overflow-y-auto">
      <div className="mb-6 text-center">
        <h2 className="text-xl font-black text-navy mb-1 uppercase tracking-tight">Get Help Instantly</h2>
        <div className="w-12 h-1 bg-primary mx-auto"></div>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-full mb-1">
            <h3 className="text-[11px] font-semibold text-[#C41E3A] uppercase tracking-[1px] border-b border-gray-100 pb-2">Personal Details</h3>
          </div>
          <div>
            <label className={labelClasses}>Full Name</label>
            <input 
              {...register("fullName", { required: true })}
              type="text" placeholder="Enter Your Name" className={inputClasses} 
            />
          </div>
          <div>
            <label className={labelClasses}>Email Address</label>
            <input 
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              type="email" placeholder="Enter Your Email" className={inputClasses} 
            />
          </div>
          
          <div className="flex gap-2">
            <div className="w-20 sm:w-24">
              <label className={labelClasses}>Code</label>
              <select {...register("countryCode")} className={inputClasses}>
                {countries.map(c => <option key={c.name} value={c.code}>{c.code}</option>)}
              </select>
            </div>
            <div className="flex-1">
              <label className={labelClasses}>WhatsApp</label>
              <input {...register("phone", { required: true })} type="text" placeholder="Phone Number" className={inputClasses} />
            </div>
          </div>

          <div>
            <label className={labelClasses}>Study Country</label>
            <select {...register("studyCountry", { required: true })} className={inputClasses}>
              <option value="">Select Country</option>
              {countries.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
            </select>
          </div>

          <div className="col-span-full mt-2 mb-1">
            <h3 className="text-[11px] font-semibold text-[#C41E3A] uppercase tracking-[1px] border-b border-gray-100 pb-2">Assignment Info</h3>
          </div>
          
          <div className="col-span-full">
            <label className={labelClasses}>Assignment Topic</label>
            <input {...register("assignmentTopic", { required: true })} type="text" placeholder="e.g. Analysis of Market Trends" className={inputClasses} />
          </div>

          <div>
            <label className={labelClasses}>Department</label>
            <input {...register("department")} type="text" placeholder="e.g. Science, Arts" className={inputClasses} />
          </div>

          <div>
            <label className={labelClasses}>Subject</label>
            <input {...register("subject")} type="text" placeholder="Subject Name" className={inputClasses} />
          </div>

          <div>
            <label className={labelClasses}>Deadline</label>
            <input {...register("deadline", { required: true })} type="datetime-local" className={inputClasses} />
          </div>
          
          <div>
            <label className={labelClasses}>Education Level</label>
            <select {...register("educationLevel")} className={inputClasses}>
              {educations.map(e => <option key={e} value={e}>{e}</option>)}
            </select>
          </div>

          <div>
            <label className={labelClasses}>Paper Type</label>
            <select {...register("paperType")} className={inputClasses}>
              {paperTypes.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>

          <div>
            <label className={labelClasses}>Pages/Words</label>
            <select {...register("pagesWords")} className={inputClasses}>
              {pageOptions.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>

          <div>
            <label className={labelClasses}>References</label>
            <select {...register("references")} className={inputClasses}>
              <option value="">Select Referencing Style</option>
              {referenceOptions.map(o => <option key={o} value={o}>{o === "Open" ? "Open (No Specific Style)" : o === "No References" ? "No References Required" : o}</option>)}
            </select>
          </div>
        </div>
        
        <div>
          <label className={labelClasses}>Assignment Requirements / Instructions</label>
          <textarea 
            {...register("requirements")}
            placeholder="Paste your assignment prompts or specific requirements here..." 
            className={`${inputClasses} h-24 resize-none`}
          ></textarea>
        </div>
        
        <div className="col-span-full">
          <label className={labelClasses}>Assignment Files (Max 5)</label>
          
          <div className="space-y-3">
            {/* Upload Zone */}
            {uploadedFiles.length < 5 && (
              <div 
                className={`relative border-2 border-dashed border-[#f8bbd9] rounded-xl p-8 bg-[#fce4ec] flex flex-col items-center justify-center transition-all hover:border-[#C41E3A] group cursor-pointer`}
                onClick={() => document.getElementById('multiple-file-upload').click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  const files = Array.from(e.dataTransfer.files);
                  handleFileChange({ target: { files } });
                }}
              >
                <input 
                  type="file" 
                  id="multiple-file-upload" 
                  className="hidden" 
                  multiple
                  onChange={handleFileChange}
                />
                <div className="bg-white/50 p-3 rounded-full mb-3 group-hover:scale-110 transition-transform">
                  <Upload className="w-6 h-6 text-[#C41E3A]" />
                </div>
                <p className="text-sm font-bold text-navy mb-1">Drop files here or click to upload</p>
                <p className="text-[11px] text-gray-500 text-center">
                  Accepted: PDF, DOC, DOCX, JPG, PNG, ZIP<br/>
                  (Max 10MB each, up to 5 files)
                </p>
              </div>
            )}

            {/* List of Uploading Files */}
            {Object.entries(uploadingFiles).map(([id, file]) => (
              <div key={id} className="bg-white border border-[#f8bbd9] rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 overflow-hidden">
                    <Loader2 className="w-4 h-4 text-primary animate-spin shrink-0" />
                    <span className="text-xs font-medium text-navy truncate">{file.name}</span>
                  </div>
                  <span className="text-[10px] font-bold text-primary">{file.progress}%</span>
                </div>
                <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${file.progress}%` }}
                    className="h-full bg-primary"
                  />
                </div>
              </div>
            ))}

            {/* List of Uploaded Files */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {uploadedFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between bg-white border border-green-200 rounded-lg p-3 group">
                  <div className="flex items-center gap-2 overflow-hidden">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs font-bold text-navy truncate">{file.name}</span>
                      <span className="text-[10px] text-gray-400">{file.size}</span>
                    </div>
                  </div>
                  <button 
                    type="button" 
                    onClick={() => removeFile(index)}
                    className="p-1 hover:bg-red-50 rounded-full text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {uploadedFiles.length > 0 && uploadedFiles.length < 5 && (
              <button 
                type="button"
                onClick={() => document.getElementById('multiple-file-upload').click()}
                className="flex items-center gap-2 text-[#C41E3A] text-xs font-bold hover:underline transition-all"
              >
                <Plus className="w-4 h-4" /> Add More Files
              </button>
            )}
          </div>
        </div>
        
        <div className="flex items-center justify-end mt-2">
          <span className="text-[10px] text-gray-400 italic flex items-center gap-1">
            Secure Cloud Upload 🔒
          </span>
        </div>

        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#0f1f3d] text-white p-4 mt-6 rounded-lg font-semibold text-base uppercase transition-all shadow-lg flex items-center justify-center gap-2 hover:bg-[#C41E3A]"
        >
          {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Submit My Assignment"}
        </button>

        <div className="mt-4 text-center">
          <a 
            href="https://wa.me/971543800388" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-gray-500 hover:text-[#25D366] transition-colors flex items-center justify-center gap-1 font-medium"
          >
            <Phone className="w-3 h-3" /> 📱 Prefer WhatsApp? Click here → +971 54 380 0388
          </a>
        </div>
      </form>
    </div>

  );
};

export default OrderForm;
