"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, MessageSquare, Zap, Shield, Cpu, Globe, Terminal, CheckCircle, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import demoImage from '../assets/demo.png';

type SectionName = 'hero' | 'features' | 'providers' | 'download' | 'about';

// --- Helper component for the revolving provider logos ---
const ProviderLogos = () => {
  // Use placeholders. Replace these with your actual image paths.
  const providerImages = [
    'https://img.icons8.com/softteal/24/chatgpt.png',
    'https://img.icons8.com/fluency/48/claude.png',
    'https://img.icons8.com/fluency/48/gemini-ai.png',
    'https://img.icons8.com/fluency/48/meta.png',

    'https://img.icons8.com/F2F2F2/48/grok--v1.png', 'https://img.icons8.com/color/48/nvidia.png', 'https://img.icons8.com/softteal/24/chatgpt.png',
    'https://img.icons8.com/fluency/48/claude.png',
    'https://img.icons8.com/fluency/48/gemini-ai.png',
    'https://img.icons8.com/fluency/48/meta.png',

    'https://img.icons8.com/F2F2F2/48/grok--v1.png', 'https://img.icons8.com/color/48/nvidia.png'
  ];

  // Duplicate the array to create a seamless loop
  const duplicatedImages = [...providerImages, ...providerImages];

  return (
    <div className="relative w-full max-w-2xl mx-auto mt-12 overflow-hidden">
      {/* This creates the fading effect on the left and right sides */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>

      <div className="flex animate-scroll">
        {duplicatedImages.map((src, index) => (
          <div key={index} className="flex-shrink-0 mx-6 flex items-center justify-center">
            <img src={src} alt={`Provider logo ${index + 1}`} className="h-12 w-auto object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function EchoLLMLanding() {
  const [activeSection, setActiveSection] = useState<SectionName>('hero');

  // Refs for each section to get their position
  const heroRef = useRef<HTMLElement | null>(null);
  const featuresRef = useRef<HTMLElement | null>(null);
  const providersRef = useRef<HTMLElement | null>(null);
  const downloadRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);

  // --- Effect to handle scroll-based background color change ---
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sections = {
        hero: heroRef.current,
        features: featuresRef.current,
        providers: providersRef.current,
        download: downloadRef.current,
        about: aboutRef.current,
      };

      let currentSection: SectionName = 'hero';
      for (const [name, ref] of Object.entries(sections)) {
        if (ref && ref.offsetTop <= scrollPosition) {
          currentSection = name as SectionName;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- Map sections to background colors ---
  const sectionBackgrounds: Record<SectionName, string> = {
    hero: 'bg-slate-950',
    features: 'bg-slate-900',
    providers: 'bg-[#111827]',
    download: 'bg-slate-950',
    about: 'bg-slate-900',
  };

  return (
    <>
      {/* --- Styles for animations --- */}
      <style jsx global>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>

      <div className={`min-h-screen text-white transition-colors duration-1000 ${sectionBackgrounds[activeSection]}`}>
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Image src='/icon.png' alt="icon" width={50} height={50} className="rounded-md" />
              </div>
              <span className="text-xl font-bold">EchoLLM</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#features" className="text-slate-300 hover:text-white transition-colors">Features</Link>
              <Link href="#download" className="text-slate-300 hover:text-white transition-colors">Download</Link>
              <Link href="https://github.com/ThatlinuxGuyYouKnow/echollm" target="_blank" className="text-slate-300 hover:text-white transition-colors">GitHub</Link>
              <Link href="#about" className="text-slate-300 hover:text-white transition-colors">About</Link>
            </nav>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="#download">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Link>
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section ref={heroRef} id="hero" className="py-20 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <div className="flex justify-center items-center gap-2">
              <Badge variant="secondary" className="mb-4 bg-blue-600/20 text-blue-400 border-blue-600/30">Local AI Inference Platform</Badge>
              <Badge variant="secondary" className="mb-4 bg-green-600/20 text-green-400 border-green-600/30">
                <Github className="w-3 h-3 mr-1.5" />
                Open Source
              </Badge>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Access All LLMs
              <br />
              <span className="text-blue-400">Locally & Privately</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              EchoLLM is an open-source platform that brings together the best language models in one unified, privacy-focused application that runs entirely on your machine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3" asChild>
                <Link href="#download">
                  <Download className="w-5 h-5 mr-2" />
                  Download for Linux
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 bg-slate-800 text-white hover:bg-slate-700 hover:border-slate-500 text-lg px-8 py-3"
                asChild
              >
                <Link href="https://github.com/ThatlinuxGuyYouKnow/echollm" target="_blank">
                  <Github className="w-5 h-5 mr-2" />
                  View on GitHub
                </Link>
              </Button>
            </div>
            <div className="mt-12">
              <Image
                src={demoImage}
                alt="EchoLLM Interface"
                width={800}
                height={500}
                className="rounded-lg border border-slate-700 shadow-2xl mx-auto"
                priority
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section ref={featuresRef} id="features" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Yeah, but why EchoLLM?</h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Experience the power of AI without compromising on privacy, performance, or flexibility.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Your feature cards remain here */}
              <Card className="bg-slate-800/50 border-slate-700"><CardHeader><Shield className="w-10 h-10 text-blue-400 mb-2" /><CardTitle className="text-white">Complete Privacy</CardTitle><CardDescription className="text-slate-300">Your data never leaves your machine. No cloud dependencies, no data collection.</CardDescription></CardHeader></Card>
              <Card className="bg-slate-800/50 border-slate-700"><CardHeader><Globe className="w-10 h-10 text-blue-400 mb-2" /><CardTitle className="text-white">All Major Providers</CardTitle><CardDescription className="text-slate-300">Access models from OpenAI, Anthropic, Google, Meta, and more through one interface.</CardDescription></CardHeader></Card>
              <Card className="bg-slate-800/50 border-slate-700"><CardHeader><Cpu className="w-10 h-10 text-blue-400 mb-2" /><CardTitle className="text-white">Optimized Performance</CardTitle><CardDescription className="text-slate-300">Built for Linux with native performance optimizations and efficient resource usage.</CardDescription></CardHeader></Card>
              <Card className="bg-slate-800/50 border-slate-700"><CardHeader><Terminal className="w-10 h-10 text-blue-400 mb-2" /><CardTitle className="text-white">Developer Friendly</CardTitle><CardDescription className="text-slate-300">Tools, and extensive documentation for seamless integration.</CardDescription></CardHeader></Card>
              <Card className="bg-slate-800/50 border-slate-700"><CardHeader><Zap className="w-10 h-10 text-blue-400 mb-2" /><CardTitle className="text-white">Lightning Fast</CardTitle><CardDescription className="text-slate-300">No / minimal network latency. Instant responses with local model inference.</CardDescription></CardHeader></Card>
              <Card className="bg-slate-800/50 border-slate-700"><CardHeader><MessageSquare className="w-10 h-10 text-blue-400 mb-2" /><CardTitle className="text-white">Unified Interface</CardTitle><CardDescription className="text-slate-300">Switch between models seamlessly with our intuitive chat interface.</CardDescription></CardHeader></Card>
            </div>
          </div>
        </section>

        {/* --- NEW: All Providers Section --- */}
        <section ref={providersRef} id="providers" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">All the Major Providers, in One Place</h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                We support a vast ecosystem of models, giving you the freedom to choose the best tool for the job.
              </p>
            </div>
            <ProviderLogos />
          </div>
        </section>

        {/* Download Section */}
        <section ref={downloadRef} id="download" className="py-20 px-4">

          <div className="container mx-auto max-w-4xl"><div className="text-center mb-12"><h2 className="text-4xl font-bold mb-4">Get Started Today</h2><p className="text-xl text-slate-300">Download EchoLLM for your Linux distribution and start using AI locally.</p></div><div className="grid md:grid-cols-2 gap-8"><Card className="bg-slate-800/50 border-slate-700"><CardHeader><CardTitle className="text-white flex items-center"><Terminal className="w-6 h-6 mr-2 text-blue-400" />Ubuntu / Debian</CardTitle><CardDescription className="text-slate-300">Recommended for most users</CardDescription></CardHeader><CardContent className="space-y-4"><div className="bg-slate-900 p-4 rounded-lg font-mono text-sm"><div className="text-slate-400"># Download and install</div><div className="text-green-400">wget https://github.com/ThatLinuxGuyYouKnow/EchoLLM/releases/download/alpha/echo_llm-1.0.0+1-linux.deb</div><div className="text-green-400">sudo dpkg -i echo_llm-1.0.0+1-linux.deb</div></div><Button
            className="w-full bg-blue-600 hover:bg-blue-700"
            asChild
          >
            <Link
              href="https://github.com/ThatLinuxGuyYouKnow/EchoLLM/releases/download/alpha/echo_llm-1.0.0+1-linux.deb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="w-4 h-4 mr-2" />
              Download .deb Package
            </Link>
          </Button></CardContent></Card><Card className="bg-slate-800/50 border-slate-700"><CardHeader><CardTitle className="text-white flex items-center"><Terminal className="w-6 h-6 mr-2 text-blue-400" />Other Distributions</CardTitle><CardDescription className="text-slate-300">AppImage for universal compatibility</CardDescription></CardHeader><CardContent className="space-y-4"><div className="bg-slate-900 p-4 rounded-lg font-mono text-sm"><div className="text-slate-400"># Download and run</div><div className="text-green-400">wget https://releases.echollm.dev/EchoLLM.AppImage</div><div className="text-green-400">chmod +x EchoLLM.AppImage</div><div className="text-green-400">./EchoLLM.AppImage</div></div><Button
            variant="outline"
            className="w-full border-slate-600 bg-slate-800 text-white hover:bg-slate-700 hover:border-slate-500"
          >
            <Download className="w-4 h-4 mr-2" />
            Download AppImage
          </Button></CardContent></Card></div></div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} id="about" className="py-20 px-4">

          <div className="container mx-auto max-w-4xl"><div className="text-center mb-12"><h2 className="text-4xl font-bold mb-4">Built for Privacy & Performance</h2><p className="text-xl text-slate-300">EchoLLM is designed from the ground up to give you complete control over your AI interactions.</p></div><div className="grid md:grid-cols-2 gap-12 items-center"><div><h3 className="text-2xl font-bold mb-6">Key Benefits</h3><div className="space-y-4"><div className="flex items-start space-x-3"><CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" /><div><h4 className="font-semibold text-white">Zero Data Collection</h4><p className="text-slate-300">Your conversations and data never leave your machine.</p></div></div><div className="flex items-start space-x-3"><CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" /><div><h4 className="font-semibold text-white">Offline Capable</h4><p className="text-slate-300">Works completely offline with local models.</p></div></div><div className="flex items-start space-x-3"><CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" /><div><h4 className="font-semibold text-white">100% Open Source</h4><p className="text-slate-300">Audit the code, contribute features, and be part of the community.</p></div></div></div></div><div className="bg-slate-800/30 p-8 rounded-lg"><h3 className="text-xl font-bold mb-4">Supported Models</h3><div className="grid grid-cols-2 gap-4 text-sm"><div><h4 className="font-semibold text-blue-400 mb-2">OpenAI</h4><ul className="text-slate-300 space-y-1"><li>• GPT-4.1</li><li>• GPT-3.5</li><li>• GPT-4 Turbo</li></ul></div><div><h4 className="font-semibold text-blue-400 mb-2">Anthropic</h4><ul className="text-slate-300 space-y-1"><li>• Claude 3</li><li>• Claude 2</li><li>• Claude Instant</li></ul></div><div><h4 className="font-semibold text-blue-400 mb-2">Google</h4><ul className="text-slate-300 space-y-1"><li>• Gemini 2.0 Flash Lite</li><li>• Gemini 2.0 Flash</li><li>• Gemini 2.5 Pro</li></ul></div><div><h4 className="font-semibold text-blue-400 mb-2">X-AI</h4><ul className="text-slate-300 space-y-1"><li>• Grok 2</li><li>• Grok 3</li><li>• Grok 3 mini</li></ul></div></div></div></div></div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800 py-12 px-4">

          <div className="container mx-auto"><div className="grid md:grid-cols-4 gap-8"><div><div className="flex items-center space-x-2 mb-4"><div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center"><Image src={'/icon.png'} alt='Logo' width={60} height={60} className="rounded-md" /></div><span className="text-xl font-bold">EchoLLM</span></div><p className="text-slate-400">The privacy-first local AI inference platform for Linux.</p></div><div><h4 className="font-semibold mb-4">Product</h4><ul className="space-y-2 text-slate-400"><li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li><li><Link href="#download" className="hover:text-white transition-colors">Download</Link></li><li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li></ul></div><div><h4 className="font-semibold mb-4">Community</h4><ul className="space-y-2 text-slate-400"><li><Link href="https://github.com/ThatlinuxGuyYouKnow/echollm" target="_blank" className="hover:text-white transition-colors">GitHub</Link></li><li><Link href="#" className="hover:text-white transition-colors">Discord</Link></li></ul></div><div><h4 className="font-semibold mb-4">Company</h4><ul className="space-y-2 text-slate-400"><li><Link href="#about" className="hover:text-white transition-colors">About</Link></li><li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li></ul></div></div><div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400"><p>&copy; 2025 EchoLLM. All rights reserved.</p></div></div>
        </footer>
      </div>
    </>
  )
}