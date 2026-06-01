import React from 'react';
import {
  ShieldCheck,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Car,
  ShoppingBag,
  Pill,
  Cpu,
  Package,
  Wrench,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const defaultCertifications = [
  {
    icon: 'ShieldCheck',
    title: 'ISO certified',
    body: 'Quality management system certified. Scope covers manufacture and supply of corrugated fibre board containers and packaging accessories.',
    badgeText: 'Confirm certificate number with company',
    badgeType: 'pending'
  },
  {
    icon: 'BadgeCheck',
    title: 'Govt. registered',
    body: 'Active GST registration (33AAFFD4209B1Z6, Tamil Nadu). Classified as Medium Enterprise under MSME/Udyam registry for FY 2024–25.',
    badgeText: 'Verified — GST portal',
    badgeType: 'verified'
  },
  {
    icon: 'Building2',
    title: 'Industry membership',
    body: 'Member of the Federation of Corrugated Box Manufacturers of India (FCBM) — the apex body representing ~3,000 corrugated manufacturers across India.',
    badgeText: 'Confirm membership status with company',
    badgeType: 'pending'
  }
];

const defaultStats = [
  { value: '3,000 MT', label: 'Monthly capacity — Chennai plant' },
  { value: '600 MT', label: 'Monthly capacity — Sanand plant' },
  { value: '1977', label: 'Year operations began' },
  { value: '7-ply', label: 'Max corrugation — automatic line' }
];

const defaultQualityTests = [
  'GSM Test',
  'Burst Strength Test',
  'Edge Crush Test (ECT)',
  'Ring Crush Test (RCT)',
  'Box Compression Test (BCT)',
  'Viscosity Test',
  'Moisture Content Test',
  'Board Thickness Test'
];

const defaultIndustries = [
  { name: 'Automotive', icon: 'Car' },
  { name: 'FMCG', icon: 'ShoppingBag' },
  { name: 'Pharmaceuticals', icon: 'Pill' },
  { name: 'Electronics', icon: 'Cpu' },
  { name: 'E-commerce', icon: 'Package' },
  { name: 'Industrial MFG', icon: 'Wrench' }
];

const iconMap = {
  ShieldCheck,
  BadgeCheck,
  Building2,
  CheckCircle2,
  CheckCircle,
  Car,
  ShoppingBag,
  Pill,
  Cpu,
  Package,
  Wrench
};

const WhyUsSection = ({
  certifications = defaultCertifications,
  stats = defaultStats,
  qualityTests = defaultQualityTests,
  industries = defaultIndustries
}) => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        
        {/* BLOCK 1 — Section header */}
        <div className="text-center mb-16">
          <span className="text-[#f97316] text-sm uppercase tracking-widest font-semibold block mb-3">
            Why choose us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2744] mb-4">
            Credentials that procurement teams trust
          </h2>
          <p className="text-[#64748b] text-[17px] max-w-2xl mx-auto mb-6 leading-relaxed">
            Every claim on this page is backed by government registration, third-party certification, or verifiable production data.
          </p>
          <div className="h-[3px] w-12 bg-[#f97316] mx-auto rounded-full"></div>
        </div>

        {/* BLOCK 2 — Certification cards */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6 md:pb-0 mb-16 snap-x hide-scrollbar">
          {certifications.map((cert, idx) => {
            const Icon = iconMap[cert.icon];
            return (
              <div
                key={idx}
                className="bg-white border-[0.5px] border-[#e2e8f0] rounded-xl p-6 min-w-[300px] md:min-w-0 snap-center transition-shadow duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] flex flex-col h-full"
                style={{ borderTop: '3px solid #f97316' }}
              >
                <div className="mb-5">
                  <Icon className="w-[28px] h-[28px] text-[#f97316]" />
                </div>
                <h3 className="text-[20px] font-bold text-[#0f2744] mb-3">{cert.title}</h3>
                <p className="text-[#64748b] text-[15px] leading-relaxed flex-1 mb-8">
                  {cert.body}
                </p>
                <div className="mt-auto">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      cert.badgeType === 'verified'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {cert.badgeText}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* BLOCK 3 — Manufacturing capability */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* LEFT — Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-[#f8fafc] rounded-[10px] p-5 flex flex-col justify-center">
                <span className="text-[28px] font-semibold text-[#0f2744] mb-1">
                  {stat.value}
                </span>
                <span className="text-xs text-[#64748b] leading-relaxed">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* RIGHT — Quality testing panel */}
          <div className="bg-[#0f2744] rounded-xl p-7 lg:p-8">
            <h3 className="text-white text-xl font-bold mb-2">In-house quality testing</h3>
            <p className="text-[#94a3b8] text-[15px] mb-8">
              Every batch is tested before dispatch using calibrated equipment.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
              {qualityTests.map((test, idx) => {
                const CheckIcon = iconMap.CheckCircle2 || iconMap.CheckCircle;
                return (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckIcon className="w-4 h-4 text-[#16a34a] flex-shrink-0" />
                    {/* Used text-[#cbd5e1] instead of #334155 for readability against dark bg */}
                    <span className="text-[13px] text-[#cbd5e1] font-medium">{test}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* BLOCK 4 — Industries served */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-[24px] font-bold text-[#0f2744] mb-3">Industries we serve</h3>
            <p className="text-[#64748b] text-[15px] max-w-2xl mx-auto leading-relaxed">
              Our corrugation machines are configured for high GSM and high BF paper — particularly suited for automotive-grade packaging.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind, idx) => {
              const IndIcon = iconMap[ind.icon];
              return (
                <div
                  key={idx}
                  className="bg-[#f8fafc] border-[0.5px] border-[#e2e8f0] rounded-[10px] py-[20px] px-[16px] flex flex-col items-center justify-center transition-all duration-150 hover:border-[#f97316] hover:bg-white group"
                >
                  <IndIcon className="w-[24px] h-[24px] text-[#f97316] mb-3 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-[13px] font-medium text-[#1e293b] text-center leading-tight">
                    {ind.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* BLOCK 5 — Bottom CTA strip */}
        <div className="bg-[#0f2744] rounded-xl p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <h4 className="text-white text-lg font-medium text-center lg:text-left">
            Need packaging specs or a sample before ordering?
          </h4>
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#f97316] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#ea580c] transition-colors"
            >
              Request a quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#"
              className="inline-flex items-center justify-center bg-white/10 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors border border-transparent hover:border-white/10"
            >
              Download capability deck
            </a>
          </div>
        </div>

      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
};

export default WhyUsSection;
