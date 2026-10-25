import React, { useState } from 'react';
import { Bot, Sparkles, Database, Terminal, CheckCircle2, RotateCcw, Send, AlertTriangle, Package, XCircle, ArrowRight, ExternalLink } from 'lucide-react';

export default function AiSupportSimulator({ isDark }) {
  const initialOrders = [
    { id: 101, customer: "Rahul Sharma", item: "Sony WH-1000XM5 Headphones", status: "Shipped", courier: "BlueDart", eta: "Tomorrow 5:00 PM", amount: "₹24,999" },
    { id: 102, customer: "Priya Singh", item: "Logitech MX Master 3S Mouse", status: "Processing", courier: "Delhivery", eta: "In 3 Days", amount: "₹8,495" },
    { id: 103, customer: "Amit Verma", item: "Samsung 4K Gaming Monitor", status: "Delivered", courier: "EcomExpress", eta: "Delivered 2 days ago", amount: "₹31,999" }
  ];

  const [orders, setOrders] = useState(initialOrders);
  const [tickets, setTickets] = useState([]);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: "Namaste! I am the SwiftCart AI Support Agent. I use LLM Tool Calling to check live database orders, process cancellations, and escalate tickets. Try one of the quick actions below!",
      toolCall: null
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [lastToolPayload, setLastToolPayload] = useState({
    tool: "init_session",
    params: { agent: "Gemini 2.5 Flash", mode: "Function Calling Enabled" },
    dbResult: { status: "ready", activeOrders: 3 }
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const resetAll = () => {
    setOrders(initialOrders);
    setTickets([]);
    setMessages([
      {
        role: 'assistant',
        text: "System reset to initial state. Live database and session cleared. How can I help you?",
        toolCall: null
      }
    ]);
    setLastToolPayload({
      tool: "reset_db",
      params: { action: "SEED_DEFAULT_DATA" },
      dbResult: { success: true, ordersRestored: 3 }
    });
  };

  const executeAction = (promptText) => {
    if (!promptText.trim() || isProcessing) return;

    const userText = promptText.trim();
    setInputVal('');
    setIsProcessing(true);

    const newMsgs = [...messages, { role: 'user', text: userText }];
    setMessages(newMsgs);

    setTimeout(() => {
      const lower = userText.toLowerCase();
      let botReply = "";
      let toolExecuted = null;

      // Intent 1: Track order
      if (lower.includes("101") || lower.includes("track") || lower.includes("kahan") || lower.includes("status")) {
        const ord = orders.find(o => o.id === 101) || orders[0];
        toolExecuted = {
          tool: "get_order_details",
          params: { order_id: ord.id },
          dbResult: ord
        };
        botReply = `Order #${ord.id} (${ord.item}) live details retrieved:\n• Status: ${ord.status}\n• Courier: ${ord.courier}\n• Expected Delivery: ${ord.eta}\n• Total Amount: ${ord.amount}`;
      } 
      // Intent 2: Cancel order
      else if (lower.includes("cancel") || lower.includes("102")) {
        const target = orders.find(o => o.id === 102);
        if (target && target.status === 'Cancelled') {
          toolExecuted = {
            tool: "cancel_order",
            params: { order_id: 102, reason: "Customer request" },
            dbResult: { success: false, error: "Order is already cancelled" }
          };
          botReply = `Order #102 is already cancelled. Refund is in progress.`;
        } else {
          setOrders(prev => prev.map(o => o.id === 102 ? { ...o, status: "Cancelled" } : o));
          toolExecuted = {
            tool: "cancel_order",
            params: { order_id: 102, reason: "Customer requested cancellation" },
            dbResult: { success: true, updatedStatus: "Cancelled", refundTime: "24 hours" }
          };
          botReply = `Order #102 (${target ? target.item : 'Logitech Mouse'}) has been successfully cancelled in SQLite database! Refund initiated within 24 hours.`;
        }
      }
      // Intent 3: Complaint / Ticket
      else if (lower.includes("toota") || lower.includes("damage") || lower.includes("complaint") || lower.includes("fraud") || lower.includes("late") || lower.includes("urgent")) {
        const newTicketId = tickets.length + 101;
        const newTicket = {
          id: `T-${newTicketId}`,
          issue: "Customer reported defective item / shipping delay",
          priority: "HIGH",
          status: "OPEN"
        };
        setTickets(prev => [newTicket, ...prev]);
        toolExecuted = {
          tool: "create_support_ticket",
          params: { priority: "HIGH", sentiment: "NEGATIVE_URGENT", description: userText },
          dbResult: { success: true, ticket_id: `T-${newTicketId}`, assignedTo: "Senior Escalation Manager" }
        };
        botReply = `I understand your frustration. A HIGH Priority Ticket (#T-${newTicketId}) has been logged in the SQLite database. Our Senior Escalation Team will contact you within 30 minutes.`;
      }
      // Intent 4: Refund policy
      else if (lower.includes("policy") || lower.includes("refund") || lower.includes("return")) {
        toolExecuted = {
          tool: "get_company_policy",
          params: { topic: "refund_and_return" },
          dbResult: { window: "7 days", condition: "Unopened or defective item pickup with instant refund" }
        };
        botReply = `SwiftCart Return Policy: Products can be returned within 7 days of delivery. Full refund is credited to original payment method within 24-48 hours after courier pickup.`;
      }
      // General fallback
      else {
        toolExecuted = {
          tool: "intent_router",
          params: { input: userText },
          dbResult: { matchedRoute: "faq_support" }
        };
        botReply = `I am equipped to handle order tracking (e.g. #101), instant cancellations (e.g. #102), and priority ticket escalation. Please try one of the prompt chips!`;
      }

      setLastToolPayload(toolExecuted);
      setMessages(prev => [...prev, { role: 'assistant', text: botReply, toolCall: toolExecuted }]);
      setIsProcessing(false);
    }, 400);
  };

  return (
    <div className="space-y-4">
      {/* Top Banner / Pipeline Summary */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-3.5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono font-bold text-slate-800 dark:text-zinc-200">
            AUTONOMOUS TOOL CALLING PIPELINE
          </span>
          <span className="px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 font-mono text-[10px] font-semibold">
            GEMINI 2.5 FLASH
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={resetAll}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 text-slate-600 dark:text-zinc-300 font-mono text-[11px] transition"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset State</span>
          </button>
          <a
            href="https://ai-support-agent-6rbb.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-[11px] transition shadow-sm"
          >
            <span>Open Standalone App</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Main 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* Left Column: Interactive Chat (7 cols) */}
        <div className="lg:col-span-7 flex flex-col rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 overflow-hidden min-h-[460px]">
          
          {/* Quick Action Chips */}
          <div className="p-3 bg-slate-50 dark:bg-zinc-950/60 border-b border-slate-200/80 dark:border-zinc-800">
            <div className="text-[11px] font-mono text-slate-400 mb-2 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-500" /> Click to test LLM Tool Calling:
            </div>
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => executeAction("Order #101 kahan tak pahuncha? Status batao")}
                className="text-[11px] bg-white dark:bg-zinc-900 hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-200 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-zinc-800 transition"
              >
                📦 Track Order #101
              </button>
              <button
                onClick={() => executeAction("Mujhe order #102 cancel karna hai, please cancel it")}
                className="text-[11px] bg-white dark:bg-zinc-900 hover:bg-slate-100 dark:hover:bg-zinc-800 text-rose-600 dark:text-rose-400 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-zinc-800 transition"
              >
                ❌ Cancel Order #102
              </button>
              <button
                onClick={() => executeAction("Mera parcel toota hua aaya hai, 5 din se koi sun nahi raha!")}
                className="text-[11px] bg-white dark:bg-zinc-900 hover:bg-slate-100 dark:hover:bg-zinc-800 text-amber-600 dark:text-amber-400 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-zinc-800 transition"
              >
                ⚠️ Urgent Complaint (Escalate)
              </button>
              <button
                onClick={() => executeAction("Return aur refund policy kya hai?")}
                className="text-[11px] bg-white dark:bg-zinc-900 hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-200 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-zinc-800 transition"
              >
                📜 Policy Lookup
              </button>
            </div>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 p-3.5 space-y-3 overflow-y-auto max-h-[300px] text-xs">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex items-start gap-2.5 ${m.role === 'user' ? 'justify-end' : ''}`}>
                {m.role === 'assistant' && (
                  <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white shrink-0 mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                )}
                <div className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                  m.role === 'user'
                    ? 'bg-indigo-600 text-white rounded-tr-sm'
                    : 'bg-slate-100 dark:bg-zinc-950/80 border border-slate-200 dark:border-zinc-800 text-slate-800 dark:text-zinc-200 rounded-tl-sm'
                }`}>
                  <div className="whitespace-pre-line">{m.text}</div>
                  {m.toolCall && (
                    <div className="mt-2 pt-1.5 border-t border-slate-200 dark:border-zinc-800 flex items-center gap-1.5 font-mono text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Tool Executed: {m.toolCall.tool}()</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isProcessing && (
              <div className="flex items-center gap-2 text-xs text-slate-400 p-2 font-mono">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
                <span>AI analyzing parameters & executing backend tool...</span>
              </div>
            )}
          </div>

          {/* Chat Input */}
          <div className="p-3 border-t border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950/60">
            <form 
              onSubmit={(e) => { e.preventDefault(); executeAction(inputVal); }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Ask e.g. 'Order #101 kahan hai?' or 'Cancel order #102'..."
                className="flex-1 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl px-3 py-2 text-xs text-slate-800 dark:text-zinc-200 focus:outline-none focus:border-indigo-500"
              />
              <button
                type="submit"
                disabled={!inputVal.trim() || isProcessing}
                className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition"
              >
                <span>Send</span>
                <Send className="w-3 h-3" />
              </button>
            </form>
          </div>
        </div>

        {/* Right Column: Live SQLite State & Tool Logs (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          
          {/* Live Orders Table */}
          <div className="p-3.5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800">
            <div className="flex items-center justify-between mb-2">
              <div className="text-[11px] font-mono font-bold uppercase text-slate-500 dark:text-zinc-400 flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-indigo-500" />
                <span>SQLite: Orders Table</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-500 font-semibold">LIVE SYNC</span>
            </div>
            <div className="space-y-1.5">
              {orders.map(o => (
                <div key={o.id} className="p-2 rounded-xl bg-slate-50 dark:bg-zinc-950/80 border border-slate-200/80 dark:border-zinc-800 flex items-center justify-between text-xs">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono font-bold text-indigo-500 text-[11px]">#{o.id}</span>
                      <span className="font-medium text-slate-800 dark:text-zinc-200 truncate max-w-[140px] text-[11px]">{o.item}</span>
                    </div>
                    <div className="text-[10px] text-slate-400">{o.courier} • {o.amount}</div>
                  </div>
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold font-mono ${
                    o.status === 'Shipped' ? 'bg-blue-500/10 text-blue-500 border border-blue-500/20' :
                    o.status === 'Processing' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' :
                    o.status === 'Delivered' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' :
                    'bg-rose-500/10 text-rose-500 border border-rose-500/20'
                  }`}>
                    {o.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Live Support Tickets */}
          <div className="p-3.5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800">
            <div className="flex items-center justify-between mb-2">
              <div className="text-[11px] font-mono font-bold uppercase text-slate-500 dark:text-zinc-400 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                <span>SQLite: Support Tickets</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">{tickets.length} Created</span>
            </div>
            {tickets.length === 0 ? (
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-950/40 text-center text-slate-400 text-[11px] font-mono">
                No tickets escalated yet. Click "Urgent Complaint" to trigger.
              </div>
            ) : (
              <div className="space-y-1.5 max-h-[110px] overflow-y-auto">
                {tickets.map(t => (
                  <div key={t.id} className="p-2 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-mono text-amber-500 font-bold text-[11px]">{t.id}</div>
                      <div className="text-[10px] text-slate-400 truncate max-w-[140px]">{t.issue}</div>
                    </div>
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-rose-500/10 text-rose-500 border border-rose-500/20">
                      {t.priority}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Under-the-Hood Tool Execution Log */}
          <div className="p-3.5 rounded-2xl bg-slate-900 dark:bg-black border border-slate-800 text-xs font-mono">
            <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5">
              <div className="flex items-center gap-1">
                <Terminal className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-400 font-bold">TOOL EXECUTION PAYLOAD</span>
              </div>
              <span className="text-[10px] text-slate-500">JSON SCHEMA</span>
            </div>
            <pre className="bg-slate-950 p-2.5 rounded-xl text-[10px] text-emerald-300 overflow-x-auto max-h-[100px] border border-slate-800/80">
              {JSON.stringify(lastToolPayload, null, 2)}
            </pre>
          </div>

        </div>

      </div>
    </div>
  );
}
