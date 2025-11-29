import React from 'react';
import { Card } from './Card';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  subtext?: string;
  icon: LucideIcon;
  alert?: boolean;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, subtext, icon: Icon, alert = false }) => {
  return (
    <Card className="flex items-center space-x-4 border-l-4 border-l-ops-light">
      <div className={`p-3 rounded-sm ${alert ? 'bg-red-900/20 text-red-400' : 'bg-ops-slate/20 text-ops-light'}`}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-ops-slate text-xs uppercase tracking-wider font-semibold font-mono">{title}</h3>
        <div className="text-2xl font-bold text-ops-white font-mono">{value}</div>
        {subtext && <div className="text-xs text-ops-light mt-1">{subtext}</div>}
      </div>
    </Card>
  );
};