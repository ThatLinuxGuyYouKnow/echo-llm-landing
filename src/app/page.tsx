import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, MessageSquare, Zap, Shield, Cpu, Globe, Terminal, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function EchoLLMLanding() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/95 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">EchoLLM</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-slate-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#download" className="text-slate-300 hover:text-white transition-colors">
              Download
            </Link>
            <Link href="#about" className="text-slate-300 hover:text-white transition-colors">
              About
            </Link>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-4 bg-blue-600/20 text-blue-400 border-blue-600/30">
            Local AI Inference Platform
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Access All LLMs
            <br />
            <span className="text-blue-400">Locally & Privately</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            EchoLLM brings together the best language models from all major providers in one unified, privacy-focused
            platform that runs entirely on your machine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
              <Download className="w-5 h-5 mr-2" />
              Download for Linux
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 text-lg px-8 py-3"
            >
              View Documentation
            </Button>
          </div>
          <div className="mt-12">
            <Image
              src="/images/ui-screenshot.png"
              alt="EchoLLM Interface"
              width={800}
              height={500}
              className="rounded-lg border border-slate-700 shadow-2xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose EchoLLM?</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Experience the power of AI without compromising on privacy, performance, or flexibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Shield className="w-10 h-10 text-blue-400 mb-2" />
                <CardTitle className="text-white">Complete Privacy</CardTitle>
                <CardDescription className="text-slate-300">
                  Your data never leaves your machine. No cloud dependencies, no data collection.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Globe className="w-10 h-10 text-blue-400 mb-2" />
                <CardTitle className="text-white">All Major Providers</CardTitle>
                <CardDescription className="text-slate-300">
                  Access models from OpenAI, Anthropic, Google, Meta, and more through one interface.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Cpu className="w-10 h-10 text-blue-400 mb-2" />
                <CardTitle className="text-white">Optimized Performance</CardTitle>
                <CardDescription className="text-slate-300">
                  Built for Linux with native performance optimizations and efficient resource usage.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Terminal className="w-10 h-10 text-blue-400 mb-2" />
                <CardTitle className="text-white">Developer Friendly</CardTitle>
                <CardDescription className="text-slate-300">
                  REST API, CLI tools, and extensive documentation for seamless integration.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Zap className="w-10 h-10 text-blue-400 mb-2" />
                <CardTitle className="text-white">Lightning Fast</CardTitle>
                <CardDescription className="text-slate-300">
                  No network latency. Instant responses with local model inference.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <MessageSquare className="w-10 h-10 text-blue-400 mb-2" />
                <CardTitle className="text-white">Unified Interface</CardTitle>
                <CardDescription className="text-slate-300">
                  Switch between models seamlessly with our intuitive chat interface.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get Started Today</h2>
            <p className="text-xl text-slate-300">
              Download EchoLLM for your Linux distribution and start using AI locally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Terminal className="w-6 h-6 mr-2 text-blue-400" />
                  Ubuntu / Debian
                </CardTitle>
                <CardDescription className="text-slate-300">Recommended for most users</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-slate-900 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400"># Download and install</div>
                  <div className="text-green-400">wget https://releases.echollm.dev/echollm_latest_amd64.deb</div>
                  <div className="text-green-400">sudo dpkg -i echollm_latest_amd64.deb</div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Download className="w-4 h-4 mr-2" />
                  Download .deb Package
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Terminal className="w-6 h-6 mr-2 text-blue-400" />
                  Other Distributions
                </CardTitle>
                <CardDescription className="text-slate-300">AppImage for universal compatibility</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-slate-900 p-4 rounded-lg font-mono text-sm">
                  <div className="text-slate-400"># Download and run</div>
                  <div className="text-green-400">wget https://releases.echollm.dev/EchoLLM.AppImage</div>
                  <div className="text-green-400">chmod +x EchoLLM.AppImage</div>
                  <div className="text-green-400">./EchoLLM.AppImage</div>
                </div>
                <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-800">
                  <Download className="w-4 h-4 mr-2" />
                  Download AppImage
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-6">System Requirements</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800/30 p-6 rounded-lg">
                <h4 className="font-semibold mb-2 text-blue-400">Minimum</h4>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li>• 8GB RAM</li>
                  <li>• 4 CPU cores</li>
                  <li>• 10GB storage</li>
                  <li>• Ubuntu 20.04+</li>
                </ul>
              </div>
              <div className="bg-slate-800/30 p-6 rounded-lg">
                <h4 className="font-semibold mb-2 text-blue-400">Recommended</h4>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li>• 16GB RAM</li>
                  <li>• 8 CPU cores</li>
                  <li>• 50GB storage</li>
                  <li>• NVIDIA GPU</li>
                </ul>
              </div>
              <div className="bg-slate-800/30 p-6 rounded-lg">
                <h4 className="font-semibold mb-2 text-blue-400">Optimal</h4>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li>• 32GB+ RAM</li>
                  <li>• 16+ CPU cores</li>
                  <li>• 100GB+ storage</li>
                  <li>• RTX 4090</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Built for Privacy & Performance</h2>
            <p className="text-xl text-slate-300">
              EchoLLM is designed from the ground up to give you complete control over your AI interactions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Zero Data Collection</h4>
                    <p className="text-slate-300">Your conversations and data never leave your machine.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Offline Capable</h4>
                    <p className="text-slate-300">Works completely offline with local models.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Enterprise Ready</h4>
                    <p className="text-slate-300">Perfect for organizations with strict data policies.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/30 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Supported Models</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">OpenAI</h4>
                  <ul className="text-slate-300 space-y-1">
                    <li>• GPT-4.1</li>
                    <li>• GPT-3.5</li>
                    <li>• GPT-4 Turbo</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">Anthropic</h4>
                  <ul className="text-slate-300 space-y-1">
                    <li>• Claude 3</li>
                    <li>• Claude 2</li>
                    <li>• Claude Instant</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">Google</h4>
                  <ul className="text-slate-300 space-y-1">
                    <li>• Gemini 2.0 Flash Lite</li>
                    <li>• Gemini 2.0 Flash</li>
                    <li>• Gemini 2.5 Pro</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">X-AI</h4>
                  <ul className="text-slate-300 space-y-1">
                    <li>• Grok 2</li>
                    <li>• Grok 3</li>
                    <li>• Grok 3 mini</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">EchoLLM</span>
              </div>
              <p className="text-slate-400">The privacy-first local AI inference platform for Linux.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#features" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#download" className="hover:text-white transition-colors">
                    Download
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>

              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">



                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    GitHub
                  </Link>
                </li>

              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="https://github.com/ThatlinuxGuyYouKnow/echollm" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>


                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 EchoLLM. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
