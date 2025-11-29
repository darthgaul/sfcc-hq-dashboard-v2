import React from 'react';
import { ARTIFACTS } from '../constants';
import { Users, FileText, AlertTriangle, Award, UserCheck, Calendar } from 'lucide-react';
import { StatCard } from '../components/StatCard';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';

export const SquadronView: React.FC = () => {
  const artifactsForReview = ARTIFACTS.filter(a => a.status === 'Submitted' || a.status === 'Returned');
  const pendingCount = artifactsForReview.filter(a => a.status === 'Submitted').length;
  const remediationCount = artifactsForReview.filter(a => a.status === 'Returned').length;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard title="Total Cadets" value="42" subtext="Active in SQ-101" icon={Users} />
        <StatCard title="New Submissions" value={pendingCount.toString()} subtext="Awaiting Review" icon={FileText} />
        <StatCard title="Remediation Items" value={remediationCount.toString()} subtext="Needs attention" icon={AlertTriangle} alert={remediationCount > 0} />
        <StatCard title="Board Ready" value="1/2" subtext="Eligible Promotables" icon={Award} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <h3 className="text-lg font-bold text-ops-white mb-4 flex items-center">
            <FileText className="w-5 h-5 mr-2 text-ops-light" />
            Artifact Review Queue
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-ops-slate border-b border-ops-slate/30">
                  <th className="pb-2 font-mono uppercase text-xs">Cadet</th>
                  <th className="pb-2 font-mono uppercase text-xs">Artifact</th>
                  <th className="pb-2 font-mono uppercase text-xs">Date</th>
                  <th className="pb-2 font-mono uppercase text-xs text-center">Status</th>
                </tr>
              </thead>
              <tbody className="text-ops-light divide-y divide-ops-slate/20">
                {artifactsForReview.map(a => (
                  <tr key={a.id}>
                    <td className="py-3 font-medium text-ops-white">{a.cadetName}</td>
                    <td>{a.title}</td>
                    <td className="font-mono text-xs">{a.date.slice(5)}</td>
                    <td className="text-center"><Badge status={a.status} score={a.score} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-bold text-ops-white mb-4">Quick Actions</h3>
          <div className="space-y-3">
             {[
               { icon: UserCheck, text: 'Update Roster Status' },
               { icon: Award, text: 'Recommend Promotion Board' },
               { icon: Calendar, text: 'Log Event Attendance' }
             ].map((action, i) => (
               <button key={i} className="w-full text-left p-3 rounded-sm border border-ops-slate/30 bg-ops-bg/50 hover:bg-ops-slate/10 text-ops-light flex items-center transition-colors">
                 <action.icon className="w-4 h-4 mr-3" />
                 <span className="text-sm font-medium">{action.text}</span>
               </button>
             ))}
          </div>
        </Card>
      </div>
    </div>
  );
};