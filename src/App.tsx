import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { devices, DeviceCategory, DeviceModel, DeviceIssue } from "./data/devices";
import { Smartphone, Tablet, Laptop, Watch, ChevronRight, ChevronLeft, Check, Star, MapPin, Phone, Mail, Menu, X, Play, ArrowRight, Wrench, Search, MessageCircle, Sparkles, Zap, ArrowLeft } from "lucide-react";

// --- Types ---
interface BookingData {
  device: string;
  model: string;
  issue: string;
  price: string;
  phone: string;
  ticketNumber: string;
}

// --- EMI Banner ---
function EMIBanner() {
  const [show, setShow] = useState(true);
  if (!show) return null;
  return (
    <motion.div 
      initial={{ y: -100 }} animate={{ y: 0 }} 
      className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-emerald-500 to-green-500 text-white text-center py-2.5 text-sm font-semibold shadow-lg flex items-center justify-center gap-2"
    >
      <Sparkles className="w-4 h-4" /> Ask Our Executive for No Cost EMI Offer
      <button onClick={() => setShow(false)} className="ml-2 hover:bg-white/20 rounded-full p-1 transition-colors">✕</button>
    </motion.div>
  );
}

// --- Navbar ---
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [city, setCity] = useState("Hyderabad");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-10 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "top-2" : ""}`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-xl transition-all duration-300 ${scrolled ? "bg-gray-900/95 backdrop-blur-xl shadow-2xl shadow-black/20" : "bg-gray-900"}`}>
        <div className="flex items-center justify-between h-14 lg:h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-green-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/30">
              <Wrench className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-white">Fix<span className="text-emerald-400">Swift</span></span>
          </div>
          <div className="hidden lg:flex items-center gap-6">
            {["Home", "Who we are", "Offers", "Blog"].map((item) => (
              <a key={item} href="#" className="text-gray-300 hover:text-emerald-400 font-medium text-sm transition-colors relative group">
                {item}<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all group-hover:w-full" />
              </a>
            ))}
            <a href="tel:7600997355" className="flex items-center gap-2 text-emerald-400 font-semibold text-sm hover:text-emerald-300 transition-colors">
              <Phone className="w-4 h-4" /> 76009 97355
            </a>
            <div className="flex items-center gap-2 text-gray-300 text-sm cursor-pointer hover:text-white transition-colors" onClick={() => setCity(city === "Hyderabad" ? "Pune" : "Hyderabad")}>
              <MapPin className="w-4 h-4 text-emerald-400" /> {city}
            </div>
            <div className="flex items-center bg-gray-800/80 border border-gray-700 rounded-lg px-3 py-1.5 focus-within:border-emerald-500 transition-colors">
              <input type="text" placeholder="Search" className="bg-transparent text-white text-sm outline-none w-28 placeholder-gray-500" />
              <Search className="w-4 h-4 text-gray-400" />
            </div>
          </div>
          <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800 rounded-b-xl mx-4 mt-1 overflow-hidden" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
            <div className="px-4 py-4 space-y-3">
              {["Home", "Who we are", "Offers", "Blog"].map((item) => (
                <a key={item} href="#" className="block py-2 text-gray-300 font-medium text-sm hover:text-emerald-400">{item}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// --- 3D Hero Image ---
function Hero3DImage() {
  return (
    <div className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center">
      <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-emerald-400/40 to-green-300/20 rounded-full blur-[100px]" />
      <motion.div animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-gradient-to-tr from-yellow-300/20 to-emerald-400/30 rounded-full blur-[80px]" />
      <motion.div className="relative z-10" animate={{ y: [0, -20, 0], rotateX: [10, 15, 10], rotateY: [-15, -10, -15] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} style={{ transformStyle: "preserve-3d" }}>
        <div className="relative w-[320px] h-[420px] lg:w-[400px] lg:h-[520px] bg-gray-900 rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5),0_30px_60px_-30px_rgba(0,0,0,0.3),inset_0_0_0_2px_rgba(255,255,255,0.1)] border-4 border-gray-800 overflow-hidden transform rotate-y-[-15deg] rotate-x-[10deg]">
          <div className="absolute inset-2 bg-black rounded-[2rem] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=800&h=1000&fit=crop" alt="iPhone Display" className="w-full h-full object-cover opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
          </div>
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20" />
        </div>
        <motion.div className="absolute -bottom-10 -right-10 lg:-bottom-16 lg:-right-20 w-[140px] h-[280px] lg:w-[180px] lg:h-[360px] bg-gray-900 rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6),inset_0_0_0_2px_rgba(255,255,255,0.1)] border-4 border-gray-800 overflow-hidden" animate={{ y: [0, -15, 0], rotate: [5, 8, 5] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
          <div className="absolute inset-1.5 bg-black rounded-[1.5rem] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1696446701796-da61225697cc?w=600&h=1200&fit=crop" alt="iPhone" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
          </div>
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-full z-20" />
        </motion.div>
      </motion.div>
    </div>
  );
}

// --- Hero Device Selector ---
function HeroDeviceSelector({ onSelect, selected }: { onSelect: (device: DeviceCategory) => void; selected: string | null }) {
  const deviceList = [
    { id: "iphone", name: "iPhone", icon: <Smartphone className="w-6 h-6" /> },
    { id: "apple-watch", name: "iWatch", icon: <Watch className="w-6 h-6" /> },
    { id: "ipad", name: "iPad", icon: <Tablet className="w-6 h-6" /> },
    { id: "macbook", name: "MacBook", icon: <Laptop className="w-6 h-6" /> },
  ];
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] p-6 lg:p-8 border border-white/50">
      <div className="bg-gray-100/80 py-2.5 px-4 rounded-xl inline-block w-full text-center mb-6 border border-gray-200/50">
        <p className="text-gray-700 font-semibold text-sm flex items-center justify-center gap-2"><Zap className="w-4 h-4 text-emerald-500 fill-emerald-500" /> Select your device to get started now!</p>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-6">
        {deviceList.map((device) => (
          <motion.button key={device.id} onClick={() => onSelect(devices.find(d => d.id === device.id)!)} className={`flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all font-semibold text-base group ${selected === device.id ? "border-emerald-500 bg-emerald-50/80 text-emerald-700 shadow-lg shadow-emerald-100" : "border-gray-200 hover:border-emerald-300 text-gray-700 hover:bg-white hover:shadow-md"}`} whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
            <span className={`transition-colors ${selected === device.id ? "text-emerald-600" : "text-gray-500 group-hover:text-emerald-500"}`}>{device.icon}</span> {device.name}
          </motion.button>
        ))}
      </div>
      <motion.button className="w-full bg-gray-900 text-emerald-400 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-all shadow-lg shadow-gray-900/20 group" whileHover={{ scale: 1.01, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)" }} whileTap={{ scale: 0.99 }}>
        Confirm & Proceed <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </motion.div>
  );
}

// --- Thank You / Confirmation Page ---
function ThankYouPage({ booking, onGoHome }: { booking: BookingData; onGoHome: () => void }) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-2xl mx-auto bg-gray-50 rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-200">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center">
          <Wrench className="w-7 h-7 text-emerald-400" />
        </div>
      </div>
      
      {/* Thank You Heading */}
      <h1 className="text-4xl font-black text-gray-900 text-center mb-8">Thank You</h1>
      
      {/* Phone Number Message */}
      <p className="text-center text-gray-600 mb-6">
        Your quote will be sent via Call/WhatsApp to this number : <span className="font-bold text-gray-900">+91 {booking.phone}</span>
      </p>
      
      {/* Ticket Number */}
      <div className="text-center mb-8">
        <p className="text-gray-600 mb-3">Your ticket number is</p>
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ delay: 0.3, type: "spring" }}
          className="inline-block bg-white border-2 border-gray-200 rounded-2xl px-10 py-4 shadow-lg"
        >
          <p className="text-5xl font-black text-gray-900 tracking-[0.3em]">{booking.ticketNumber.split("").join(" ")}</p>
        </motion.div>
        <p className="text-gray-500 text-sm mt-4 italic">Use this number for any further communication.</p>
      </div>
      
      {/* Working Hours */}
      <div className="text-center space-y-1 mb-8">
        <p className="text-gray-600 text-sm italic">Working Hours • <span className="font-bold text-gray-900">10:00 AM - 09:00 PM</span></p>
        <p className="text-gray-600 text-sm italic">Timings for Calling • <span className="font-bold text-gray-900">09:00 AM - 09:00 PM</span></p>
      </div>
      
      {/* Contact Bar */}
      <div className="bg-emerald-400 rounded-2xl p-4 flex items-center justify-around mb-8 shadow-lg">
        <a href="tel:+917600997355" className="flex items-center gap-2 text-gray-900 font-bold text-sm hover:text-white transition-colors">
          <Phone className="w-5 h-5" /> +91 76009 97355
        </a>
        <a href="mailto:Repair@FixSwift.in" className="flex items-center gap-2 text-gray-900 font-bold text-sm hover:text-white transition-colors">
          <Mail className="w-5 h-5" /> Repair@FixSwift.in
        </a>
        <a href="#" className="flex items-center gap-2 text-gray-900 font-bold text-sm hover:text-white transition-colors">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center"><MessageCircle className="w-3.5 h-3.5 text-emerald-600" /></div>
          Instant Chat
        </a>
      </div>
      
      {/* Go Back Home */}
      <button onClick={onGoHome} className="flex items-center justify-center gap-2 mx-auto text-gray-700 font-bold text-lg hover:text-emerald-600 transition-colors mb-8 group">
        <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" /> Go back Home
      </button>
      
      {/* Location Tagline */}
      <p className="text-center text-gray-700 font-semibold mb-6">{booking.device} Repair Location - You choose, we'll be there!</p>
      
      {/* Cities */}
      <div className="text-center">
        <p className="text-xs font-black text-gray-900 uppercase tracking-wider mb-3">iPhone Repair Service in Cities</p>
        <p className="text-xs text-gray-500 leading-relaxed uppercase tracking-wide">
          Hyderabad, Bangalore, Mumbai, Pune, Chennai, Kolkata, Delhi, Gurgaon, Noida, Faridabad, Ahmedabad, Gandhinagar, Nagpur, Vizag, Jaipur, Chandigarh, Tirupati, Chittoor & Kadapa.
        </p>
      </div>
    </motion.div>
  );
}

// --- Device Flow Component ---
function DeviceFlow({ initialDevice, onReset, onBook }: { initialDevice: DeviceCategory | null; onReset: () => void; onBook: (data: BookingData) => void }) {
  const [step, setStep] = useState(0);
  const [selectedDevice, setSelectedDevice] = useState<DeviceCategory | null>(initialDevice);
  const [selectedModel, setSelectedModel] = useState<DeviceModel | null>(null);
  const [selectedIssue, setSelectedIssue] = useState<DeviceIssue | null>(null);
  const [showVideo, setShowVideo] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showPhoneInput, setShowPhoneInput] = useState(false);

  const steps = ["Device", "Model", "Issue", "Quote"];

  useEffect(() => {
    if (initialDevice) { setSelectedDevice(initialDevice); setStep(1); }
  }, [initialDevice]);

  const handleBack = () => { if (step > 0) setStep(step - 1); };
  const resetFlow = () => { setStep(0); setSelectedDevice(null); setSelectedModel(null); setSelectedIssue(null); setShowVideo(false); setPhoneNumber(""); setShowPhoneInput(false); onReset(); };

  const handleBookNow = () => {
    if (phoneNumber.length >= 10) {
      const ticketNumber = Math.floor(10000 + Math.random() * 90000).toString();
      onBook({
        device: selectedDevice?.name || "",
        model: selectedModel?.name || "",
        issue: selectedIssue?.name || "",
        price: selectedIssue?.price || "",
        phone: phoneNumber,
        ticketNumber,
      });
    }
  };

  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] p-6 lg:p-8 border border-white/50">
      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center relative z-10">
              <motion.div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-all shadow-md ${i <= step ? "bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-emerald-200" : "bg-gray-100 text-gray-400"}`} animate={i === step ? { scale: [1, 1.2, 1] } : {}} transition={{ duration: 0.4 }}>
                {i < step ? <Check className="w-4 h-4" /> : i + 1}
              </motion.div>
              <span className={`text-[10px] mt-2 font-bold uppercase tracking-wider ${i <= step ? "text-emerald-600" : "text-gray-400"}`}>{s}</span>
            </div>
            {i < steps.length - 1 && <div className={`flex-1 h-1 mx-2 rounded-full ${i < step ? "bg-emerald-500" : "bg-gray-100"}`} />}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <HeroDeviceSelector onSelect={(d) => { setSelectedDevice(d); setStep(1); }} selected={null} />
          </motion.div>
        )}

        {step === 1 && selectedDevice && (
          <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">Select your <span className="text-emerald-600">{selectedDevice.name}</span> model</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-72 overflow-y-auto pr-2 custom-scrollbar">
              {selectedDevice.models.map((model) => (
                <motion.button key={model.id} onClick={() => { setSelectedModel(model); setStep(2); }} className="p-3 rounded-xl border-2 border-gray-100 hover:border-emerald-500 hover:bg-emerald-50/50 transition-all text-left group bg-white shadow-sm hover:shadow-md" whileHover={{ scale: 1.03, y: -3 }} whileTap={{ scale: 0.97 }}>
                  <div className="w-full aspect-square bg-gray-50 rounded-lg mb-2 overflow-hidden relative">
                    <img src={model.image} alt={model.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="font-bold text-xs text-gray-800">{model.name}</p>
                </motion.button>
              ))}
            </div>
            <button onClick={handleBack} className="flex items-center gap-1 text-gray-500 hover:text-emerald-600 font-medium text-sm transition-colors"><ChevronLeft className="w-4 h-4" /> Back</button>
          </motion.div>
        )}

        {step === 2 && selectedModel && (
          <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
            <div className="flex items-center gap-4 bg-gray-50 p-3 rounded-xl border border-gray-100">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-white shadow-sm flex-shrink-0">
                <img src={selectedModel.image} alt={selectedModel.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{selectedModel.name}</h3>
                <p className="text-gray-500 text-xs">Select the issue you're facing</p>
              </div>
              {selectedModel.video && (
                <button onClick={() => setShowVideo(!showVideo)} className="ml-auto flex items-center gap-1.5 bg-red-50 text-red-600 px-3 py-1.5 rounded-full text-xs font-bold hover:bg-red-100 transition-colors border border-red-100">
                  <Play className="w-3 h-3 fill-current" /> {showVideo ? "Hide" : "Video"}
                </button>
              )}
            </div>
            <AnimatePresence>
              {showVideo && selectedModel.video && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden rounded-xl shadow-lg">
                  <div className="aspect-video bg-black rounded-xl overflow-hidden border border-gray-200">
                    <iframe src={selectedModel.video} title={`${selectedModel.name} video`} className="w-full h-full" allowFullScreen />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="space-y-2.5 max-h-64 overflow-y-auto pr-1 custom-scrollbar">
              {selectedModel.issues.map((issue) => (
                <motion.button key={issue.id} onClick={() => { setSelectedIssue(issue); setStep(3); }} className="w-full p-4 rounded-xl border-2 border-gray-100 hover:border-emerald-500 hover:bg-emerald-50/30 transition-all text-left flex items-center justify-between group bg-white shadow-sm hover:shadow-md" whileHover={{ x: 4 }}>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{issue.name}</p>
                    <p className="text-xs text-gray-500 mt-1">{issue.description}</p>
                  </div>
                  <div className="text-right flex-shrink-0 ml-3">
                    <p className="font-bold text-emerald-600 text-lg">{issue.price}</p>
                    <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all ml-auto" />
                  </div>
                </motion.button>
              ))}
            </div>
            <button onClick={handleBack} className="flex items-center gap-1 text-gray-500 hover:text-emerald-600 font-medium text-sm transition-colors"><ChevronLeft className="w-4 h-4" /> Back</button>
          </motion.div>
        )}

        {step === 3 && selectedModel && selectedIssue && !showPhoneInput && (
          <motion.div key="step3" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center space-y-6">
            <motion.div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-xl shadow-emerald-200" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, delay: 0.2 }}>
              <Check className="w-10 h-10 text-white" />
            </motion.div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Your Repair Quote</h3>
              <p className="text-gray-500 text-sm mt-2">Estimated cost for your repair</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-100 shadow-inner">
              <div className="flex items-center gap-4 mb-4 bg-white p-3 rounded-xl shadow-sm">
                <img src={selectedModel.image} alt={selectedModel.name} className="w-14 h-14 rounded-lg object-cover shadow-sm" />
                <div className="text-left">
                  <p className="font-bold text-gray-900">{selectedModel.name}</p>
                  <p className="text-xs text-emerald-600 font-medium">{selectedIssue.name}</p>
                </div>
              </div>
              <div className="border-t border-emerald-200 pt-4">
                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Estimated Price</p>
                <p className="text-4xl font-black text-emerald-600 mt-1">{selectedIssue.price}</p>
                <p className="text-xs text-gray-400 mt-2">*Final price may vary after inspection</p>
              </div>
            </div>
            <div className="flex gap-3">
              <motion.button onClick={() => setShowPhoneInput(true)} className="flex-1 bg-gradient-to-r from-emerald-600 to-green-600 text-white py-4 rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-emerald-200 transition-all" whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>Book Now</motion.button>
              <motion.button className="flex-1 border-2 border-emerald-600 text-emerald-600 py-4 rounded-xl font-bold text-sm hover:bg-emerald-50 transition-all" whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>Call Us</motion.button>
            </div>
            <button onClick={resetFlow} className="text-gray-400 hover:text-emerald-600 font-medium text-sm transition-colors">Start Over</button>
          </motion.div>
        )}

        {/* Phone Input Step */}
        {step === 3 && selectedModel && selectedIssue && showPhoneInput && (
          <motion.div key="phoneStep" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Enter Your Phone Number</h3>
              <p className="text-gray-500 text-sm mt-2">We'll send your quote via Call/WhatsApp</p>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <img src={selectedModel.image} alt={selectedModel.name} className="w-12 h-12 rounded-lg object-cover" />
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{selectedModel.name}</p>
                    <p className="text-xs text-emerald-600">{selectedIssue.name} • {selectedIssue.price}</p>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden focus-within:border-emerald-500 transition-colors bg-white">
                  <span className="px-4 py-3.5 bg-gray-100 text-gray-600 font-semibold text-sm border-r border-gray-200">+91</span>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, "").slice(0, 10))}
                    placeholder="Enter 10-digit number"
                    className="flex-1 px-4 py-3.5 outline-none text-gray-900 font-semibold"
                    maxLength={10}
                  />
                </div>
                {phoneNumber.length > 0 && phoneNumber.length < 10 && (
                  <p className="text-red-500 text-xs mt-1">Please enter a valid 10-digit number</p>
                )}
              </div>
              <motion.button
                onClick={handleBookNow}
                disabled={phoneNumber.length < 10}
                className={`w-full py-4 rounded-xl font-bold text-sm transition-all ${phoneNumber.length >= 10 ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white hover:shadow-lg hover:shadow-emerald-200" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
                whileHover={phoneNumber.length >= 10 ? { scale: 1.02, y: -2 } : {}}
                whileTap={phoneNumber.length >= 10 ? { scale: 0.98 } : {}}
              >
                Get Quote & Book
              </motion.button>
              <button onClick={() => setShowPhoneInput(false)} className="w-full text-gray-500 hover:text-emerald-600 font-medium text-sm transition-colors flex items-center justify-center gap-1">
                <ChevronLeft className="w-4 h-4" /> Back to Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// --- Hero Section ---
function Hero({ onBook }: { onBook: (data: BookingData) => void }) {
  const [selectedDevice, setSelectedDevice] = useState<DeviceCategory | null>(null);
  return (
    <section id="home" className="pt-32 lg:pt-40 pb-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-100/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-100/50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <Hero3DImage />
            <div className="max-w-lg mx-auto lg:mx-0 mt-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-100">
                <Star className="w-3 h-3 fill-emerald-500" /> Lifetime Warranty • Lowest Price
              </div>
              <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-[1.1] mb-6">
                India's Highest Rated <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-500">Apple Repairs</span> at your doorstep
              </h1>
              <div className="inline-block border-b-2 border-emerald-500 pb-1 mb-4">
                <span className="text-xs font-black text-gray-800 uppercase tracking-widest">Professional Apple Technicians</span>
              </div>
              <p className="text-gray-600 text-base leading-relaxed">Most trusted iPhone, iPad, iWatch & MacBook repair service in Hyderabad. Expert repair at your location.</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}>
            {selectedDevice ? (
              <DeviceFlow initialDevice={selectedDevice} onReset={() => setSelectedDevice(null)} onBook={onBook} />
            ) : (
              <HeroDeviceSelector onSelect={setSelectedDevice} selected={null} />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- How It Works ---
function HowItWorks() {
  const steps = [
    { num: "1", icon: "📱", title: "Select your device & issue" },
    { num: "2", icon: "💰", title: "Get a FREE quote instantly" },
    { num: "3", icon: "🔧", title: "Technician visits you to fix device in no time" },
  ];
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-emerald-400 via-green-400 to-emerald-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center text-2xl font-black text-gray-900 mb-16">How does it work?</motion.h2>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <motion.div key={i} className="text-center relative group" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }}>
              <div className="text-9xl font-black text-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-0 group-hover:text-white/20 transition-colors group-hover:scale-110 transform duration-500">{step.num}</div>
              <motion.div className="text-6xl mb-6 relative z-10 drop-shadow-lg" whileHover={{ scale: 1.2, rotate: 10 }}>{step.icon}</motion.div>
              <p className="font-black text-gray-900 text-xl leading-tight relative z-10">{step.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Trust Features ---
function TrustFeatures() {
  const features = [
    { icon: "🏆", title: "Lifetime Warranty", desc: "India's only Apple Service Company to provide Lifetime Warranty on Display Repairs.", align: "left" },
    { icon: "🤝", title: "Repairs Done, Right In Front Of You!", desc: "Get your device repaired stressfree! We repair the device at your location, in front of you.", align: "right" },
    { icon: "🚪", title: "Same Day Doorstep Service", desc: "Apple Repair Service is now quick & convenient with FixSwift.", align: "left" },
    { icon: "⭐", title: "Highest Google Ratings", desc: "Rated 4.9/5 by over 10,000+ happy customers across India.", align: "right" },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center text-3xl lg:text-4xl font-black text-gray-900 mb-16">Why FixSwift is your trusted partner</motion.h2>
        <div className="space-y-16">
          {features.map((feature, i) => (
            <motion.div key={i} className={`flex items-center gap-8 ${feature.align === "right" ? "flex-row-reverse text-right" : ""}`} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
              <motion.div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center text-4xl flex-shrink-0 shadow-2xl shadow-emerald-200 border-4 border-white" whileHover={{ scale: 1.1, rotate: 5 }}>{feature.icon}</motion.div>
              <div className={feature.align === "right" ? "text-right" : ""}>
                <h3 className="text-2xl font-black text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-base leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Features Bar ---
function FeaturesBar() {
  const features = [
    { icon: "⭐", title: "Google Ratings" },
    { icon: "🚪", title: "Instant Doorstep Repairs" },
    { icon: "🤝", title: "Repairs right in front of you!" },
    { icon: "🏆", title: "Lifetime Warranty" },
    { icon: "💰", title: "Lowest Prices" },
    { icon: "👨‍🔧", title: "Expert Technicians" },
  ];
  return (
    <section className="py-16 bg-gradient-to-r from-emerald-500 to-green-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center text-2xl font-black text-white mb-12 drop-shadow-md">Fastest iPhone repair service at your home</motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {features.map((f, i) => (
            <motion.div key={i} className="text-center group cursor-default" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <motion.div className="text-5xl mb-4 drop-shadow-lg group-hover:scale-125 transition-transform duration-300" whileHover={{ y: -5 }}>{f.icon}</motion.div>
              <p className="font-black text-white text-sm drop-shadow-md">{f.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Stats ---
function Stats() {
  const stats = [
    { value: "19+", label: "Cities Covered" },
    { value: "3,00,000+", label: "Devices Repaired" },
    { value: "4.9★", label: "Customer Rating" },
    { value: "500+", label: "Expert Technicians" },
  ];
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <motion.div key={i} className="text-center group" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <p className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-600 to-green-500 mb-3 group-hover:scale-110 transition-transform duration-300">{stat.value}</p>
              <p className="text-gray-600 font-bold text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Testimonials ---
function Testimonials() {
  const testimonials = [
    { name: "Rahul Sharma", location: "Hyderabad", rating: 5, text: "Got my iPhone 15 screen replaced in just 25 minutes at my home. Amazing service!", avatar: "RS" },
    { name: "Priya Patel", location: "Bangalore", rating: 5, text: "Best repair service I've ever used. Lifetime warranty gives peace of mind.", avatar: "PP" },
    { name: "Amit Kumar", location: "Mumbai", rating: 5, text: "MacBook battery replacement was quick and professional. Highly recommended!", avatar: "AK" },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center text-3xl lg:text-4xl font-black text-gray-900 mb-16">What our customers say</motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div key={i} className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden group" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} whileHover={{ y: -10 }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-100 transition-colors" />
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-gray-700 text-lg mb-8 italic relative z-10 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg shadow-emerald-200">{t.avatar}</div>
                <div>
                  <p className="font-black text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500 font-medium">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- About Section ---
function AboutSection() {
  return (
    <section className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-gray-600 text-sm leading-relaxed mb-8">SISOLIONLINE SERVICES LLP (FixSwift.in) provides Doorstep Apple Repair Services across Hyderabad, Bangalore, Mumbai, Pune, Chennai, Kolkata, Delhi, Gurgaon, Noida, Faridabad, Ahmedabad, Gandhinagar, Nagpur, Vizag, Jaipur, Chandigarh, Tirupati, Chittoor & Kadapa.</p>
        <h3 className="text-lg font-black text-gray-900 mb-4 uppercase tracking-wider">iPhone & iPad Repairs</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">We come with 17+ years of experience and carry a heartfelt mission to make the process of iPhone, iPad, iWatch & MacBook Repairs really quick & convenient! FixSwift.in currently operates in Hyderabad, Bangalore, Mumbai, Pune, Chennai, Kolkata, Delhi, Gurgaon, Noida, Faridabad, Ahmedabad, Gandhinagar, Nagpur, Vizag, Jaipur, Chandigarh, Tirupati, Chittoor & Kadapa.</p>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">We provide Doorstep Repair Service on the Same Day for all models of iPhones, iPads, iWatch & MacBooks.</p>
        <p className="text-gray-600 text-sm">If you think we can make the process better, please share your thoughts at <a href="mailto:Repair@FixSwift.in" className="text-emerald-600 font-bold underline hover:text-emerald-700">Repair@FixSwift.in</a> & show us some love on <a href="#" className="text-emerald-600 font-bold underline hover:text-emerald-700">Instagram</a> & <a href="#" className="text-emerald-600 font-bold underline hover:text-emerald-700">Facebook</a></p>
      </div>
    </section>
  );
}

// --- Footer ---
function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-500" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-black">Fix<span className="text-emerald-400">Swift</span></span>
            </div>
            <div className="space-y-4">
              <a href="mailto:Repair@FixSwift.in" className="flex items-center justify-center md:justify-start gap-3 text-gray-400 text-sm hover:text-emerald-400 transition-colors group"><Mail className="w-5 h-5 group-hover:scale-110 transition-transform" /> Repair@FixSwift.in</a>
              <a href="tel:+917600997355" className="flex items-center justify-center md:justify-start gap-3 text-gray-400 text-sm hover:text-emerald-400 transition-colors group"><Phone className="w-5 h-5 group-hover:scale-110 transition-transform" /> +91 76009 97355</a>
            </div>
          </div>
          <div className="text-center">
            <h4 className="font-black mb-6 text-sm uppercase tracking-wider text-gray-300">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Who we are", "Offers", "Blog", "FAQ"].map((item) => (
                <li key={item}><a href="#" className="text-gray-500 hover:text-emerald-400 text-sm transition-colors hover:translate-x-1 inline-block transform">{item}</a></li>
              ))}
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h4 className="font-black mb-6 text-sm uppercase tracking-wider text-gray-300">Lets get social</h4>
            <div className="flex items-center justify-center md:justify-start gap-4">
              {[{ color: "bg-blue-600", hover: "hover:bg-blue-700", label: "f" }, { color: "bg-green-500", hover: "hover:bg-green-600", icon: <MessageCircle className="w-5 h-5" /> }, { color: "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400", hover: "hover:opacity-90", label: "IG" }, { color: "bg-sky-500", hover: "hover:bg-sky-600", label: "𝕏" }].map((social, i) => (
                <motion.a key={i} href="#" className={`w-11 h-11 ${social.color} rounded-full flex items-center justify-center text-white font-bold shadow-lg transition-all ${social.hover}`} whileHover={{ scale: 1.15, y: -3 }}>{social.icon || social.label}</motion.a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-600 text-xs">
          <p>© 2026 FixSwift.in — SISOLIONLINE SERVICES LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// --- Main App ---
export default function App() {
  const [booking, setBooking] = useState<BookingData | null>(null);

  const handleBook = (data: BookingData) => {
    setBooking(data);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleGoHome = () => {
    setBooking(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-emerald-200 selection:text-emerald-900">
      <EMIBanner />
      <Navbar />
      {booking ? (
        <section className="pt-32 lg:pt-40 pb-20 bg-gradient-to-br from-gray-50 to-white min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ThankYouPage booking={booking} onGoHome={handleGoHome} />
          </div>
        </section>
      ) : (
        <>
          <Hero onBook={handleBook} />
          <HowItWorks />
          <TrustFeatures />
          <FeaturesBar />
          <Stats />
          <Testimonials />
          <AboutSection />
          <Footer />
        </>
      )}
    </div>
  );
}
