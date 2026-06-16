import { useState } from "react";

const API_BASE = "/api/tempmail";

export default function Maybach() {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [inbox, setInbox] = useState([]);
  const [selectedMsg, setSelectedMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inboxLoading, setInboxLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [view, setView] = useState("generate"); // "generate" | "inbox" | "message"
  const [error, setError] = useState("");

  async function generateMail() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_BASE}/create`);
      const data = await res.json();
      if (data.address && data.token) {
        setEmail(data.address);
        setToken(data.token);
        setInbox([]);
        setSelectedMsg(null);
        setView("generate");
      } else {
        setError("Failed to generate email. Try again.");
      }
    } catch {
      setError("Something went wrong. Try again.");
    }
    setLoading(false);
  }

  async function goToInbox() {
    if (!token) return;
    setInboxLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_BASE}/inbox?token=${token}`);
      const data = await res.json();
      setInbox(data);
      setView("inbox");
    } catch {
      setError("Could not load inbox.");
    }
    setInboxLoading(false);
  }

  async function openMessage(id) {
    try {
      const res = await fetch(`${API_BASE}/message/${id}?token=${token}`);
      const data = await res.json();
      setSelectedMsg(data);
      setView("message");
    } catch {
      setError("Could not load message.");
    }
  }

  function copyEmail() {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function formatDate(dateStr) {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleString();
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f9f9f8",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      padding: "60px 16px",
      fontFamily: "Inter, system-ui, sans-serif"
    }}>
      <div style={{ width: "100%", maxWidth: 520 }}>

        {/* Header */}
        <div style={{ marginBottom: 36 }}>
          <p style={{ fontSize: 12, letterSpacing: "0.12em", color: "#999", textTransform: "uppercase", margin: "0 0 8px" }}>Private Tool</p>
          <h1 style={{ fontSize: 26, fontWeight: 600, color: "#1a1a1a", margin: 0 }}>Temp Mail</h1>
          <p style={{ fontSize: 14, color: "#888", margin: "6px 0 0" }}>Generate a disposable inbox, no sign-up needed.</p>
        </div>

        {/* Error */}
        {error && (
          <div style={{
            background: "#fff0f0", border: "0.5px solid #f5c1c1",
            borderRadius: 10, padding: "10px 14px",
            fontSize: 13, color: "#a32d2d", marginBottom: 20
          }}>
            {error}
          </div>
        )}

        {/* Generate View */}
        {view === "generate" && (
          <div style={{
            background: "#fff", border: "0.5px solid #e5e5e3",
            borderRadius: 14, padding: "28px 24px"
          }}>
            {!email ? (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div style={{
                  width: 52, height: 52, borderRadius: "50%",
                  background: "#f1f0fe", display: "flex",
                  alignItems: "center", justifyContent: "center",
                  margin: "0 auto 20px"
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#534AB7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="3"/>
                    <polyline points="2,4 12,13 22,4"/>
                  </svg>
                </div>
                <p style={{ fontSize: 14, color: "#888", margin: "0 0 24px" }}>
                  Click below to get a fresh temp email address instantly.
                </p>
                <button onClick={generateMail} disabled={loading} style={{
                  background: "#1a1a1a", color: "#fff",
                  border: "none", borderRadius: 9, padding: "11px 28px",
                  fontSize: 14, fontWeight: 500, cursor: loading ? "not-allowed" : "pointer",
                  opacity: loading ? 0.6 : 1, transition: "opacity 0.15s"
                }}>
                  {loading ? "Generating..." : "Generate temp mail"}
                </button>
              </div>
            ) : (
              <div>
                {/* Email display */}
                <p style={{ fontSize: 12, color: "#aaa", margin: "0 0 8px", letterSpacing: "0.08em", textTransform: "uppercase" }}>Your address</p>
                <div style={{
                  display: "flex", alignItems: "center", gap: 10,
                  background: "#f5f5f3", borderRadius: 9,
                  padding: "10px 14px", marginBottom: 20
                }}>
                  <span style={{ flex: 1, fontSize: 14, color: "#1a1a1a", fontFamily: "monospace", wordBreak: "break-all" }}>{email}</span>
                  <button onClick={copyEmail} style={{
                    background: copied ? "#eaf3de" : "#fff",
                    border: "0.5px solid #e0e0de",
                    borderRadius: 7, padding: "5px 12px",
                    fontSize: 12, color: copied ? "#3B6D11" : "#555",
                    cursor: "pointer", whiteSpace: "nowrap", transition: "all 0.15s"
                  }}>
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>

                {/* Actions */}
                <div style={{ display: "flex", gap: 10 }}>
                  <button onClick={goToInbox} disabled={inboxLoading} style={{
                    flex: 1, background: "#1a1a1a", color: "#fff",
                    border: "none", borderRadius: 9, padding: "11px 0",
                    fontSize: 14, fontWeight: 500, cursor: inboxLoading ? "not-allowed" : "pointer",
                    opacity: inboxLoading ? 0.6 : 1
                  }}>
                    {inboxLoading ? "Loading..." : "Go to inbox →"}
                  </button>
                  <button onClick={generateMail} disabled={loading} style={{
                    background: "#fff", color: "#555",
                    border: "0.5px solid #e0e0de", borderRadius: 9,
                    padding: "11px 16px", fontSize: 14,
                    cursor: loading ? "not-allowed" : "pointer"
                  }}>
                    New
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Inbox View */}
        {view === "inbox" && (
          <div style={{ background: "#fff", border: "0.5px solid #e5e5e3", borderRadius: 14, overflow: "hidden" }}>
            {/* Inbox header */}
            <div style={{
              padding: "16px 20px", borderBottom: "0.5px solid #e5e5e3",
              display: "flex", alignItems: "center", justifyContent: "space-between"
            }}>
              <div>
                <p style={{ margin: 0, fontSize: 13, fontWeight: 500, color: "#1a1a1a" }}>Inbox</p>
                <p style={{ margin: 0, fontSize: 11, color: "#aaa", fontFamily: "monospace" }}>{email}</p>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <button onClick={goToInbox} style={{
                  background: "#f5f5f3", border: "0.5px solid #e0e0de",
                  borderRadius: 7, padding: "5px 12px", fontSize: 12,
                  color: "#555", cursor: "pointer"
                }}>Refresh</button>
                <button onClick={() => setView("generate")} style={{
                  background: "#fff", border: "0.5px solid #e0e0de",
                  borderRadius: 7, padding: "5px 12px", fontSize: 12,
                  color: "#555", cursor: "pointer"
                }}>← Back</button>
              </div>
            </div>

            {/* Messages */}
            {inbox.length === 0 ? (
              <div style={{ padding: "48px 24px", textAlign: "center" }}>
                <p style={{ fontSize: 14, color: "#bbb", margin: 0 }}>No messages yet. Send one to your temp address and hit refresh.</p>
              </div>
            ) : (
              inbox.map((msg, i) => (
                <div key={msg.id} onClick={() => openMessage(msg.id)} style={{
                  padding: "14px 20px",
                  borderBottom: i < inbox.length - 1 ? "0.5px solid #f0f0ee" : "none",
                  cursor: "pointer", transition: "background 0.1s"
                }}
                  onMouseEnter={e => e.currentTarget.style.background = "#fafaf8"}
                  onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 3 }}>
                    <p style={{ margin: 0, fontSize: 13, fontWeight: 500, color: "#1a1a1a" }}>{msg.from?.address || "Unknown"}</p>
                    <p style={{ margin: 0, fontSize: 11, color: "#bbb" }}>{formatDate(msg.createdAt)}</p>
                  </div>
                  <p style={{ margin: 0, fontSize: 13, color: "#555" }}>{msg.subject || "(No subject)"}</p>
                  <p style={{ margin: "3px 0 0", fontSize: 12, color: "#bbb" }}>{msg.intro || ""}</p>
                </div>
              ))
            )}
          </div>
        )}

        {/* Message View */}
        {view === "message" && selectedMsg && (
          <div style={{ background: "#fff", border: "0.5px solid #e5e5e3", borderRadius: 14, overflow: "hidden" }}>
            <div style={{
              padding: "16px 20px", borderBottom: "0.5px solid #e5e5e3",
              display: "flex", alignItems: "center", justifyContent: "space-between"
            }}>
              <p style={{ margin: 0, fontSize: 13, fontWeight: 500, color: "#1a1a1a" }}>Message</p>
              <button onClick={() => setView("inbox")} style={{
                background: "#fff", border: "0.5px solid #e0e0de",
                borderRadius: 7, padding: "5px 12px", fontSize: 12,
                color: "#555", cursor: "pointer"
              }}>← Inbox</button>
            </div>

            <div style={{ padding: "20px 24px" }}>
              <h2 style={{ fontSize: 16, fontWeight: 600, color: "#1a1a1a", margin: "0 0 12px" }}>{selectedMsg.subject || "(No subject)"}</h2>
              <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
                <p style={{ margin: 0, fontSize: 12, color: "#aaa" }}>
                  <span style={{ color: "#888" }}>From: </span>{selectedMsg.from?.address}
                </p>
                <p style={{ margin: 0, fontSize: 12, color: "#aaa" }}>{formatDate(selectedMsg.createdAt)}</p>
              </div>
              <div style={{ borderTop: "0.5px solid #f0f0ee", paddingTop: 16 }}>
                {selectedMsg.html ? (
                  <iframe
                    srcDoc={selectedMsg.html[0] || selectedMsg.html}
                    style={{ width: "100%", minHeight: 300, border: "none", borderRadius: 8 }}
                    title="Email content"
                    sandbox="allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                  />
                ) : (
                  <pre style={{ fontSize: 13, color: "#444", whiteSpace: "pre-wrap", lineHeight: 1.6, margin: 0 }}>
                    {selectedMsg.text || "No content"}
                  </pre>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
