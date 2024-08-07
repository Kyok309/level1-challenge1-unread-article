"use client";

import Link from "next/link";

export const Card = ({profilesrc, author, date, time, picsrc, category, title, className, textalign, rounded}) => {
    return (
        <div className="w-4/5 max-w-[739px] min-h-[236px] group flex flex-col hover:-translate-y-1 transition duration-200 tablet:w-full mb-8">
            <div className={`flex justify-end items-center gap-4 pt-1 ${className}`}>
                <div className={`flex flex-col ${textalign}`}>
                    <div className="text-[12.6px] font-semibold decoration-solid decoration-black leading-[17px]">{author}</div>
                    <div className="text-[12.6px] text-[#888888] font-semibold">
                        <span>{date}</span>
                        <span>&nbsp; &#x2022; &nbsp;</span>
                        <span>{time}</span>
                    </div>
                </div>
                <div className="w-9 h-9 shrink-0 rounded-full overflow-hidden">
                    <img src={profilesrc} className="w-full h-full object-cover"/>
                </div>
            </div>
            <div className={`max-w-full bg-white flex rounded-[27px] ${rounded} pb-[20px] pl-[51px] pr-[65px] pt-[28px] mt-[13px]
            shadow-[0_0_50px_4px_rgba(209,209,209,0.3)] relative group-hover:shadow-[0_0_26px_2px_rgba(150,150,150,0.5)] tablet:py-[22px] tablet:px-[33px]`}>
                <div className="absolute top-[18px] left-[28px] text-3xl text-[#0078F6] tablet:top-[12px] tablet:left-[16px]">&#x2022;</div>
                <div className="flex-col font-bold pr-[45px] tablet:pr-3">
                    <div className="text-[#0078F6] text-[12.6px] leading-[22px]">{category}</div>
                    <Link href="" className="text-[21.6px] leading-[26px] hover:text-[#0078F6] tablet:text-lg tablet:leading-[25px]">{title}</Link>
                </div>
                <div className="w-[135px] h-[135px] shrink-0 rounded-full overflow-hidden tablet:w-[88px] tablet:h-[88px]">
                    <img src={picsrc} className="w-full h-full object-cover"/>
                </div>
            </div>
        </div>
    );
}
