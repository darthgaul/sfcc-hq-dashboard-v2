import React from 'react';
import { ARTIFACTS, USERS, CADET_PROFILE } from '../constants';
import { Award, CheckCircle, AlertTriangle, FileText, ChevronRight } from 'lucide-react';
import { StatCard } from '../components/StatCard';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';

interface ParentViewProps {
  cadetId?: string;
}

export const ParentView: React.FC<ParentViewProps> = ({ cadetId }) => {
  const cadet = USERS.find(u => u.id === cadetId);
  const myArtifacts = ARTIFACTS.filter(a => cadet && a.cadetName === cadet.name);
  const approvedCount = myArtifacts.filter(a => a.status === 'Approved').length;
  const remediationItems = myArtifacts.filter(a => a.score !== null && a.score < 2);
  const currentRank = CADET_PROFILE.promotions.find(p => p.active);

  if (!cadet) return <div className="text-red-400 p-4 border border-red-800 bg-red-900/20">Cadet profile not found.</div>;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard title="Cadet Rank" value={currentRank?.rank || 'N/A'} subtext={currentRank?.name} icon={Award} />
        <StatCard title="Approved Artifacts" value={approvedCount.toString()} subtext="Evidence Items" icon={CheckCircle} />
        <StatCard title="Pending Action" value={remediationItems.length.toString()} subtext="Items needing attention" icon={AlertTriangle} alert={remediationItems.length > 0} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
           <h3 className="text-lg font-bold text-ops-white mb-4 flex items-center">
            <FileText className="w-5 h-5 mr-2 text-ops-light" />
            {cadet.name}'s Progress Log
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-ops-slate border-b border-ops-slate/30">
                  <th className="pb-2 font-mono uppercase text-xs">LOE</th>
                  <th className="pb-2 font-mono uppercase text-xs">Title</th>
                  <th className="pb-2 font-mono uppercase text-xs">Status</th>
                  <th className="pb-2 font-mono uppercase text-xs text-right">Score</th>
                </tr>
              </thead>
              <tbody className="text-ops-light divide-y divide-ops-slate/20">
                {myArtifacts.map(a => (
                  <tr key={a.id}>
                    <td className="py-3">
                       <span className="bg-ops-bg border border-ops-slate/30 text-ops-slate text-[10px] px-2 py-1 rounded-sm uppercase tracking-wider">
                        {a.loe}
                      </span>
                    </td>
                    <td>{a.title}</td>
                    <td><Badge status={a.status} score={a.score} /></td>
                    <td className="text-right font-mono text-ops-white">{a.score ?? '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-bold text-ops-white mb-4">Squadron Contact</h3>
          <div className="space-y-4">
            <div>
              <div className="text-xs text-ops-slate uppercase tracking-wider font-bold">Unit Leader</div>
              <div className="text-ops-white font-medium">Maj. C. Davis</div>
            </div>
            <div>
              <div className="text-xs text-ops-slate uppercase tracking-wider font-bold">Unit</div>
              <div className="text-ops-white font-medium">{cadet.unit}</div>
            </div>
            <button className="w-full p-3 mt-2 bg-ops-light hover:bg-ops-white text-ops-bg font-bold uppercase text-sm tracking-wide transition-colors flex items-center justify-center rounded-sm">
               <ChevronRight className="w-4 h-4 mr-2" /> Request Update
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};