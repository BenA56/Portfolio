import { useState, useEffect, useRef } from "react";
import "./HotSpot.css"

// ─── Your data ───────────────────────────────────────────────────────────────
const hotspots = [
  {
    id: 1,
    x: 22,   // % from left of image
    y: 22,   // % from top of image
    label: "Simplified Navigation",
    tag: "Navigation",
    problem: "Users were struggling to find core actions, with 68% of sessions showing backtracking behaviour in the old nav structure.",
    solution: "Consolidated the top nav from 11 items to 5 by grouping contextual actions into smart drawers.",
    impact: "Task completion rate ↑ 40%",
    details: "Exit points dropped by 40% in the first month post-launch. Time-to-first-action decreased from 48s to 19s on average.",
  },
  {
    id: 2,
    x: 70,
    y: 35,
    label: "Inline Editing",
    tag: "Interaction",
    problem: "Editing any field required navigating to a separate full-page form, adding 4–6 clicks for simple updates.",
    solution: "Introduced click-to-edit directly in the detail view. Changes auto-save with a subtle confirmation animation.",
    impact: "Edit time ↓ 60%",
    details: "Reduced average session length for edit-heavy workflows by 4 minutes.",
  },
  {
    id: 3,
    x: 44,
    y: 62,
    label: "Empty State Redesign",
    tag: "Onboarding",
    problem: "Empty states showed a generic 'No data found' message that left new users confused about next steps.",
    solution: "Replaced with contextual empty states that explain what belongs here and offer a direct CTA to get started.",
    impact: "Activation rate ↑ 28%",
    details: "New user retention at day-7 improved from 34% to 51%.",
  },
  {
    id: 4,
    x: 80,
    y: 70,
    label: "Status Clarity",
    tag: "Accessibility",
    problem: "Item statuses were communicated through colour alone, failing WCAG accessibility standards.",
    solution: "Added icon + label alongside colour coding. Redesigned the palette to meet WCAG AA contrast ratios.",
    impact: "Support tickets ↓ 35%",
    details: "Audit score improved from 61 to 94.",
  },
];

const tagColors = {
  Navigation:    { bg: "#e8f0fe", text: "#2a5bd7" },
  Interaction:   { bg: "#fce8ff", text: "#9c27b0" },
  Onboarding:    { bg: "#e8fff0", text: "#1a7f4b" },
  Accessibility: { bg: "#fff8e8", text: "#b45309" },
};
// ─────────────────────────────────────────────────────────────────────────────

export default function HotspotImage({ src }) {
  const [active, setActive] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const modalRef = useRef(null);

  const openModal = (spot) => {
    setActive(spot);
    setTimeout(() => setModalVisible(true), 10);
  };

  const closeModal = () => {
    setModalVisible(false);
    setTimeout(() => setActive(null), 320);
  };

  const switchFeature = (spot) => {
    setModalVisible(false);
    setTimeout(() => {
      setActive(spot);
      if (modalRef.current) modalRef.current.scrollTop = 0;
      setTimeout(() => setModalVisible(true), 10);
    }, 180);
  };

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") closeModal(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [active]);

  return (
    <>

      {/* Image + hotspots */}
      <div className="hs-wrap">
        {src
          ? <img src={src} alt="Product screenshot" style={{boxShadow: "0px 4px 12px 0px rgb(0,0,0,0.25)"}} />
          : <div style={{
              width: "100%", aspectRatio: "16/9",
              background: "#1e1e1e", borderRadius: "12px",
              border: "1px dashed rgba(255,255,255,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "rgba(255,255,255,0.25)",
              fontFamily: "sans-serif", fontSize: "13px", letterSpacing: "0.08em",
            }}>PASS src PROP OR DROP IMAGE HERE</div>
        }

        {hotspots.map(spot => (
          <button
            key={spot.id}
            className="hs-btn"
            style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
            onClick={() => openModal(spot)}
          >
            <div className="hs-ring">
              <div className="hs-pulse" />
              <span className="hs-num">{spot.id}</span>
            </div>
            <div className="hs-tip">{spot.label}</div>
          </button>
        ))}
      </div>

      {/* Modal */}
      <div
        className={`hs-overlay ${modalVisible ? "on" : ""}`}
        onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
      >
        <div className="hs-sheet" ref={modalRef}>
          <div className="hs-handle" />
          <button className="hs-close" onClick={closeModal}>×</button>

          {active && (
            <div className="hs-body">
              <span style={{
                display: "inline-block", marginBottom: "14px",
                padding: "4px 10px", borderRadius: "20px",
                background: tagColors[active.tag].bg,
                color: tagColors[active.tag].text,
                fontFamily: "'Syne',sans-serif", fontSize: "10px",
                fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
              }}>{active.tag}</span>

              <h2 className="hs-title" style={{ marginBottom: "24px" }}>{active.label}</h2>

              {/* Image slot */}
              <div style={{
                width: "100%", aspectRatio: "16/7",
                background: "rgba(255,255,255,0.03)", borderRadius: "10px",
                border: "1px dashed rgba(255,255,255,0.12)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "28px", color: "rgba(255,255,255,0.2)",
                fontFamily: "sans-serif", fontSize: "11px", letterSpacing: "0.08em",
              }}>BEFORE / AFTER IMAGE</div>

              <p className="hs-eyebrow">The Problem</p>
              <p className="hs-prose" style={{ marginBottom: "24px" }}>{active.problem}</p>
              <div className="hs-divider" />

              <p className="hs-eyebrow">What We Did</p>
              <p className="hs-prose" style={{ marginBottom: "24px" }}>{active.solution}</p>
              <div className="hs-divider" />

              <p className="hs-eyebrow">Impact</p>
              <p className="hs-impact">{active.impact}</p>
              <p className="hs-prose" style={{ marginBottom: "36px" }}>{active.details}</p>

              {/* Switch between features */}
              <p className="hs-eyebrow" style={{ marginBottom: "12px" }}>Other Improvements</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                {hotspots.filter(s => s.id !== active.id).map(spot => (
                  <button key={spot.id} className="hs-nav-btn" onClick={() => switchFeature(spot)}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                      <div className="hs-nav-num">{spot.id}</div>
                      <span style={{ fontFamily: "'Syne',sans-serif", fontSize: "12px", fontWeight: 700, color: "rgba(255,255,255,0.85)" }}>
                        {spot.label}
                      </span>
                    </div>
                    <p style={{ fontFamily: "'Lora',Georgia,serif", fontSize: "12px", color: "rgba(255,255,255,0.4)", lineHeight: 1.5, paddingLeft: "28px" }}>
                      {spot.impact}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}