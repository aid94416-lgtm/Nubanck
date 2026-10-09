import React, { useState } from 'react';
import { Eye, EyeOff, HelpCircle, Mail, CreditCard, ChevronRight, Plus, DollarSign, ShoppingBag, Heart, Bell } from 'lucide-react';

export default function App() {
  const [balance, setBalance] = useState(12500.50);
  const [creditInvoice, setCreditInvoice] = useState(1840.20);
  const [creditLimit, setCreditLimit] = useState(8500.00);
  const [userName, setUserName] = useState("Natan");
  const [hideBalance, setHideBalance] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [tempBalance, setTempBalance] = useState(balance);
  const [tempInvoice, setTempInvoice] = useState(creditInvoice);
  const [tempLimit, setTempLimit] = useState(creditLimit);

  const handleSave = () => {
    setBalance(parseFloat(tempBalance) || 0);
    setCreditInvoice(parseFloat(tempInvoice) || 0);
    setCreditLimit(parseFloat(tempLimit) || 0);
    setIsEditModalOpen(false);
  };

  return (
    <div className="max-w-md mx-auto bg-[#0d001a] min-h-screen text-white relative pb-20 font-sans">
      {/* Top Header without Status Bar */}
      <div className="bg-[#820AD1] p-5 pt-8 rounded-b-3xl shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <div className="w-12 h-12 rounded-full bg-purple-700 flex items-center justify-center font-bold text-lg border-2 border-purple-400">
            {userName.charAt(0)}
          </div>
          <div className="flex gap-4 items-center">
            <button onClick={() => setHideBalance(!hideBalance)} className="p-2 bg-purple-700/50 rounded-full">
              {hideBalance ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            <button className="p-2 bg-purple-700/50 rounded-full"><HelpCircle size={20} /></button>
            <button className="p-2 bg-purple-700/50 rounded-full"><Mail size={20} /></button>
          </div>
        </div>
        <h1 className="text-xl font-bold">Olá, {userName}</h1>
      </div>

      {/* Account Balance Card (Click to edit) */}
      <div className="p-5 border-b border-purple-900/40">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-300 font-medium">Conta</span>
          <ChevronRight size={18} className="text-gray-400" />
        </div>
        <button 
          onClick={() => {
            setTempBalance(balance);
            setTempInvoice(creditInvoice);
            setTempLimit(creditLimit);
            setIsEditModalOpen(true);
          }}
          className="text-left w-full hover:bg-purple-900/20 p-2 rounded-xl transition"
        >
          <div className="text-2xl font-bold text-white">
            {hideBalance ? "•••••" : `R$ ${balance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
          </div>
        </button>
      </div>

      {/* Credit Card Section (Click to edit) */}
      <div className="p-5 border-b border-purple-900/40">
        <div className="flex items-center justify-between text-gray-300 mb-2">
          <div className="flex items-center gap-2">
            <CreditCard size={20} />
            <span className="font-medium">Cartão de Crédito</span>
          </div>
          <ChevronRight size={18} className="text-gray-400" />
        </div>
        <button 
          onClick={() => {
            setTempBalance(balance);
            setTempInvoice(creditInvoice);
            setTempLimit(creditLimit);
            setIsEditModalOpen(true);
          }}
          className="text-left w-full hover:bg-purple-900/20 p-2 rounded-xl transition"
        >
          <div className="text-sm text-gray-400">Fatura atual</div>
          <div className="text-xl font-bold text-blue-400">
            {hideBalance ? "•••••" : `R$ ${creditInvoice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
          </div>
          <div className="text-xs text-gray-400 mt-1">
            Limite disponível: {hideBalance ? "•••••" : `R$ ${creditLimit.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
          </div>
        </button>
      </div>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-[#120024] border-t border-purple-900/50 py-3 px-6 flex justify-between text-gray-400 text-xs">
        <button className="flex flex-col items-center text-purple-400"><CreditCard size={20} />Conta</button>
        <button className="flex flex-col items-center"><DollarSign size={20} />Investir</button>
        <button className="flex flex-col items-center"><ShoppingBag size={20} />Shopping</button>
        <button className="flex flex-col items-center"><Heart size={20} />Vida</button>
      </div>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-[#1a092b] border border-purple-600 rounded-3xl p-6 w-full max-w-sm">
            <h2 className="text-xl font-bold mb-4 text-purple-300">Definir Valores (Natan)</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs text-gray-400 mb-1">Saldo da Conta (R$)</label>
                <input 
                  type="number" 
                  value={tempBalance} 
                  onChange={(e) => setTempBalance(e.target.value)}
                  className="w-full bg-[#0d001a] border border-purple-700 rounded-xl p-3 text-white font-bold"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">Fatura do Cartão (R$)</label>
                <input 
                  type="number" 
                  value={tempInvoice} 
                  onChange={(e) => setTempInvoice(e.target.value)}
                  className="w-full bg-[#0d001a] border border-purple-700 rounded-xl p-3 text-white font-bold"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">Limite do Cartão (R$)</label>
                <input 
                  type="number" 
                  value={tempLimit} 
                  onChange={(e) => setTempLimit(e.target.value)}
                  className="w-full bg-[#0d001a] border border-purple-700 rounded-xl p-3 text-white font-bold"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setIsEditModalOpen(false)} className="flex-1 bg-gray-800 text-gray-300 py-3 rounded-xl font-bold">Cancelar</button>
              <button onClick={handleSave} className="flex-1 bg-[#820AD1] text-white py-3 rounded-xl font-bold">Salvar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
