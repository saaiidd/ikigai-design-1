import { useState, useEffect, useRef } from 'react';

interface Command {
  command: string;
  output: string[];
  type?: 'success' | 'error' | 'info';
}

interface InteractiveTerminalProps {
  title: string;
  initialOutput?: string[];
  availableCommands?: Record<string, Command>;
  prompt?: string;
  className?: string;
}

const InteractiveTerminal = ({ 
  title, 
  initialOutput = [], 
  availableCommands = {},
  prompt = '>',
  className = "" 
}: InteractiveTerminalProps) => {
  const [history, setHistory] = useState<Array<{ type: 'command' | 'output'; content: string; outputType?: string }>>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Initialize with initial output
  useEffect(() => {
    if (initialOutput.length > 0) {
      const initialHistory = initialOutput.map(line => ({
        type: 'output' as const,
        content: line,
        outputType: 'info'
      }));
      setHistory(initialHistory);
    }
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const typeText = async (text: string, outputType = 'info') => {
    setIsTyping(true);
    const words = text.split(' ');
    let current = '';
    
    for (let i = 0; i < words.length; i++) {
      current += words[i] + (i < words.length - 1 ? ' ' : '');
      setHistory(prev => {
        const newHistory = [...prev];
        if (newHistory[newHistory.length - 1]?.type === 'output' && newHistory[newHistory.length - 1]?.content.startsWith(text.split(' ')[0])) {
          newHistory[newHistory.length - 1] = { type: 'output', content: current, outputType };
        } else {
          newHistory.push({ type: 'output', content: current, outputType });
        }
        return newHistory;
      });
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    setIsTyping(false);
  };

  const executeCommand = async (input: string) => {
    const trimmedInput = input.trim().toLowerCase();
    
    // Add command to history
    setHistory(prev => [...prev, { type: 'command', content: input }]);
    setCommandHistory(prev => [...prev, input]);
    
    // Check if command exists
    if (availableCommands[trimmedInput]) {
      const command = availableCommands[trimmedInput];
      for (const outputLine of command.output) {
        await typeText(outputLine, command.type || 'success');
      }
    } else if (trimmedInput === 'help' || trimmedInput === 'h') {
      await typeText('Available commands:', 'info');
      for (const cmd of Object.keys(availableCommands)) {
        await typeText(`  ${cmd}`, 'info');
      }
      await typeText('  help - Show this help message', 'info');
      await typeText('  clear - Clear terminal', 'info');
    } else if (trimmedInput === 'clear' || trimmedInput === 'cls') {
      setHistory([]);
    } else if (trimmedInput) {
      await typeText(`Command not found: ${input}`, 'error');
      await typeText('Type "help" for available commands', 'info');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isTyping) {
      executeCommand(currentInput);
      setCurrentInput('');
      setHistoryIndex(-1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentInput('');
      }
    }
  };

  const getOutputClass = (outputType?: string) => {
    switch (outputType) {
      case 'error': return 'text-red-400';
      case 'success': return 'text-green-400';
      case 'info': return 'text-accent';
      default: return 'text-foreground';
    }
  };

  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-header">
        <span className="font-terminal text-xs">{title}</span>
        <div className="terminal-dots">
          <div className="terminal-dot" />
          <div className="terminal-dot" />
          <div className="terminal-dot" />
        </div>
      </div>
      <div 
        ref={terminalRef}
        className="p-4 h-64 overflow-y-auto cursor-text"
        onClick={() => inputRef.current?.focus()}
      >
        <div className="font-terminal text-xs leading-relaxed">
          {history.map((entry, index) => (
            <div key={index} className="mb-1">
              {entry.type === 'command' ? (
                <div className="text-foreground">
                  <span className="text-accent">{prompt} </span>
                  {entry.content}
                </div>
              ) : (
                <div className={getOutputClass(entry.outputType)}>
                  {entry.content}
                </div>
              )}
            </div>
          ))}
          
          {/* Current input line */}
          <div className="flex items-center">
            <span className="text-accent mr-1">{prompt} </span>
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none text-foreground font-terminal text-xs"
              placeholder={isTyping ? "..." : "Type 'help' for commands"}
              disabled={isTyping}
            />
            <span className="w-2 h-3 bg-foreground animate-pulse ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTerminal;