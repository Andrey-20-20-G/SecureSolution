"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>ИТ-компании</li>
        <li>Государственные структуры</li>
        <li>Компании, работающие с решениями в сфере информационной Безопасности</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      // <ul className="list-disc pl-2">
      //   <li>AWS Cloud Practitioner</li>
      //   <li>Google Professional Cloud Developer</li>
      // </ul>
      <div>
        <span className="font-bold text-[#00FF00]">Гаврилов Андрей Сергеевич</span> - Генеральный директор
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [img, setImg] = useState("/images/Logo.png");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    if(id === "certifications"){
      startTransition(() => {
      setImg("/images/Logo.png");
    });
    }
    else{
      startTransition(() => {
      setImg("/images/Logo.png");
      });
    }
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={img} alt="Logo" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">О нас</h2>
          <p className="text-base lg:text-lg">
            Secure Solution – компания, занимающаяся разработкой автоматизированных систем в сфере 
            информационной безопасности с использованием передовых технологий ИИ
          </p>
          <div className="flex flex-row justify-start mt-8">
            {/* <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Кто мы?{" "}
            </TabButton> */}
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Заинтересованные лица{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Кто мы?{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

