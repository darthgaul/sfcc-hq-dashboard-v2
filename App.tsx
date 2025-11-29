import React, { useState } from 'react';
import { USERS } from './constants';
import { User } from './types';
import { HQView } from './views/HQView';
import { CadetView } from './views/CadetView';
import { RegionalView } from './views/RegionalView';
import { SquadronView } from './views/SquadronView';
import { ParentView } from './views/ParentView';
import { Shield, Menu, X, UserCheck, Lock } from 'lucide-react';

export default function App() {
  const [currentUser, setCurrentUser] = useState<User>(USERS[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderView = () => {
    switch (currentUser.role) {
      case 'HQ': return <HQView />;
      case 'Cadet': return <CadetView />;
      case 'Regional': return <RegionalView />;
      case 'Squadron': return <SquadronView />;
      case 'Parent': return <ParentView cadetId={currentUser.cadetId} />;
      default: return <div className="text-ops-light">Role not found</div>;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-ops-bg text-ops-light selection:bg-ops-light selection:text-ops-bg font-sans">
      
      {/* Mobile Header */}
      <div className="lg:hidden fixed w-full z-20 flex items-center justify-between p-4 bg-ops-surface border-b border-ops-slate/30">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-ops-light text-ops-bg flex items-center justify-center font-bold rounded-sm">SF</div>
          <span className="font-bold tracking-wider text-ops-white">SFCC OPS</span>
        </div>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-ops-white">
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-10 w-64 bg-ops-surface border-r border-ops-slate/30 transform transition-transform lg:translate-x-0 lg:static flex flex-col ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-6 mt-14 lg:mt-0 flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-ops-slate to-ops-surface border border-ops-light flex items-center justify-center shadow-lg">
             <Shield className="text-ops-light w-5 h-5" />
          </div>
          <div>
            <h1 className="font-bold text-lg tracking-wider text-ops-white leading-tight font-mono">
              SFCC<br/>
              <span className="text-ops-slate text-xs font-normal uppercase">Command Suite</span>
            </h1>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          <div className="text-[10px] font-bold text-ops-slate uppercase tracking-widest mb-2 px-4">Role Simulator</div>
          {USERS.map(user => (
            <button
              key={user.id}
              onClick={() => {
                setCurrentUser(user);
                setIsSidebarOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-sm transition-all border-l-2 ${
                currentUser.id === user.id 
                  ? 'bg-ops-bg border-ops-light text-ops-white' 
                  : 'border-transparent text-ops-slate hover:text-ops-light hover:bg-ops-bg/50'
              }`}
            >
              <UserCheck className="w-4 h-4" />
              <span className="font-medium text-sm">{user.role} View</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-ops-slate/30 bg-ops-bg/30">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-ops-slate text-ops-bg rounded-full flex items-center justify-center text-sm font-bold">
              {currentUser.name.charAt(0)}
            </div>
            <div>
              <div className="text-sm font-bold text-ops-white">{currentUser.name}</div>
              <div className="text-xs text-ops-slate uppercase tracking-wider">{currentUser.role} Access</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pt-20 lg:pt-8 px-4 lg:px-8 pb-8">
        <header className="flex justify-between items-end mb-8 border-b border-ops-slate/20 pb-4">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-ops-white mb-1 font-mono uppercase tracking-tight">
              {currentUser.role} Dashboard
            </h1>
            <p className="text-ops-slate text-xs font-mono uppercase flex items-center tracking-wider">
               <Lock className="w-3 h-3 mr-1" />
               Secure Connection • Neutral Portfolio v2.5
            </p>
          </div>
          <div className="hidden md:block">
            <span className="bg-ops-slate/10 text-ops-light border border-ops-slate/30 px-3 py-1 text-xs font-mono uppercase">
              Term: Fall 2023
            </span>
          </div>
        </header>

        {renderView()}
      </main>
    </div>
  );
}