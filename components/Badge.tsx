import React from 'react';

interface BadgeProps {
  status: string;
  score?: number | null;
}

export const Badge: React.FC<BadgeProps> = ({ status, score }) => {
  let colorClass = 'bg-ops-slate/20 text-ops-slate border-ops-slate';
  
  if (status === 'Approved') colorClass = 'bg-emerald-900/20 text-emerald-400 border-emerald-800';
  if (status === 'Returned' || (score !== null && score < 2)) colorClass = 'bg-red-900/20 text-red-400 border-red-800';
  if (status === 'Submitted') colorClass = 'bg-amber-900/20 text-amber-400 border-amber-800';

  return (
    <span className={`px-2 py-0.5 border text-xs font-mono uppercase tracking-wider rounded-sm ${colorClass}`}>
      {status}
    </span>
  );
};