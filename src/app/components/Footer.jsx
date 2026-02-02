import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container max-w-full p-12 grid md:grid-cols-3 gap-8 md:gap-12">
        <div className="mt-4">
          <h4>SS</h4>
          <br />
          <p className="text-slate-400">
            Secure Solution: разрабатываем и проектируем умные решения в сфере информационной безопасности
          </p>
          <br />
          <p className="text-slate-400">
            Мы предлагаем гибкие модели сотрудничества в области внедрения 
            систем. Наша команда готова реализовать 
            комплексный проект от проектирования до ввода в промышленную эксплуатацию. 
            Альтернативно, доступно оказание экспертной поддержки на отдельных этапах: разработка концепции системы, 
            ее внедрение и интеграция, техническое сопровождение, а также содействие в приведении в соответствие с требованиями 
            регуляторов.
          </p>
        </div>
        <div className="mt-4 footer__section-2">
          <h4>Офис</h4> <br />
          <p className="text-slate-400">
            {" "}
            644106, Омская область, г. Омск, <br />ул. Лукашевича, д. 6 к. 1, кв. 152
          </p>
        </div>
        <div className="mt-4">
          <h4>Реквизиты</h4> <br />
          <p className="text-slate-400">
            {" "}
            ООО «Безопасное решение» <br />
            ИНН/КПП 5507300459/550701001
            <br />
            ОГРН 1247800001591
          </p>
        </div>
        <div className="mt-4">
          <h4>При поддержке</h4> <br />
          <p className="text-slate-400">
            <div className="fund">
              Проект создан при поддержке Федерального государственного 
              бюджетного учреждения &ldquo;Фонд содействия развитию малых форм 
              предприятий в научно-технической сфере в рамках программы 
              &ldquo;Студенческий стартап&rdquo; федерального проекта 
              &ldquo;Платформа университетского технологического предпринимательства&rdquo;&rdquo;
            </div>
            <img src="images/ФондМ.jpg" alt="Логотип ФондМ" width={330} />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
