/* global React, window */
const { useEffect, useState, useRef } = React;

// ───────────────────────────────────────────────────────────
// HomeScreen — いらっしゃいませ + 全画面を弾むボール（右上から）
// ───────────────────────────────────────────────────────────
function HomeScreen({ t, onStartVoice, onPickManually }) {
  const heroRef = useRef(null);
  const [dim, setDim] = useState({ w: 1280, h: 760 });

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const update = () => {
      const r = el.getBoundingClientRect();
      setDim({
        w: Math.max(600, Math.floor(r.width)),
        h: Math.max(400, Math.floor(r.height)),
      });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section
      data-screen-label="01 ホーム"
      ref={heroRef}
      style={{
        position: "relative",
        minHeight: "calc(100vh - 72px - 88px)",
        overflow: "hidden",
        padding: "0 80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* 画面全体を覆う跳ねるボール背景（右上から） */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <window.BouncingBall
          width={dim.w}
          height={dim.h}
          size={56}
          gravity={2400}
          restitution={0.62}
          bounces={6}
          startFrom="top-right"
        />
      </div>

      {/* 中央のヒーローテキスト */}
      <div style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: 1000 }}>
        <div
          className="mono"
          style={{
            fontSize: 11,
            color: "var(--mute)",
            letterSpacing: "0.32em",
          }}
        >
          WELCOME · {new Date().toLocaleDateString("ja-JP")}
        </div>
        <h1
          style={{
            marginTop: 30,
            fontSize: "clamp(64px, 7.2vw, 104px)",
            lineHeight: 1.0,
            letterSpacing: "0.01em",
            fontWeight: 500,
            whiteSpace: "nowrap",
          }}
        >
          {t.welcome}
        </h1>
        <p
          style={{
            marginTop: 28,
            fontSize: 18,
            color: "var(--mute)",
            lineHeight: 1.7,
          }}
        >
          {t.welcomeSub}
        </p>
        <div
          style={{
            marginTop: 44,
            display: "flex",
            gap: 12,
            justifyContent: "center",
          }}
        >
          <window.Button size="lg" onClick={onStartVoice} icon={window.Icon.mic(18)}>
            {t.voiceOrder}
          </window.Button>
          <window.Button size="lg" variant="outline" onClick={onPickManually}>
            {t.manualOrder}
          </window.Button>
        </div>
        <div
          style={{
            marginTop: 56,
            color: "var(--mute)",
            fontSize: 11,
            letterSpacing: "0.18em",
          }}
          className="mono"
        >
          {t.tapStart}
        </div>
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────────────────
// ListeningScreen — 音声入力中
// ───────────────────────────────────────────────────────────
function ListeningScreen({ t, lang, transcript, parseProgress, onCancel, onDone }) {
  // ボールの進捗 = 認識した文字数を文字目安で 0..1 に
  const targetLen = 24;
  const progress = Math.min(1, (transcript || "").length / targetLen);
  const state = parseProgress ? "parsing" : "listening";

  return (
    <section
      data-screen-label="02 音声入力"
      style={{ padding: "56px 80px 40px", minHeight: "calc(100vh - 72px - 88px)" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ fontSize: 11, color: state === "listening" ? "var(--blue)" : "var(--ink)", letterSpacing: "0.28em" }} className="mono">
            ● {state === "listening" ? "LISTENING" : "PARSING"}
          </div>
          <h1 style={{ marginTop: 14, fontSize: 56, fontWeight: 500, letterSpacing: "0.01em" }}>
            {state === "listening" ? t.listening : t.parsing}
          </h1>
          <p style={{ marginTop: 10, color: "var(--mute)", fontSize: 16 }}>{t.listeningSub}</p>
        </div>
        <window.Button variant="ghost" onClick={onCancel} icon={window.Icon.close(14)}>
          {t.cancel}
        </window.Button>
      </div>

      {/* 跳ねるボールが認識量に応じて右に進む */}
      <div style={{ marginTop: 60, marginBottom: 40 }}>
        <window.BouncingBall
          width={1080}
          height={220}
          size={42}
          gravity={2400}
          restitution={0.62}
          progress={progress}
          showTrail={false}
        />
      </div>

      {/* 進捗ラベル */}
      <div style={{ display: "flex", justifyContent: "space-between", maxWidth: 1080, margin: "0 auto" }}>
        <span className="mono" style={{ fontSize: 10, color: "var(--mute)", letterSpacing: "0.2em" }}>
          START
        </span>
        <span className="mono" style={{ fontSize: 10, color: progress > 0.8 ? "var(--blue)" : "var(--mute)", letterSpacing: "0.2em" }}>
          {Math.round(progress * 100)}%
        </span>
        <span className="mono" style={{ fontSize: 10, color: "var(--mute)", letterSpacing: "0.2em" }}>
          ORDER
        </span>
      </div>

      {/* 認識テキスト */}
      <div
        style={{
          marginTop: 56,
          padding: "32px 40px",
          background: "var(--bg-2)",
          border: "1px solid var(--line)",
          borderRadius: 12,
          minHeight: 120,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ fontSize: 10, color: "var(--mute)", letterSpacing: "0.26em", marginBottom: 12 }} className="mono">
          TRANSCRIPT
        </div>
        <div style={{ fontSize: 28, fontWeight: 500, lineHeight: 1.5, minHeight: 42 }}>
          {transcript ? (
            <span>
              「{transcript}
              <span style={{ display: "inline-block", width: 2, height: 24, background: "var(--blue)", verticalAlign: "middle", marginLeft: 4, animation: "bball-shadow 1s ease-in-out infinite" }} />」
            </span>
          ) : (
            <span style={{ color: "var(--mute-2)" }}>{t.examplePrompt}</span>
          )}
        </div>
      </div>

      <div style={{ marginTop: 32, display: "flex", justifyContent: "flex-end" }}>
        <window.Button size="lg" onClick={onDone} disabled={!transcript} icon={window.Icon.arrow(16)}>
          {t.confirm}
        </window.Button>
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────────────────
// ConfirmScreen — 注文内容の確認（チケット）
// ───────────────────────────────────────────────────────────
function ConfirmScreen({ t, lang, items, transcript, onEdit, onBack, onConfirm }) {
  const total = items.reduce((s, it) => s + window.MENU_MAP[it.id].tickets * it.qty, 0);

  return (
    <section data-screen-label="03 ご注文確認" style={{ padding: "48px 80px 40px" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 32 }}>
        <div>
          <div className="mono" style={{ fontSize: 11, color: "var(--mute)", letterSpacing: "0.28em" }}>STEP 02 / 04</div>
          <h1 style={{ marginTop: 12, fontSize: 48, fontWeight: 500 }}>{t.confirm}</h1>
          <p style={{ marginTop: 8, color: "var(--mute)" }}>{t.confirmSub}</p>
        </div>
        {transcript ? (
          <div style={{ maxWidth: 360, textAlign: "right" }}>
            <div className="mono" style={{ fontSize: 10, color: "var(--mute)", letterSpacing: "0.22em", marginBottom: 6 }}>HEARD AS</div>
            <div style={{ fontSize: 13, color: "var(--ink-2)", lineHeight: 1.6 }}>「{transcript}」</div>
          </div>
        ) : null}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 40 }}>
        <div>
          <div style={{ border: "1px solid var(--line)", borderRadius: 12, overflow: "hidden" }}>
            {items.map((it, idx) => {
              const m = window.MENU_MAP[it.id];
              const last = idx === items.length - 1;
              return (
                <div
                  key={it.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "80px 1fr auto auto",
                    alignItems: "center",
                    gap: 24,
                    padding: 20,
                    borderBottom: last ? "none" : "1px solid var(--line)",
                  }}
                >
                  <div style={{ width: 80, height: 80, overflow: "hidden", borderRadius: 8 }}>
                    <window.ProductIllustration item={m} size={80} />
                  </div>
                  <div>
                    <div style={{ fontSize: 18, fontWeight: 600 }}>{lang === "ja" ? m.nameJa : m.nameEn}</div>
                    <div style={{ fontSize: 12, color: "var(--mute)", marginTop: 4 }}>{lang === "ja" ? m.subJa : m.subEn}</div>
                    <div className="mono num" style={{ fontSize: 12, color: "var(--mute)", marginTop: 6 }}>
                      ◈ {m.tickets} × {it.qty}
                    </div>
                  </div>
                  <window.QtyStepper value={it.qty} onChange={(v) => onEdit(it.id, v)} />
                  <div className="mono num" style={{ fontSize: 18, fontWeight: 600, minWidth: 90, textAlign: "right" }}>
                    ◈ {m.tickets * it.qty}
                  </div>
                </div>
              );
            })}
            {items.length === 0 ? (
              <div style={{ padding: 40, textAlign: "center", color: "var(--mute)" }}>商品がありません</div>
            ) : null}
          </div>
        </div>

        <aside style={{ background: "var(--bg-2)", border: "1px solid var(--line)", borderRadius: 12, padding: 28, alignSelf: "start" }}>
          <div className="mono" style={{ fontSize: 10, color: "var(--mute)", letterSpacing: "0.26em" }}>ORDER SUMMARY</div>
          <div style={{ marginTop: 18, display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <span style={{ fontSize: 13, color: "var(--mute)" }}>{lang === "ja" ? "点数" : "Items"}</span>
            <span className="mono num" style={{ fontSize: 14, fontWeight: 500 }}>{items.reduce((a, b) => a + b.qty, 0)}</span>
          </div>
          <div style={{ height: 1, background: "var(--line)", margin: "20px 0" }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <span style={{ fontSize: 13, fontWeight: 600 }}>{t.total}</span>
            <span className="mono num" style={{ fontSize: 36, fontWeight: 600, color: "var(--blue)" }}>
              ◈ {total}
            </span>
          </div>
          <div className="mono" style={{ fontSize: 10, color: "var(--mute)", letterSpacing: "0.24em", textAlign: "right", marginTop: 4 }}>
            {total} {t.ticket || "チケット"}
          </div>
          <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
            <window.Button full size="lg" onClick={onConfirm} icon={window.Icon.arrow(16)} disabled={items.length === 0}>
              {t.proceedPay}
            </window.Button>
            <window.Button full variant="outline" onClick={onBack} icon={window.Icon.back(14)}>
              {t.back}
            </window.Button>
          </div>
        </aside>
      </div>
    </section>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
      <span style={{ color: "var(--mute)" }}>{label}</span>
      <span className="mono num" style={{ fontWeight: 500 }}>{value}</span>
    </div>
  );
}

// ───────────────────────────────────────────────────────────
// ProductsScreen — 商品一覧（手動選択）
// ───────────────────────────────────────────────────────────
function ProductsScreen({ t, lang, cart, onChange, onCheckout }) {
  const totalTickets = Object.entries(cart).reduce((s, [id, q]) => s + (window.MENU_MAP[id]?.tickets || 0) * q, 0);
  const itemCount = Object.values(cart).reduce((s, q) => s + q, 0);

  return (
    <section data-screen-label="04 商品一覧" style={{ padding: "48px 80px 40px" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 32 }}>
        <div>
          <div className="mono" style={{ fontSize: 11, color: "var(--mute)", letterSpacing: "0.28em" }}>MENU / 5 ITEMS</div>
          <h1 style={{ marginTop: 12, fontSize: 48, fontWeight: 500 }}>{t.products}</h1>
          <p style={{ marginTop: 8, color: "var(--mute)" }}>{t.productsSub}</p>
        </div>
        {itemCount > 0 ? (
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ textAlign: "right" }}>
              <div className="mono" style={{ fontSize: 11, color: "var(--mute)", letterSpacing: "0.22em" }}>{itemCount} {t.item}</div>
              <div className="mono num" style={{ fontSize: 24, fontWeight: 600, color: "var(--blue)" }}>◈ {totalTickets}</div>
            </div>
            <window.Button size="lg" onClick={onCheckout} icon={window.Icon.cart(16)}>
              {t.proceedPay}
            </window.Button>
          </div>
        ) : null}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
        {window.MENU.map((m) => (
          <ProductCard key={m.id} t={t} lang={lang} item={m} qty={cart[m.id] || 0} onChange={(v) => onChange(m.id, v)} />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ t, lang, item, qty, onChange }) {
  const selected = qty > 0;
  return (
    <div
      style={{
        background: "#fff",
        border: `1px solid ${selected ? "var(--blue)" : "var(--line)"}`,
        borderRadius: 12,
        overflow: "hidden",
        transition: "border .18s ease, box-shadow .18s ease",
        boxShadow: selected ? "0 0 0 3px var(--blue-soft)" : "none",
      }}
    >
      <div style={{ position: "relative", aspectRatio: "1 / 1" }}>
        <window.ProductIllustration item={item} size={400} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
          <div style={{ position: "absolute", top: 12, left: 12 }}>
            <window.Badge tone="mute">
              <span style={{ width: 4, height: 4, borderRadius: "50%", background: selected ? "var(--blue)" : "var(--ink)" }} />
              {item.id.toUpperCase()}
            </window.Badge>
          </div>
          {qty > 0 ? (
            <div
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                background: "var(--blue)",
                color: "#fff",
                width: 28,
                height: 28,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 13,
                fontWeight: 700,
              }}
              className="mono num"
            >
              {qty}
            </div>
          ) : null}
        </div>
      </div>
      <div style={{ padding: "16px 16px 14px" }}>
        <div style={{ fontSize: 16, fontWeight: 600 }}>{lang === "ja" ? item.nameJa : item.nameEn}</div>
        <div style={{ fontSize: 11, color: "var(--mute)", marginTop: 4, height: 14 }}>{lang === "ja" ? item.subJa : item.subEn}</div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 14 }}>
          <div className="mono num" style={{ fontSize: 17, fontWeight: 600, color: "var(--blue)" }}>◈ {item.tickets}</div>
          <window.QtyStepper value={qty} onChange={onChange} />
        </div>
      </div>
    </div>
  );
}

// ───────────────────────────────────────────────────────────
// CartScreen — チケットでお会計
// ───────────────────────────────────────────────────────────
function CartScreen({ t, lang, items, ticketBalance = 20, onBack, onPay }) {
  const total = items.reduce((s, it) => s + window.MENU_MAP[it.id].tickets * it.qty, 0);
  const remain = ticketBalance - total;
  const insufficient = remain < 0;
  return (
    <section data-screen-label="05 お会計" style={{ padding: "48px 80px 40px" }}>
      <div style={{ marginBottom: 32 }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--mute)", letterSpacing: "0.28em" }}>STEP 03 / 04</div>
        <h1 style={{ marginTop: 12, fontSize: 48, fontWeight: 500 }}>{t.cart}</h1>
        <p style={{ marginTop: 8, color: "var(--mute)" }}>{t.cartSub}</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: 40 }}>
        <div>
          {/* 商品リスト */}
          <div style={{ border: "1px solid var(--line)", borderRadius: 12, padding: 24, marginBottom: 24 }}>
            <div className="mono" style={{ fontSize: 10, color: "var(--mute)", letterSpacing: "0.26em", marginBottom: 16 }}>YOUR ITEMS</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {items.map((it) => {
                const m = window.MENU_MAP[it.id];
                return (
                  <div key={it.id} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 6, overflow: "hidden", flexShrink: 0 }}>
                      <window.ProductIllustration item={m} size={40} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 14, fontWeight: 500 }}>{lang === "ja" ? m.nameJa : m.nameEn}</div>
                      <div className="mono num" style={{ fontSize: 11, color: "var(--mute)" }}>◈ {m.tickets} × {it.qty}</div>
                    </div>
                    <div className="mono num" style={{ fontSize: 16, fontWeight: 600 }}>◈ {m.tickets * it.qty}</div>
                  </div>
                );
              })}
              {items.length === 0 ? (
                <div style={{ padding: 24, textAlign: "center", color: "var(--mute)" }}>カートに商品がありません</div>
              ) : null}
            </div>
          </div>

          {/* チケット説明 */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <InfoTile
              label={lang === "ja" ? "お手持ち" : "BALANCE"}
              value={`◈ ${ticketBalance}`}
              sub={lang === "ja" ? `チケット残高` : `your tickets`}
            />
            <InfoTile
              label={lang === "ja" ? "ご使用後" : "AFTER PAYMENT"}
              value={`◈ ${Math.max(0, remain)}`}
              sub={insufficient ? (lang === "ja" ? "チケットが足りません" : "insufficient") : (lang === "ja" ? `予想残高` : `expected balance`)}
              tone={insufficient ? "danger" : "ok"}
            />
          </div>
        </div>

        {/* サイドパネル — チケット合計 */}
        <aside style={{ background: "var(--bg-2)", border: "1px solid var(--line)", borderRadius: 12, padding: 28, alignSelf: "start" }}>
          <div className="mono" style={{ fontSize: 10, color: "var(--mute)", letterSpacing: "0.26em" }}>{t.total.toUpperCase()}</div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 6 }}>
            <span style={{ fontSize: 32, color: "var(--blue)", fontWeight: 500 }}>◈</span>
            <span className="mono num" style={{ fontSize: 64, fontWeight: 600, lineHeight: 1, color: "var(--blue)" }}>{total}</span>
          </div>
          <div className="mono" style={{ fontSize: 11, color: "var(--mute)", letterSpacing: "0.22em", marginTop: 4 }}>
            {total} {t.ticket || "チケット"}
          </div>

          <div style={{ height: 1, background: "var(--line)", margin: "22px 0" }} />

          {/* チケット表示 */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "14px 16px",
            background: "#fff",
            border: "1px solid var(--line)",
            borderRadius: 10,
            marginBottom: 16,
          }}>
            <TicketGlyph />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{lang === "ja" ? "チケットで支払う" : "Pay with Tickets"}</div>
              <div className="mono" style={{ fontSize: 10, color: "var(--mute)", letterSpacing: "0.2em", marginTop: 2 }}>
                MILK STAND · TICKET ONLY
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <window.Button full size="lg" onClick={onPay} icon={window.Icon.check(16)} disabled={items.length === 0 || insufficient}>
              {t.payNow}
            </window.Button>
            <window.Button full variant="ghost" onClick={onBack}>{t.back}</window.Button>
          </div>
        </aside>
      </div>
    </section>
  );
}

function InfoTile({ label, value, sub, tone = "default" }) {
  const colorMap = {
    default: { val: "var(--ink)", sub: "var(--mute)" },
    ok: { val: "var(--ink)", sub: "var(--ok)" },
    danger: { val: "var(--danger)", sub: "var(--danger)" },
  };
  const c = colorMap[tone];
  return (
    <div style={{ border: "1px solid var(--line)", borderRadius: 10, padding: 18, background: "#fff" }}>
      <div className="mono" style={{ fontSize: 10, color: "var(--mute)", letterSpacing: "0.28em" }}>{label}</div>
      <div className="mono num" style={{ fontSize: 26, fontWeight: 600, marginTop: 8, color: c.val }}>{value}</div>
      <div style={{ fontSize: 11, color: c.sub, marginTop: 4 }}>{sub}</div>
    </div>
  );
}

function TicketGlyph() {
  return (
    <svg width="40" height="24" viewBox="0 0 40 24" aria-hidden>
      <path d="M2 4 H38 V20 H2 Z M2 10 a2 2 0 0 1 0 4" fill="none" stroke="#0a0a0a" strokeWidth="1.4" />
      <path d="M38 10 a2 2 0 0 0 0 4" fill="none" stroke="#0a0a0a" strokeWidth="1.4" />
      <circle cx="20" cy="12" r="3.4" fill="#0047FF" />
    </svg>
  );
}

// ───────────────────────────────────────────────────────────
// HistoryScreen — 注文履歴
// ───────────────────────────────────────────────────────────
function HistoryScreen({ t, lang, history }) {
  const totalTickets = history.reduce((s, h) => s + h.items.reduce((a, b) => a + (window.MENU_MAP[b.id]?.tickets || 0) * b.qty, 0), 0);
  return (
    <section data-screen-label="06 履歴" style={{ padding: "48px 80px 40px" }}>
      <div style={{ marginBottom: 32 }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--mute)", letterSpacing: "0.28em" }}>{history.length} ORDERS · TODAY</div>
        <h1 style={{ marginTop: 12, fontSize: 48, fontWeight: 500 }}>{t.history}</h1>
        <p style={{ marginTop: 8, color: "var(--mute)" }}>{t.historySub}</p>
      </div>

      {/* KPI */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, border: "1px solid var(--line)", borderRadius: 12, overflow: "hidden", marginBottom: 32 }}>
        {[
          { label: "ORDERS", value: history.length, color: "var(--ink)" },
          { label: "ITEMS", value: history.reduce((s, h) => s + h.items.reduce((a, b) => a + b.qty, 0), 0), color: "var(--ink)" },
          { label: "TICKETS", value: `◈ ${totalTickets}`, color: "var(--blue)" },
          { label: "AVG / ORDER", value: `◈ ${(totalTickets / Math.max(1, history.length)).toFixed(1)}`, color: "var(--ink)" },
        ].map((k, i) => (
          <div key={i} style={{ padding: 24, borderRight: i < 3 ? "1px solid var(--line)" : "none" }}>
            <div className="mono" style={{ fontSize: 10, color: "var(--mute)", letterSpacing: "0.28em" }}>{k.label}</div>
            <div className="mono num" style={{ fontSize: 32, fontWeight: 600, marginTop: 8, color: k.color }}>{k.value}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {history.map((h) => (
          <HistoryRow key={h.id} t={t} lang={lang} h={h} />
        ))}
      </div>
    </section>
  );
}

function HistoryRow({ t, lang, h }) {
  const tone = h.status === "ready" ? "blue" : "ok";
  const label = h.status === "ready" ? t.ready : t.done;
  const total = h.items.reduce((s, it) => s + (window.MENU_MAP[it.id]?.tickets || 0) * it.qty, 0);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "100px 120px 1fr auto auto",
        alignItems: "center",
        gap: 24,
        padding: "20px 24px",
        border: "1px solid var(--line)",
        borderRadius: 10,
        background: "#fff",
      }}
    >
      <div>
        <div className="mono" style={{ fontSize: 10, color: "var(--mute)", letterSpacing: "0.24em" }}>{t.orderNo}</div>
        <div className="mono num" style={{ fontSize: 18, fontWeight: 600, marginTop: 2 }}>#{h.id}</div>
      </div>
      <div>
        <window.Badge tone={tone}>{label}</window.Badge>
        <div className="mono" style={{ fontSize: 11, color: "var(--mute)", marginTop: 8 }}>
          {h.minAgo === 0 ? t.now : `${h.minAgo} ${t.minAgo}`}
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {h.items.map((it, i) => {
          const m = window.MENU_MAP[it.id];
          return (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 12,
                padding: "5px 10px",
                background: "var(--bg-3)",
                borderRadius: 6,
              }}
            >
              <span style={{ width: 14, height: 14, borderRadius: 3, overflow: "hidden", display: "inline-block" }}>
                <window.ProductIllustration item={m} size={14} />
              </span>
              {lang === "ja" ? m.nameJa : m.nameEn}
              {it.qty > 1 ? <span className="mono num" style={{ color: "var(--mute)" }}>×{it.qty}</span> : null}
            </span>
          );
        })}
      </div>
      <div className="mono num" style={{ fontSize: 18, fontWeight: 600, color: "var(--blue)" }}>◈ {total}</div>
      <window.Badge tone="mute">{t.paid}</window.Badge>
    </div>
  );
}

// ───────────────────────────────────────────────────────────
// ThankYouOverlay — お渡し済・ありがとうございました
// ───────────────────────────────────────────────────────────
function ThankYouOverlay({ t, orderId, onClose }) {
  useEffect(() => {
    const id = setTimeout(onClose, 3500);
    return () => clearTimeout(id);
  }, [onClose]);
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(4px)",
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animation: "fade-in .25s ease",
      }}
      onClick={onClose}
    >
      <div style={{ textAlign: "center" }}>
        <div style={{ marginBottom: 32 }}>
          <window.BouncingBall width={520} height={160} size={32} gravity={2200} restitution={0.6} bounces={5} />
        </div>
        <div className="mono" style={{ fontSize: 11, color: "var(--mute)", letterSpacing: "0.32em" }}>
          ORDER #{orderId} · COMPLETE
        </div>
        <h1 style={{ marginTop: 18, fontSize: 56, fontWeight: 500, letterSpacing: "0.02em" }}>{t.thankYou}</h1>
        <p style={{ marginTop: 14, fontSize: 16, color: "var(--mute)" }}>{t.thankYouSub}</p>
      </div>
    </div>
  );
}

Object.assign(window, {
  HomeScreen,
  ListeningScreen,
  ConfirmScreen,
  ProductsScreen,
  CartScreen,
  HistoryScreen,
  ThankYouOverlay,
});
