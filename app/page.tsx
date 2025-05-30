"use client";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { Navbar, NavBody, NavItems, MobileNav, NavbarLogo, NavbarButton, MobileNavHeader, MobileNavToggle, MobileNavMenu, } from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { FaGithub, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      link: "#skills",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Portofolio",
      link: "#portofolio",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ]

  const navItems1 = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Portofolio",
      link: "#portofolio",
    },
  ];
  
 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc: string) => setSelectedCertificate(imageSrc);
  const closeModal = () => setSelectedCertificate(null);
  return (
    <div>
      <FloatingNav navItems={navItems} />
        <div className="relative w-full">
          <Navbar>
          {/* Desktop Navigation */}
          <NavBody>
            <NavbarLogo />
              <NavItems items={navItems} />
                <div className="flex items-center gap-4">
                  <NavbarButton variant="primary">Sertifikat</NavbarButton>
                </div>
          </NavBody>
 
          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}/>
            </MobileNavHeader>
 
            <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
              {navItems.map((item, idx) => (
                <a key={`mobile-link-${idx}`} href={item.link} onClick={() => setIsMobileMenuOpen(false)} className="relative text-neutral-600 dark:text-neutral-300">
                  <span className="block">{item.name}</span>
                </a>
              ))}
              <div className="flex w-full flex-col gap-4">
                <NavbarButton onClick={() => setIsMobileMenuOpen(false)} variant="primary" className="w-full">
                  Sertifikat
                </NavbarButton>
              </div>
            </MobileNavMenu>
          </MobileNav>
          </Navbar>
        </div>

      {/* Hero */}
      <BackgroundBeamsWithCollision>
      <div className="grid grid-cols-1 md:grid-cols-2 z-10 items-center gap-8 text-center md:text-left px-4 py-8" id="home">
        <div>
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-black dark:text-white font-sans tracking-tight">
            Selamat Datang Di
          </h2>
          
          <div className="relative inline-block w-max mt-2 [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-2 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)] text-5xl md:text-6xl font-bold">
              <span>Web Portofolio.</span>
            </div>
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-2 text-5xl md:text-6xl font-bold">
              <span>Web Portofolio.</span>
            </div>
          </div>

          <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-md">
            Ini adalah tempat saya menampilkan proyek, keahlian, dan perjalanan saya dalam dunia pengembangan web. Silakan jelajahi dan temukan karya terbaik saya!
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <img 
            src="/naufal.jpg" 
            alt="Foto Profil" 
            className="w-56 h-56 md:w-80 md:h-80 border-4 border-white dark:border-neutral-700 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
      </BackgroundBeamsWithCollision>

      {/* About Us */}
      <div className="py-20 px-6 bg-gradient-to-b from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900" id="about">
        <h2 className="text-4xl text-center font-bold text-black mb-12 dark:text-neutral-200">Tentang Saya</h2>
        <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">
          
          <div className="w-96 h-96 rounded-full overflow-hidden shadow-lg border-4 border-white dark:border-neutral-700">
            <img src="/naufal.jpg" alt="Foto Profil" className="w-full h-full object-cover" />
          </div>
          
          <div>
            <BackgroundGradient className="rounded-[22px] max-w-md p-6 sm:p-10 bg-white dark:bg-zinc-900">
              <p className="text-gray-700 text-center dark:text-gray-300">
                Hai semuanya! Nama saya Naufal Bagaskara Budihutama. Saya seorang pelajar dan juga web developer dari Bogor, Jawa Barat. 
                Saya memiliki 2 tahun pengalaman dalam web development. Saya sangat menikmati apa 
                yang saya lakukan saat ini, menurut saya, membuat program bukan hanya sekedar pekerjaan, 
                tetapi juga seni yang memiliki nilai estetika.
              </p>
            </BackgroundGradient>

          </div>
        </div>
      </div>

      {/* Skill */}
      <div className="h-50 md:h-200 bg-gradient-to-b from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 relative flex flex-col items-center w-full justify-center overflow-hidden px-6" id="skills">
        {/* Judul */}
        <h2 className="text-4xl font-bold text-black dark:text-white text-center">Skills</h2>
        <p className="text-black dark:text-neutral-400 text-center mb-5">
          ini adalah beberapa bahasa pemrograman dan framework yang sudah saya kuasai
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* HTML */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-md p-6 text-center hover:border-orange-500 border-2 border-transparent transition-all">
            <img src="/html1.png" alt="HTML Logo" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">HTML</h3>
            <p className="text-gray-600 dark:text-gray-300">Struktur dasar dari setiap halaman web.</p>
          </div>

          {/* CSS */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-md p-6 text-center hover:border-blue-500 border-2 border-transparent transition-all">
            <img src="/css.png" alt="CSS Logo" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">CSS</h3>
            <p className="text-gray-600 dark:text-gray-300">Mengatur tampilan dan desain antarmuka web.</p>
          </div>

          {/* Tailwind */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-md p-6 text-center hover:border-sky-400 border-2 border-transparent transition-all">
            <img src="/tailwind.png" alt="Tailwind Logo" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">Tailwind</h3>
            <p className="text-gray-600 dark:text-gray-300">Utility-first framework CSS yang fleksibel dan cepat.</p>
          </div>

          {/* Laravel */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-md p-6 text-center hover:border-red-500 border-2 border-transparent transition-all">
            <img src="/laravel.png" alt="Laravel Logo" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">Laravel</h3>
            <p className="text-gray-600 dark:text-gray-300">Framework PHP yang powerful dan elegan untuk backend.</p>
          </div>

          {/* React */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-md p-6 text-center hover:border-cyan-500 border-2 border-transparent transition-all">
            <img src="/react.png" alt="React Logo" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">React</h3>
            <p className="text-gray-600 dark:text-gray-300">Library JavaScript untuk membangun UI yang interaktif.</p>
          </div>

          {/* PHP */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-md p-6 text-center hover:border-indigo-500 border-2 border-transparent transition-all">
            <img src="/php.png" alt="PHP Logo" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">PHP</h3>
            <p className="text-gray-600 dark:text-gray-300">Bahasa server-side yang populer dan fleksibel.</p>
          </div>

          {/* JavaScript */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-md p-6 text-center hover:border-yellow-400 border-2 border-transparent transition-all">
            <img src="/javascript.png" alt="JavaScript Logo" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">JavaScript</h3>
            <p className="text-gray-600 dark:text-gray-300">Bahasa pemrograman utama untuk pengembangan web dinamis.</p>
          </div>

          {/* TypeScript */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-md p-6 text-center hover:border-blue-600 border-2 border-transparent transition-all">
            <img src="/typescript.png" alt="TypeScript Logo" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">TypeScript</h3>
            <p className="text-gray-600 dark:text-gray-300">Superset dari JavaScript dengan tipe statis untuk pengembangan skala besar.</p>
          </div>

          {/* Python */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-md p-6 text-center hover:border-green-500 border-2 border-transparent transition-all">
            <img src="/python.png" alt="Python Logo" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">Python</h3>
            <p className="text-gray-600 dark:text-gray-300">Bahasa serbaguna yang digunakan dalam AI, data science, dan web development.</p>
          </div>
        </div>
      </div>

      {/* Portofolio */}
      <div className="min-h-screen bg-gradient-to-b from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 flex flex-col items-center justify-center px-6 py-10" id="portofolio">
      <h2 className="text-4xl font-bold text-black dark:text-white text-center mb-2">Portofolio</h2>
      <p className="text-black dark:text-neutral-400 text-center mb-10">
        Ini adalah beberapa project yang telah saya buat
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[
          {
            img: "/thumbnail.jpg",
            title: "Mobile App Dengan Database",
            desc: "Proyek aplikasi mobile sederhana yang dikembangkan dengan React Native dan Expo, menggunakan TypeScript. Dirancang untuk mempelajari dasar-dasar integrasi API dan pengelolaan state dalam pengembangan aplikasi mobile.",
            link: "https://github.com/Chavall315/belajar-api1"
          },
          {
            img: "/thumbnail1.jpg",
            title: "Habit Tracker App",
            desc: "Aplikasi Habit Tracker yang dibangun dengan React Native dan Expo, menggunakan TypeScript. Dirancang untuk membantu pengguna melacak kebiasaan harian mereka dengan antarmuka yang intuitif.",
            link: "https://github.com/Chavall315/To-do-list-Latihan"
          },
          {
            img: "/thumnail3.png",
            title: "Prototype Portofolio",
            desc: "Prototipe portofolio pribadi yang dibangun dengan Next.js, TypeScript, ReactBits dan Tailwind CSS. Dirancang untuk menampilkan profil dan proyek secara modern dan responsif.",
            link: "https://github.com/Chavall315/prototype-portofolio"
          },
          {
            img: "/thumnail4.png",
            title: "Web Travel Haji",
            desc: "Website Yang bertema Web travel haji, yg dibuat menggunakan HTML dan CSS",
            link: "https://github.com/Chavall315/tugas-web-haji"
          },
          {
            img: "/thumnail5.png",
            title: "Libarary Management System",
            desc: "Aplikasi perpustakaan berbasis Laravel untuk mengelola buku, peminjaman, dan pengguna dengan antarmuka modern. Dibangun dengan Laravel, Vue.js, dan Tailwind CSS.",
            link: "https://github.com/Chavall315/library_management"
          },
          {
            img: "/thumnail6.png",
            title: "Web Pengaduan Siswa",
            desc: "Aplikasi web berbasis Laravel yang memungkinkan siswa menyampaikan laporan atau pengaduan secara mudah dan terstruktur. Dibuat menggunakan Laravel, Blade, dan Tailwind CSS.",
            link: "https://github.com/Chavall315/pengaduan_siswa"
          },
        ].map((project, i) => (
          <div key={i} className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg overflow-hidden flex flex-col group">
            <img
              src={project.img}
              alt={project.title}
              onClick={() => setSelectedImage(project.img)}
              className="w-full h-52 object-cover object-top rounded-t-2xl transform group-hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
            <div className="p-5 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{project.desc}</p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block text-center px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-md hover:opacity-80 transition"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Full View"
            className="max-w-full max-h-full rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>

      {/* Sertifikat */}
      <div className="min-h-screen bg-gradient-to-b from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 flex flex-col items-center justify-center px-6 py-10" id="sertifikat">
        <h2 className="text-4xl font-bold text-black dark:text-white text-center mb-2">
          Sertifikat Kompetensi
        </h2>
        <p className="text-black dark:text-neutral-400 text-center mb-10">
          Ini adalah beberapa sertifikat yang saya miliki
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
          {[
            {
              src: "/sertifikat1.jpeg",
              title: "Web Development Dasar",
              desc: "Menyelesaikan pelatihan pengembangan web dasar menggunakan HTML, CSS, dan JavaScript.",
            },
            {
              src: "/sertifikat2.jpeg",
              title: "Fullstack Developer",
              desc: "Berhasil membangun aplikasi CRUD lengkap menggunakan Laravel dan Vue.js dalam program pelatihan intensif.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => openModal(item.src)}
            >
              <img src={item.src} alt={`Sertifikat ${index + 1}`} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-black dark:text-white">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Sertifikat */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={closeModal}
        >
          <div
            className="relative max-w-3xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={selectedCertificate}
              alt="Sertifikat Besar"
              className="rounded-xl shadow-lg w-full object-contain max-h-[90vh]"
            />
          </div>
        </div>
      )}


      {/* Footer */}
      <div className="h-fit bg-gradient-to-b from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 w-full px-6 pt-16 pb-10 border-t border-neutral-300 dark:border-neutral-700 animate-fade-in">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-4 sm:px-6">

          {/* Section 1: Brand & Deskripsi */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold mb-2 text-neutral-900 dark:text-white">Naufal Bagaskara</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
              Seorang pengembang web yang berfokus pada pengalaman pengguna dan desain interaktif. Portfolio ini menampilkan hasil karya dan pencapaian saya.
            </p>
          </div>

          {/* Section 2: Kontak Info */}
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-semibold mb-3 text-neutral-900 dark:text-white">Kontak</h4>
            <div className="flex items-center text-sm text-gray-700 dark:text-gray-300 gap-2">
              <FaEnvelope />
              <a href="naufalbagaskara31@gmail.com" className="hover:underline">naufalbagaskara31@gmail.com</a>
            </div>
            <div className="flex items-center text-sm text-gray-700 dark:text-gray-300 gap-2 mt-2">
              <FaMapMarkerAlt />
              <span>Bogor Barat, Indonesia</span>
            </div>
            <div className="flex items-center text-sm text-gray-700 dark:text-gray-300 gap-2 mt-2">
              <FaWhatsapp />
              <a href="https://wa.me/628158949179" target="_blank" rel="noopener noreferrer" className="hover:underline">
                +62 815-8949-179
              </a>
            </div>
          </div>

          {/* Section 3: Navigasi Cepat */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-3 text-neutral-900 dark:text-white">Quick Link</h4>
            <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
              <li><a href="#home" className="hover:underline">Beranda</a></li>
              <li><a href="#projects" className="hover:underline">Proyek</a></li>
              <li><a href="#sertifikat" className="hover:underline">Sertifikat</a></li>
              <li><a href="#kontak" className="hover:underline">Kontak</a></li>
            </ul>
          </div>

          {/* Section 4: Sosial Media */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-lg font-semibold mb-3 text-neutral-900 dark:text-white">Ikuti Saya</h4>
            <div className="flex gap-4 text-2xl text-gray-700 dark:text-gray-300">
              <a href="https://github.com/Chavall315" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition">
                <FaGithub />
              </a>
              <a href="https://instagram.com/usernamekamu" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
                <FaInstagram />
              </a>
              <a href="https://wa.me/628158949179" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Naufal Bagaskara. All rights reserved.
          <div className="mt-2">
            <a href="#home" className="text-blue-500 hover:underline">Kembali ke atas ↑</a>
          </div>
        </div>
      </div>
    </div>
  );
}
