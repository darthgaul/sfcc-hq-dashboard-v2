import React from 'react';
import { ARTIFACTS, CADET_PROFILE } from '../constants';
import { ChevronUp, Award, AlertTriangle, Calendar, CheckCircle } from 'lucide-react';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';

export const CadetView: React.FC = () => {
  const myArtifacts = ARTIFACTS.filter(a => a.cadetName === 'Cdt. E. Ender');
  const remediationItems = myArtifacts.filter(a => a.score !== null && a.score < 2);
  const currentRank = CADET_PROFILE.promotions.find(p => p.active);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Personnel Header */}
      <Card className="p-0 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-64 bg-ops-surface p-6 flex flex-col items-center border-b md:border-b-0 md:border-r border-ops-slate/30">
            <div className="relative mb-4">
              <img 
                src="https://picsum.photos/150/200" 
                alt="Cadet" 
                className="w-32 h-40 object-cover rounded-sm border-2 border-ops-slate"
              />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-ops-bg border-2 border-ops-slate rounded-full flex items-center justify-center">
                 <span className="text-xs font-bold text-ops-white">{currentRank?.rank.split('/')[1]}</span>
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold text-ops-white font-mono">{currentRank?.rank}</h2>
              <p className="text-xs text-ops-light uppercase tracking-widest">{currentRank?.name}</p>
            </div>
          </div>
          
          <div className="flex-1 p-6">
             <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-ops-white">Cadet E. Ender</h2>
                  <div className="flex items-center text-ops-slate mt-1 space-x-4 text-sm font-mono">
                    <span>SQ-101</span>
                    <span>JOINED {CADET_PROFILE.joinDate.toUpperCase()}</span>
                  </div>
                </div>
                <div className="hidden md:block text-right">
                  <div className="text-xs text-ops-slate uppercase tracking-wider">Next Evaluation</div>
                  <div className="text-lg font-mono text-ops-white">DEC 15, 2023</div>
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-ops-bg/50 p-4 border border-ops-slate/30">
                   <h4 className="text-xs font-bold text-ops-light uppercase tracking-wider mb-4 flex items-center">
                     <ChevronUp className="w-4 h-4 mr-1" /> Promotion Log
                   </h4>
                   <div className="space-y-4 border-l-2 border-ops-slate ml-2 pl-4 relative">
                      {CADET_PROFILE.promotions.map((p, idx) => (
                        <div key={idx} className="relative">
                          <div className={`absolute -left-[23px] top-1 w-3 h-3 rounded-full border-2 border-ops-bg ${p.active ? 'bg-ops-light' : 'bg-ops-slate'}`}></div>
                          <div className="flex justify-between items-center">
                             <span className={`font-mono text-sm ${p.active ? 'text-ops-white font-bold' : 'text-ops-slate'}`}>{p.rank}</span>
                             <span className="text-xs text-ops-slate">{p.date}</span>
                          </div>
                        </div>
                      ))}
                   </div>
                </div>
                
                <div className="bg-ops-bg/50 p-4 border border-ops-slate/30">
                  <h4 className="text-xs font-bold text-ops-light uppercase tracking-wider mb-4 flex items-center">
                     <Award className="w-4 h-4 mr-1" /> Awards
                   </h4>
                   <div className="flex flex-wrap gap-2 mb-4">
                      {CADET_PROFILE.awards.filter(a => a.earned).map((award, i) => (
                        <div key={i} className={`h-6 w-8 ${award.color} border border-black/50 shadow-sm`} title={award.name}></div>
                      ))}
                   </div>
                   <div className="space-y-2">
                      {CADET_PROFILE.awards.filter(a => !a.earned).map((award, i) => (
                        <div key={i}>
                           <div className="flex justify-between text-[10px] uppercase tracking-wide mb-1 text-ops-slate">
                              <span>{award.name}</span>
                              <span>{award.progress}%</span>
                           </div>
                           <div className="h-1.5 w-full bg-ops-surface rounded-full overflow-hidden">
                              <div className={`h-full ${award.color}`} style={{width: `${award.progress}%`}}></div>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </div>
      </Card>

      {remediationItems.length > 0 && (
        <div className="bg-red-900/10 border border-red-800 p-4 flex items-start">
          <AlertTriangle className="text-red-400 w-5 h-5 mr-3 mt-0.5" />
          <div>
            <h4 className="text-red-400 font-bold text-sm uppercase tracking-wider">Action Required: Remediation</h4>
            <p className="text-red-200/70 text-sm mt-1">
              You have {remediationItems.length} artifact(s) that scored below the minimum (2/4). Please revise and resubmit per CCR 20-7.
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <h3 className="text-ops-light font-bold uppercase text-sm mb-4">Promotion Requirements</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm text-ops-light mb-2">
                <span>STEM Requirements</span>
                <span className="font-mono text-ops-white">2/3</span>
              </div>
              <div className="h-2 bg-ops-bg border border-ops-slate/30 overflow-hidden">
                 <div className="h-full bg-ops-light" style={{ width: '66%' }}></div>
              </div>
            </div>
            <div>
               <div className="flex justify-between text-sm text-ops-light mb-2">
                <span>Leadership Logs</span>
                <span className="font-mono text-ops-white">4/5</span>
              </div>
              <div className="h-2 bg-ops-bg border border-ops-slate/30 overflow-hidden">
                 <div className="h-full bg-ops-light" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-ops-surface to-ops-bg">
           <h3 className="text-ops-slate text-xs uppercase mb-2 font-bold">Next Major Event</h3>
           <div className="text-xl font-bold text-ops-white mb-1">Regional FTX</div>
           <div className="text-ops-light flex items-center mb-4 text-sm font-mono">
              <Calendar className="w-4 h-4 mr-2" /> NOV 10, 2023
           </div>
           <div className="bg-emerald-900/10 text-emerald-400 px-3 py-2 border border-emerald-900/50 flex items-center text-xs">
              <CheckCircle className="w-3 h-3 mr-2" /> Recovery Period Confirmed
           </div>
        </Card>
      </div>

      <Card>
        <h3 className="text-lg font-bold text-ops-white mb-4">My Evidence Portfolio</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-ops-light">
            <thead>
              <tr className="border-b border-ops-slate/30 text-ops-slate">
                <th className="pb-2 font-mono uppercase text-xs">LOE</th>
                <th className="pb-2 font-mono uppercase text-xs">Title</th>
                <th className="pb-2 font-mono uppercase text-xs">Status</th>
                <th className="pb-2 text-right font-mono uppercase text-xs">Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ops-slate/20">
              {myArtifacts.map(a => (
                <tr key={a.id}>
                  <td className="py-3">
                    <span className="bg-ops-bg border border-ops-slate/30 text-ops-slate text-[10px] px-2 py-1 rounded-sm uppercase tracking-wider">
                      {a.loe}
                    </span>
                  </td>
                  <td className="font-medium text-ops-white">{a.title}</td>
                  <td><Badge status={a.status} score={a.score} /></td>
                  <td className="text-right font-mono text-ops-white">{a.score ?? '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};