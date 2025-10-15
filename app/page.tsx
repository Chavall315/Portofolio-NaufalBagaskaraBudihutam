"use client";
import { useEffect, useState } from "react";
import { User, Code, Briefcase, Award, Mail, MapPin, Github, Instagram, MessageCircle, Home, ChevronRight, ExternalLink, X } from "lucide-react";

export default function Portfolio() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener("click", (e) => {
        const targetId = (link.getAttribute("href") || "").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
    return () => {
      links.forEach(link => {
        link.removeEventListener("click", () => {});
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", link: "#home", icon: Home },
    { name: "About", link: "#about", icon: User },
    { name: "Skills", link: "#skills", icon: Code },
    { name: "Portfolio", link: "#portfolio", icon: Briefcase },
    { name: "Sertifikat", link: "#sertifikat", icon: Award },
  ];

  const skills = [
    { name: "HTML", icon: "/html.png", color: "from-orange-400 to-orange-600", desc: "Struktur dasar dari setiap halaman web." },
    { name: "CSS", icon: "/css.png", color: "from-blue-400 to-blue-600", desc: "Mengatur tampilan dan desain antarmuka web." },
    { name: "Tailwind", icon: "tailwind.png", color: "from-cyan-400 to-cyan-600", desc: "Utility-first framework CSS yang fleksibel dan cepat." },
    { name: "Laravel", icon: "laravel.png", color: "from-red-400 to-red-600", desc: "Framework PHP yang powerful dan elegan untuk backend." },
    { name: "React", icon: "react.png", color: "from-sky-400 to-sky-600", desc: "Library JavaScript untuk membangun UI yang interaktif." },
    { name: "PHP", icon: "/php.png", color: "from-indigo-400 to-indigo-600", desc: "Bahasa server-side yang populer dan fleksibel." },
    { name: "JavaScript", icon: "/javascript.png", color: "from-yellow-400 to-yellow-600", desc: "Bahasa pemrograman utama untuk pengembangan web dinamis." },
    { name: "TypeScript", icon: "/typescript.png", color: "from-blue-500 to-blue-700", desc: "Superset dari JavaScript dengan tipe statis." },
    { name: "Python", icon: "/python.png", color: "from-green-400 to-green-600", desc: "Bahasa serbaguna untuk AI, data science, dan web development." },
  ];

  const projects = [
    {
      gambar: "/thumbnail.jpg",
      title: "Mobile App Dengan Database",
      desc: "Aplikasi mobile sederhana dengan React Native dan Expo, menggunakan TypeScript untuk integrasi API.",
      link: "https://github.com/Chavall315/belajar-api1",
      tags: ["React Native", "TypeScript", "API"]
    },
    {
      gambar: "/thumbnail1.jpg",
      title: "Habit Tracker App",
      desc: "Aplikasi untuk melacak kebiasaan harian dengan antarmuka yang intuitif dan modern.",
      link: "https://github.com/Chavall315/To-do-list-Latihan",
      tags: ["React Native", "Expo", "TypeScript"]
    },
    {
      gambar: "/thumnail3.png",
      title: "Prototype Portfolio",
      desc: "Portfolio pribadi modern dengan Next.js, TypeScript, dan Tailwind CSS.",
      link: "https://github.com/Chavall315/prototype-portofolio",
      tags: ["Next.js", "Tailwind", "ReactBits"]
    },
    {
      gambar: "/thumnail4.png",
      title: "Web Travel Haji",
      desc: "Website bertema travel haji yang dibuat menggunakan HTML dan CSS.",
      link: "https://github.com/Chavall315/tugas-web-haji",
      tags: ["HTML", "CSS"]
    },
    {
      gambar: "/thumnail5.png",
      title: "Library Management System",
      desc: "Aplikasi perpustakaan untuk mengelola buku, peminjaman, dan pengguna.",
      link: "https://github.com/Chavall315/library_management",
      tags: ["Laravel", "Vue.js", "Tailwind"]
    },
    {
      gambar: "/thumnail6.png",
      title: "Web Pengaduan Siswa",
      desc: "Platform untuk siswa menyampaikan laporan atau pengaduan secara terstruktur.",
      link: "https://github.com/Chavall315/pengaduan_siswa",
      tags: ["Laravel", "Blade", "Tailwind"]
    },
  ];

  const certificates = [
    {
      garsi: "/sertifikat1.jpeg",
      title: "Web Development Dasar",
      desc: "Menyelesaikan pelatihan pengembangan web dasar menggunakan HTML, CSS, dan JavaScript.",
    },
    {
      garsi: "/sertifikat2.jpeg",
      title: "Fullstack Developer",
      desc: "Berhasil membangun aplikasi CRUD lengkap menggunakan Laravel dan Vue.js dalam program pelatihan intensif.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 min-h-screen text-white">
      {/* Navigation */}
      <nav 
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'top-4' 
            : 'top-0'
        }`}
      >
        <div 
          className={`transition-all duration-500 ease-in-out ${
            isScrolled 
              ? 'max-w-4xl mx-auto px-6' 
              : 'max-w-7xl mx-auto px-6'
          }`}
        >
          <div 
            className={`transition-all duration-500 ease-in-out ${
              isScrolled 
                ? 'bg-slate-950/80 backdrop-blur-xl border border-gray-700/20 rounded-2xl shadow-2xl shadow-blue-500/10' 
                : 'bg-transparent border border-transparent'
            }`}
          >
            <div className={`transition-all duration-500 ${isScrolled ? 'py-3 px-6' : 'py-4 px-0'}`}>
              <div className="flex items-center justify-between">
                <div 
                  className={`font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-500 ${
                    isScrolled ? 'text-xl' : 'text-2xl'
                  }`}
                >
                  Naufal Bagaskara
                </div>
                
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.link}
                      className={`text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center gap-2 group ${
                        isScrolled ? 'text-sm' : 'text-base'
                      }`}
                    >
                      <item.icon className={`group-hover:scale-110 transition-transform ${
                        isScrolled ? 'w-3.5 h-3.5' : 'w-4 h-4'
                      }`} />
                      {item.name}
                    </a>
                  ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                  className="md:hidden text-white"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <div className={`flex flex-col justify-between transition-all ${
                    isScrolled ? 'w-5 h-4' : 'w-6 h-5'
                  }`}>
                    <span className={`w-full h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                    <span className={`w-full h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                    <span className={`w-full h-0.5 bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                  </div>
                </button>
              </div>

              {/* Mobile Menu */}
              {isMobileMenuOpen && (
                <div className="md:hidden mt-4 pb-2 space-y-3">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.link}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-gray-300 hover:text-blue-400 transition-colors py-2"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-blue-400 text-lg">Hai, Saya</p>
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                  Naufal Bagaskara
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300">Web Developer</p>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Selamat datang di portfolio saya! Ini adalah tempat saya menampilkan proyek, keahlian, dan perjalanan saya dalam dunia pengembangan web. Silakan jelajahi dan temukan karya terbaik saya!
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="#portfolio"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Lihat Portfolio
              </a>
              <a
                href="#about"
                className="px-8 py-3 border border-blue-400 rounded-full font-semibold hover:bg-blue-400/10 transition-all duration-300"
              >
                Tentang Saya
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-2xl opacity-50 animate-pulse" />
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-500/50 shadow-2xl shadow-blue-500/50">
                <img src="/profil.jpg" alt="" className="w-full"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Tentang Saya
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur-xl opacity-30" />
              <div className="relative w-full h-96 rounded-3xl overflow-hidden border border-gray-700/30 shadow-2xl">
                <img src="/sama.jpg" alt="" />
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-3xl border border-gray-700/30 backdrop-blur-sm hover:border-gray-600/60 transition-all duration-300">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Hai semuanya! Nama saya <span className="text-blue-400 font-semibold">Naufal Bagaskara Budihutama</span>. Saya seorang pelajar dan juga web developer dari Bogor, Jawa Barat.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg mt-4">
                  Saya memiliki <span className="text-cyan-400 font-semibold">2 tahun pengalaman</span> dalam web development. Saya sangat menikmati apa yang saya lakukan saat ini, menurut saya, membuat program bukan hanya sekedar pekerjaan, tetapi juga <span className="text-blue-400 font-semibold">seni yang memiliki nilai estetika</span>.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-900/30 to-transparent p-6 rounded-2xl border border-blue-500/20">
                  <p className="text-3xl font-bold text-blue-400">2</p>
                  <p className="text-gray-400 mt-2">Tahun Pengalaman</p>
                </div>
                <div className="bg-gradient-to-br from-cyan-900/30 to-transparent p-6 rounded-2xl border border-cyan-500/20">
                  <p className="text-3xl font-bold text-cyan-400">6+</p>
                  <p className="text-gray-400 mt-2">Project Dilakukan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Teknologi yang saya kuasai</p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mt-4" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700/30 hover:border-blue-500/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/10 group-hover:to-cyan-600/10 rounded-2xl transition-all duration-300" />
                <div className="relative">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="w-20 h-15 mb-4 mx-auto object-contain"
                      />
                  </div>
                  <h3 className="text-2xl text-center font-bold mb-2 text-white">{skill.name}</h3>
                  <p className="text-gray-400">{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Project yang telah saya kerjakan</p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mt-4" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/30 overflow-hidden hover:border-blue-500/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
                onClick={() => setSelectedImage(project.gambar)}
              >
                <div className="relative h-48 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 to-cyan-600/40 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                      src={project.gambar} 
                      alt={project.title} 
                      className=""
                      />
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.desc}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-cyan-400 transition-colors group/link"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="sertifikat" className="py-20 px-6 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Sertifikat
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Kompetensi yang telah saya raih</p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mt-4" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificates.map((cert, i) => (
              <div
                key={i}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/30 overflow-hidden hover:border-blue-500/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 cursor-pointer"
                onClick={() => setSelectedImage(cert.garsi)}
              >
                <div className="relative h-64 bg-gradient-to-br from-blue-600/20 to-cyan-600/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                      src={cert.garsi} 
                      alt={cert.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110" 
                      />
                  </div>
                </div>
                
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-700/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Naufal Bagaskara
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Seorang pengembang web yang berfokus pada pengalaman pengguna dan desain interaktif.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Kontak</h4>
              <div className="space-y-3 text-gray-400 text-sm">
                <a href="mailto:naufalbagaskara31@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>naufalbagaskara31@gmail.com</span>
                </a>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Bogor Barat, Indonesia</span>
                </div>
                <a href="https://wa.me/628158949179" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span>+62 815-8949-179</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <div className="space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    className="block text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Chavall315"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800/50 border border-gray-700/30 flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500/60 transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/_chaval315/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800/50 border border-gray-700/30 flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500/60 transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/628158949179"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800/50 border border-gray-700/30 flex items-center justify-center hover:bg-green-500/20 hover:border-green-500/60 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-700/20 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Naufal Bagaskara. All rights reserved.</p>
            <a href="#home" className="inline-flex items-center gap-2 mt-4 text-blue-400 hover:text-cyan-400 transition-colors">
              <span>Kembali ke atas</span>
              <ChevronRight className="w-4 h-4 rotate-[-90deg]" />
            </a>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <div className="relative max-w-4xl w-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/30 p-4">
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center hover:scale-110 transition-transform"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl flex items-center justify-center">
              <img
                src={selectedCertificate}
                alt="Full view"
                className="w-full h-auto rounded-2xl border border-gray-700/30 shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center hover:scale-110 transition-transform z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage}
              alt="Full view"
              className="w-full h-auto rounded-2xl border border-gray-700/30 shadow-2xl"
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}