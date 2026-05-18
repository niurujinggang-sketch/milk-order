<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<!-- PWA / iOS ホーム画面対応 -->
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="MILK STAND">
<meta name="theme-color" content="#0B0906">
<link rel="manifest" href="/manifest.json">
<!-- アイコン（canvas で生成してから差し替え） -->
<link rel="apple-touch-icon" id="apple-icon" href="#">
<title>MILK STAND</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}
html,body{height:100%;overscroll-behavior:none}
body{background:#0B0906;color:#EDE0C8;font-family:'DM Sans','Hiragino Kaku Gothic ProN',sans-serif;min-height:100vh;min-height:-webkit-fill-available;max-width:820px;margin:0 auto;padding-bottom:env(safe-area-inset-bottom,24px)}

@keyframes pulse{0%,100%{opacity:1;transform:scale(1);box-shadow:0 0 0 0 rgba(212,168,83,.6)}50%{opacity:.8;transform:scale(1.25);box-shadow:0 0 0 12px rgba(212,168,83,0)}}
@keyframes ringOut{0%{transform:scale(1);opacity:.6}100%{transform:scale(2.8);opacity:0}}
@keyframes slideUp{from{opacity:0;transform:translate(-50%,16px)}to{opacity:1;transform:translate(-50%,0)}}
@keyframes breathe{0%,100%{opacity:.5;transform:scale(1)}50%{opacity:1;transform:scale(1.06)}}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes dropIn{from{opacity:0;transform:scale(.92)}to{opacity:1;transform:scale(1)}}

/* ── 起動画面 ── */
#activation{position:fixed;inset:0;background:#0B0906;display:flex;align-items:center;justify-content:center;z-index:9999;animation:fadeIn .3s ease;cursor:pointer;padding:env(safe-area-inset-top,0) 0 env(safe-area-inset-bottom,0)}
.ripple-wrap{position:relative;width:160px;height:160px;margin:0 auto 40px}
.ring{position:absolute;inset:0;border-radius:50%;border:2px solid rgba(212,168,83,.35);animation:ringOut 2.4s ease-out infinite}
.mic-circle{position:absolute;inset:0;border-radius:50%;background:rgba(212,168,83,.1);border:2px solid rgba(212,168,83,.4);display:flex;align-items:center;justify-content:center;font-size:60px}

/* ── オーバーレイ ── */
.overlay{position:fixed;inset:0;background:rgba(7,5,3,.88);display:flex;align-items:center;justify-content:center;z-index:9000;animation:fadeIn .2s ease}
.thanks-box{text-align:center;padding:56px 40px;animation:dropIn .3s ease}
.thanks-icon{width:96px;height:96px;border-radius:50%;background:linear-gradient(135deg,#D4A853,#E8C878);display:flex;align-items:center;justify-content:center;margin:0 auto 28px;box-shadow:0 0 60px rgba(212,168,83,.35);font-size:44px}
.thanks-title{font-family:'Playfair Display',serif;font-size:28px;font-weight:700;color:#F5E8CC;letter-spacing:2px;margin-bottom:10px}
.thanks-sub{font-size:15px;color:#7A6A55;letter-spacing:1px}
.modal-box{background:#1E1710;border:1px solid rgba(212,168,83,.28);border-radius:20px;padding:36px 40px;text-align:center;min-width:300px;animation:dropIn .25s ease;margin:20px}
.modal-label{font-size:12px;letter-spacing:3px;color:#7A6A55;margin-bottom:10px}
.modal-title{font-family:'Playfair Display',serif;font-size:19px;color:#F5E8CC;margin-bottom:28px}
.modal-btns{display:flex;gap:12px}
.btn-ghost{flex:1;padding:14px;background:none;border:1px solid rgba(212,168,83,.14);border-radius:10px;color:#7A6A55;font-size:15px;font-weight:700;font-family:'DM Sans',sans-serif;cursor:pointer}
.btn-danger{flex:1;padding:14px;background:rgba(192,112,112,.15);border:1px solid rgba(192,112,112,.3);border-radius:10px;color:#C07070;font-size:15px;font-weight:700;font-family:'DM Sans',sans-serif;cursor:pointer}

/* ── ヘッダー ── */
header{padding:calc(env(safe-area-inset-top,0px) + 16px) 24px 16px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(212,168,83,.14);position:sticky;top:0;z-index:100;background:#0B0906}
.brand{display:flex;align-items:center;gap:12px}
.brand-mark{font-size:26px;color:#D4A853;line-height:1}
.brand-name{font-family:'Playfair Display',serif;font-size:20px;font-weight:900;color:#F5E8CC;letter-spacing:3px;line-height:1}
.brand-name-sub{font-size:9px;color:#7A6A55;letter-spacing:4px;margin-top:3px}
.header-right{display:flex;align-items:center;gap:10px}
.haiku-badge{display:flex;align-items:center;gap:5px;background:rgba(123,169,138,.1);border:1px solid rgba(123,169,138,.3);border-radius:20px;padding:5px 12px;font-size:11px;color:#7BA98A;font-weight:700;letter-spacing:1px}
.queue-pill{display:flex;align-items:baseline;gap:5px;background:#1E1710;border:1px solid rgba(212,168,83,.14);border-radius:20px;padding:5px 14px}
.queue-num{font-family:'Playfair Display',serif;font-size:20px;font-weight:700;color:#D4A853;line-height:1}
.queue-lbl{font-size:11px;color:#7A6A55}

/* ── 音声バー ── */
#voice-bar{padding:12px 20px;display:flex;align-items:center;justify-content:space-between;gap:12px;border-bottom:2px solid rgba(255,255,255,.05);transition:border-color .4s,background .4s}
#voice-bar.listening{border-color:rgba(212,168,83,.28);background:rgba(212,168,83,.03)}
#voice-bar.parsing{border-color:rgba(123,169,138,.28);background:rgba(123,169,138,.05)}
.mic-area{display:flex;align-items:center;gap:10px}
.mic-bubble{position:relative;width:40px;height:40px;border-radius:50%;background:rgba(212,168,83,.08);border:1px solid rgba(212,168,83,.2);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0}
.mic-ring{position:absolute;inset:-6px;border-radius:50%;border:1px solid rgba(212,168,83,.3);animation:pulse 2s ease-in-out infinite}
.voice-status{font-size:13px;font-weight:700;letter-spacing:.3px;transition:color .3s}
.voice-status-sub{font-size:11px;color:#7A6A55;margin-top:2px}
.voice-right{display:flex;flex-direction:column;align-items:flex-end;gap:5px;min-width:0;flex-shrink:1}
.confirmed-text{font-size:11px;color:rgba(212,168,83,.7);font-style:italic;text-align:right;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:160px}
.error-text{font-size:11px;color:#C07070;text-align:right;line-height:1.5}
.restart-btn{font-size:11px;padding:4px 10px;background:rgba(212,168,83,.08);border:1px solid rgba(212,168,83,.14);border-radius:8px;color:#7A6A55;letter-spacing:1px;white-space:nowrap;font-family:'DM Sans',sans-serif;cursor:pointer}

/* ── デバッグ ── */
#debug-toggle-row{padding:5px 20px;border-bottom:1px solid rgba(212,168,83,.14);display:flex;justify-content:space-between;align-items:center}
#debug-toggle{font-size:11px;color:#7A6A55;letter-spacing:2px;font-family:monospace;background:none;border:none;cursor:pointer;padding:0}
#debug-panel{padding:0 16px;display:none}
#debug-panel.open{display:block}
.debug-inner{background:#050301;border:1px solid #2A1F0A;border-radius:10px;margin:8px 0;overflow:hidden}
.debug-header{display:flex;justify-content:space-between;align-items:center;padding:5px 10px;border-bottom:1px solid #1A1208}
.debug-log{height:100px;overflow-y:auto;padding:5px 10px;font-family:monospace;font-size:11px;line-height:1.7}
.log-ok{color:#7BA98A}.log-info{color:#D4A853}.log-error{color:#C07070}.log-log{color:#6A5A40}.log-time{color:#3A2F1A;margin-right:6px}

/* ── タブ ── */
.tabs{display:flex;border-bottom:1px solid rgba(212,168,83,.14);position:sticky;top:calc(env(safe-area-inset-top,0px) + 56px);z-index:99;background:#0B0906}
.tab-btn{flex:1;padding:13px 4px;background:none;border:none;color:#7A6A55;font-size:11px;font-weight:700;letter-spacing:1.5px;border-bottom:2px solid transparent;font-family:'DM Sans',sans-serif;cursor:pointer;transition:color .2s}
.tab-btn.active{color:#F5E8CC;border-bottom:2px solid #D4A853;background:rgba(212,168,83,.04)}

/* ── コンテンツ ── */
.content{padding:20px 16px 0}
.section-divider{display:flex;align-items:center;gap:10px;margin:18px 0 10px}
.section-line{flex:1;height:1px;background:rgba(212,168,83,.14)}
.section-label{font-size:10px;letter-spacing:3px;color:#7A6A55;white-space:nowrap}

/* ── 現在の注文 ── */
.cur-card{background:#1E1710;border:1px solid rgba(212,168,83,.28);border-radius:18px;padding:18px;margin-bottom:16px;box-shadow:0 8px 40px rgba(0,0,0,.4)}
.cur-meta{display:flex;align-items:center;gap:10px;margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid rgba(212,168,83,.14)}
.order-id{font-size:10px;letter-spacing:3px;color:#7A6A55;flex:1}
.ticket-chip{display:flex;align-items:center;gap:5px;background:rgba(212,168,83,.12);border:1px solid rgba(212,168,83,.25);border-radius:20px;padding:5px 14px;color:#D4A853;font-size:15px;font-weight:700}
.cancel-icon-btn{width:38px;height:38px;background:rgba(192,112,112,.1);border:1px solid rgba(192,112,112,.25);border-radius:10px;color:#C07070;font-size:15px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-family:'DM Sans',sans-serif}
.item-row{display:flex;align-items:center;gap:12px;padding:11px 0;border-bottom:1px solid rgba(212,168,83,.1)}
.item-emoji{font-size:24px;width:34px;text-align:center}
.item-info{flex:1}
.item-name{font-size:16px;font-weight:700;color:#F5E8CC;margin-bottom:2px}
.item-sub{font-size:11px;color:#7A6A55}
.item-qty{font-size:13px;color:#7A6A55}
.item-tick{font-size:15px;font-weight:700;color:#D4A853}
.done-btn{width:100%;padding:16px;background:linear-gradient(135deg,#D4A853,#B8882A);border-radius:14px;color:#0B0906;font-size:15px;font-weight:700;letter-spacing:2px;display:flex;align-items:center;justify-content:center;gap:10px;box-shadow:0 4px 20px rgba(212,168,83,.25);margin-top:16px;border:none;font-family:'DM Sans',sans-serif;cursor:pointer}

/* ── 空 ── */
.empty-card{background:#1E1710;border:1px dashed rgba(212,168,83,.18);border-radius:18px;padding:48px 20px;text-align:center;margin-bottom:16px}
.empty-sym{font-family:'Playfair Display',serif;font-size:36px;color:rgba(212,168,83,.2);margin-bottom:14px}
.empty-title{font-family:'Playfair Display',serif;font-size:16px;color:#7A6A55;letter-spacing:4px;margin-bottom:8px}
.empty-text{font-size:13px;color:#4A3D30}

/* ── 待ちカード ── */
.wait-card{background:#17120D;border:1px solid rgba(212,168,83,.14);border-radius:14px;padding:12px 16px;margin-bottom:10px}
.wait-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px}
.wait-id{font-size:10px;letter-spacing:3px;color:#7A6A55}
.wait-right{display:flex;align-items:center;gap:8px}
.wait-tick{font-size:14px;font-weight:700;color:#D4A853}
.cancel-chip-btn{padding:5px 12px;background:rgba(192,112,112,.1);border:1px solid rgba(192,112,112,.25);border-radius:8px;color:#C07070;font-size:12px;font-weight:700;font-family:'DM Sans',sans-serif;cursor:pointer}
.wait-chips{display:flex;flex-wrap:wrap;gap:6px}
.wait-chip{background:rgba(212,168,83,.08);border:1px solid rgba(212,168,83,.14);border-radius:8px;padding:4px 10px;font-size:12px}

/* ── 手動入力 ── */
.menu-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:16px}
.menu-card{background:#1E1710;border:1px solid rgba(212,168,83,.14);border-radius:14px;padding:14px 8px;text-align:center;transition:all .2s}
.menu-card.selected{background:#221A0F;border-color:rgba(212,168,83,.28)}
.menu-emoji{font-size:32px;margin-bottom:6px}
.menu-name{font-size:11px;font-weight:700;color:#F5E8CC;margin-bottom:2px}
.menu-sub-t{font-size:9px;color:#7A6A55;margin-bottom:6px}
.menu-price{font-size:12px;color:#D4A853;font-weight:700;margin-bottom:10px}
.menu-ctrl{display:flex;align-items:center;justify-content:center;gap:6px}
.ctrl-btn{width:32px;height:32px;background:rgba(212,168,83,.1);border:1px solid rgba(212,168,83,.14);border-radius:8px;color:#D4A853;font-size:16px;font-weight:700;font-family:'DM Sans',sans-serif;cursor:pointer}
.ctrl-num{font-size:16px;font-weight:700;min-width:20px;text-align:center;color:#7A6A55;transition:color .2s}
.ctrl-num.active{color:#F5E8CC}
.manual-footer{background:#1E1710;border:1px solid rgba(212,168,83,.28);border-radius:14px;padding:18px;margin-bottom:16px}
.manual-total-row{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:14px}
.manual-total-lbl{font-size:11px;letter-spacing:4px;color:#7A6A55}
.manual-total-val{font-family:'Playfair Display',serif;font-size:20px;font-weight:700;color:#D4A853}
.add-order-btn{width:100%;padding:14px;background:linear-gradient(135deg,#D4A853,#B8882A);border-radius:12px;color:#0B0906;font-size:14px;font-weight:700;letter-spacing:2px;border:none;font-family:'DM Sans',sans-serif;cursor:pointer}

/* ── 集計 ── */
.kpi-row{display:flex;background:#1E1710;border:1px solid rgba(212,168,83,.28);border-radius:16px;overflow:hidden;margin-bottom:20px}
.kpi-card{flex:1;padding:20px;text-align:center}
.kpi-card+.kpi-card{border-left:1px solid rgba(212,168,83,.14)}
.kpi-num{font-family:'Playfair Display',serif;font-size:48px;font-weight:700;color:#EDE0C8;line-height:1;margin-bottom:6px}
.kpi-num.gold{color:#D4A853}
.kpi-lbl{font-size:10px;letter-spacing:3px;color:#7A6A55}
.sales-row{display:flex;align-items:center;gap:12px;background:#17120D;border:1px solid rgba(212,168,83,.14);border-radius:12px;padding:12px 14px;margin-bottom:8px}
.sales-emoji{font-size:26px;width:34px;text-align:center}
.sales-info{flex:1}
.sales-name{font-size:13px;font-weight:700;color:#F5E8CC;margin-bottom:7px}
.bar-track{height:5px;background:rgba(212,168,83,.1);border-radius:3px;overflow:hidden}
.bar-fill{height:100%;background:linear-gradient(90deg,#D4A853,#E8C878);border-radius:3px;transition:width .6s}
.sales-right{text-align:right;min-width:56px}
.sales-qty{font-family:'Playfair Display',serif;font-size:16px;font-weight:700;color:#EDE0C8}
.sales-tick{font-size:11px;color:#D4A853;margin-top:2px}

/* ── トースト ── */
#cancel-toast{position:fixed;bottom:calc(env(safe-area-inset-bottom,24px) + 20px);left:50%;transform:translateX(-50%);background:#1C0A0A;border:1px solid rgba(220,60,60,.5);border-radius:14px;padding:12px 20px;display:none;align-items:center;gap:8px;z-index:8000;box-shadow:0 8px 40px rgba(0,0,0,.6);animation:slideUp .25s ease;color:#FCA5A5;font-weight:700;font-size:13px;white-space:nowrap}
</style>
</head>
<body>

<!-- 起動画面 -->
<div id="activation">
  <div style="text-align:center;user-select:none;padding:0 20px">
    <div class="ripple-wrap">
      <div class="ring" style="animation-delay:0s"></div>
      <div class="ring" style="animation-delay:.5s"></div>
      <div class="ring" style="animation-delay:1s"></div>
      <div class="mic-circle">🎙</div>
    </div>
    <div style="font-family:'Playfair Display',serif;font-size:28px;font-weight:900;color:#F5E8CC;letter-spacing:4px;margin-bottom:8px">MILK STAND</div>
    <div style="font-size:11px;color:#7A6A55;letter-spacing:5px;margin-bottom:48px">Artisan Dairy</div>
    <div style="font-size:20px;font-weight:700;color:#D4A853;letter-spacing:2px;margin-bottom:12px;animation:breathe 2s ease-in-out infinite">タップして開始</div>
    <div style="font-size:13px;color:#5A4A38">音声認識が常時アクティブになります</div>
  </div>
</div>

<!-- ありがとう -->
<div id="thanks-overlay" class="overlay" style="display:none">
  <div class="thanks-box">
    <div class="thanks-icon">🥛</div>
    <div class="thanks-title">ありがとうございました</div>
    <div class="thanks-sub">またのお越しをお待ちしております</div>
  </div>
</div>

<!-- キャンセル確認 -->
<div id="cancel-overlay" class="overlay" style="display:none">
  <div class="modal-box">
    <div class="modal-label" id="cancel-modal-id">ORDER M-001</div>
    <div class="modal-title">この注文を取り消しますか？</div>
    <div class="modal-btns">
      <button class="btn-ghost" onclick="closeModal()">もどる</button>
      <button class="btn-danger" onclick="execCancel()">取り消す</button>
    </div>
  </div>
</div>

<!-- トースト -->
<div id="cancel-toast">✕ <span id="toast-msg"></span></div>

<!-- メイン -->
<div id="main-app" style="display:none">
  <header>
    <div class="brand">
      <span class="brand-mark">◈</span>
      <div>
        <div class="brand-name">MILK STAND</div>
        <div class="brand-name-sub">Artisan Dairy</div>
      </div>
    </div>
    <div class="header-right">
      <div class="haiku-badge">⚡ Haiku</div>
      <div class="queue-pill">
        <span class="queue-num" id="queue-count">0</span>
        <span class="queue-lbl">件待ち</span>
      </div>
    </div>
  </header>

  <div id="voice-bar">
    <div class="mic-area">
      <div class="mic-bubble">
        <div class="mic-ring" id="mic-ring" style="display:none"></div>
        <span id="mic-icon">🔇</span>
      </div>
      <div>
        <div class="voice-status" id="voice-status" style="color:#7A6A55">停止中</div>
        <div class="voice-status-sub" id="voice-sub">—</div>
      </div>
    </div>
    <div class="voice-right">
      <div class="confirmed-text" id="confirmed-text"></div>
      <div class="error-text" id="error-text" style="display:none"></div>
      <button class="restart-btn" onclick="forceRestart()">再起動</button>
    </div>
  </div>

  <div id="debug-toggle-row">
    <button id="debug-toggle" onclick="toggleDebug()">▼ DEBUG</button>
  </div>
  <div id="debug-panel">
    <div class="debug-inner">
      <div class="debug-header">
        <span style="font-size:11px;letter-spacing:2px;color:#5A4A38;font-family:monospace">DEBUG</span>
        <button onclick="clearLog()" style="font-size:10px;color:#5A4A38;font-family:monospace;background:none;border:none;cursor:pointer">CLR</button>
      </div>
      <div class="debug-log" id="debug-log"></div>
    </div>
  </div>

  <div class="tabs">
    <button class="tab-btn active" onclick="switchTab('orders',this)">注文管理</button>
    <button class="tab-btn" onclick="switchTab('manual',this)">手動入力</button>
    <button class="tab-btn" onclick="switchTab('summary',this)">売上集計</button>
  </div>

  <div id="tab-orders" class="content">
    <div id="current-order-area"></div>
    <div id="waiting-area"></div>
  </div>

  <div id="tab-manual" class="content" style="display:none">
    <div class="menu-grid" id="menu-grid"></div>
    <div id="manual-footer" style="display:none">
      <div class="manual-footer">
        <div class="manual-total-row">
          <span class="manual-total-lbl">TOTAL</span>
          <span class="manual-total-val" id="manual-total-val">◈ 0 チケット</span>
        </div>
        <button class="add-order-btn" onclick="submitManual()">注文を追加する</button>
      </div>
    </div>
  </div>

  <div id="tab-summary" class="content" style="display:none">
    <div class="kpi-row">
      <div class="kpi-card"><div class="kpi-num" id="kpi-items">0</div><div class="kpi-lbl">提供数</div></div>
      <div class="kpi-card"><div class="kpi-num gold" id="kpi-tickets">0</div><div class="kpi-lbl">◈ チケット総数</div></div>
    </div>
    <div id="sales-bars"></div>
  </div>
</div>

<script>
// ── アイコン生成（ホーム画面追加用）────────────────────────
(function(){
  const c = document.createElement('canvas');
  c.width = c.height = 512;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#0B0906';
  ctx.fillRect(0,0,512,512);
  ctx.fillStyle = '#D4A853';
  ctx.beginPath();
  ctx.roundRect(56,56,400,400,80);
  ctx.fill();
  ctx.font = '220px serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('🥛',256,270);
  const url = c.toDataURL('image/png');
  document.getElementById('apple-icon').href = url;
})();

// ── PWA Service Worker 登録 ────────────────────────────────
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(()=>{});
  });
}

// ── メニュー ──────────────────────────────────────────────
const MENU = [
  {id:'milk',      name:'牛乳',           sub:'コールド',     emoji:'🥛', tickets:1},
  {id:'hotmilk',   name:'ホットミルク',   sub:'あたため',     emoji:'☕', tickets:1},
  {id:'milktea',   name:'ミルクティー',   sub:'濃厚ブレンド', emoji:'🍵', tickets:2},
  {id:'softcream', name:'ソフトクリーム', sub:'北海道ミルク', emoji:'🍦', tickets:2},
  {id:'cheese',    name:'チーズスティック',sub:'焼きたて',    emoji:'🧀', tickets:2},
  {id:'butter',    name:'バターサンド',   sub:'手作り',       emoji:'🍪', tickets:2},
  {id:'yogurt',    name:'ヨーグルト',     sub:'フレッシュ',   emoji:'🥣', tickets:1},
  {id:'pudding',   name:'ミルクプリン',   sub:'なめらか',     emoji:'🍮', tickets:2},
];
const MENU_MAP = Object.fromEntries(MENU.map(m=>[m.id,m]));

const SYS = `あなたはMILK STANDの注文解析AIです。JSONのみ返してください。
【メニュー】
${MENU.map(m=>`- id:"${m.id}" 名前:"${m.name}"`).join('\n')}
取り消し系→{"intent":"cancel","items":[],"cancel":true,"cancelTarget":"last","error":null}
注文→{"intent":"order","items":[{"id":"id","qty":数}],"cancel":false,"cancelTarget":null,"error":null}
不明→{"intent":"unknown","items":[],"cancel":false,"cancelTarget":null,"error":"認識できませんでした"}
数量なしは1。`;

// ── 状態 ─────────────────────────────────────────────────
let queue=[],sales={},manualItems={},oidCounter=1;
let cancelTargetId=null,shouldRun=false,processing=false;
let recObj=null,restartTimer=null,confirmedTimer=null;
const newId=()=>`M-${String(oidCounter++).padStart(3,'0')}`;

// ── ログ ─────────────────────────────────────────────────
function log(msg,type='log'){
  const el=document.getElementById('debug-log');
  const t=new Date().toLocaleTimeString('ja-JP',{hour:'2-digit',minute:'2-digit',second:'2-digit'});
  const d=document.createElement('div');
  d.className=`log-${type}`;
  d.innerHTML=`<span class="log-time">${t}</span>${msg}`;
  el.appendChild(d);
  el.scrollTop=el.scrollHeight;
}
function clearLog(){document.getElementById('debug-log').innerHTML='';}
function toggleDebug(){
  const p=document.getElementById('debug-panel');
  const b=document.getElementById('debug-toggle');
  const open=p.classList.toggle('open');
  b.textContent=(open?'▲':'▼')+' DEBUG';
}

// ── 音声バー ──────────────────────────────────────────────
let recState='off';
function setRecState(s){
  recState=s;
  const bar=document.getElementById('voice-bar');
  const icon=document.getElementById('mic-icon');
  const ring=document.getElementById('mic-ring');
  const stat=document.getElementById('voice-status');
  const sub=document.getElementById('voice-sub');
  bar.className=s;
  stat.style.color={off:'#7A6A55',listening:'#D4A853',parsing:'#7BA98A'}[s];
  stat.textContent={off:'停止中',listening:'聴いています',parsing:'Haiku 解析中…'}[s];
  icon.textContent={off:'🔇',listening:'🎙',parsing:'⚙️'}[s];
  ring.style.display=s==='listening'?'':'none';
  if(s==='listening') sub.textContent='話しかけてください';
  else if(s==='parsing') sub.textContent='claude-haiku-4-5';
  else sub.textContent='—';
}
function showConfirmed(t){
  const el=document.getElementById('confirmed-text');
  el.textContent=`「${t}」`;
  clearTimeout(confirmedTimer);
  confirmedTimer=setTimeout(()=>el.textContent='',3500);
}
function showError(msg){
  const el=document.getElementById('error-text');
  if(msg==='not-allowed'){
    el.innerHTML='🚫 マイクが拒否されています<br><span style="color:#7A6A55">設定→Safari→マイク→許可</span>';
  } else {
    el.textContent=msg||'';
  }
  el.style.display=msg?'':'none';
}

// ── 音声認識 ──────────────────────────────────────────────
function launchRec(){
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SR||!shouldRun)return;
  try{recObj&&recObj.abort();}catch(e){}
  const rec=new SR();
  rec.lang='ja-JP';rec.continuous=false;rec.interimResults=true;rec.maxAlternatives=1;
  rec.onstart=()=>{setRecState('listening');log('認識開始 ▶','ok');};
  rec.onresult=(e)=>{
    const last=e.results[e.results.length-1];
    const text=last[0].transcript;
    document.getElementById('voice-sub').textContent=text||'話しかけてください';
    if(last.isFinal&&text.trim()&&!processing){
      processing=true;
      setRecState('parsing');
      showConfirmed(text);
      log(`確定「${text}」${(last[0].confidence*100).toFixed(0)}%`,'ok');
      parseOrder(text.trim()).finally(()=>{processing=false;setRecState('listening');});
    }
  };
  rec.onerror=(e)=>{
    if(e.error==='no-speech'){log('無音→再起動','log');}
    else if(e.error==='aborted'){log('中断→再起動','log');}
    else if(e.error==='not-allowed'){log('マイク許可拒否','error');shouldRun=false;setRecState('off');showError('not-allowed');}
    else{log(`エラー:${e.error}`,'error');showError(`音声エラー:${e.error}`);}
  };
  rec.onend=()=>{
    log('終了→再起動待ち','log');
    if(shouldRun){
      restartTimer=setTimeout(()=>{if(shouldRun)launchRec();},processing?800:100);
    }else{setRecState('off');}
  };
  recObj=rec;
  try{rec.start();}catch(e){log(`start失敗:${e.message}`,'error');restartTimer=setTimeout(()=>{if(shouldRun)launchRec();},1000);}
}
function forceRestart(){
  shouldRun=true;clearTimeout(restartTimer);showError('');
  try{recObj&&recObj.abort();}catch(e){}
  setTimeout(()=>launchRec(),200);log('手動再起動','info');
}

// ── Haiku パース（キャッシュ有効）────────────────────────
async function parseOrder(text){
  showError('');
  try{
    const res=await fetch('https://api.anthropic.com/v1/messages',{
      method:'POST',
      headers:{'Content-Type':'application/json','anthropic-beta':'prompt-caching-2024-07-31'},
      body:JSON.stringify({
        model:'claude-haiku-4-5-20251001',max_tokens:200,
        system:[{type:'text',text:SYS,cache_control:{type:'ephemeral'}}],
        messages:[{role:'user',content:`音声テキスト:「${text}」`}],
      }),
    });
    if(!res.ok)throw new Error(`API ${res.status}`);
    const data=await res.json();
    const u=data.usage||{};
    if(u.cache_read_input_tokens>0)log(`💾 キャッシュHIT（${u.cache_read_input_tokens}tok節約）`,'ok');
    else if(u.cache_creation_input_tokens)log(`📝 キャッシュ書込（${u.cache_creation_input_tokens}tok）`,'info');
    const raw=data.content.map(c=>c.text||'').join('').replace(/```json|```/g,'').trim();
    const result=JSON.parse(raw);
    log(`結果:${JSON.stringify(result)}`,'info');
    if(result.cancel||result.intent==='cancel'){cancelByVoice(result.cancelTarget||'last');return;}
    if(result.error){showError(result.error);return;}
    const items=(result.items||[]).filter(i=>MENU_MAP[i.id]).map(i=>({...MENU_MAP[i.id],qty:i.qty}));
    if(!items.length){showError('メニューにない商品です');return;}
    addOrder(items);
  }catch(e){log(`パースエラー:${e.message}`,'error');showError(`APIエラー`);}
}

// ── オーダー管理 ──────────────────────────────────────────
function addOrder(items){
  queue.push({id:newId(),items,total:items.reduce((s,i)=>s+i.tickets*i.qty,0),ts:new Date()});
  renderOrders();
}
function completeOrder(){
  if(!queue.length)return;
  const o=queue.shift();
  o.items.forEach(({id,qty})=>{sales[id]=(sales[id]||0)+qty;});
  renderOrders();renderSummary();
  document.getElementById('thanks-overlay').style.display='flex';
  setTimeout(()=>document.getElementById('thanks-overlay').style.display='none',2800);
}
function cancelByVoice(target){
  if(!queue.length)return;
  let idx=target==='current'?0:queue.findIndex(o=>o.id===target);
  if(idx===-1)idx=queue.length-1;
  const r=queue.splice(idx,1)[0];
  if(r)showToast(`${r.id} を取り消しました`);
  renderOrders();
}
function openCancelModal(id){
  cancelTargetId=id;
  document.getElementById('cancel-modal-id').textContent=`ORDER ${id}`;
  document.getElementById('cancel-overlay').style.display='flex';
}
function closeModal(){document.getElementById('cancel-overlay').style.display='none';cancelTargetId=null;}
function execCancel(){
  if(!cancelTargetId)return;
  const idx=queue.findIndex(o=>o.id===cancelTargetId);
  if(idx!==-1){showToast(`${queue[idx].id} を取り消しました`);queue.splice(idx,1);renderOrders();}
  closeModal();
}
function showToast(msg){
  const el=document.getElementById('cancel-toast');
  document.getElementById('toast-msg').textContent=msg;
  el.style.display='flex';
  setTimeout(()=>el.style.display='none',2400);
}

// ── レンダリング ──────────────────────────────────────────
function renderOrders(){
  document.getElementById('queue-count').textContent=queue.length;
  const cur=queue[0];
  document.getElementById('current-order-area').innerHTML=cur?`
    <div class="cur-card">
      <div class="cur-meta">
        <span class="order-id">${cur.id}</span>
        <span class="ticket-chip">◈ ${cur.total} チケット</span>
        <button class="cancel-icon-btn" onclick="openCancelModal('${cur.id}')">✕</button>
      </div>
      <div>${cur.items.map(i=>`
        <div class="item-row">
          <span class="item-emoji">${i.emoji}</span>
          <div class="item-info"><div class="item-name">${i.name}</div><div class="item-sub">${i.sub}</div></div>
          ${i.qty>1?`<span class="item-qty">× ${i.qty}</span>`:''}
          <span class="item-tick">◈ ${i.tickets*i.qty}</span>
        </div>`).join('')}</div>
      <button class="done-btn" onclick="completeOrder()"><span>受け渡し完了</span><span style="font-size:18px">→</span></button>
    </div>`:`
    <div class="empty-card">
      <div class="empty-sym">◈</div>
      <div class="empty-title">ORDER READY</div>
      <div class="empty-text">音声またはタップで注文を受付中</div>
    </div>`;

  const waiting=queue.slice(1);
  document.getElementById('waiting-area').innerHTML=waiting.length?`
    <div class="section-divider"><div class="section-line"></div><span class="section-label">QUEUE · ${waiting.length}件</span><div class="section-line"></div></div>
    ${waiting.map(o=>`
      <div class="wait-card">
        <div class="wait-head">
          <span class="wait-id">${o.id}</span>
          <div class="wait-right">
            <span class="wait-tick">◈ ${o.total}</span>
            <button class="cancel-chip-btn" onclick="openCancelModal('${o.id}')">取り消し</button>
          </div>
        </div>
        <div class="wait-chips">${o.items.map(i=>`<span class="wait-chip">${i.emoji} ${i.name}${i.qty>1?` ×${i.qty}`:''}</span>`).join('')}</div>
      </div>`).join('')}`:'';
}
function renderSummary(){
  const ti=Object.values(sales).reduce((s,q)=>s+q,0);
  const tt=Object.entries(sales).reduce((s,[id,q])=>s+(MENU_MAP[id]?.tickets||0)*q,0);
  document.getElementById('kpi-items').textContent=ti;
  document.getElementById('kpi-tickets').textContent=tt;
  const max=Math.max(...MENU.map(m=>sales[m.id]||0),1);
  document.getElementById('sales-bars').innerHTML=MENU.map(m=>{
    const q=sales[m.id]||0;
    return`<div class="sales-row">
      <span class="sales-emoji">${m.emoji}</span>
      <div class="sales-info"><div class="sales-name">${m.name}</div><div class="bar-track"><div class="bar-fill" style="width:${q/max*100}%"></div></div></div>
      <div class="sales-right"><div class="sales-qty">${q}</div><div class="sales-tick">◈ ${q*m.tickets}</div></div>
    </div>`;}).join('');
}

// ── 手動入力 ──────────────────────────────────────────────
function buildMenuGrid(){
  document.getElementById('menu-grid').innerHTML=MENU.map(m=>`
    <div class="menu-card" id="mcard-${m.id}">
      <div class="menu-emoji">${m.emoji}</div>
      <div class="menu-name">${m.name}</div>
      <div class="menu-sub-t">${m.sub}</div>
      <div class="menu-price">◈ ${m.tickets}</div>
      <div class="menu-ctrl">
        <button class="ctrl-btn" onclick="addManual('${m.id}',-1)">−</button>
        <span class="ctrl-num" id="mnum-${m.id}">0</span>
        <button class="ctrl-btn" onclick="addManual('${m.id}',1)">+</button>
      </div>
    </div>`).join('');
}
function addManual(id,d){
  manualItems[id]=Math.max(0,(manualItems[id]||0)+d);
  if(!manualItems[id])delete manualItems[id];
  const n=document.getElementById(`mnum-${id}`);
  const c=document.getElementById(`mcard-${id}`);
  const q=manualItems[id]||0;
  n.textContent=q;n.className='ctrl-num'+(q>0?' active':'');
  c.className='menu-card'+(q>0?' selected':'');
  const total=Object.entries(manualItems).reduce((s,[id2,q2])=>s+(MENU_MAP[id2]?.tickets||0)*q2,0);
  const has=Object.keys(manualItems).length>0;
  document.getElementById('manual-footer').style.display=has?'':'none';
  document.getElementById('manual-total-val').textContent=`◈ ${total} チケット`;
}
function submitManual(){
  const items=Object.entries(manualItems).filter(([,q])=>q>0).map(([id,qty])=>({...MENU_MAP[id],qty}));
  if(!items.length)return;
  addOrder(items);manualItems={};
  MENU.forEach(m=>{
    const n=document.getElementById(`mnum-${m.id}`);
    const c=document.getElementById(`mcard-${m.id}`);
    if(n){n.textContent='0';n.className='ctrl-num';}
    if(c)c.className='menu-card';
  });
  document.getElementById('manual-footer').style.display='none';
  switchTab('orders',document.querySelector('.tab-btn'));
}
function switchTab(name,btn){
  ['orders','manual','summary'].forEach(t=>document.getElementById(`tab-${t}`).style.display=t===name?'':'none');
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  if(name==='summary')renderSummary();
}

// ── 起動 ─────────────────────────────────────────────────
document.getElementById('activation').addEventListener('click',()=>{
  document.getElementById('activation').style.display='none';
  document.getElementById('main-app').style.display='';
  buildMenuGrid();renderOrders();renderSummary();
  shouldRun=true;launchRec();
});
</script>
</body>
</html>
