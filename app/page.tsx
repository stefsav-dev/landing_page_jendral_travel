import { Button } from "@/components/ui/button";
import { Award, Car, Clock, Mail, MapPin, Medal, MessageSquare, PhoneCall, Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const routeCards = [
  {
    city: "Magelang",
    region: "CENTRAL JAVA",
    routes: ["MAGELANG - KARAWANG (PP)", "MAGELANG - BEKASI (PP)", "MAGELANG - JAKARTA (PP)", "MAGELANG - BOGOR (PP)", "MAGELANG - DEPOK (PP)", "MAGELANG - TANGERANG (PP)"]
  },
  {
    city: "Jogja",
    region: "CULTURE CENTER",
    routes: ["JOGJA - KARAWANG (PP)", "JOGJA - BEKASI (PP)", "JOGJA - JAKARTA (PP)", "JOGJA - BOGOR (PP)", "JOGJA - DEPOK (PP)", "JOGJA - TANGERANG (PP)"]
  },
  {
    city: "Semarang",
    region: "CAPITAL CITY",
    routes: ["SEMARANG - KARAWANG (PP)", "SEMARANG - BEKASI (PP)", "SEMARANG - JAKARTA (PP)", "SEMARANG - BOGOR (PP)", "SEMARANG - DEPOK (PP)", "SEMARANG - TANGERANG (PP)"]
  },
  {
    city: "Klaten",
    region: "HISTORICAL",
    routes: ["KLATEN - KARAWANG (PP)", "KLATEN - BEKASI (PP)", "KLATEN - JAKARTA (PP)", "KLATEN - BOGOR (PP)", "KLATEN - DEPOK (PP)", "KLATEN - TANGERANG (PP)"]
  }
];

const popularTags = [
  "MAGELANG - BEKASI",
  "MAGELANG - JAKARTA",
  "MAGELANG - BOGOR",
  "MAGELANG - DEPOK",
  "MAGELANG - TANGERANG"
];

const fleetData = [
  { image: "/assets/bagian_9.png", imageText: "HIACE", title: "Hiace Luxury", capacity: "14 ORANG", desc: "Fasilitas AC Single, Kursi Reclining, Audio & Video." },
  { image: "/assets/bagian_10.png", imageText: "INNOVA", title: "Innova Zenix", capacity: "14 ORANG", desc: "Layanan shuttle premium dengan kabin lega." },
  { image: "/assets/bagian_11.png", imageText: "LUXIO", title: "Luxio", capacity: "8 ORANG", desc: "Nyaman dan bertenaga untuk perjalanan keluarga." },
  { image: "/assets/bagian_12.png", imageText: "HIACE", title: "HIACE", capacity: "6 ORANG", desc: "Unit hemat dan handal untuk rute antarkota." },
  { image: "/assets/bagian_13.png", imageText: "LUXURY HIACE PREMIO", title: "Luxury Hiace Premio", capacity: "8 ORANG", desc: "Interior mewah VIP dengan Captain Seat." },
  { image: "/assets/bagian_14.png", imageText: "NEW AVANZA", title: "New Avanza", capacity: "7 ORANG", desc: "Kapasitas besar untuk rombongan wisata." },
  { image: "/assets/bagian_15.png", imageText: "REBORN", title: "Innova Reborn", desc: "Layanan ekspedisi barang volume besar." },
  { image: "/assets/bagian_16.png", imageText: "ALPHARD", title: "Alphard", capacity: "31 ORANG", desc: "Bus pariwisata medium dengan seat nyaman." },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white overflow-hidden selection:bg-yellow-500/30">
      {/* Background Gradient Effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="container mx-auto px-6 md:px-12 py-6 flex items-center justify-between z-10 relative">
        <div className="text-2xl font-black tracking-widest uppercase flex items-center gap-2">
          <span>JENDRAL</span>
          <span className="text-yellow-500">TRAVEL</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-200">
          <Link href="#" className="hover:text-yellow-500 transition-colors">Rute</Link>
          <Link href="#" className="hover:text-yellow-500 transition-colors">Armada</Link>
          <Link href="#" className="hover:text-yellow-500 transition-colors">Reguler</Link>
          <Link href="#" className="hover:text-yellow-500 transition-colors">Carter</Link>
          <Link href="#" className="hover:text-yellow-500 transition-colors">Ekspedisi</Link>
        </div>

        <Button className="hidden md:inline-flex bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full px-6 transition-all shadow-[0_0_15px_rgba(234,179,8,0.2)] hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]">
          Reservasi
        </Button>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 md:px-12 pt-12 pb-24 lg:pt-20 lg:pb-68 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/60 border border-slate-700/50 backdrop-blur-sm text-xs font-medium text-slate-300">
            <Award className="w-4 h-4 text-yellow-500" />
            <span>Travel Executive #1 di Indonesia</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Jendral <span className="text-yellow-500">Travel</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
            Solusi transportasi premier dengan standar kenyamanan eksekutif. Nikmati perjalanan aman, nyaman, dan profesional ke berbagai destinasi pilihan Anda.
          </p>

          <div className="flex flex-wrap gap-3 mt-2 mb-4">
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1E293B]/80 border border-slate-700/50 shadow-sm">
              <Car className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium text-slate-200">Unit Lengkap</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1E293B]/80 border border-slate-700/50 shadow-sm">
              <Wallet className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium text-slate-200">Harga Murah</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1E293B]/80 border border-slate-700/50 shadow-sm">
              <Medal className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium text-slate-200">Profesional</span>
            </div>
          </div>

          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-full px-8 py-6 text-lg transition-all shadow-[0_0_20px_rgba(234,179,8,0.25)] hover:shadow-[0_0_25px_rgba(234,179,8,0.4)] hover:-translate-y-0.5">
            Pesan Sekarang
          </Button>
        </div>

        {/* Right Content / Image Area */}
        <div className="relative w-full aspect-square mt-10 lg:mt-0">
          <div className="absolute inset-0 bg-white rounded-lg shadow-2xl overflow-hidden p-2">
            <div className="w-full h-full bg-slate-50 rounded-md relative overflow-hidden">
               <Image 
                 src="/assets/bagian_5.png" 
                 alt="Jendral Travel Hero Banner" 
                 fill
                 className="object-cover"
                 priority
               />
            </div>
          </div>
          
          <div className="absolute -inset-4 bg-linear-to-tr from-yellow-500/10 to-blue-500/10 rounded-[1.5rem] blur-2xl -z-10"></div>
        </div>

      </main>

      {/* Layanan Kami Section */}
      <section className="bg-[#0A0A0A] py-55 relative z-20">
        <div className="container mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-widest text-white uppercase mb-4">Layanan Kami</h2>
            <div className="w-16 h-1 bg-yellow-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-slate-400 text-sm md:text-base">
              Pilih kategori layanan yang sesuai dengan kebutuhan perjalanan atau pengiriman Anda.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Card 1: Travel Reguler */}
            <div className="bg-[#1A1A1A] rounded-3xl p-8 border border-white/5 relative overflow-hidden group hover:border-yellow-500/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-6 border border-yellow-500/20">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500"><title>Travel Icon</title><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M12 5v14"/></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Travel Reguler</h3>
              <p className="text-slate-400 text-sm mb-8 min-h-[60px]">
                Layanan door-to-door harian dengan jadwal keberangkatan yang pasti.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500"><title>Check Icon</title><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg></div>
                  <span className="text-xs font-semibold text-slate-300">Door to Door / Shuttle</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500"><title>Check Icon</title><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg></div>
                  <span className="text-xs font-semibold text-slate-300">Free Makan & Minum</span>
                </div>
              </div>
              <Button className="w-full bg-transparent hover:bg-yellow-500 hover:text-black border border-yellow-500 text-yellow-500 rounded-full transition-colors">
                Lihat Detail
              </Button>
              <div className="absolute -bottom-4 -right-4 text-7xl font-black text-white/2 uppercase pointer-events-none group-hover:text-white/4 transition-colors">
                Reguler
              </div>
            </div>

            {/* Card 2: Carter Drop / PP */}
            <div className="bg-[#1A1A1A] rounded-3xl p-8 border border-white/5 relative overflow-hidden group hover:border-yellow-500/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-6 border border-yellow-500/20">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500"><title>Carter Icon</title><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Carter Drop / PP</h3>
              <p className="text-slate-400 text-sm mb-8 min-h-[60px]">
                Sewa satu mobil penuh untuk keperluan keluarga, wisata, atau dinas.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500"><title>Check Icon</title><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg></div>
                  <span className="text-xs font-semibold text-slate-300">Waktu Fleksibel</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500"><title>Check Icon</title><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg></div>
                  <span className="text-xs font-semibold text-slate-300">Private Journey</span>
                </div>
              </div>
              <Button className="w-full bg-transparent hover:bg-yellow-500 hover:text-black border border-yellow-500 text-yellow-500 rounded-full transition-colors">
                Lihat Detail
              </Button>
              <div className="absolute -bottom-4 -right-4 text-7xl font-black text-white/2 uppercase pointer-events-none group-hover:text-white/4 transition-colors">
                Carter
              </div>
            </div>

            {/* Card 3: Ekspedisi Barang */}
            <div className="bg-[#1A1A1A] rounded-3xl p-8 border border-white/5 relative overflow-hidden group hover:border-yellow-500/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-6 border border-yellow-500/20">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500"><title>Ekspedisi Icon</title><path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"/><path d="M14 9h4l4 4v5c0 .6-.4 1-1 1h-2"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Ekspedisi Barang</h3>
              <p className="text-slate-400 text-sm mb-8 min-h-[60px]">
                Kirim paket kilat aman dan terpercaya, sampai di hari yang sama.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500"><title>Check Icon</title><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg></div>
                  <span className="text-xs font-semibold text-slate-300">Same Day Service</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500"><title>Check Icon</title><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg></div>
                  <span className="text-xs font-semibold text-slate-300">Keamanan Terjamin</span>
                </div>
              </div>
              <Button className="w-full bg-transparent hover:bg-yellow-500 hover:text-black border border-yellow-500 text-yellow-500 rounded-full transition-colors">
                Lihat Detail
              </Button>
              <div className="absolute -bottom-4 -right-4 text-7xl font-black text-white/2 uppercase pointer-events-none group-hover:text-white/4 transition-colors">
                Ekspedisi
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Rute Populer Section */}
      <section className="bg-[#141414] py-24 relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-widest text-white uppercase mb-4">Rute Populer</h2>
              <div className="w-16 h-1 bg-yellow-500 mb-6 rounded-full"></div>
              <p className="text-slate-400 text-sm md:text-base max-w-2xl">
                Jadwal harian Magelang - Karawang - Bekasi - Jakarta - Bogor - Depok - Tangerang
              </p>
            </div>
            
            {/* Departure Info Badge */}
            <div className="flex items-center gap-4 bg-[#1A1A1A] border border-white/10 rounded-full px-6 py-3">
              <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-yellow-500" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Keberangkatan</p>
                <p className="text-sm font-bold text-white">19.00 & 21.00 WIB</p>
              </div>
            </div>
          </div>

          {/* Route Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {routeCards.map((card) => (
              <div key={card.city} className="bg-linear-to-b from-[#0e528b] via-[#083057] to-[#111111] rounded-[2rem] p-6 flex flex-col h-full border border-white/5 relative overflow-hidden group">
                <h3 className="text-3xl font-black text-white text-center mb-6 tracking-widest">RUTE</h3>
                
                <div className="space-y-2 mb-8 grow">
                  {card.routes.map((route, rIdx) => (
                    <div key={route} className={`text-center py-2 px-2 rounded-full text-[10px] font-bold ${rIdx % 2 === 0 ? 'bg-white text-[#0A335C]' : 'bg-white/10 text-white border border-white/20'}`}>
                      {route}
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex justify-between items-center text-[10px] text-slate-300 border-b border-white/10 pb-1.5">
                    <span>Keberangkatan :</span>
                    <span className="font-semibold text-white">19.00, 21.00 WIB</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] text-slate-300 border-b border-white/10 pb-1.5">
                    <span>Armada :</span>
                    <span className="font-semibold text-white">Hiace, Innova, Avanza</span>
                  </div>
                </div>

                <div className="mt-auto relative z-10">
                  <p className="text-[10px] text-yellow-500 font-bold tracking-[0.2em] uppercase mb-0.5">{card.region}</p>
                  <p className="text-2xl font-bold text-white tracking-wide">{card.city}</p>
                </div>

                {/* Subtle watermark overlay on card */}
                <div className="absolute -bottom-6 -right-2 text-7xl font-black text-black/20 uppercase pointer-events-none">
                  {card.city}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Tag Cloud Container */}
          <div className="bg-[#1A1A1A] rounded-[2rem] p-6 md:p-8 flex flex-wrap justify-center items-center gap-3 border border-white/5 max-w-5xl mx-auto">
            {popularTags.map((tag) => (
              <div key={tag} className="bg-[#2A2A2A] hover:bg-yellow-500 hover:text-black transition-colors px-6 py-3 rounded-full text-[11px] font-bold text-slate-300 uppercase tracking-wider cursor-pointer border border-white/5 shadow-sm">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Armada Kami Section */}
      <section className="bg-[#111111] py-24 relative z-10 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fleetData.map((fleet) => (
              <div key={fleet.title} className="bg-[#1A1A1A] border border-white/5 rounded-2xl p-4 flex flex-col group hover:border-yellow-500/30 transition-colors">
                
                {/* Image Container */}
                <div className="bg-linear-to-b from-[#1464A5] to-[#0A335C] aspect-square rounded-xl relative overflow-hidden mb-5">
                  <Image 
                    src={fleet.image} 
                    alt={fleet.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>

                {/* Card Content */}
                <div className="px-2 pb-2 grow flex flex-col">
                  <div className="flex justify-between items-start mb-2 gap-2">
                    <h4 className="text-lg font-bold text-white leading-tight">{fleet.title}</h4>
                    <span className="bg-[#332f1f] text-yellow-500 rounded px-2 py-1 text-[9px] font-black whitespace-nowrap mt-1 border border-yellow-500/20">
                      {fleet.capacity}
                    </span>
                  </div>
                  <p className="text-[13px] text-slate-400 leading-snug">
                    {fleet.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1D5A9C] py-24 relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="bg-[#184D87] rounded-[2rem] p-10 md:p-16 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden border border-white/5">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#FFF 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 relative z-10">
              Siap Untuk Perjalanan Anda?
            </h2>
            <p className="text-slate-200 text-sm md:text-base mb-10 max-w-2xl mx-auto relative z-10 font-medium">
              Hubungi admin kami sekarang untuk mendapatkan penawaran harga terbaik dan ketersediaan jadwal yang Anda inginkan.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-full px-8 py-6 w-full sm:w-auto shadow-lg hover:shadow-xl transition-all">
                <MessageSquare className="w-5 h-5 mr-2" />
                Reservasi WhatsApp
              </Button>
              <Button className="bg-[#2B6CB5] hover:bg-[#347CCB] text-white font-bold rounded-full px-8 py-6 w-full sm:w-auto shadow-lg hover:shadow-xl transition-all border border-white/10">
                <PhoneCall className="w-5 h-5 mr-2" />
                Telepon Sekarang
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] pt-20 pb-8 border-t border-[#111]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Column 1: Brand */}
            <div>
              <div className="text-2xl font-black tracking-widest uppercase flex items-center gap-2 mb-6">
                <span className="text-white">Jendral</span>
                <span className="text-yellow-500">Travel</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                Penyedia jasa transportasi eksekutif yang mengedepankan kepuasan dan keselamatan pelanggan di setiap perjalanan.
              </p>
              <div className="flex gap-3">
                <a href="/" className="w-10 h-10 rounded-lg bg-[#1A1A1A] border border-white/5 flex items-center justify-center text-slate-400 hover:text-yellow-500 hover:border-yellow-500/50 transition-colors">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><title>Instagram Icon</title><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="/" className="w-10 h-10 rounded-lg bg-[#1A1A1A] border border-white/5 flex items-center justify-center text-slate-400 hover:text-yellow-500 hover:border-yellow-500/50 transition-colors">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><title>Facebook Icon</title><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
              </div>
            </div>

            {/* Column 2: Rute Populer */}
            <div>
              <h4 className="text-white font-bold tracking-widest uppercase mb-6 text-xs">RUTE POPULER</h4>
              <ul className="space-y-4 text-sm text-slate-300 font-medium">
                <li><Link href="#" className="hover:text-yellow-500 transition-colors">Magelang - Jakarta</Link></li>
                <li><Link href="#" className="hover:text-yellow-500 transition-colors">Magelang - Tangerang</Link></li>
                <li><Link href="#" className="hover:text-yellow-500 transition-colors">Magelang - Bogor</Link></li>
                <li><Link href="#" className="hover:text-yellow-500 transition-colors">Magelang - Depok</Link></li>
              </ul>
            </div>

            {/* Column 3: Layanan */}
            <div>
              <h4 className="text-white font-bold tracking-widest uppercase mb-6 text-xs">LAYANAN</h4>
              <ul className="space-y-4 text-sm text-slate-300 font-medium">
                <li><Link href="#" className="hover:text-yellow-500 transition-colors">Travel Reguler</Link></li>
                <li><Link href="#" className="hover:text-yellow-500 transition-colors">Carter Eksekutif</Link></li>
                <li><Link href="#" className="hover:text-yellow-500 transition-colors">Antar Paket Kilat</Link></li>
                <li><Link href="#" className="hover:text-yellow-500 transition-colors">Sewa Bus Pariwisata</Link></li>
              </ul>
            </div>

            {/* Column 4: Kontak */}
            <div>
              <h4 className="text-white font-bold tracking-widest uppercase mb-6 text-xs">KONTAK KAMI</h4>
              <ul className="space-y-4 text-sm text-slate-300 font-medium">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                  <span>Jl. Pangeran Diponegoro No. 24, Magelang, Jawa Tengah</span>
                </li>
                <li className="flex items-center gap-3">
                  <PhoneCall className="w-5 h-5 text-yellow-500 shrink-0" />
                  <span>+62 812 3456 7890</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-yellow-500 shrink-0" />
                  <span>info@jendraltravel.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-medium text-slate-500 tracking-wide">
            <p>&copy; 2024 Jendral Travel. Premier Transport Solutions.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-slate-300 transition-colors">Syarat & Ketentuan</Link>
              <Link href="#" className="hover:text-slate-300 transition-colors">Kebijakan Privasi</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
