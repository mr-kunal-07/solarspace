'use client';

import React from 'react';
import './Partners.css';
import { patners } from '../../assets/assets';
import Image from 'next/image';

const partners = [
    { name: 'SHAPOORJI', logo: patners.SHAPOORJI },
    { name: 'SHREEVARATHITRADERS', logo: patners.SHREEVARATHITRADERS },
    { name: 'WAAREE', logo: patners.WAAREE },
    { name: 'POLYCAB', logo: patners.POLYCAB },
    { name: 'KSOLAR', logo: patners.KSOLAR },
    { name: 'VIKRAM', logo: patners.VIKRAM },
    { name: 'GROWATT', logo: patners.GROWATT },
    { name: 'RENEWSYS', logo: patners.RENEWSYS },
    { name: 'ADANI', logo: patners.ADANI },
    { name: 'L&T', logo: patners.LT },
    { name: 'NOVASYS', logo: patners.NOVASYS },
    { name: 'SIEMENS', logo: patners.SIEMENS },
    { name: 'HPL', logo: patners.HPL },
];

const Partners = () => {
    return (
        <section className="partners-section bg-[#3B0A4F] py-10 md:py-16">
            <h2 className="partners-title text-white text-3xl md:text-4xl font-bold mb-10">
                Our Trusted Partners
            </h2>
            <div className="marquee-container overflow-hidden relative">
                <div className="marquee-track flex animate-marquee whitespace-nowrap gap-6 sm:gap-10">
                    {[...partners, ...partners].map((partner, index) => (
                        <div className="marquee-item flex-shrink-0" key={index}>
                            <Image
                                src={partner.logo}
                                alt={partner.name || `Partner-${index}`}
                                width={160}
                                height={80}
                                className="w-auto h-auto max-h-16 sm:max-h-20 object-contain  hover:grayscale-0 transition duration-300 ease-in-out"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
