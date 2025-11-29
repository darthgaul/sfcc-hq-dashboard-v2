import React from 'react';
import { Users, Shield, AlertTriangle, FileText, BarChart3, TrendingUp } from 'lucide-react';
import { StatCard } from '../components/StatCard';
import { Card } from '../components/Card';
import { ARTIFACTS } from '../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'North', value: 92 },
  { name: 'South', value: 88 },
  { name: 'Central', value: 65 },
  { name: 'West', value: 95 },
];

export const HQView: React.FC = () => {
  const remediationRate = Math.round((ARTIFACTS.filter(a => a.score !== null && a.score < 2).length / ARTIFACTS.length) * 100);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard title="Total Cadets" value="1,240" subtext="+12% YoY Growth" icon={Users} />
        <StatCard title="Compliance Rate" value="94%" subtext="Q3 Reports Submitted" icon={Shield} />
        <StatCard title="Remediation Rate" value={`${remediationRate}%`} subtext="Artifacts Scoring < 2" icon={AlertTriangle} alert={remediationRate > 15} />
        <StatCard title="Waiver Logs" value="3" subtext="Pending Approval" icon={FileText} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="h-96">
          <h3 className="text-lg font-bold text-ops-white mb-6 flex items-center">
            <BarChart3 className="w-5 h-5 mr-2 text-ops-light" />
            National Compliance Heatmap
          </h3>
          <ResponsiveContainer width="100%" height="80%">
            <BarChart data={data} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#252525" />
              <XAxis type="number" stroke="#5f686e" />
              <YAxis dataKey="name" type="category" stroke="#96a3ae" width={60} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#252525', borderColor: '#5f686e', color: '#c7d7e2' }}
                itemStyle={{ color: '#c7d7e2' }}
              />
              <Bar dataKey="value" fill="#96a3ae" barSize={20} radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <h3 className="text-lg font-bold text-ops-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-ops-light" />
            Critical Risk / Waiver Log
          </h3>
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-ops-slate border-b border-ops-slate/30">
                <th className="pb-2 font-mono uppercase text-xs">Unit</th>
                <th className="pb-2 font-mono uppercase text-xs">Issue</th>
                <th className="pb-2 font-mono uppercase text-xs">Risk Level</th>
              </tr>
            </thead>
            <tbody className="text-ops-light">
              <tr className="border-b border-ops-surface">
                <td className="py-3">SQ-404</td>
                <td>Missing Youth Protection Certs</td>
                <td className="text-red-400 font-bold">HIGH</td>
              </tr>
              <tr className="border-b border-ops-surface">
                <td className="py-3">SQ-102</td>
                <td>Safety Ratio Waiver Request</td>
                <td className="text-amber-400 font-bold">MED</td>
              </tr>
              <tr className="border-b border-ops-surface">
                <td className="py-3">SQ-305</td>
                <td>Equipment Audit Failure</td>
                <td className="text-red-400 font-bold">HIGH</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
};