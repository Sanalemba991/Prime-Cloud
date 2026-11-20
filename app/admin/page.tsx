"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Inbox,
  Briefcase,
  LogOut,
  RefreshCw,
  Search,
  Trash2,
  Menu,
  X,
  Mail,
  Building,
  Phone,
  Calendar,
  Layers,
  Lock,
  User,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

interface ContactItem {
  _id: string;
  fullName: string;
  companyName?: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
  source?: string;
  createdAt: string;
}

interface ServiceEnquiryItem {
  _id: string;
  fullName: string;
  companyName?: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
  createdAt: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [adminUser, setAdminUser] = useState<{ username: string } | null>(null);

  // Login form state
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Dashboard active tab: "contacts" | "services"
  const [activeTab, setActiveTab] = useState<"contacts" | "services">("contacts");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Data lists
  const [contacts, setContacts] = useState<ContactItem[]>([]);
  const [enquiries, setEnquiries] = useState<ServiceEnquiryItem[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [actionMessage, setActionMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Detail modal item
  const [selectedItem, setSelectedItem] = useState<{
    type: "contact" | "service";
    data: ContactItem | ServiceEnquiryItem;
  } | null>(null);

  // Check auth on mount
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await fetch("/api/admin/check");
      const data = await res.json();
      if (res.ok && data.authenticated) {
        setIsAuthenticated(true);
        setAdminUser(data.user);
        fetchData();
      } else {
        setIsAuthenticated(false);
      }
    } catch {
      setIsAuthenticated(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: loginUsername,
          password: loginPassword,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Login failed");
      }

      setIsAuthenticated(true);
      setAdminUser({ username: loginUsername });
      fetchData();
    } catch (err: any) {
      setLoginError(err.message || "Invalid credentials");
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
    } finally {
      setIsAuthenticated(false);
      setAdminUser(null);
    }
  };

  const fetchData = async () => {
    setIsLoadingData(true);
    try {
      const [contactsRes, enquiriesRes] = await Promise.all([
        fetch("/api/admin/contacts"),
        fetch("/api/admin/enquiries"),
      ]);

      if (contactsRes.ok) {
        const cData = await contactsRes.json();
        setContacts(cData.data || []);
      }

      if (enquiriesRes.ok) {
        const eData = await enquiriesRes.json();
        setEnquiries(eData.data || []);
      }
    } catch (err) {
      console.error("Error fetching admin data:", err);
    } finally {
      setIsLoadingData(false);
    }
  };

  const handleDelete = async (id: string, type: "contact" | "service") => {
    try {
      const endpoint = type === "contact" ? `/api/admin/contacts?id=${id}` : `/api/admin/enquiries?id=${id}`;
      const res = await fetch(endpoint, { method: "DELETE" });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to delete");
      }

      if (type === "contact") {
        setContacts((prev) => prev.filter((item) => item._id !== id));
      } else {
        setEnquiries((prev) => prev.filter((item) => item._id !== id));
      }

      if (selectedItem?.data._id === id) {
        setSelectedItem(null);
      }

      setActionMessage({ type: "success", text: "Entry deleted successfully." });
      setTimeout(() => setActionMessage(null), 3000);
    } catch (err: any) {
      setActionMessage({ type: "error", text: err.message || "Failed to delete." });
      setTimeout(() => setActionMessage(null), 3500);
    } finally {
      setDeleteConfirmId(null);
    }
  };

  // Filtered entries based on searchQuery
  const filteredContacts = contacts.filter((c) => {
    const q = searchQuery.toLowerCase();
    return (
      c.fullName?.toLowerCase().includes(q) ||
      c.email?.toLowerCase().includes(q) ||
      c.companyName?.toLowerCase().includes(q) ||
      c.service?.toLowerCase().includes(q) ||
      c.message?.toLowerCase().includes(q)
    );
  });

  const filteredEnquiries = enquiries.filter((e) => {
    const q = searchQuery.toLowerCase();
    return (
      e.fullName?.toLowerCase().includes(q) ||
      e.email?.toLowerCase().includes(q) ||
      e.companyName?.toLowerCase().includes(q) ||
      e.service?.toLowerCase().includes(q) ||
      e.message?.toLowerCase().includes(q)
    );
  });

  // Loading initial auth check screen
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-[#f8faff] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-9 h-9 border-3 border-[#0052ff] border-t-transparent rounded-full animate-spin" />
          <p className="text-sm font-semibold text-slate-500">Loading admin portal...</p>
        </div>
      </div>
    );
  }

  // ==========================================
  // LOGIN SCREEN
  // ==========================================
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#f8faff] flex flex-col justify-center items-center px-4 py-12">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,82,255,0.06)] border border-slate-100 p-7 sm:p-9">
          {/* Logo & Header */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-12 h-12 mb-3.5 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                <path d="M26 18 H52 C68 18 78 28 78 44 C78 60 68 70 52 70 H40 V86 H26 V18 Z" fill="#0b172a" />
                <path d="M40 38 C40 38 45 32 52 32 C58 32 63 36 63 42 C67 42 70 45 70 49 C70 54 66 57 61 57 H38 C34 57 31 54 31 50 C31 46 34 43 38 43 C38 41 39 39 40 38 Z" fill="white" />
                <path d="M26 62 Q 44 48 68 47 Q 52 62 40 70 Z" fill="#0052ff" />
              </svg>
            </div>
            <h1 className="text-2xl font-black text-[#0a1128] tracking-tight">Admin Portal</h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Enter your credentials configured in your environment to manage enquiries.
            </p>
          </div>

          {loginError && (
            <div className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-medium flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Username Input */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
                  placeholder="Username"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0052ff]/20 focus:border-[#0052ff] bg-white text-slate-800"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type="password"
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0052ff]/20 focus:border-[#0052ff] bg-white text-slate-800"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full mt-2 py-3 px-5 rounded-xl bg-[#0052ff] hover:bg-[#0047db] active:bg-[#003cb8] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-[#0052ff]/20 hover:shadow-lg transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span>{isLoggingIn ? "Authenticating..." : "Sign In to Admin"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <Link href="/" className="hover:text-[#0052ff] transition-colors flex items-center gap-1">
              &larr; Back to Website
            </Link>
            <span className="flex items-center gap-1 font-medium text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Secure Portal
            </span>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // AUTHENTICATED DASHBOARD
  // ==========================================
  return (
    <div className="min-h-screen bg-[#f8faff] flex flex-col select-none">
      {/* Top Navbar */}
      <header className="h-16 bg-white border-b border-slate-200/80 sticky top-0 z-30 px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
          >
            {mobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7 shrink-0">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                <path d="M26 18 H52 C68 18 78 28 78 44 C78 60 68 70 52 70 H40 V86 H26 V18 Z" fill="#0b172a" />
                <path d="M40 38 C40 38 45 32 52 32 C58 32 63 36 63 42 C67 42 70 45 70 49 C70 54 66 57 61 57 H38 C34 57 31 54 31 50 C31 46 34 43 38 43 C38 41 39 39 40 38 Z" fill="white" />
                <path d="M26 62 Q 44 48 68 47 Q 52 62 40 70 Z" fill="#0052ff" />
              </svg>
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="text-[14px] font-black tracking-tight text-[#0a1128]">PRIME CLOUD</span>
              <span className="text-[8px] font-extrabold tracking-[0.16em] text-[#0052ff]">ADMIN PANEL</span>
            </div>
          </Link>
        </div>

        {/* Right Admin Profile + Controls */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={fetchData}
            disabled={isLoadingData}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoadingData ? "animate-spin text-[#0052ff]" : ""}`} />
            <span className="hidden sm:inline">Refresh</span>
          </button>

          <div className="hidden md:flex flex-col text-right leading-tight">
            <span className="text-xs font-bold text-slate-800">{adminUser?.username}</span>
            <span className="text-[11px] text-slate-400">Administrator</span>
          </div>

          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 text-xs font-semibold transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`fixed lg:static inset-y-16 left-0 z-20 w-64 bg-white border-r border-slate-200 flex flex-col transition-transform duration-200 ease-in-out ${
            mobileSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <div className="p-4 flex-1 space-y-1">
            <p className="px-3 py-2 text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">
              Enquiry Management
            </p>

            {/* Tab: Contact Us Enquiries */}
            <button
              onClick={() => {
                setActiveTab("contacts");
                setMobileSidebarOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "contacts"
                  ? "bg-[#0052ff] text-white shadow-sm shadow-[#0052ff]/20"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Inbox className="w-4 h-4" />
                <span>Contact Enquiries</span>
              </div>
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                  activeTab === "contacts" ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                }`}
              >
                {contacts.length}
              </span>
            </button>

            {/* Tab: Service Enquiries (From Modal Popup) */}
            <button
              onClick={() => {
                setActiveTab("services");
                setMobileSidebarOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "services"
                  ? "bg-[#0052ff] text-white shadow-sm shadow-[#0052ff]/20"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Briefcase className="w-4 h-4" />
                <span>Service Enquiries</span>
              </div>
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                  activeTab === "services" ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                }`}
              >
                {enquiries.length}
              </span>
            </button>
          </div>

          {/* Sidebar Footer info */}
          <div className="p-4 border-t border-slate-100 bg-slate-50/50">
            <div className="text-[11px] text-slate-500 flex flex-col gap-1">
              <span className="font-semibold text-slate-700">PrimeCloud ERP & AI</span>
              <span>All records synced with MongoDB.</span>
              <Link href="/" target="_blank" className="text-[#0052ff] hover:underline font-medium mt-1">
                View Live Site &rarr;
              </Link>
            </div>
          </div>
        </aside>

        {/* Overlay backdrop on mobile */}
        {mobileSidebarOpen && (
          <div
            onClick={() => setMobileSidebarOpen(false)}
            className="fixed inset-0 bg-slate-900/30 z-10 lg:hidden"
          />
        )}

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {/* Notification message */}
          {actionMessage && (
            <div
              className={`mb-5 p-3.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 ${
                actionMessage.type === "success"
                  ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {actionMessage.type === "success" ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
              )}
              <span>{actionMessage.text}</span>
            </div>
          )}

          {/* Page Title & Search Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[#0a1128] tracking-tight">
                {activeTab === "contacts" ? "Contact Page Enquiries" : "Service Modal Enquiries"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                {activeTab === "contacts"
                  ? `Showing messages submitted from the /contact page (${filteredContacts.length} total)`
                  : `Showing requests submitted via the Services popup modal (${filteredEnquiries.length} total)`}
              </p>
            </div>

            {/* Search input */}
            <div className="relative w-full sm:w-72">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, email, service..."
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0052ff]/20 focus:border-[#0052ff] bg-white"
              />
            </div>
          </div>

          {/* Entries Table / Card View */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            {activeTab === "contacts" ? (
              filteredContacts.length === 0 ? (
                <div className="py-16 text-center">
                  <Inbox className="w-10 h-10 text-slate-300 mx-auto mb-2.5" />
                  <p className="text-sm font-bold text-slate-700">No contact messages found</p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {searchQuery ? "Try refining your search filter" : "New messages from the contact form will appear here."}
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50/70 border-b border-slate-200 text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                        <th className="py-3.5 px-4 sm:px-6">Sender</th>
                        <th className="py-3.5 px-4">Service Required</th>
                        <th className="py-3.5 px-4">Message Preview</th>
                        <th className="py-3.5 px-4">Date</th>
                        <th className="py-3.5 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                      {filteredContacts.map((item) => (
                        <tr key={item._id} className="hover:bg-slate-50/60 transition-colors">
                          <td className="py-3.5 px-4 sm:px-6">
                            <div className="font-bold text-slate-900">{item.fullName}</div>
                            <div className="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5">
                              <span>{item.email}</span>
                              {item.phone && <span>&bull; {item.phone}</span>}
                            </div>
                            {item.companyName && (
                              <div className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1">
                                <Building className="w-3 h-3" />
                                <span>{item.companyName}</span>
                              </div>
                            )}
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-[#e8f1fd] text-[#0052ff]">
                              {item.service}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 max-w-xs truncate text-slate-600">
                            {item.message}
                          </td>
                          <td className="py-3.5 px-4 text-xs text-slate-400 whitespace-nowrap">
                            {new Date(item.createdAt).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </td>
                          <td className="py-3.5 px-4 text-right whitespace-nowrap">
                            <button
                              onClick={() => setSelectedItem({ type: "contact", data: item })}
                              className="px-2.5 py-1 text-xs font-semibold text-[#0052ff] hover:bg-[#e8f1fd] rounded-lg transition-colors mr-2 cursor-pointer"
                            >
                              View
                            </button>
                            <button
                              onClick={() => setDeleteConfirmId(item._id)}
                              className="px-2.5 py-1 text-xs font-semibold text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )
            ) : filteredEnquiries.length === 0 ? (
              <div className="py-16 text-center">
                <Briefcase className="w-10 h-10 text-slate-300 mx-auto mb-2.5" />
                <p className="text-sm font-bold text-slate-700">No service enquiries found</p>
                <p className="text-xs text-slate-400 mt-0.5">
                  {searchQuery ? "Try refining your search filter" : "Requests from the Service popup modal will appear here."}
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50/70 border-b border-slate-200 text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                      <th className="py-3.5 px-4 sm:px-6">Client</th>
                      <th className="py-3.5 px-4">Requested Service</th>
                      <th className="py-3.5 px-4">Requirement / Message</th>
                      <th className="py-3.5 px-4">Date</th>
                      <th className="py-3.5 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                    {filteredEnquiries.map((item) => (
                      <tr key={item._id} className="hover:bg-slate-50/60 transition-colors">
                        <td className="py-3.5 px-4 sm:px-6">
                          <div className="font-bold text-slate-900">{item.fullName}</div>
                          <div className="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5">
                            <span>{item.email}</span>
                            {item.phone && <span>&bull; {item.phone}</span>}
                          </div>
                          {item.companyName && (
                            <div className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1">
                              <Building className="w-3 h-3" />
                              <span>{item.companyName}</span>
                            </div>
                          )}
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700">
                            {item.service}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 max-w-xs truncate text-slate-600">
                          {item.message}
                        </td>
                        <td className="py-3.5 px-4 text-xs text-slate-400 whitespace-nowrap">
                          {new Date(item.createdAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </td>
                        <td className="py-3.5 px-4 text-right whitespace-nowrap">
                          <button
                            onClick={() => setSelectedItem({ type: "service", data: item })}
                            className="px-2.5 py-1 text-xs font-semibold text-[#0052ff] hover:bg-[#e8f1fd] rounded-lg transition-colors mr-2 cursor-pointer"
                          >
                            View
                          </button>
                          <button
                            onClick={() => setDeleteConfirmId(item._id)}
                            className="px-2.5 py-1 text-xs font-semibold text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* ==========================================
          DETAILS VIEW MODAL
          ========================================== */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-100">
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0052ff]">
                  {selectedItem.type === "contact" ? "Contact Message" : "Service Modal Request"}
                </span>
                <h3 className="text-xl font-black text-slate-900 mt-0.5">{selectedItem.data.fullName}</h3>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-5 space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Email</span>
                  <a href={`mailto:${selectedItem.data.email}`} className="text-[#0052ff] font-semibold hover:underline">
                    {selectedItem.data.email}
                  </a>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Phone</span>
                  <span className="text-slate-700 font-medium">{selectedItem.data.phone || "Not provided"}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Company</span>
                  <span className="text-slate-700 font-medium">{selectedItem.data.companyName || "Not provided"}</span>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Date Received</span>
                  <span className="text-slate-700 font-medium">
                    {new Date(selectedItem.data.createdAt).toLocaleString()}
                  </span>
                </div>
              </div>

              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Requested Service
                </span>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#e8f1fd] text-[#0052ff]">
                  {selectedItem.data.service}
                </span>
              </div>

              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Message Content
                </span>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-slate-700 whitespace-pre-wrap leading-relaxed text-xs sm:text-sm">
                  {selectedItem.data.message}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                onClick={() => setDeleteConfirmId(selectedItem.data._id)}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-red-600 hover:bg-red-50 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                <span>Delete Entry</span>
              </button>

              <button
                onClick={() => setSelectedItem(null)}
                className="px-5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          DELETE CONFIRMATION MODAL
          ========================================== */}
      {deleteConfirmId && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 text-center shadow-xl border border-slate-100">
            <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-3.5">
              <Trash2 className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-black text-slate-900 mb-1">Confirm Deletion</h4>
            <p className="text-xs text-slate-500 mb-5">
              Are you sure you want to delete this enquiry from MongoDB? This action cannot be undone.
            </p>
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => setDeleteConfirmId(null)}
                className="flex-1 py-2 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirmId, activeTab === "contacts" ? "contact" : "service")}
                className="flex-1 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs transition-colors"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
