const stores = [
  ["炭火や こまち","和食","炭火焼き・定食","1,240","4.8","18–25分","🍱","#f9e3ce",12,29,["香ばし鶏もも炭火重","だし巻き玉子と銀しゃり定食"]],
  ["おむすび日和","和食","おにぎり・家庭料理","980","4.7","12–20分","🍙","#e8e4c9",27,18,["鮭と青じその結び","梅ひじきの土鍋おむすび"]],
  ["鮨処 なみ音","和食","寿司・海鮮","2,300","4.9","28–35分","🍣","#dbeaf0",43,37,["炙り帆立の彩り握り","旬魚の海辺ちらし"]],
  ["月見そば 朔","和食","そば・うどん","1,050","4.6","15–22分","🍜","#e6edd5",62,14,["鴨ねぎ月見そば","山椒香る冷やし胡麻うどん"]],
  ["旬菜食堂 つむぎ","和食","野菜料理・定食","1,180","4.8","20–28分","🥢","#f2e3cc",78,44,["季節野菜の九彩御膳","豚角煮と土鍋ごはん"]],
  ["洋食キッチン 青灯","洋食","洋食・オムライス","1,320","4.7","22–30分","🍳","#f5dfc4",19,68,["とろけるチーズの洋食オムライス","赤ワイン煮込みハンバーグ"]],
  ["ビストロ ルート9","洋食","ビストロ・フレンチ","2,100","4.8","30–38分","🥘","#efd9ce",52,62,["鴨のロースト 葡萄ソース","茸と海老のクリームグラタン"]],
  ["鉄板食堂 まると","洋食","鉄板焼き","1,450","4.6","24–31分","🥩","#f1dfd4",84,21,["鉄板サーロインと焼き野菜","明太もちチーズ焼き"]],
  ["グリル灯台","洋食","グリル・ステーキ","2,500","4.9","32–40分","🥩","#edd7cf",35,84,["熟成牛の赤身グリル","香草チキンと焦がしレモン"]],
  ["キッチン ミモザ","洋食","デリ・洋食","1,100","4.7","17–24分","🥗","#f3e7cb",68,77,["海老と菜の花のキッシュ","自家製デミの煮込みコロッケ"]],
  ["バインミー 風街","アジア料理","ベトナム料理","1,080","4.8","18–26分","🥖","#e2eccb",8,47,["レモングラス豚のバインミー","海老と香草の米麺サラダ"]],
  ["海南食堂 ハル","アジア料理","シンガポール料理","1,380","4.7","25–33分","🍗","#e8dfc7",24,35,["生姜香る海南チキンライス","海老団子のラクサスープ"]],
  ["タイ屋台 サワディ","アジア料理","タイ料理","1,200","4.8","20–29分","🍛","#f0dfc7",59,83,["青唐辛子のガパオ炒め","海鮮たっぷりトムヤム麺"]],
  ["ソウル食堂 ヌリ","アジア料理","韓国料理","1,260","4.6","21–29分","🍲","#f0d7d0",89,56,["とろ玉チーズタッカルビ","牛すじ煮込みのユッケジャン"]],
  ["香草台所 チャオ","アジア料理","台湾料理","1,150","4.9","16–23分","🥟","#e8e5c7",47,8,["五香粉香る魯肉飯","胡椒餅と青菜の小皿"]],
  ["喫茶 雨宿り","カフェ","喫茶店・軽食","850","4.8","14–21分","☕","#dfebe3",14,15,["厚切りバタートースト","琥珀プリンと深煎り珈琲"]],
  ["カフェ灯々","カフェ","コーヒー・サンド","920","4.7","15–22分","🥪","#e9e2d2",33,49,["炙り野菜のフォカッチャサンド","黒糖ラテと塩キャラメルスコーン"]],
  ["月舟コーヒー","カフェ","スペシャルティコーヒー","780","4.9","12–18分","☕","#d8e9df",73,29,["月舟ブレンドと栗のタルト","冷たい珈琲のアフォガート"]],
  ["昼下がりの窓","カフェ","ランチ・スイーツ","1,050","4.6","19–27分","🍰","#f1dfdf",55,18,["きのことチキンの白いドリア","桃色クリームの午後パフェ"]],
  ["喫茶シロップ","カフェ","パンケーキ・ドリンク","980","4.8","18–25分","🥞","#f3e5c9",86,73,["焦がしバナナの雲パンケーキ","自家製ジンジャークリームソーダ"]],
  ["四川麻辣房","中華","四川料理","1,480","4.8","25–34分","🌶️","#f0d3ca",9,77,["香辣よだれ鶏の花椒仕立て","麻辣牛肉と青菜の炒飯"]],
  ["餃子研究所 まんまる","中華","餃子・点心","1,000","4.7","17–24分","🥟","#f1dfc4",39,23,["羽根つき海老しそ餃子","黒酢香るもち米焼売"]],
  ["龍華飯店","中華","町中華","1,250","4.6","20–28分","🍥","#dce7d2",69,57,["五目あんかけ焼きそば","ふわ玉蟹あんかけ丼"]],
  ["粥彩堂","中華","お粥・薬膳","980","4.9","15–22分","🥣","#e7e5cd",26,87,["干し貝柱と鶏の薬膳粥","蓮の葉包み蒸しごはん"]],
  ["上海小路 玲玲","中華","上海料理","1,350","4.8","23–31分","🥠","#edddce",80,9,["上海蟹味噌のあんかけ麺","葱油餅と黒糖豆花"]],
  ["GREEN TABLE","ヘルシー","サラダ・ボウル","1,080","4.7","15–22分","🥗","#d3ead7",17,31,["十種野菜と塩麹チキンボウル","海苔アボカド玄米ロール"]],
  ["根菜とスープ","ヘルシー","スープ・野菜","920","4.8","13–20分","🥕","#e5ebcc",44,72,["ごろごろ根菜の豆乳スープ","鯖と紫蘇の雑穀おにぎり"]],
  ["豆花ファーム","ヘルシー","ヴィーガン・台湾","1,180","4.9","20–27分","🌱","#cfe9da",61,47,["島豆腐のヴィーガン麻婆","黒胡麻豆花と季節果実"]],
  ["発酵ごはん こよみ","ヘルシー","発酵料理","1,320","4.7","22–29分","🫛","#e3e7cd",83,35,["塩麹鮭と甘酒の発酵膳","味噌豆乳のきのこリゾット"]],
  ["軽やか食堂","ヘルシー","低糖質・デリ","1,150","4.6","18–26分","🥑","#dae8d2",31,11,["豆腐つくねの彩りプレート","レモン香る白身魚デリ"]],
  ["菓子工房 ひるね","スイーツ","焼き菓子・ケーキ","1,100","4.9","19–26分","🍰","#f2d9dc",7,61,["苺とピスタチオのショート","塩バターキャラメルフィナンシェ"]],
  ["甘味処 こはく","スイーツ","和菓子・抹茶","880","4.8","16–23分","🍵","#e9e2c9",36,54,["黒蜜きなこの出来たてわらび餅","抹茶あんみつ こはく仕立て"]],
  ["パフェ通り 七色","スイーツ","パフェ・クレープ","1,250","4.7","21–28分","🍓","#f3d9d4",57,5,["柑橘と紅茶の夜空パフェ","焼き林檎クレープの花束"]],
  ["ドーナツ航路","スイーツ","ドーナツ・揚げ菓子","820","4.6","12–18分","🍩","#efdfc1",75,66,["いちじくクリームドーナツ","ほうじ茶シュガーのリング"]],
  ["ショコラ研究室","スイーツ","チョコレート","1,480","4.9","24–32分","🍫","#e2d3cb",49,91,["塩ミルクガナッシュBOX","カカオニブの濃厚テリーヌ"]],
  ["バーガー工房 BOLT","ファストフード","ハンバーガー","1,280","4.8","18–25分","🍔","#f1ddc2",4,24,["スモークベーコン雷鳴バーガー","山椒チーズフライドポテト"]],
  ["揚げたて からっと","ファストフード","唐揚げ・ポテト","900","4.7","13–20分","🍗","#f4e1b9",22,59,["柚子胡椒から揚げBOX","のり塩クリスピーポテト"]],
  ["ピザ屋 まわる","ファストフード","ピザ・パスタ","1,360","4.6","25–33分","🍕","#f0d7c6",64,88,["燻製きのこの薪窯ピザ","海老レモンのもちもちパスタ"]],
  ["ホットドッグ・スプリント","ファストフード","ホットドッグ","880","4.8","14–21分","🌭","#eed9bd",45,42,["チリビーンズのロングドッグ","紫キャベツのハニーマスタードドッグ"]],
  ["おやつスタンド 8","ファストフード","軽食・ポテト","760","4.7","10–17分","🍟","#f3e6bf",91,31,["明太マヨの揚げたてポテト","とろけるチーズのミニナゲット"]],
  ["串焼き 夕まぐれ","居酒屋","焼き鳥・串焼き","1,280","4.8","21–29分","🍢","#eddbc7",11,90,["ねぎ塩つくねと炭火串盛り","焼き茄子のだし浸し"]],
  ["酒場 ひとしずく","居酒屋","おつまみ・揚げ物","1,150","4.7","18–25分","🍺","#dce7d1",29,79,["出汁香る鶏皮ポン酢","明太子チーズ春巻き"]],
  ["炉端や まる火","居酒屋","炉端焼き","1,650","4.9","26–35分","🔥","#f0d4c8",54,29,["銀だら西京焼きの炉端膳","牛タン葱まみれ炙り"]],
  ["小料理 さざ波","居酒屋","小料理・日本酒","1,420","4.8","23–30分","🍶","#e4e0ce",72,12,["鴨つくねと季節野菜の炊き合わせ","白味噌仕立ての海老しんじょ"]],
  ["立ち呑み かけはし","居酒屋","居酒屋・丼","1,000","4.6","17–24分","🍻","#e5e5c9",38,4,["牛すじ味噌煮込み丼","炙りしめ鯖の薬味盛り"]],
  ["ベーカリー 風見鶏","パン","ベーカリー","850","4.9","13–20分","🥐","#eadfc1",16,83,["発酵バターの塩クロワッサン","焼きとうもろこしのフォカッチャ"]],
  ["朝焼けブレッド","パン","食パン・サンド","780","4.8","12–19分","🍞","#f1e3c4",48,70,["雲のような生食パン","たまごとハムの朝焼けサンド"]],
  ["麦の音 パン工房","パン","天然酵母パン","920","4.7","17–24分","🥖","#e7e1ca",88,82,["無花果と胡桃のカンパーニュ","山椒ベーコンエピ"]],
  ["サンドイッチ航海図","パン","サンドイッチ","1,080","4.8","20–27分","🥪","#dce9d7",58,64,["ローストビーフの断面サンド","海老カツと紫蘇タルタル"]],
  ["焼きたて台所 こむぎ","パン","惣菜パン","760","4.6","11–18分","🥯","#f1ddc3",79,25,["半熟卵の焼きカレーパン","蓮根きんぴらのもち麦パン"]]
];

const courierNames = ["高橋 颯太","森川 あかり","佐々木 蓮","田中 美咲","小林 陽向","伊藤 里奈"];
const listEl = document.querySelector("#restaurant-list");
const markersEl = document.querySelector("#map-markers");
const modalRoot = document.querySelector("#modal-root");
const toastEl = document.querySelector("#toast");
let activeCategory = "すべて";
let selectedStore = null;
let deliveryTimer;

const money = value => `¥${Number(value).toLocaleString()}`;
const storeObject = (data, index) => ({id:index,name:data[0],category:data[1],type:data[2],orders:data[3],rating:data[4],time:data[5],emoji:data[6],color:data[7],x:data[8],y:data[9],menus:data[10]});
const allStores = stores.map(storeObject);

function renderStores() {
  const visible = activeCategory === "すべて" ? allStores : allStores.filter(store => store.category === activeCategory);
  document.querySelector("#result-count").textContent = `${visible.length}店舗`;
  listEl.innerHTML = visible.map(store => `
    <button class="restaurant-card" data-store="${store.id}">
      <span class="restaurant-visual" style="background:${store.color}">${store.emoji}</span>
      <span class="restaurant-info"><h3>${store.name}</h3><p>${store.category} ・ ${store.type}</p><span class="restaurant-meta"><span class="rating">★ ${store.rating}</span><span>・ ${store.time}</span></span></span>
    </button>`).join("") || '<div class="empty">このエリアには店舗がありません。</div>';
  document.querySelectorAll(".restaurant-card").forEach(card => card.addEventListener("click", () => openMenu(Number(card.dataset.store))));
  document.querySelectorAll(".map-mark").forEach(mark => mark.classList.toggle("hidden", activeCategory !== "すべて" && allStores[mark.dataset.store].category !== activeCategory));
}

function renderMarkers() {
  markersEl.innerHTML = allStores.map(store => `<button class="map-mark" data-store="${store.id}" style="left:${store.x}%;top:${store.y}%" aria-label="${store.name}"><i></i></button>`).join("");
  document.querySelectorAll(".map-mark").forEach(mark => mark.addEventListener("click", () => openMenu(Number(mark.dataset.store))));
}

function openMenu(id) {
  selectedStore = allStores[id];
  document.querySelectorAll(".map-mark").forEach(mark => mark.classList.toggle("selected", Number(mark.dataset.store) === id));
  modalRoot.innerHTML = `<div class="modal-backdrop" data-close><section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <header class="modal-header"><button class="close-btn" data-close aria-label="閉じる">×</button><span class="restaurant-visual" style="background:${selectedStore.color}">${selectedStore.emoji}</span><h2 id="modal-title">${selectedStore.name}</h2><p>${selectedStore.category} ・ ${selectedStore.type}<br /><span class="rating">★ ${selectedStore.rating}</span>　${selectedStore.time}</p></header>
    <div class="menu-body"><p class="menu-intro">人気のメニューから選んでください。配達料は無料です。</p>${selectedStore.menus.map((menu, i) => `<button class="menu-item" data-menu="${i}"><span><h3>${menu}</h3><p>${i === 0 ? "お店のおすすめ" : "Food that runs 限定"}</p></span><span class="price">${money(Number(selectedStore.orders.replace(",", "")) % 500 + 880 + i * 320)}</span></button>`).join("")}</div>
  </section></div>`;
  modalRoot.querySelector("[data-close]").addEventListener("click", closeModal);
  modalRoot.querySelector(".close-btn").addEventListener("click", closeModal);
  modalRoot.querySelectorAll("[data-menu]").forEach(item => item.addEventListener("click", () => openCheckout(Number(item.dataset.menu))));
}

function closeModal(event) {
  if (event && event.target !== event.currentTarget && !event.target.classList.contains("close-btn")) return;
  modalRoot.innerHTML = "";
  document.querySelectorAll(".map-mark").forEach(mark => mark.classList.remove("selected"));
}

function openCheckout(menuIndex) {
  const price = Number(selectedStore.orders.replace(",", "")) % 500 + 880 + menuIndex * 320;
  const menu = selectedStore.menus[menuIndex];
  modalRoot.innerHTML = `<div class="modal-backdrop" data-close><section class="modal" role="dialog" aria-modal="true"><header class="modal-header"><button class="close-btn" data-close aria-label="閉じる">×</button><p class="section-kicker">ORDER SUMMARY</p><h2>注文内容を確認</h2><p>${selectedStore.name}</p></header><div class="checkout-summary"><span>${menu}<br /><small>1点 ・ 配達料 無料</small></span><strong>${money(price)}</strong></div><div class="checkout-form"><div class="fake-pay"><b>◉</b><span>Food that runs ウォレット<br /><small>架空の会計です</small></span><span style="margin-left:auto">残高 ¥12,800</span></div><div class="fake-pay"><b>⌖</b><span>お届け先<br /><small>東京都 走町 2-14-6</small></span></div></div><footer class="modal-footer"><button class="order-btn" id="place-order">この内容で注文する　${money(price)}</button></footer></section></div>`;
  modalRoot.querySelector("[data-close]").addEventListener("click", closeModal);
  modalRoot.querySelector(".close-btn").addEventListener("click", closeModal);
  modalRoot.querySelector("#place-order").addEventListener("click", () => startDelivery(menu, price));
}

function startDelivery(menu, price) {
  const courier = courierNames[Math.floor(Math.random() * courierNames.length)];
  const eta = Math.floor(Math.random() * 9) + 18;
  let seconds = 9;
  modalRoot.innerHTML = `<div class="modal-backdrop"><section class="modal" role="dialog" aria-modal="true"><div class="status-wrap"><div class="status-icon">🏃</div><p class="section-kicker">ORDER ON THE WAY</p><h2>ご注文を受け付けました！</h2><p>${menu} ・ ${money(price)}</p><div class="progress-track"><div class="progress-bar" id="progress-bar"></div></div><div class="progress-label"><span>調理中</span><span>配達中</span><span>到着</span></div><div class="courier"><div class="courier-avatar">🧢</div><div><strong>${courier}</strong><small>配達パートナー　★ ${["4.8","4.9","5.0","4.7"][Math.floor(Math.random()*4)]}</small></div><strong style="margin-left:auto;color:var(--orange)">約${eta}分</strong></div><p id="delivery-count">到着まであと ${seconds} 秒（デモ）</p></div></section></div>`;
  deliveryTimer = setInterval(() => {
    seconds -= 1;
    const count = document.querySelector("#delivery-count");
    const bar = document.querySelector("#progress-bar");
    if (count) count.textContent = seconds > 0 ? `到着まであと ${seconds} 秒（デモ）` : "まもなく到着します";
    if (bar) bar.style.width = `${Math.min(96, 35 + (9 - seconds) * 7)}%`;
    if (seconds <= 0) { clearInterval(deliveryTimer); showCompleted(); }
  }, 1000);
}

function showCompleted() {
  modalRoot.innerHTML = `<div class="modal-backdrop"><section class="modal" role="dialog" aria-modal="true"><div class="status-wrap"><div class="status-icon" style="background:#dff4e9">✓</div><p class="section-kicker">DELIVERED</p><h2 class="delivery-done">配達完了しました</h2><p>おいしい時間をお楽しみください。</p><div class="stars" aria-label="評価"><button class="star" data-star="1">★</button><button class="star" data-star="2">★</button><button class="star" data-star="3">★</button><button class="star" data-star="4">★</button><button class="star" data-star="5">★</button></div><p id="rating-label">今回の配達を評価する</p><button class="order-btn hidden" id="finish-rating">評価を送信する</button></div></section></div>`;
  modalRoot.querySelectorAll(".star").forEach(star => star.addEventListener("click", () => {
    const value = Number(star.dataset.star);
    modalRoot.querySelectorAll(".star").forEach(item => item.classList.toggle("active", Number(item.dataset.star) <= value));
    modalRoot.querySelector("#rating-label").textContent = `${value}つ星の評価をありがとうございます！`;
    modalRoot.querySelector("#finish-rating").classList.remove("hidden");
  }));
  modalRoot.querySelector("#finish-rating").addEventListener("click", () => { closeModal(); showToast("評価を送信しました。ありがとうございます！"); });
}

document.querySelectorAll(".category").forEach(category => category.addEventListener("click", () => {
  activeCategory = category.dataset.category;
  document.querySelectorAll(".category").forEach(item => item.classList.toggle("active", item === category));
  renderStores();
}));
document.querySelector(".location-btn").addEventListener("click", () => showToast("現在地を中心に表示しています"));
renderMarkers();
renderStores();

function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("show");
  setTimeout(() => toastEl.classList.remove("show"), 2600);
}
