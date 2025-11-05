"use client";
import { useEffect, useState } from "react";
import { User, Code, Briefcase, Award, Mail, MapPin, Github, Instagram, MessageCircle, Home, ChevronRight, ExternalLink, X, Linkedin } from "lucide-react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function Portfolio() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch("https://api.github.com/users/Chavall315/repos?sort=updated");
        const data = await res.json();
        setRepos(data);
      } catch (err) {
        console.error(err);
      }
    }
      fetchRepos();
    }, []);

  useEffect(() => {
    const currentFullText = roles[currentRole];
    const typingSpeed = isDeleting ? 50 : 100;
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Mengetik
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        } else {
          // Selesai mengetik, tunggu sebentar lalu mulai menghapus
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Menghapus
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // Selesai menghapus, pindah ke role berikutnya
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole]);

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

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const roles = [
    'Web Developer',
    'Full Stack Developer',
    'Mobile Developer'
  ];

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
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
        {/* Floating particles background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float-delayed" />
        </div>
        
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-blue-400 text-lg animate-slide-up">Hai, Saya</p>
              <h1 className="text-5xl md:text-7xl font-bold animate-slide-up-delayed">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                  Naufal Bagaskara
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 animate-slide-up-delayed-2 h-12 flex items-center">
                <span className="inline-block min-w-[300px]">
                  {displayText}
                  <span className="animate-blink">|</span>
                </span>
              </p>
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
          <div className="flex justify-center animate-fade-in-delayed">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-2xl opacity-50 animate-pulse-slow" />
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-2xl opacity-20 animate-spin-slow" />
              <div className="flex flex-col items-center gap-6">
                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-500/50 shadow-2xl shadow-blue-500/50 transition-transform duration-500 hover:scale-105">
                  <img src="/profilcer.jpg" alt="" className="w-full h-full object-cover transition-transform duration-700"/>
                </div>
                
                {/* Social Media Icons */}
                <div className="flex gap-4 z-10">
                  <a
                    href="https://github.com/Chavall315"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 rounded-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 flex items-center justify-center hover:border-blue-500/60 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30"
                  >
                    <Github className="w-5 h-5 text-gray-300 group-hover:text-blue-400 transition-colors" />
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      GitHub
                    </div>
                  </a>
                  
                  <a
                    href="https://www.instagram.com/_chaval315/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 rounded-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 flex items-center justify-center hover:border-pink-500/60 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/30"
                  >
                    <Instagram className="w-5 h-5 text-gray-300 group-hover:text-pink-400 transition-colors" />
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      Instagram
                    </div>
                  </a>
                  
                  <a
                    href="https://www.linkedin.com/in/naufal-bagaskara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 rounded-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 flex items-center justify-center hover:border-cyan-500/60 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30"
                  >
                    <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-cyan-400 transition-colors" />
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      LinkedIn
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Tentang Saya
              </span>
            </h2>
            <p className="text-gray-400 text-lg mt-2">Mengenal lebih dekat dengan saya</p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mt-4" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-pulse-slow" />
              
              <div className="relative">
                <div className="relative w-full aspect-square rounded-3xl overflow-hidden border-2 border-gray-700/30 group-hover:border-blue-500/50 transition-all duration-500 shadow-2xl shadow-blue-500/20">
                  <img 
                    src="/profilcer.jpg" 
                    alt="Naufal Bagaskara" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Decorative corner elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-blue-500/50 rounded-tl-3xl" />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-cyan-500/50 rounded-br-3xl" />
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-6">
              {/* Main description card */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-3xl border border-gray-700/30 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl hover:shadow-blue-500/10 group">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-1 h-full bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full" />
                    <div>
                      <p className="text-gray-300 leading-relaxed text-lg">
                        Hai semuanya! Nama saya <span className="text-blue-400 font-semibold">Naufal Bagaskara Budihutama</span>. Saya seorang pelajar dan juga web developer dari <span className="text-cyan-400">Bogor, Jawa Barat</span>.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full" />
                    <div>
                      <p className="text-gray-300 leading-relaxed text-lg">
                        Saya memiliki <span className="text-cyan-400 font-semibold">2 tahun pengalaman</span> dalam web development. Saya sangat menikmati apa yang saya lakukan saat ini, menurut saya, membuat program bukan hanya sekedar pekerjaan, tetapi juga <span className="text-blue-400 font-semibold">seni yang memiliki nilai estetika</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Stats cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative group/stat overflow-hidden bg-gradient-to-br from-blue-900/30 to-transparent p-6 rounded-2xl border border-blue-500/20 hover:border-blue-500/60 transition-all duration-300 hover:translate-y-[-4px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover/stat:from-blue-500/10 group-hover/stat:to-transparent transition-all duration-500" />
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                      <p className="text-4xl font-bold text-blue-400 group-hover/stat:scale-110 transition-transform duration-300">2+</p>
                    </div>
                    <p className="text-gray-400">Tahun Pengalaman</p>
                  </div>
                </div>
                
                <div className="relative group/stat overflow-hidden bg-gradient-to-br from-cyan-900/30 to-transparent p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-300 hover:translate-y-[-4px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover/stat:from-cyan-500/10 group-hover/stat:to-transparent transition-all duration-500" />
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                      <p className="text-4xl font-bold text-cyan-400 group-hover/stat:scale-110 transition-transform duration-300">6+</p>
                    </div>
                    <p className="text-gray-400">Project Selesai</p>
                  </div>
                </div>
                
                <div className="relative group/stat overflow-hidden bg-gradient-to-br from-purple-900/30 to-transparent p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/60 transition-all duration-300 hover:translate-y-[-4px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover/stat:from-purple-500/10 group-hover/stat:to-transparent transition-all duration-500" />
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                      <p className="text-4xl font-bold text-purple-400 group-hover/stat:scale-110 transition-transform duration-300">9+</p>
                    </div>
                    <p className="text-gray-400">Teknologi Dikuasai</p>
                  </div>
                </div>
                
                <div className="relative group/stat overflow-hidden bg-gradient-to-br from-pink-900/30 to-transparent p-6 rounded-2xl border border-pink-500/20 hover:border-pink-500/60 transition-all duration-300 hover:translate-y-[-4px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-pink-500/0 group-hover/stat:from-pink-500/10 group-hover/stat:to-transparent transition-all duration-500" />
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
                      <p className="text-4xl font-bold text-pink-400 group-hover/stat:scale-110 transition-transform duration-300">2</p>
                    </div>
                    <p className="text-gray-400">Sertifikat</p>
                  </div>
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
      <section id="github" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Portofolio
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Ini adalah project-project yang pernah saya kerjakan</p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mt-4" />
          </div>

          <Slider {...settings}>
            {repos.slice(0, 10).map((repo: any) => (
              <div key={repo.id} className="p-4">
                <div className="
                  group relative bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90
                  rounded-2xl border border-gray-700/50 overflow-hidden
                  hover:border-blue-500/50 transition-all duration-500
                  hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20
                  backdrop-blur-sm
                ">
                  {/* Gradient overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-blue-500/0 
                    group-hover:from-blue-500/5 group-hover:via-cyan-500/5 group-hover:to-blue-500/5 
                    transition-all duration-500" />
                  
                  {/* Animated side glow - left and right only */}
                  <div className="absolute inset-y-0 left-0 w-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-500 blur-md" />
                  </div>
                  <div className="absolute inset-y-0 right-0 w-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-500 blur-md" />
                  </div>

                  <div className="relative p-6 space-y-4">
                    {/* Header with icon */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 
                            flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold text-white group-hover:text-transparent 
                            group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 
                            group-hover:bg-clip-text transition-all duration-300 truncate">
                            {repo.name}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed min-h-[60px] line-clamp-3">
                      {repo.description || "No description available"}
                    </p>

                    {/* Stats and Language */}
                    <div className="flex items-center gap-3 pt-2 border-t border-gray-700/50">
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400" />
                        {repo.language && (
                          <span className="text-xs text-gray-400">{repo.language}</span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        <span className="text-xs text-gray-400">{repo.stargazers_count}</span>
                      </div>

                      {repo.forks_count > 0 && (
                        <div className="flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5 text-gray-400" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"/>
                          </svg>
                          <span className="text-xs text-gray-400">{repo.forks_count}</span>
                        </div>
                      )}
                    </div>

                    {/* CTA Button */}
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex items-center justify-center gap-2 w-full
                        py-2.5 px-4 mt-4
                        bg-gradient-to-r from-blue-500/10 to-cyan-500/10
                        hover:from-blue-500/20 hover:to-cyan-500/20
                        border border-blue-500/30 hover:border-blue-400/50
                        rounded-xl text-sm font-medium
                        text-blue-400 hover:text-cyan-400
                        transition-all duration-300
                        group/link
                      "
                    >
                      <span>View Repository</span>
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
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
                onClick={() => setSelectedCertificate(cert.garsi)}
              >
                <div className="relative h-64 bg-gradient-to-br from-blue-600/20 to-cyan-600/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                      src={cert.garsi} 
                      alt={cert.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500" 
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
      <footer className="relative py-16 px-6 border-t border-gray-700/20 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="space-y-4 md:col-span-1">
              <div className="group">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                  Naufal Bagaskara
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-2 group-hover:w-24 transition-all duration-300" />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Seorang pengembang web yang berfokus pada pengalaman pengguna dan desain interaktif.
              </p>
              {/* Tagline */}
              <div className="pt-2">
                <p className="text-xs text-gray-500 italic">"Coding is art with logic"</p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full" />
                Kontak
              </h4>
              <div className="space-y-3">
                <a 
                  href="mailto:naufalbagaskara31@gmail.com" 
                  className="group flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-gray-800/50 border border-gray-700/30 flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-500/50 transition-all">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm">naufalbagaskara31@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="w-8 h-8 rounded-lg bg-gray-800/50 border border-gray-700/30 flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-sm">Bogor Barat, Indonesia</span>
                </div>
                <a 
                  href="https://wa.me/628158949179" 
                  className="group flex items-center gap-3 text-gray-400 hover:text-green-400 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-gray-800/50 border border-gray-700/30 flex items-center justify-center group-hover:bg-green-500/10 group-hover:border-green-500/50 transition-all">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <span className="text-sm">+62 815-8949-179</span>
                </a>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full" />
                Quick Links
              </h4>
              <div className="space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    className="group flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-all duration-300 text-sm"
                  >
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Social Media Section */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full" />
                Follow Me
              </h4>
              <p className="text-gray-400 text-sm">Mari terhubung dan berkolaborasi!</p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Chavall315"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-11 h-11 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 flex items-center justify-center hover:border-blue-500/60 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30"
                >
                  <Github className="w-5 h-5 text-gray-300 group-hover:text-blue-400 transition-colors" />
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    GitHub
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/_chaval315/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-11 h-11 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 flex items-center justify-center hover:border-pink-500/60 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/30"
                >
                  <Instagram className="w-5 h-5 text-gray-300 group-hover:text-pink-400 transition-colors" />
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Instagram
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/naufal-bagaskara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-11 h-11 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 flex items-center justify-center hover:border-cyan-500/60 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30"
                >
                  <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-cyan-400 transition-colors" />
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    LinkedIn
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-gray-700/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  &copy; {new Date().getFullYear()} <span className="text-blue-400 font-semibold">Naufal Bagaskara</span>. All rights reserved.
                </p>
              </div>
              
              <a 
                href="#home" 
                className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/20 rounded-xl text-blue-400 hover:border-blue-500/60 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
              >
                <span className="text-sm font-medium">Kembali ke atas</span>
                <div className="w-6 h-6 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-all">
                  <ChevronRight className="w-4 h-4 rotate-[-90deg] group-hover:-translate-y-1 transition-transform" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal untuk gambar sertifikat */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center hover:scale-110 transition-transform z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedCertificate}
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
        .animate-fade-in-delayed {
          animation: fade-in 1s ease-out 0.3s backwards;
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        .animate-slide-up-delayed {
          animation: slide-up 0.8s ease-out 0.2s backwards;
        }
        .animate-slide-up-delayed-2 {
          animation: slide-up 0.8s ease-out 0.4s backwards;
        }
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 25s ease-in-out infinite 5s;
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
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