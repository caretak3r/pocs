"use client";

import { useState } from "react";
import { Terminal, Activity, Shield, Network, Brain, Container } from "lucide-react";
import { Gallery4, Gallery4Props } from "@/components/blocks/gallery4";

const portfolioData: Gallery4Props = {
  title: "PoC Portfolio",
  description: "A curated collection of developer experiments and proof-of-concept projects exploring cutting-edge technologies and architectures.",
  items: [
    {
      id: "sentinel-ui",
      title: ">> SENTINEL_UI",
      description: "[ Security Dashboard ] Real-time monitoring and threat detection platform with comprehensive analytics visualization and intelligent alerting systems.",
      href: "/sentinel-ui/",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxfHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: "defensibility-dashboard",
      title: ">> DEFENSIBILITY_DASHBOARD", 
      description: "[ Market Intelligence ] Competitive moat analysis and S&P 500 tracking platform with investment metrics and market visualization.",
      href: "/defensibility-dashboard/",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHx8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: "air-gap-architect",
      title: ">> AIR_GAP_ARCHITECT",
      description: "[ Network Security ] Advanced visualization platform for air-gap network topology, isolated systems mapping and security boundary analysis.",
      href: "/air-gap-architect/", 
      image: "https://images.unsplash.com/photo-1558494949-ef010cbcc31c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHx8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: "morpho-swarm-viz",
      title: ">> MORPHO_SWARM_VIZ",
      description: "[ Distributed Systems ] Swarm intelligence visualization platform exploring morphological patterns, collective behavior algorithms and distributed computing architectures.",
      href: "/morpho_swarm_viz/", 
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHx8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: "k8s-visualizer",
      title: ">> K8S_VISUALIZER",
      description: "[ Kubernetes ] Comprehensive cluster topology visualization with pod distributions, service mapping, resource monitoring and infrastructure analytics.",
      href: "/k8s-visualizer/",
      image: "https://images.unsplash.com/photo-1668049302635-954c9b77af18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHx8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ],
};

export default function Home() {
  const [cursorVisible, setCursorVisible] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white font-mono matrix-bg">
      {/* Terminal Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900 border border-gray-800 rounded-b-lg">
        <div className="flex items-center px-4 py-2 border-b border-gray-800">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="ml-6 text-sm text-gray-400">// PoCs Portal [ Developer Projects & Experiments ]</div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-8 pt-20">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="h-full w-full bg-gradient-to-b from-transparent via-gray-900 to-black"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Terminal className="w-12 h-12 text-blue-400 mr-4" />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-wider">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                PoCs Portal
              </span>
              <span 
                className="text-cyan-400 ml-2"
                style={{ 
                  animation: 'pulse 1s infinite',
                  display: 'inline-block'
                }}
              >
                _
              </span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 tracking-wide uppercase">
            [ Developer Projects & Experiments ]
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-gray-900/50 border border-gray-800 rounded-lg backdrop-blur-sm">
              <Shield className="w-8 h-8 text-cyan-400 mb-3" />
              <span className="text-sm text-gray-300 uppercase tracking-wide">Security</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-900/50 border border-gray-800 rounded-lg backdrop-blur-sm">
              <Network className="w-8 h-8 text-emerald-400 mb-3" />
              <span className="text-sm text-gray-300 uppercase tracking-wide">Architecture</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-900/50 border border-gray-800 rounded-lg backdrop-blur-sm">
              <Brain className="w-8 h-8 text-blue-400 mb-3" />
              <span className="text-sm text-gray-300 uppercase tracking-wide">Visualization</span>
            </div>
          </div>

          <div className="text-gray-500 text-sm max-w-2xl mx-auto">
            <p>Explore a curated collection of proof-of-concept projects pushing the boundaries of modern web technologies, security systems, and distributed computing architectures.</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50 pointer-events-none"></div>
        <Gallery4 {...portfolioData} />
      </section>

      {/* Footer */}
      <footer className="relative border-t border-gray-800 py-12 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Activity className="w-6 h-6 text-cyan-400 mr-3" />
            <span className="text-gray-400">// System Status: Operational</span>
          </div>
          <div className="text-gray-500 mb-6">
            <p>Built with Next.js, React, TypeScript & Tailwind CSS</p>
          </div>
          <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
            <span>v1.0.0</span>
            <span>•</span>
            <a href="https://github.com/caretak3r/pocs" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              [github.com/caretak3r/pocs]
            </a>
            <span>•</span>
            <span>© 2024</span>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}
