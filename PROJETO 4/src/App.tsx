/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, ReactNode, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Car, ChevronRight, RefreshCcw, ShieldAlert, Users, Info, Award, Sun, Moon } from 'lucide-react';
import { SCENARIOS } from './constants';
import { Choice, Scenario, Actor } from './types';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [choices, setChoices] = useState<Choice[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const currentScenario = SCENARIOS[currentIndex];
  const progress = ((currentIndex) / SCENARIOS.length) * 100;

  const handleChoice = (option: 'A' | 'B') => {
    const newChoices = [...choices, { scenarioId: currentScenario.id, chosenOption: option }];
    setChoices(newChoices);

    if (currentIndex < SCENARIOS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  const resetGame = () => {
    setCurrentIndex(0);
    setChoices([]);
    setIsFinished(false);
  };

  const getStats = useMemo(() => {
    const stats = {
      savedChildren: 0,
      savedAdults: 0,
      savedElderly: 0,
      savedProfessionals: 0,
      savedAnimals: 0,
      totalSaved: 0,
    };

    choices.forEach((choice) => {
      const scenario = SCENARIOS.find((s) => s.id === choice.scenarioId);
      if (!scenario) return;

      const chosenActors = choice.chosenOption === 'A' ? scenario.optionA.actors : scenario.optionB.actors;
      
      chosenActors.forEach(actor => {
        stats.totalSaved++;
        if (actor.name.includes('Criança')) stats.savedChildren++;
        if (actor.name.includes('Adulto') || actor.name.includes('Executivo') || actor.name.includes('Atleta')) stats.savedAdults++;
        if (actor.name.includes('Idoso')) stats.savedElderly++;
        if (actor.name.includes('Médico')) stats.savedProfessionals++;
        if (actor.name.includes('Cachorro') || actor.name.includes('Gato')) stats.savedAnimals++;
      });
    });

    return stats;
  }, [choices, isFinished]);

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans selection:bg-[#facc15]/30 p-4 md:p-8 flex flex-col items-center ${isDarkMode ? 'bg-[#0f172a] text-[#e2e8f0]' : 'bg-[#f8fafc] text-[#0f172a]'}`}>
      <header className="text-center mb-12 max-w-2xl w-full relative">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`absolute top-0 right-0 p-3 rounded-2xl border transition-all hover:scale-110 active:scale-95 ${isDarkMode ? 'bg-[#1e293b] border-[#334155] text-[#facc15]' : 'bg-white border-[#e2e8f0] text-[#ca8a04] shadow-md'}`}
          title={isDarkMode ? "Mudar para Modo Claro" : "Mudar para Modo Escuro"}
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-3 mb-2"
        >
          <Car className={`w-10 h-10 ${isDarkMode ? 'text-[#60a5fa]' : 'text-[#2563eb]'}`} />
          <h1 className={`text-4xl md:text-5xl font-black tracking-tighter ${isDarkMode ? 'text-white' : 'text-[#0f172a]'}`}>
            VRC<span className={isDarkMode ? 'text-[#facc15]' : 'text-[#ca8a04]'}>iA</span>
          </h1>
        </motion.div>
        <p className={`text-lg font-medium ${isDarkMode ? 'text-[#94a3b8]' : 'text-[#475569]'}`}>
          Veículos Robóticos e Consciência Artificial
        </p>
        <div className={`h-1 w-20 mx-auto mt-4 rounded-full ${isDarkMode ? 'bg-[#facc15]' : 'bg-[#ca8a04]'}`} />
      </header>

      {!isFinished ? (
        <div className="w-full max-w-6xl flex flex-col items-center">
          {/* Progress Bar */}
          <div className="w-full max-w-md mb-12">
            <div className="flex justify-between items-end mb-2">
              <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${isDarkMode ? 'text-[#94a3b8]' : 'text-[#475569]'}`}>
                Fase de Teste
              </span>
              <span className={`text-xs font-mono font-bold ${isDarkMode ? 'text-[#facc15]' : 'text-[#ca8a04]'}`}>
                {currentIndex + 1} / {SCENARIOS.length}
              </span>
            </div>
            <div className={`h-1.5 rounded-full overflow-hidden border ${isDarkMode ? 'bg-[#1e293b] border-[#334155]' : 'bg-[#e2e8f0] border-[#cbd5e1]'}`}>
              <motion.div
                className={`h-full ${isDarkMode ? 'bg-[#60a5fa] shadow-[0_0_15px_rgba(96,165,250,0.5)]' : 'bg-[#2563eb] shadow-[0_0_15px_rgba(37,99,235,0.3)]'}`}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ type: 'spring', stiffness: 50 }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full"
            >
              <div className="text-center mb-10">
                <h2 className={`text-3xl font-black mb-4 tracking-tight ${isDarkMode ? 'text-white' : 'text-[#0f172a]'}`}>{currentScenario.title}</h2>
                <p className={`max-w-2xl mx-auto leading-relaxed text-sm md:text-base ${isDarkMode ? 'text-[#94a3b8]' : 'text-[#475569]'}`}>
                  {currentScenario.description}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 perspective-1000">
                <ScenarioCard
                  option="A"
                  label={currentScenario.optionA.label}
                  actors={currentScenario.optionA.actors}
                  onSelect={() => handleChoice('A')}
                  rotation={3}
                  isDarkMode={isDarkMode}
                />
                <ScenarioCard
                  option="B"
                  label={currentScenario.optionB.label}
                  actors={currentScenario.optionB.actors}
                  onSelect={() => handleChoice('B')}
                  rotation={-3}
                  isDarkMode={isDarkMode}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      ) : (
        <ResultsScreen stats={getStats} onReset={resetGame} isDarkMode={isDarkMode} />
      )}

      <footer className={`mt-auto pt-16 text-[10px] text-center max-w-lg uppercase tracking-widest font-bold ${isDarkMode ? 'text-[#475569]' : 'text-[#94a3b8]'}`}>
        <p>© 2026 VRCIA LABS • SISTEMA DE ÉTICA EXPERIMENTAL • TODOS OS DADOS SÃO SIMULADOS</p>
      </footer>
    </div>
  );
}

function ScenarioCard({ option, label, actors, onSelect, rotation, isDarkMode }: { 
  option: 'A' | 'B', 
  label: string, 
  actors: Actor[], 
  onSelect: () => void,
  rotation: number,
  isDarkMode: boolean
}) {
  return (
    <motion.div
      whileHover={{ 
        rotateY: 0, 
        rotateX: 0, 
        y: -8,
        scale: 1.01,
        boxShadow: isDarkMode ? "0 20px 50px rgba(0, 0, 0, 0.5)" : "0 20px 50px rgba(0, 0, 0, 0.1)"
      }}
      initial={{ rotateY: rotation, rotateX: 1, opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`rounded-3xl p-6 md:p-10 border shadow-2xl flex flex-col transition-all duration-500 relative overflow-hidden ${isDarkMode ? 'bg-[#1e293b] border-[#334155] hover:border-[#60a5fa]/50' : 'bg-white border-[#e2e8f0] hover:border-[#2563eb]/30'}`}
    >
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent to-transparent ${isDarkMode ? 'via-[#60a5fa]/20' : 'via-[#2563eb]/10'}`} />
      
      <div className={`text-center pb-6 mb-8 border-b transition-colors ${isDarkMode ? 'border-[#334155] group-hover:border-[#60a5fa]/20' : 'border-[#e2e8f0] group-hover:border-[#2563eb]/10'}`}>
        <div className={`inline-block px-3 py-1 rounded-full mb-3 border ${isDarkMode ? 'bg-[#0f172a] border-[#334155]' : 'bg-[#f8fafc] border-[#e2e8f0]'}`}>
          <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${isDarkMode ? 'text-[#facc15]' : 'text-[#ca8a04]'}`}>Rota {option}</span>
        </div>
        <h3 className={`text-2xl font-black uppercase tracking-tighter ${isDarkMode ? 'text-white' : 'text-[#0f172a]'}`}>{label}</h3>
      </div>

      <div className="flex-grow space-y-4 mb-10">
        {actors.map((actor) => (
          <div key={actor.id} className={`p-5 rounded-2xl border transition-all flex items-center gap-5 group/item ${isDarkMode ? 'bg-[#0f172a]/50 border-[#334155] hover:border-[#475569]' : 'bg-[#f8fafc] border-[#e2e8f0] hover:border-[#cbd5e1]'}`}>
            <div className="text-5xl filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] group-hover/item:scale-110 transition-transform duration-300">
              {actor.emoji}
            </div>
            <div className="flex-grow">
              <div className="flex items-center justify-between mb-1">
                <span className={`text-lg font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-[#0f172a]'}`}>{actor.name}</span>
                {actor.age && <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${isDarkMode ? 'bg-[#1e293b] text-[#94a3b8]' : 'bg-[#e2e8f0] text-[#64748b]'}`}>{actor.age} anos</span>}
              </div>
              <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${isDarkMode ? 'text-[#60a5fa]' : 'text-[#2563eb]'}`}>{actor.occupation}</div>
              <div className="flex flex-wrap gap-1.5">
                {actor.traits?.map((trait, i) => (
                  <span key={i} className={`text-[9px] font-black px-2 py-0.5 rounded-sm uppercase tracking-tighter border ${isDarkMode ? 'bg-[#facc15]/10 text-[#facc15] border-[#facc15]/20' : 'bg-[#ca8a04]/10 text-[#ca8a04] border-[#ca8a04]/20'}`}>
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={onSelect}
        className={`w-full font-black py-5 rounded-2xl uppercase tracking-widest text-sm flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl border border-white/5 group ${isDarkMode ? 'bg-[#1e3a8a] hover:bg-[#1d4ed8] text-white' : 'bg-[#2563eb] hover:bg-[#1e40af] text-white'}`}
      >
        Confirmar Decisão
        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );
}

function ResultsScreen({ stats, onReset, isDarkMode }: { stats: any, onReset: () => void, isDarkMode: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className={`w-full max-w-4xl rounded-[2.5rem] p-8 md:p-16 border shadow-2xl relative overflow-hidden ${isDarkMode ? 'bg-[#1e293b] border-[#334155]' : 'bg-white border-[#e2e8f0]'}`}
    >
      <div className={`absolute top-0 right-0 w-64 h-64 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl ${isDarkMode ? 'bg-[#facc15]/5' : 'bg-[#ca8a04]/5'}`} />
      
      <div className="text-center mb-16 relative">
        <div className={`inline-flex p-5 rounded-3xl mb-6 border ${isDarkMode ? 'bg-[#facc15]/10 border-[#facc15]/20' : 'bg-[#ca8a04]/10 border-[#ca8a04]/20'}`}>
          <Award className={`w-14 h-14 ${isDarkMode ? 'text-[#facc15]' : 'text-[#ca8a04]'}`} />
        </div>
        <h2 className={`text-4xl font-black mb-3 tracking-tighter uppercase ${isDarkMode ? 'text-white' : 'text-[#0f172a]'}`}>Veredito Ético</h2>
        <p className={`font-medium ${isDarkMode ? 'text-[#94a3b8]' : 'text-[#475569]'}`}>O processamento de suas escolhas foi concluído.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <StatItem icon={<Users className="w-6 h-6" />} label="Vidas Preservadas" value={stats.totalSaved} color={isDarkMode ? "text-[#60a5fa]" : "text-[#2563eb]"} isDarkMode={isDarkMode} />
        <StatItem icon={<ShieldAlert className="w-6 h-6" />} label="Crianças Salvas" value={stats.savedChildren} color={isDarkMode ? "text-[#facc15]" : "text-[#ca8a04]"} isDarkMode={isDarkMode} />
        <StatItem icon={<Info className="w-6 h-6" />} label="Profissionais" value={stats.savedProfessionals} color={isDarkMode ? "text-[#60a5fa]" : "text-[#2563eb]"} isDarkMode={isDarkMode} />
        <StatItem icon={<Car className="w-6 h-6" />} label="Animais" value={stats.savedAnimals} color={isDarkMode ? "text-[#94a3b8]" : "text-[#64748b]"} isDarkMode={isDarkMode} />
      </div>

      <div className={`p-8 rounded-3xl border mb-16 relative ${isDarkMode ? 'bg-[#0f172a] border-[#334155]' : 'bg-[#f8fafc] border-[#e2e8f0]'}`}>
        <div className={`absolute -top-3 left-8 px-4 border rounded-full ${isDarkMode ? 'bg-[#1e293b] border-[#334155]' : 'bg-white border-[#e2e8f0]'}`}>
          <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${isDarkMode ? 'text-[#facc15]' : 'text-[#ca8a04]'}`}>Perfil Analítico</span>
        </div>
        <p className={`text-base leading-relaxed font-medium ${isDarkMode ? 'text-[#94a3b8]' : 'text-[#475569]'}`}>
          {stats.savedChildren > stats.savedAdults 
            ? "Seu perfil decisório prioriza o potencial futuro e a vulnerabilidade. Você demonstrou uma clara inclinação para proteger indivíduos em estágios iniciais de desenvolvimento, mesmo em detrimento da utilidade imediata."
            : "Suas decisões indicam uma abordagem centrada na preservação de competências estabelecidas e na manutenção da ordem. Você tende a valorizar a estabilidade e o papel social dos indivíduos no presente."}
        </p>
      </div>

      <button
        onClick={onReset}
        className={`w-full font-black py-6 rounded-2xl uppercase tracking-[0.2em] flex items-center justify-center gap-4 transition-all active:scale-95 shadow-2xl ${isDarkMode ? 'bg-[#facc15] text-[#0f172a] hover:bg-white shadow-[#facc15]/20' : 'bg-[#ca8a04] text-white hover:bg-[#a16a03] shadow-[#ca8a04]/20'}`}
      >
        <RefreshCcw className="w-6 h-6" />
        Novo Ciclo de Teste
      </button>
    </motion.div>
  );
}

function StatItem({ icon, label, value, color, isDarkMode }: { icon: ReactNode, label: string, value: number, color: string, isDarkMode: boolean }) {
  return (
    <div className={`p-8 rounded-3xl border flex items-center gap-6 group transition-colors ${isDarkMode ? 'bg-[#0f172a] border-[#334155] hover:border-[#60a5fa]/30' : 'bg-[#f8fafc] border-[#e2e8f0] hover:border-[#2563eb]/20'}`}>
      <div className={`p-4 rounded-2xl border border-white/5 ${color} ${isDarkMode ? 'bg-[#1e293b]' : 'bg-white shadow-sm'}`}>
        {icon}
      </div>
      <div>
        <span className={`text-[10px] font-black uppercase tracking-[0.2em] block mb-1 ${isDarkMode ? 'text-[#475569]' : 'text-[#94a3b8]'}`}>{label}</span>
        <span className={`text-3xl font-black tracking-tighter ${isDarkMode ? 'text-white' : 'text-[#0f172a]'}`}>{value}</span>
      </div>
    </div>
  );
}
