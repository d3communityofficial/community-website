'use client';

import { useState, useEffect, useRef } from 'react';
import { Cpu } from 'lucide-react';

interface ScriptLine {
  type: string;
  text: string;
}

export default function TerminalBlock({ script }: { script: ScriptLine[] }) {
  const [lines, setLines] = useState<ScriptLine[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentLineIndex >= script.length) {
      const timeout = setTimeout(() => {
        setLines([]);
        setCurrentLineIndex(0);
        setCurrentCharIndex(0);
      }, 5000);
      return () => clearTimeout(timeout);
    }

    const currentScriptLine = script[currentLineIndex];

    if (currentCharIndex < currentScriptLine.text.length) {
      const timeout = setTimeout(
        () => {
          setCurrentCharIndex((prev) => prev + 1);
        },
        currentScriptLine.type === 'cmd' ? Math.random() * 50 + 50 : 20
      );
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setLines((prev) => [...prev, currentScriptLine]);
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex, script]);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [lines, currentCharIndex]);

  return (
    <div className="relative w-full h-full min-h-[320px] flex items-center justify-center perspective-1000">
      <div className="w-full bg-[#020817] rounded-xl border border-[var(--color-border)] shadow-2xl overflow-hidden font-mono text-sm relative flex flex-col h-[300px] hover:border-[var(--color-primary)]/50 transition-colors duration-300">
        {/* Header */}
        <div className="bg-[#0f172a] px-4 py-2 border-b border-[var(--color-border)] flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors" />
          </div>
          <div className="text-[10px] font-bold text-[var(--color-muted)] flex items-center gap-2">
            <Cpu className="w-3 h-3" /> D3_KERNEL_V2.4
          </div>
        </div>

        {/* Body */}
        <div
          ref={terminalBodyRef}
          className="p-6 flex-1 overflow-y-auto custom-scrollbar font-mono space-y-2"
        >
          {lines.map((line, idx) => (
            <div
              key={idx}
              className={`${
                line.type === 'cmd' ? 'mb-4 mt-4 first:mt-0' : 'mb-1'
              }`}
            >
              {line.type === 'cmd' && (
                <div className="flex items-center">
                  <span className="text-[var(--color-secondary)] mr-2">➜</span>
                  <span className="text-blue-400 mr-2">~</span>
                  <span className="text-gray-100">{line.text}</span>
                </div>
              )}
              {line.type === 'output' && (
                <div className="text-[var(--color-muted)] pl-4 border-l-2 border-[var(--color-border)] ml-1">
                  {line.text}
                </div>
              )}
              {line.type === 'result' && (
                <div className="text-[var(--color-primary-light)] pl-4 font-bold mt-2">
                  {line.text}
                </div>
              )}
            </div>
          ))}
          {/* Active Typing Line */}
          {currentLineIndex < script.length && (
            <div
              className={`${
                script[currentLineIndex].type === 'cmd' ? 'mt-4' : 'mb-1'
              }`}
            >
              {/* Logic for active typing similar to above, simplified for brevity in this snippet */}
              <span className="text-gray-100">
                {script[currentLineIndex].text.slice(0, currentCharIndex)}
                <span className="inline-block w-2 h-4 bg-[var(--color-secondary)] animate-pulse ml-1 align-middle" />
              </span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#0f172a]/50 backdrop-blur-sm px-4 py-1 border-t border-[var(--color-border)] flex justify-between items-center text-[10px] text-[var(--color-muted)]">
          <span>
            STATUS: <span className="text-green-400">ONLINE</span>
          </span>
          <span className="animate-pulse">LISTENING_PORT:3000</span>
        </div>
      </div>
    </div>
  );
}
