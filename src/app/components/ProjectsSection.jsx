"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    image: "/images/main.png",
    tag: ["Общее"],
    content: (
      <div className="text-base lg:text-lg">
        <strong>RS2S</strong> – это интеллектуальный knowledge-based сервис рекомендаций, разработанный для интеграции с SIEM/SOAR системами 
        в сфере информационной безопасности. Данное решение представляет собой чат-бот ассистента, аналогичного ChatGPT, 
        но с глубокой адаптацией под корпоративные нужды и задачи кибербезопасности.<br /><br />
        Ключевые аспекты проекта:
        <ul className="list-disc pl-10">
          <li>
            <p className="font-bold">Специализация на ИБ:</p> Сервис целенаправленно создан для анализа данных 
            и генерации рекомендаций в контексте информационной безопасности, что отличает 
            его от универсальных языковых моделей;
          </li>
          <li>
            <p className="font-bold">Корпоративная ориентация:</p>{" "}
            Полностью адаптирован под нужды компаний, с системой ролевого 
            доступа и централизованным управлением пользователями;
          </li>
          <li>
            <p className="font-bold">Мультимодельность:</p> Система обладает гибкостью и поддерживает работу с 
            различными мощными языковыми моделями, такими как GPT-4, Llama-3, Gemini,
            позволяя выбирать оптимальное решение под конкретную задачу;
          </li>
          <li>
            <p className="font-bold">Интерактивность и работа с данными:</p>{" "}
            Пользователь может не только получать текстовые ответы, но и взаимодействовать 
            с кодом через встроенный интерпретатор, а также загружать и анализировать 
            собственные документы прямо в диалоге.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    image: "/images/description.jpg",
    tag: ["Характеристики"],
    content: (
      <div className="text-base lg:text-lg">
        Сервис рекомендаций <strong>RS2S</strong> обладает следующим набором технических и функциональных характеристик:
        <ul className="list-disc pl-10">
          <li><span className="font-bold">Тип сервиса:</span> Knowledge-based чат-бот ассистент;</li>
          <li>
          <span className="font-bold">Целевая интеграция:</span> SIEM и SOAR системы в сфере информационной безопасности;
          </li>
          <li><span className="font-bold">Поддерживаемые языковые модели:</span> GPT-4, Llama-3, Gemini, персонализированно дообученные под ИБ и другие;
          </li>
          <li>
          <span className="font-bold">Система авторизации:</span> Централизованная, с предварительной регистрацией пользователей администратором;
          </li>
          <li><span className="font-bold">Модель доступа:</span> Ролевая;</li>
          <li><span className="font-bold">Контроль доступа:</span> Учет количества одновременных сессий под одной учетной записью для предотвращения утечек;</li>
          <li><span className="font-bold">Настройка модели:</span> Возможность тонкой настройки параметров генерации для оптимизации ответов;</li>
          <li><span className="font-bold">Обратная связь:</span> Встроенная система сбора статистики и обратной связи от пользователей по качеству работы моделей;</li>
          <li><span className="font-bold">Интерфейс взаимодействия:</span> Веб-интерфейс с возможностью загрузки документов, взаимодействия с кодом и интерактивными подсказками.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    image: "/images/contur.png",
    tag: ["Особенности"],
    content: (
      <div className="text-base lg:text-lg">
        Сервис <strong>RS2S</strong> предлагает ряд уникальных преимуществ для корпоративных клиентов:
        <ul className="list-disc pl-10">
          <li>
          <span className="font-bold">Повышение эффективности SOC:</span> Сокращает время реагирования на инциденты за 
          счет мгновенной генерации контекстных рекомендаций и анализа данных безопасности на естественном языке;
          </li>
          <li>
          <span className="font-bold">Экспертиза 24/7:</span> Предоставляет круглосуточный доступ к знаниям, 
          аналогичному консультации эксперта по ИБ, снижая нагрузку на команду безопасности;
          </li>
          <li>
          <span className="font-bold">Защита корпоративных данных:</span> Строгая система ролевого доступа и контроль за одновременными 
          подключениями минимизируют риски внутренних утечек конфиденциальной информации;
          </li>
          <li>
          <span className="font-bold">Гибкость и адаптивность:</span> Возможность выбора из множества языковых моделей и их тонкой 
          настройки позволяет адаптировать сервис под специфические требования и инфраструктуру заказчика;
          </li>
          <li>
          <span className="font-bold">Удобство интеграции в рабочие процессы:</span> Интерактивные подсказки, возможность работы с кодом и документами, 
          а также интуитивно понятный интерфейс позволяют интегрировать сервис в повседневные операции аналитиков;
          </li>
        </ul>
      </div>
    ),
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Общее");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const [img, setImg] = useState(
    "/images/RNQFqP6PtYg (1)-fotor-bg-remover-20241021195057.png"
  );

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="text-white">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Проект
      </h2>
      <div className="text-white flex flex-row flex-wrap justify-center items-center gap-2 py-3">
        <ProjectTag
          onClick={handleTagChange}
          name="Общее"
          isSelected={tag === "Общее"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Характеристики"
          isSelected={tag === "Характеристики"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Особенности"
          isSelected={tag === "Особенности"}
        />
      </div>
      <div ref={ref}>
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              imgUrl={project.image}
              content={project.content}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;