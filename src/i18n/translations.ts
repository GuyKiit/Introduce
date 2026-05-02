export type Language = 'en' | 'th';

export const translations = {
  // ─── Navbar ───
  navbar: {
    about: { en: 'About', th: 'เกี่ยวกับ' },
    skills: { en: 'Skills', th: 'ทักษะ' },
    education: { en: 'Education', th: 'การศึกษา' },
    experience: { en: 'Experience', th: 'ประสบการณ์' },
    projects: { en: 'Projects', th: 'ผลงาน' },
  },

  // ─── Hero ───
  hero: {
    badge: { en: 'Available for new opportunities', th: 'พร้อมรับโอกาสใหม่' },
    headingLine1: { en: 'New to the field,', th: 'เพิ่งเข้าวงการ,' },
    headingLine2: { en: 'not to the craft', th: 'แต่ไม่ใช่มือใหม่' },
    description: {
      en: "Hey, I'm Kittiwin — a Software Developer who loves building things that just work, from clean interfaces to solid back-end logic.",
      th: 'สวัสดีครับ ผม Kittiwin — นักพัฒนาซอฟต์แวร์ที่ชอบสร้างสิ่งที่ใช้งานได้จริง ตั้งแต่หน้าจอสวย ๆ ไปจนถึง Logic ฝั่งหลังบ้าน',
    },
    viewProjects: { en: 'View Projects', th: 'ดูผลงาน' },
    downloadCV: { en: 'Download CV', th: 'ดาวน์โหลด CV' },
    generating: { en: 'Generating…', th: 'กำลังสร้าง…' },

  },

  // ─── About ───
  about: {
    title: { en: 'The Story So Far', th: 'เรื่องราวจนถึงตอนนี้' },
    paragraph1: {
      en: 'It all began with one question: \u201CWait, how does this thing actually work?\u201D — and the rabbit hole never ended.',
      th: 'ทุกอย่างเริ่มจากคำถามเดียว: "เดี๋ยวนะ มันทำงานยังไงกันแน่?" — แล้วก็หลุดเข้ารูกระต่ายไม่เคยกลับมา',
    },
    paragraph2: {
      en: "I'm a recent grad who's put in a lot of hours (and a lot of Stack Overflow tabs) learning the React ecosystem. I enjoy the messy, satisfying process of turning a rough idea into something real and well-built — even if it means debugging at midnight.",
      th: 'ผมเป็นเด็กจบใหม่ที่ทุ่มเวลาหลายชั่วโมง (และเปิด Stack Overflow หลายสิบแท็บ) เพื่อเรียนรู้ React ecosystem ผมชอบกระบวนการที่ยุ่งเหยิงแต่สนุกในการเปลี่ยนไอเดียดิบ ๆ ให้กลายเป็นของจริงที่ดี — แม้จะต้อง debug ตอนเที่ยงคืนก็ตาม',
    },

    detail2: {
      label: { en: 'Working style', th: 'สไตล์การทำงาน' },
      value: { en: 'Learn fast, document clearly, improve iteratively', th: 'เรียนรู้ไว จดรายละเอียดชัด ปรับปรุงเป็นรอบ ๆ' },
    },
  },

  // ─── Skills ───
  skills: {
    title: { en: 'What I Work With', th: 'สิ่งที่ผมใช้ทำงาน' },
    subtitle: {
      en: 'The stack and tools I reach for when building things.',
      th: 'เครื่องมือและ Stack ที่ผมเลือกใช้เวลาสร้างงาน',
    },
    frontend: {
      title: { en: 'Frontend Development', th: 'พัฒนาฝั่ง Frontend' },
      description: {
        en: 'Building responsive, interactive UIs using React, TypeScript, and modern CSS frameworks like Tailwind.',
        th: 'สร้าง UI ที่ Responsive และโต้ตอบได้ด้วย React, TypeScript และ CSS framework สมัยใหม่อย่าง Tailwind',
      },
    },
    backend: {
      title: { en: 'Backend Development', th: 'พัฒนาฝั่ง Backend' },
      description: {
        en: 'Architecting robust APIs and services utilizing .NET Core, focusing on microservices and scalability.',
        th: 'ออกแบบ API และเซอร์วิสที่แข็งแกร่งด้วย .NET Core เน้นเรื่อง Microservices และ Scalability',
      },
    },
    database: {
      title: { en: 'Database Management', th: 'จัดการฐานข้อมูล' },
      description: {
        en: 'Designing efficient schemas and optimizing complex queries in MS SQL Server to ensure data integrity.',
        th: 'ออกแบบ Schema ที่มีประสิทธิภาพและ Optimize Query ใน MS SQL Server เพื่อความถูกต้องของข้อมูล',
      },
    },
    uiux: {
      title: { en: 'UI/UX Implementation', th: 'พัฒนา UI/UX' },
      description: {
        en: 'Translating Figma designs into pixel-perfect, accessible components using tools like Material-UI.',
        th: 'แปลง Design จาก Figma เป็น Component ที่แม่นยำระดับพิกเซล และเข้าถึงได้ง่ายด้วย Material-UI',
      },
    },
    ai: {
      title: { en: 'AI-Assisted Development', th: 'พัฒนาด้วยความช่วยเหลือจาก AI' },
      description: {
        en: 'Leveraging AI tools for prompt engineering, code generation, and debugging — using them as a productivity multiplier while maintaining full ownership of design and code quality.',
        th: 'ใช้เครื่องมือ AI สำหรับ Prompt Engineering, สร้างโค้ด และ Debug — ใช้เป็นตัวคูณประสิทธิภาพโดยยังคงควบคุมคุณภาพ Design และโค้ดเองทั้งหมด',
      },
    },
    modernWorkflow: { en: 'Modern Workflow', th: 'เวิร์กโฟลว์สมัยใหม่' },
  },

  // ─── Experience ───
  // ─── Education ───
  education: {
    title: { en: 'Education', th: 'การศึกษา' },
    degree: {
      en: 'B.Eng. — Data Science and Systems Management Engineering (DSS)',
      th: 'วศ.บ. — วิศวกรรมวิทยาการข้อมูลและระบบการจัดการ (DSS)',
    },
    institution: {
      en: 'Mahanakorn University of Technology',
      th: 'มหาวิทยาลัยเทคโนโลยีมหานคร',
    },
    faculty: {
      en: 'Faculty of Engineering and Technology',
      th: 'คณะวิศวกรรมศาสตร์และเทคโนโลยี',
    },
    years: { en: '2022 – 2026', th: '2565 – 2569' },
  },

  experience: {
    title: { en: 'Experience', th: 'ประสบการณ์' },
    duration: {
      en: '16 JUNE 2025 — 27 MARCH 2026',
      th: '16 มิ.ย. 2025 — 27 มี.ค. 2026',
    },
    role: { en: 'Software Developer Intern', th: 'นักพัฒนาซอฟต์แวร์ (ฝึกงาน)' },
    company: {
      en: 'Thai Roong Ruang Technology Co., Ltd.',
      th: 'บริษัท ไทยรุ่งเรือง เทคโนโลยี จำกัด',
    },
    bullet1: {
      en: 'Developed a high-performance Single Page Application (SPA) with the React ecosystem and Redux for reliable asynchronous state management.',
      th: 'พัฒนา Single Page Application (SPA) ประสิทธิภาพสูงด้วย React ecosystem จัดการ State ด้วย Redux เพื่อให้การจัดการ State แบบ Asynchronous มีความเสถียร',
    },
    bullet2: {
      en: 'Constantly improving team efficiency and usability of APIs to build reliable solutions. Developed clean code validating standard solutions.',
      th: 'พัฒนาประสิทธิภาพของทีมอย่างต่อเนื่อง ปรับปรุง API ให้ใช้งานง่าย สร้างโซลูชันที่เชื่อถือได้ด้วยโค้ดที่สะอาดตามมาตรฐาน',
    },

  },

  // ─── Projects ───
  projects: {
    title: { en: 'Projects', th: 'ผลงาน' },
    subtitle: {
      en: 'Selected projects demonstrating my technical philosophy.',
      th: 'ผลงานคัดสรรที่แสดงแนวคิดทางเทคนิคของผม',
    },
    viewGitHub: { en: 'View GitHub', th: 'ดู GitHub' },
    viewAllGitHub: { en: 'View All on GitHub', th: 'ดูทั้งหมดบน GitHub' },
    cas: {
      description: {
        en: 'Developed a comprehensive End-to-End Corrective Action System (CAS) featuring 4-tier Role-Based Access Control (RBAC), automated real-time notifications, and hierarchical approval workflows to streamline incident reporting and resolution.',
        th: 'พัฒนาระบบ Corrective Action System (CAS) แบบครบวงจร รองรับการควบคุมสิทธิ์ตามบทบาท 4 ระดับ (RBAC) แจ้งเตือนอัตโนมัติแบบ Real-time และระบบอนุมัติแบบลำดับขั้น เพื่อปรับปรุงกระบวนการรายงานและแก้ไขปัญหา',
      },
    },
  },
} as const;

/** Helper: get translated text */
export function t(
  obj: { en: string; th: string },
  lang: Language,
): string {
  return obj[lang];
}
