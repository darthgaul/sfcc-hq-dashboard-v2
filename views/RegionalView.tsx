import React from 'react';
import { ARTIFACTS, EVENTS } from '../constants';
import { Flag, Shield, FileText, Calendar, LayoutDashboard } from 'lucide-react';
import { StatCard } from '../components/StatCard';
import { Card } from '../components/Card';

export const RegionalView: React.FC = () => {
  const regionalSquadrons = ['SQ-101', 'SQ-102', 'SQ-205', 'SQ-304'];
  const totalSquadrons = regionalSquadrons.length;
  const regionalArtifacts = ARTIFACTS; // Mock: using all artifacts as regional set
  const pendingReviews = regionalArtifacts.filter(a => a.status === 'Submitted' || a.status === 'Returned').length;
  const nextMTE = EVENTS.find(e => e.type === 'MTE');
  const regionalCompliance = 88;

  const squadronData = regionalSquadrons.map(unit => ({
    unit,
    compliance: unit === 'SQ-102' ? 75 : (Math.random() * 10 + 85).toFixed(0),
    pending: Math.floor(Math.random() * 5),
    risk: unit === 'SQ-102' ? 'High' : 'Low'
  }));

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard title="Total Squadrons" value={totalSquadrons.toString()} subtext="North-East Region" icon={Flag} />
        <StatCard title="Regional Compliance" value={`${regionalCompliance}%`} subtext="Avg Approval Rate" icon={Shield} />
        <StatCard title="Pending Reviews" value={pendingReviews.toString()} subtext="Across all units" icon={FileText} />
        <StatCard title="Next Major Event" value={nextMTE?.date.slice(5) || ''} subtext={nextMTE?.title} icon={Calendar} alert />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <h3 className="text-lg font-bold text-ops-white mb-4 flex items-center">
            <LayoutDashboard className="w-5 h-5 mr-2 text-ops-light" />
            Squadron Performance Overview
          </h3>
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-ops-slate border-b border-ops-slate/30">
                 <th className="pb-2 font-mono uppercase text-xs">Unit</th>
                 <th className="pb-2 font-mono uppercase text-xs">Compliance %</th>
                 <th className="pb-2 font-mono uppercase text-xs">Artifacts</th>
                 <th className="pb-2 text-right font-mono uppercase text-xs">Risk</th>
              </tr>
            </thead>
            <tbody className="text-ops-light divide-y divide-ops-slate/20">
              {squadronData.map(d => (
                <tr key={d.unit}>
                  <td className="py-3 font-mono text-ops-white">{d.unit}</td>
                  <td>
                    <span className={d.risk === 'High' ? 'text-red-400' : 'text-emerald-400'}>{d.compliance}%</span>
                  </td>
                  <td>{d.pending}</td>
                  <td className="text-right">
                    <span className={`px-2 py-0.5 text-[10px] uppercase font-bold border ${d.risk === 'High' ? 'border-red-800 text-red-400 bg-red-900/20' : 'border-emerald-800 text-emerald-400 bg-emerald-900/20'}`}>
                      {d.risk}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <Card>
          <h3 className="text-lg font-bold text-ops-white mb-4 flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-ops-light" />
            Regional Schedule
          </h3>
          <div className="space-y-4">
            {EVENTS.map(e => (
              <div key={e.id} className="border-l-2 border-ops-slate pl-4">
                <div className="text-[10px] text-ops-slate uppercase tracking-wider font-bold">{e.type}</div>
                <div className="text-sm font-medium text-ops-white">{e.title}</div>
                <div className="text-xs text-ops-light font-mono mt-0.5">{e.date}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};