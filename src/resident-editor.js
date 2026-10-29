import * as T from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { SHAPE_CONTROLS, SHAPE_STORAGE_KEY, RESIDENT_SHAPE_IDS, normalizeShape,
  parseShapeSettings, serializeShapeSettings, applyResidentShape, disposeShapeGeometry } from './resident-shape.js';

export function createResidentEditor({residents, residentInfo, onApply}) {
  // Keep pristine templates so successive edits never compound their transforms.
  const templates = residents.map(resident => resident.g.clone(true));
  let saved = {}, storageWarning = '';
  try { const text = localStorage.getItem(SHAPE_STORAGE_KEY); if (text) saved = parseShapeSettings(text); }
  catch { storageWarning = '無法讀取已存設定，先使用原始造型；你仍可調整和匯出。'; }
  residents.forEach((resident, index) => onApply(index, saved[RESIDENT_SHAPE_IDS[index]] || normalizeShape()));
  let overlay, renderer, scene, camera, controls, preview, observer, frame, selected = 0, draft;
  let open = false, returnFocus, initialDraft;
  const inputs = new Map();
  function say(message) { overlay.querySelector('[data-editor-status]').textContent = message; }
  function persist(next) {
    localStorage.setItem(SHAPE_STORAGE_KEY, serializeShapeSettings(next));
    saved = next;
    storageWarning = '';
  }
  function releasePreview() {
    if (!preview) return;
    scene.remove(preview);
    disposeShapeGeometry(preview);
    preview.traverse(node => { if (node.isInstancedMesh) node.dispose(); });
    preview = null;
  }
  function renderDraft() {
    applyResidentShape(preview, draft);
    overlay.dataset.shape = JSON.stringify(draft);
    for (const [key, input] of inputs) {
      input.value = draft[key];
      input.nextElementSibling.value = key.endsWith('Y') ? draft[key].toFixed(2) : `${Math.round(draft[key] * 100)}%`;
    }
  }
  function select(index) {
    selected = index;
    overlay.querySelector('.resident-editor-tools').scrollTop = 0;
    overlay.querySelector('.resident-editor-shell').scrollTop = 0;
    overlay.querySelector('select').value = String(index);
    draft = normalizeShape(saved[RESIDENT_SHAPE_IDS[index]]);
    initialDraft = JSON.stringify(draft);
    releasePreview();
    preview = templates[index].clone(true);
    preview.position.set(0, 0, 0); preview.rotation.set(0, 0, 0);
    scene.add(preview);
    const tail = inputs.get('tailSize').closest('label');
    tail.hidden = !preview.children.some(node => node.userData.shapePart === 'tail');
    renderDraft();
    say(storageWarning || '拖曳娃娃旋轉，滾輪或雙指縮放；調好後按「儲存並套用」。');
  }
  function close() {
    if (!open) return;
    if (JSON.stringify(draft) !== initialDraft && !window.confirm('還有未儲存的造型，確定要放棄這次調整嗎？')) return;
    open = false;
    overlay.hidden = true;
    document.body.classList.remove('resident-editor-open');
    document.removeEventListener('keydown', keyboard, true);
    cancelAnimationFrame(frame);
    returnFocus?.focus();
  }
  function keyboard(event) {
    if (event.key === 'Escape') { event.preventDefault(); event.stopImmediatePropagation(); close(); }
    if (event.key === 'Tab') {
      const items = [...overlay.querySelectorAll('button,select,input,[tabindex="0"]')].filter(item => !item.disabled && item.getClientRects().length);
      const first = items[0], last = items.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  }
  function create() {
    overlay = document.createElement('div');
    overlay.className = 'resident-editor'; overlay.hidden = true;
    overlay.setAttribute('role', 'dialog'); overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-labelledby', 'resident-editor-title');
    overlay.innerHTML = `<div class="resident-editor-shell">
      <header><div><span>PLUSH STUDIO</span><h2 id="resident-editor-title">娃娃造型工作室</h2></div><button type="button" data-editor-close aria-label="關閉造型編輯器">關閉 ✕</button></header>
      <div class="resident-editor-layout"><div class="resident-editor-stage"><canvas tabindex="0" aria-label="娃娃造型 3D 預覽，可拖曳旋轉"></canvas>
      <div class="resident-editor-views" aria-label="預覽角度"><button type="button" data-view="front">正面</button><button type="button" data-view="side">側面</button><button type="button" data-view="back">背面</button><button type="button" data-view="angle">斜角</button></div>
      <p>拖曳旋轉 · 滾輪／雙指縮放</p></div><div class="resident-editor-tools"><label class="resident-editor-picker">選擇娃娃<select aria-label="選擇要調整的娃娃"></select></label>
      <div class="resident-editor-sliders"></div><div class="resident-editor-actions"><button type="button" data-save>儲存並套用</button><button type="button" data-reset>恢復原始造型</button><button type="button" data-undo>還原未儲存調整</button><button type="button" data-export>匯出全部設定</button><button type="button" data-import>匯入設定</button><input type="file" accept=".json,application/json" hidden></div>
      <p class="resident-editor-note">設定儲存在此瀏覽器，會套用到島上的 3D 娃娃。可匯出備份，或把設定檔交給我套用到網站。家人朋友卡片的平面插圖維持原樣。</p>
      <p data-editor-status role="status" aria-live="polite"></p></div></div></div>`;
    document.body.append(overlay);
    const selectElement = overlay.querySelector('select');
    residentInfo.forEach((info, index) => { const option = document.createElement('option'); option.value = index; option.textContent = info.name; selectElement.append(option); });
    selectElement.onchange = () => {
      if (JSON.stringify(draft) !== initialDraft && !window.confirm('切換娃娃會放棄未儲存的調整，確定要切換嗎？')) { selectElement.value = String(selected); return; }
      select(Number(selectElement.value));
    };
    for (const [key, label, min, max] of SHAPE_CONTROLS) {
      const row = document.createElement('label'); row.className = 'resident-editor-slider';
      row.innerHTML = `<span>${label}</span><input type="range" min="${min}" max="${max}" step="0.01" aria-label="${label}"><output></output>`;
      const input = row.querySelector('input'); inputs.set(key, input);
      input.oninput = () => { draft[key] = Number(input.value); renderDraft(); say('預覽已更新，按「儲存並套用」才會更新島上的娃娃。'); };
      overlay.querySelector('.resident-editor-sliders').append(row);
    }
    renderer = new T.WebGLRenderer({canvas: overlay.querySelector('canvas'), antialias: true});
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5)); renderer.outputColorSpace = T.SRGBColorSpace;
    scene = new T.Scene(); scene.background = new T.Color('#eee6d6');
    scene.add(new T.HemisphereLight(0xfffbf0, 0xa2a7a4, 2.3));
    const sun = new T.DirectionalLight(0xfff6ed, 2.4); sun.position.set(3, 5, 5); scene.add(sun);
    const rim = new T.DirectionalLight(0xffffff, 1); rim.position.set(-3, 2, -3); scene.add(rim);
    camera = new T.PerspectiveCamera(35, 1, .01, 50);
    controls = new OrbitControls(camera, renderer.domElement); controls.target.set(0, .8, 0);
    controls.enableDamping = true; controls.enablePan = false; controls.minDistance = 1.7; controls.maxDistance = 8;
    controls.minPolarAngle = .06; controls.maxPolarAngle = Math.PI - .06;
    function view(name) {
      const positions = {front: [0, 1.1, 3.8], side: [3.8, 1.1, 0], back: [0, 1.1, -3.8], angle: [2.6, 1.65, 3]};
      controls.enableDamping = false; controls.update(); controls.target.set(0, .8, 0); camera.position.set(...positions[name]); controls.update(); controls.enableDamping = true;
    }
    overlay.querySelectorAll('[data-view]').forEach(button => { button.onclick = () => view(button.dataset.view); });
    view('angle');
    observer = new ResizeObserver(() => {
      const stage = overlay.querySelector('.resident-editor-stage');
      const width = stage.clientWidth, height = stage.clientHeight;
      if (!width || !height) return;
      renderer.setSize(width, height, false); camera.aspect = width / height; camera.updateProjectionMatrix();
    });
    observer.observe(overlay.querySelector('.resident-editor-stage'));
    overlay.querySelector('[data-editor-close]').onclick = close;
    overlay.querySelector('[data-save]').onclick = () => {
      const next = {...saved, [RESIDENT_SHAPE_IDS[selected]]: normalizeShape(draft)};
      try { persist(next); onApply(selected, draft); initialDraft = JSON.stringify(draft); say('已儲存並套用！重新開啟網站也會保留。'); }
      catch { say('無法儲存，請確認瀏覽器允許儲存網站資料；可先匯出設定備份。'); }
    };
    overlay.querySelector('[data-reset]').onclick = () => { draft = normalizeShape(); renderDraft(); say('已預覽原始造型；按「儲存並套用」後生效。'); };
    overlay.querySelector('[data-undo]').onclick = () => select(selected);
    overlay.querySelector('[data-export]').onclick = () => {
      const settings = {...saved, [RESIDENT_SHAPE_IDS[selected]]: draft};
      const blob = new Blob([serializeShapeSettings(settings)], {type: 'application/json'});
      const url = URL.createObjectURL(blob), link = document.createElement('a');
      link.href = url; link.download = 'little-island-shapes.json'; document.body.append(link); link.click(); link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000); say('已匯出全部設定（包含目前預覽），可備份或交給我套用到網站。');
    };
    const file = overlay.querySelector('[type=file]');
    overlay.querySelector('[data-import]').onclick = () => file.click();
    file.onchange = async () => {
      const selectedFile = file.files[0]; if (!selectedFile) return;
      try {
        if (selectedFile.size > 100000) throw new Error('設定檔太大，請選擇角色編輯器匯出的 JSON。');
        const imported = parseShapeSettings(await selectedFile.text());
        if (!Object.keys(imported).length) throw new Error('設定檔沒有可用的娃娃造型。');
        if (!window.confirm('匯入將覆蓋檔案中娃娃的已存造型，確定要套用嗎？')) return;
        persist({...saved, ...imported});
        residents.forEach((resident, index) => onApply(index, saved[RESIDENT_SHAPE_IDS[index]] || normalizeShape()));
        select(selected); say('已匯入並套用設定。');
      } catch (error) { say(error instanceof SyntaxError ? '無法讀取 JSON，請選擇編輯器匯出的設定檔。' : error.message); }
      finally { file.value = ''; }
    };
  }
  function animate() { if (!open) return; frame = requestAnimationFrame(animate); controls.update(); renderer.render(scene, camera); }
  return {
    open(index = 0) {
      if (!overlay) create();
      returnFocus = document.activeElement; overlay.hidden = false; open = true;
      document.body.classList.add('resident-editor-open'); select(index);
      document.addEventListener('keydown', keyboard, true);
      overlay.querySelector('select').focus(); animate();
    },
    dispose() {
      open = false; cancelAnimationFrame(frame); document.removeEventListener('keydown', keyboard, true);
      document.body.classList.remove('resident-editor-open'); observer?.disconnect(); controls?.dispose();
      releasePreview(); renderer?.dispose(); overlay?.remove();
    },
  };
}
