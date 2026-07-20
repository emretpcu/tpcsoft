/* tpcsoft - Interactive Main Logic */

// --- DATA DEFINITIONS ---

const SERVICES = [
  {
    id: 'custom-web',
    title: 'Özel Web, Blog & Kurumsal Tanıtım Siteleri',
    shortDescription: 'Markanızı internette öne çıkaran, Google aramalarında ilk sıralara taşıyan, modern blog ve kurumsal tanıtım siteleri. Tamamen Türkçe ve kolay yönetim paneli standart olarak dahildir.',
    longDescription: 'Sıradan hazır şablonlar veya hantal WordPress benzeri yapılar yerine, tamamen hedeflerinize ve kurumsal kimliğinize göre sıfırdan tasarlanmış modern web ve blog siteleri sunuyoruz. Kolayca gezilebilen modern arayüzler, hızlı yükleme süreleri, Google SEO uyumu ve içeriklerinizi saniyeler içinde güncelleyebileceğiniz dinamik Türkçe yönetim paneli standarttır.',
    icon: 'layout',
    estimatedBasePrice: 45000,
    features: [
      'Sadece Size Özel Özgün Görsel Tasarım (Kesinlikle Hazır Şablon Değildir)',
      'Kolay Türkçe Yönetim Paneli (İçerikleri, Blog Yazılarını Kendiniz Güncelleyin)',
      'Mobil Telefon, Tablet ve Bilgisayarlarla %100 Uyumlu Tasarım',
      'Arama Motorlarında (Google SEO) Üst Sıralarda Çıkmayı Sağlayan Dinamik Altyapı',
      'Ziyaretçileri Sıkmayan, Süper Hızlı Açılan Web Sayfaları'
    ]
  },
  {
    id: 'enterprise-software',
    title: 'Özel İş Yönetim ve Otomasyon Sistemleri',
    shortDescription: 'Şirketinizin tüm operasyonlarını tek bir noktadan yönetmenizi sağlayan, hataları sıfıra indiren ve zamandan tasarruf ettiren özel yönetim panelleri ve ERP/CRM sistemleri.',
    longDescription: 'Kağıt üzerindeki veya dağınık dosyalardaki iş süreçlerinizi tamamen dijitalleştiriyoruz. Departmanlarınızın birbiriyle entegre çalıştığı, personel verimliliğini artıran ve işinizin her detayını izleyebileceğiniz size özel otomasyon sistemleri geliştiriyoruz.',
    icon: 'cpu',
    estimatedBasePrice: 120000,
    features: [
      'Cari, Stok, Müşteri ve Sipariş Takip Modülleri',
      'Personel ve Departman Yetkilendirme Sistemleri',
      'Tek Tıkla Detaylı Performans ve Gelir/Gider Raporları',
      'İş Süreçlerinizi Otomatikleştiren Akıllı Uyarı ve Bildirimler',
      'Gelecekte İhtiyaçlarınıza Göre Kolayca Genişletilebilir Esnek Yapı'
    ]
  },
  {
    id: 'backend-systems',
    title: 'E-Ticaret ve Akıllı Entegrasyon Çözümleri',
    shortDescription: 'Farklı programlarınızı, ödeme sistemlerinizi, kargo firmalarını ve pazaryerlerini birbiriyle konuşturarak tamamen otomatik çalışan üst düzey satış altyapıları.',
    longDescription: 'Satış süreçlerinizi kolaylaştırmak için mevcut sistemlerinizi (Muhasebe, CRM, Pazaryerleri) bir araya getiriyoruz. Sanal POS ödeme geçitleri, kargo entegrasyonları ve otomatik sipariş aktarımı sayesinde manuel iş yükünüzü en aza indiriyoruz.',
    icon: 'server',
    estimatedBasePrice: 110000,
    features: [
      'Sanal POS Entegrasyonu (Kredi Kartıyla 3D Güvenli Ödeme Altyapısı)',
      'Muhasebe, ERP ve Stok Programları ile Otomatik Senkronizasyon',
      'Trendyol, Hepsiburada vb. Pazaryeri Mağaza Entegrasyonları',
      'Otomatik Kargo Barkodu ve Teslimat Bilgilendirme Sistemi',
      'Güvenli ve Kesintisiz 7/24 Sipariş ve Veri Akışı'
    ]
  },
  {
    id: 'db-optimization',
    title: 'Sistem Hızlandırma & Performans Optimizasyonu',
    shortDescription: 'Mevcut yavaş çalışan web sitelerinizi veya sistemlerinizi baştan aşağı inceleyerek hızlandırır, Google puanınızı yükseltir ve müşteri kaybını önleriz.',
    longDescription: 'Yavaş açılan bir web sitesi veya kilitlenen bir sistem, doğrudan müşteri ve para kaybı demektir. Altyapınızı analiz ediyor, veritabanı sorgularınızı optimize ediyor ve akıllı önbellekleme sistemleri kurarak sisteminizi en yüksek hıza ulaştırıyoruz.',
    icon: 'database',
    estimatedBasePrice: 75000,
    features: [
      'Yavaş Açılan Sayfaların Milisaniyeler İçinde Yüklenmesi',
      'Google Sayfa Hızı (Lighthouse) Skorlarında %95+ Başarı Oranı',
      'Yoğun Ziyaretçi Trafiğinde Çökmeyi Engelleyen Güçlü Altyapı',
      'Sunucu Giderlerinizi Azaltan Akıllı Kod İyileştirmeleri',
      'Kullanıcı Deneyimini İyileştirerek Satış ve Başvuru Oranlarını Artırma'
    ]
  }
];

const PROCESS_STEPS = [
  {
    stepNumber: 1,
    title: 'Analiz, Keşif & İş Planı',
    badgeTitle: 'Keşif',
    description: 'Sizi dinliyor, hedeflerinizi anlıyor ve işinize en uygun çözümü planlıyoruz.',
    details: [
      'Detaylı ihtiyaç analizi ve bütçe planlamasının yapılması',
      'Sistem mimarisinin ve iş süreçlerinizin dijital haritasının çıkarılması',
      'Projenin her aşaması için şeffaf bir yol haritası oluşturulması',
      'İş teslim tarihleri ve garanti şartlarının netleştirilmesi'
    ]
  },
  {
    stepNumber: 2,
    title: 'Modern Görsel Tasarım & Sunum',
    badgeTitle: 'Tasarım',
    description: 'Markanıza en uygun renk paletini, tipografiyi ve dönüşüm odaklı şık arayüzleri tasarlıyoruz.',
    details: [
      'Sitenin genel yapısını gösteren ilk şablon taslakları (Wireframe)',
      'Markanıza özel, modern ve güven veren profesyonel görsel tasarımlar',
      'Ziyaretçilerinizin kolayca gezinebilmesi için kullanıcı deneyimi testleri',
      'Tasarımı canlı gibi tıklayıp inceleyebileceğiniz interaktif önizleme süreci'
    ]
  },
  {
    stepNumber: 3,
    title: 'Yüksek Kaliteli Kodlama & Entegrasyon',
    badgeTitle: 'Kodlama',
    description: 'Onayladığınız tasarımları, en son siber güvenlik ve hız standartlarına uygun olarak kodluyoruz.',
    details: [
      'Tüm telefon, tablet ve bilgisayarlarla uyumlu (Responsive) kodlama',
      'Süper hızlı açılan ve Google tarafından sevilen temiz kod yapısı',
      'Kolayca kullanabileceğiniz, tamamen Türkçe ve sade yönetim paneli',
      'Siber saldırılara ve veri sızıntılarına karşı tam korumalı altyapı'
    ]
  },
  {
    stepNumber: 4,
    title: 'Detaylı Testler & Eksiksiz Teslimat',
    badgeTitle: 'Lansman',
    description: 'Sisteminizin güvenliğini, hızını ve hatasız çalıştığını test ettikten sonra yayına alıyoruz.',
    details: [
      'Farklı telefon ve tarayıcılarda sorunsuz çalışma testleri',
      'Yüksek ziyaretçi trafiğinde bile sitenin çökmemesi için yük testleri',
      'Google uyumluluk, hız ve SEO kontrollerinin tamamlanması',
      'Sitenizin kurulumu, sunucu ayarları ve sorunsuz çalışacak şekilde teslimi'
    ]
  }
];

const TECH_ITEMS = [
  {
    name: 'Süper Hızlı Altyapı (.NET 10)',
    category: 'backend',
    description: 'Microsoft tarafından geliştirilen, dünyanın en güvenli ve en yüksek performanslı yazılım altyapısı.',
    advantage: 'Sitenizin anında açılmasını sağlar, ziyaretçilerinizi bekletmez ve iş süreçlerinizi hızlandırır.',
    iconName: 'cpu'
  },
  {
    name: 'Kolay Yönetilebilir Türkçe Panel',
    category: 'backend',
    description: 'Karmaşık teknik terimler içermeyen, herkesin kolayca kullanabileceği modern kontrol paneli.',
    advantage: 'Hiçbir yazılım bilgisine gerek duymadan tüm sitenizi kendiniz kolayca güncelleyebilirsiniz.',
    iconName: 'server'
  },
  {
    name: 'Gelişmiş Siber Güvenlik',
    category: 'backend',
    description: 'Müşteri bilgilerinizin, siparişlerinizin ve kurumsal verilerinizin siber saldırılardan korunması.',
    advantage: 'Siber korsanlara ve veri sızıntılarına karşı tam güvenlik sağlayarak kafanızı rahat ettirir.',
    iconName: 'shield'
  },
  {
    name: 'Akıcı Mobil ve Web Deneyimi',
    category: 'frontend',
    description: 'Telefon, tablet ve bilgisayarlarla kusursuzca uyum sağlayan ultra akıcı ve modern kullanıcı ön yüzü.',
    advantage: 'Ziyaretçileriniz hangi cihazdan girerse girsin en konforlu ve şık deneyimi yaşar.',
    iconName: 'layers'
  },
  {
    name: 'Arama Motoru Uyumu (Google SEO)',
    category: 'frontend',
    description: 'Gereksiz hiçbir kod içermeyen, Google botlarının çok sevdiği ve yüksek puan verdiği temiz kodlama yapısı.',
    advantage: 'Google aramalarında rakiplerinizin önüne geçmenizi ve organik ziyaretçi kazanmanızı kolaylaştırır.',
    iconName: 'palette'
  },
  {
    name: 'Sağlam ve Yedekli Veri Depolama',
    category: 'database',
    description: 'İşinize ait kritik verilerin ve müşteri kayıtlarının güvenli, performanslı ve düzenli olarak depolanması.',
    advantage: 'Elektrik veya sunucu arızalarında bile verileriniz asla kaybolmaz, her zaman güvende tutulur.',
    iconName: 'database'
  },
  {
    name: 'Anlık Hız ve Çökme Koruması',
    category: 'database',
    description: 'Sitenizin en popüler alanlarını bellekte tutarak milisaniyeler içinde sunan akıllı önbellekleme sistemi.',
    advantage: 'Aynı anda binlerce kişi sitenize girse dahi sistemde yavaşlama veya çökme yaşanmasını önler.',
    iconName: 'zap'
  },
  {
    name: 'Geleceğe Hazır Esnek Taşınabilirlik',
    category: 'devops',
    description: 'Sitenizin tüm sunucularda ve hosting firmalarında hiçbir kod değişikliği gerektirmeden çalışabilmesi.',
    advantage: 'Gelecekte sistemi büyütmek veya sunucu değiştirmek istediğinizde size ekstra yazılım masrafı çıkarmaz.',
    iconName: 'box'
  }
];

const PORTFOLIO_PROJECTS = [
  {
    id: 'p1',
    title: 'elifdenim.com',
    category: 'web-design',
    categoryLabel: 'Özel Web Tasarım & B2B',
    description: 'Uluslararası hazır giyim ve tekstil pazarı için özel olarak tasarlanmış, şık, hızlı ve çok dilli ürün sergileme ve kurumsal tanıtım platformu.',
    techStack: ['Özel Tasarım', 'Katalog', 'Çoklu Dil', 'Mobil Uyum'],
    features: [
      'Tüm tekstil kreasyonlarını yüksek çözünürlükte sunan akıcı görsel katalog altyapısı',
      'Mobil cihazlar ve tabletlerle tam uyumlu, hızlı yüklenen modern arayüz',
      'Arama motorlarında üst sıralarda yer almayı sağlayan güçlü SEO optimizasyonu',
      'Yurtdışı müşteriler için entegre çoklu dil ve kolay içerik yönetim paneli'
    ]
  },
  {
    id: 'p2',
    title: 'willowdenim.com',
    category: 'web-design',
    categoryLabel: 'Premium Web Tasarım',
    description: 'Küresel moda ve denim trendlerine yön veren seçkin bir marka için tasarladığımız, kullanıcı deneyimi odaklı, yüksek prestijli kurumsal web sitesi.',
    techStack: ['UI/UX', 'Modern Tasarım', 'Hızlı Altyapı'],
    features: [
      'Markanın premium algısını pekiştiren özgün, modern ve minimalist arayüz tasarımı',
      'Ziyaretçiyi yormayan, sayfa içi akıcı animasyonlar ve estetik geçişler',
      'Google hız kriterlerinde tam puan alan yüksek performanslı altyapı',
      'Müşterilerin kolayca iletişime geçebileceği hızlı etkileşim modülleri'
    ]
  },
  {
    id: 'p3',
    title: 'karayelinsaat.com.tr',
    category: 'enterprise',
    categoryLabel: 'Kurumsal Web Sitesi',
    description: 'Büyük ölçekli prestijli konut ve inşaat projeleri üreten köklü bir firma için tasarladığımız, tamamlanmış ve devam eden projeleri sergileyen profesyonel web sitesi.',
    techStack: ['Proje Portfolyosu', 'Kurumsal Tanıtım', 'SEO Uyumu'],
    features: [
      'Yapımı tamamlanmış dev projelerin detaylı görsel ve teknik sergileme modülleri',
      'Firma kurumsal kimliğine ve vizyonuna uygun güven veren, prestijli tasarım',
      'Gelecekte yeni projelerin saniyeler içinde eklenmesini sağlayan sade yönetim altyapısı',
      'Harita ve lokasyon entegrasyonuyla zenginleştirilmiş proje detay sayfaları'
    ]
  }
];

// --- HERO INTERACTIVE LAYER DEFINITIONS ---
const HERO_LAYERS_DESCRIPTIONS = [
  'Ziyaretçilerinizin sitenizde keyifle gezindiği, tüm mobil telefon ve tabletlerden saniyeler içinde açılan göz alıcı görsel tasarım.',
  'Sitenizdeki tüm içerikleri, yazıları ve ürünleri hiçbir teknik bilgi gerekmeden tek tıkla güncelleyebileceğiniz size özel panel.',
  'Kredi kartıyla güvenli ödeme alma, otomatik sipariş takibi ve kurumsal entegrasyonları yürüten akıllı sistemler.',
  'Müşteri bilgilerinizin ve kurumsal verilerinizin siber saldırılara ve bilgi hırsızlığına karşı şifrelenerek korunması.',
  'Sitenizin her an yayında kalması ve çökmemesi için en kararlı, hızlı ve otomatik yedeklenen sunucu altyapısının kurulumu.'
];

// --- BUDGET ESTIMATOR SETTINGS ---
const SCALE_PROFILES = {
  small: {
    label: 'Butik / Özel Tasarım',
    multiplier: 1.0,
    daysMultiplier: 1.0,
    desc: 'Yönetim paneli standart olarak dahil; sıfırdan hazırlanan, hazır şablon olmayan, markanıza özel tasarlanmış modern kurumsal tanıtım ve blog sistemleri.'
  },
  medium: {
    label: 'Profesyonel / Dinamik Sistem',
    multiplier: 1.5,
    daysMultiplier: 1.3,
    desc: 'Gelişmiş yönetim paneli dahil; tüm içeriklerinizi güncelleyebileceğiniz, yüksek hızlı, tam mobil uyumlu ve entegre profesyonel sistemler.'
  },
  enterprise: {
    label: 'Kurumsal / Yüksek Performans & Portal',
    multiplier: 2.5,
    daysMultiplier: 1.8,
    desc: 'Gelişmiş yönetim ve kontrol paneli dahil; çok yüksek ziyaretçi kapasitesine uygun bulut mimarisi, gelişmiş API entegrasyonları, üst seviye siber güvenlik kalkanı ve çok dilli yapılar.'
  }
};

const EXTRAS_LIST = [
  { id: 'redis', label: 'Süper Hızlı Sayfa Açılış Desteği', price: 6000, days: 3, desc: 'Sitenizin milisaniyeler içinde yüklenmesi için gelişmiş sunucu-bellek önbellekleme teknolojisi.' },
  { id: 'docker', label: 'Kolay Sunucu & Bulut Kurulumu', price: 5000, days: 2, desc: 'Her türlü sunucu ve bulut sisteminde kesintisiz çalışabilen esnek taşınabilir yapı.' },
  { id: 'multilang', label: 'Çoklu Dil Desteği (İngilizce vb.)', price: 7000, days: 4, desc: 'Sitenizin tüm dünya dillerine tam uyumlu, arama motoru dostu çoklu dil altyapısı.' },
  { id: 'security', label: 'Gelişmiş Siber Güvenlik Kalkanı', price: 8000, days: 5, desc: 'Siber saldırılara karşı gelişmiş filtreler ve KVKK / GDPR yönetmeliklerine %100 tam uyum.' }
];

// --- STATE MANAGEMENT ---
let currentWizardService = SERVICES[0];
let currentWizardScale = 'medium';
let currentWizardExtras = [];

// --- INITIALIZATION ---
window.addEventListener('DOMContentLoaded', () => {
  // Initialize icons
  lucide.createIcons();

  // Load interactive elements
  initNavbarScroll();
  initScrollSpy();
  initMobileMenu();
  switchProcessStep(1);
  filterTech('all');
  filterPortfolio('all');
  initWizard();

  // Back to top scroll listener
  const backToTopBtn = document.getElementById('footer-back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
    } else {
      backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
    }
  });
});

// --- NAVBAR SCROLL ACTION ---
function initNavbarScroll() {
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  });
}

// --- SCROLL SPY ---
function initScrollSpy() {
  const sections = ['hero', 'kurumsal', 'hizmetler', 'surec', 'teknolojiler', 'referanslar', 'teklif-wizard', 'iletisim'];
  
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + 200;
    
    for (const sectionId of sections) {
      const el = document.getElementById(sectionId);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        
        if (scrollPosition >= top && scrollPosition < top + height) {
          // Remove active from all nav links
          document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('text-blue-600', 'font-semibold');
            link.classList.add('text-slate-600');
          });
          
          // Add to current section link
          const activeLink = document.getElementById(`nav-link-${sectionId}`);
          if (activeLink) {
            activeLink.classList.remove('text-slate-600');
            activeLink.classList.add('text-blue-600', 'font-semibold');
          }
          break;
        }
      }
    }
  });
}

// --- MOBILE MENU DRAWER ---
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  btn.addEventListener('click', toggleMobileMenu);
}

function toggleMobileMenu() {
  const drawer = document.getElementById('mobile-drawer');
  const icon = document.getElementById('mobile-menu-icon');
  const isOpen = !drawer.classList.contains('hidden');
  
  if (isOpen) {
    drawer.style.maxHeight = '0px';
    setTimeout(() => {
      drawer.classList.add('hidden');
    }, 300);
    icon.setAttribute('data-lucide', 'menu');
  } else {
    drawer.classList.remove('hidden');
    drawer.style.maxHeight = drawer.scrollHeight + 'px';
    icon.setAttribute('data-lucide', 'x');
  }
  lucide.createIcons();
}

// --- NAVIGATION HELPER ---
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- HERO INTERACTIVE VISUALIZER ---
function hoverLayer(idx) {
  // Clear other active layers
  document.querySelectorAll('.layer-item').forEach(el => {
    el.classList.remove('active-layer', 'border-cyan-200', 'text-cyan-700', 'bg-cyan-50/80', 'border-blue-200', 'text-blue-700', 'bg-blue-50/80', 'border-indigo-200', 'text-indigo-700', 'bg-indigo-50/80', 'border-amber-200', 'text-amber-700', 'bg-amber-50/80', 'border-rose-200', 'text-rose-700', 'bg-rose-50/80');
  });

  const colors = [
    'border-cyan-200 text-cyan-700 bg-cyan-50/80',
    'border-blue-200 text-blue-700 bg-blue-50/80',
    'border-indigo-200 text-indigo-700 bg-indigo-50/80',
    'border-amber-200 text-amber-700 bg-amber-50/80',
    'border-rose-200 text-rose-700 bg-rose-50/80'
  ];

  // Set active style on hovered layer
  const activeEl = document.querySelector(`[data-layer-idx="${idx}"]`);
  if (activeEl) {
    activeEl.classList.add('active-layer');
    colors[idx].split(' ').forEach(cls => activeEl.classList.add(cls));
  }

  // Update details container
  const detailsBox = document.getElementById('layer-details-box');
  detailsBox.classList.remove('hidden');
  detailsBox.style.opacity = '0';
  detailsBox.style.transform = 'translateY(4px)';
  
  setTimeout(() => {
    detailsBox.innerHTML = `<p class="font-medium text-slate-800 mb-1">Detayli Bilgi:</p>${HERO_LAYERS_DESCRIPTIONS[idx]}`;
    detailsBox.style.opacity = '1';
    detailsBox.style.transform = 'translateY(0)';
  }, 50);
}

function leaveLayer() {
  // Let's keep the last hovered layer detailed info visible, just reset style of layer item
  document.querySelectorAll('.layer-item').forEach(el => {
    el.classList.remove('active-layer', 'border-cyan-200', 'text-cyan-700', 'bg-cyan-50/80', 'border-blue-200', 'text-blue-700', 'bg-blue-50/80', 'border-indigo-200', 'text-indigo-700', 'bg-indigo-50/80', 'border-amber-200', 'text-amber-700', 'bg-amber-50/80', 'border-rose-200', 'text-rose-700', 'bg-rose-50/80');
  });
}

// --- SERVICES EXPAND/COLLAPSE ---
function toggleServiceExpand(serviceId) {
  const card = document.getElementById(`service-card-${serviceId}`);
  const details = card.querySelector('.service-details-expanded');
  const btnIcon = card.querySelector('.service-expand-btn i');
  const readMoreBtn = card.querySelector('.service-read-more-text');

  const isExpanded = details.classList.contains('opacity-100');

  if (isExpanded) {
    // Collapse
    details.style.maxHeight = '0px';
    details.classList.remove('opacity-100');
    details.classList.add('opacity-0');
    card.classList.remove('border-blue-600', 'bg-white', 'shadow-md', 'shadow-blue-500/5');
    card.classList.add('border-slate-200/80');
    btnIcon.style.transform = 'rotate(0deg)';
    readMoreBtn.textContent = 'Daha Fazla Detay & Fiyatlar';
  } else {
    // Close other expanded cards first
    document.querySelectorAll('.service-card').forEach(otherCard => {
      const otherId = otherCard.id.replace('service-card-', '');
      if (otherId !== serviceId) {
        const otherDetails = otherCard.querySelector('.service-details-expanded');
        if (otherDetails.classList.contains('opacity-100')) {
          otherDetails.style.maxHeight = '0px';
          otherDetails.classList.remove('opacity-100');
          otherDetails.classList.add('opacity-0');
          otherCard.classList.remove('border-blue-600', 'bg-white', 'shadow-md', 'shadow-blue-500/5');
          otherCard.classList.add('border-slate-200/80');
          otherCard.querySelector('.service-expand-btn i').style.transform = 'rotate(0deg)';
          otherCard.querySelector('.service-read-more-text').textContent = 'Daha Fazla Detay & Fiyatlar';
        }
      }
    });

    // Expand
    details.style.maxHeight = details.scrollHeight + 'px';
    details.classList.remove('opacity-0');
    details.classList.add('opacity-100');
    card.classList.remove('border-slate-200/80');
    card.classList.add('border-blue-600', 'bg-white', 'shadow-md', 'shadow-blue-500/5');
    btnIcon.style.transform = 'rotate(180deg)';
    readMoreBtn.textContent = 'Daha Az Detay';
  }
}

// --- PROCESS STEPS TAB SWITCHER ---
function switchProcessStep(stepNum) {
  // Update tabs selection styles
  document.querySelectorAll('.process-tab').forEach(tab => {
    tab.classList.remove('bg-white', 'border-blue-600', 'shadow-sm', 'shadow-blue-500/5', 'text-slate-900');
    tab.classList.add('bg-slate-50', 'border-slate-200', 'text-slate-500');
    tab.querySelector('.process-tab-arrow').classList.add('hidden');
  });

  const activeTab = document.getElementById(`process-tab-${stepNum}`);
  if (activeTab) {
    activeTab.classList.remove('bg-slate-50', 'border-slate-200', 'text-slate-500');
    activeTab.classList.add('bg-white', 'border-blue-600', 'shadow-sm', 'shadow-blue-500/5', 'text-slate-900');
    activeTab.querySelector('.process-tab-arrow').classList.remove('hidden');
  }

  // Update mobile tab buttons
  document.querySelectorAll('.mobile-process-tab').forEach(mobTab => {
    mobTab.classList.remove('bg-blue-600', 'border-blue-600', 'text-white');
    mobTab.classList.add('bg-slate-50', 'border-slate-200', 'text-slate-600');
  });
  
  const activeMobTab = document.getElementById(`mobile-process-tab-${stepNum}`);
  if (activeMobTab) {
    activeMobTab.classList.remove('bg-slate-50', 'border-slate-200', 'text-slate-600');
    activeMobTab.classList.add('bg-blue-600', 'border-blue-600', 'text-white');
  }

  // Re-render display content
  const step = PROCESS_STEPS.find(s => s.stepNumber === stepNum);
  const container = document.getElementById('process-display-content');
  
  let iconHtml = '';
  switch(stepNum) {
    case 1: iconHtml = '<i data-lucide="clipboard-list" class="w-6 h-6 text-blue-600"></i>'; break;
    case 2: iconHtml = '<i data-lucide="pen-tool" class="w-6 h-6 text-blue-600"></i>'; break;
    case 3: iconHtml = '<i data-lucide="brackets" class="w-6 h-6 text-blue-600"></i>'; break;
    case 4: iconHtml = '<i data-lucide="rocket" class="w-6 h-6 text-blue-600"></i>'; break;
  }

  let detailsListHtml = '';
  step.details.forEach(det => {
    detailsListHtml += `
      <div class="flex items-start space-x-3 bg-slate-50/50 p-3 rounded-xl border border-slate-200/60 hover:border-blue-500/20 transition-colors shadow-sm">
        <i data-lucide="check-circle-2" class="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5 animate-pulse"></i>
        <span class="font-sans text-xs text-slate-600 leading-relaxed">${det}</span>
      </div>
    `;
  });

  // Fade out
  container.style.opacity = '0';
  container.style.transform = 'translateX(10px)';

  setTimeout(() => {
    container.innerHTML = `
      <!-- Left side Column -->
      <div class="lg:col-span-5 flex flex-col justify-center items-center bg-slate-50 border border-slate-200/60 rounded-2xl p-8 shadow-sm text-center">
        <div class="w-16 h-16 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center mb-4 shadow-sm">
          ${iconHtml}
        </div>
        <span class="text-blue-600 font-mono text-xs font-bold tracking-widest uppercase">
          Aşama 0${step.stepNumber} / 04
        </span>
        <h3 class="font-display text-2xl font-bold mt-2 text-slate-900">
          ${step.title}
        </h3>
        <p class="font-sans text-xs text-slate-600 mt-1 uppercase tracking-wider bg-white border border-slate-200 px-2.5 py-1 rounded-md font-medium shadow-sm">
          ${step.badgeTitle} Aşaması
        </p>
      </div>

      <!-- Right side Column -->
      <div class="lg:col-span-7 space-y-6">
        <div class="space-y-2">
          <h4 class="font-display text-lg font-bold text-slate-900">Bu Süreçte Ne Yapıyoruz?</h4>
          <p class="font-sans text-slate-600 text-sm lg:text-base leading-relaxed">${step.description}</p>
        </div>

        <div class="border-t border-slate-200 pt-6 space-y-3">
          <p class="font-sans text-xs font-semibold text-blue-600 uppercase tracking-widest">
            Aşama Sürecindeki Kilometre Taşları:
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            ${detailsListHtml}
          </div>
        </div>
      </div>
    `;
    lucide.createIcons();
    // Fade in
    container.style.opacity = '1';
    container.style.transform = 'translateX(0)';
  }, 150);
}

// --- WHY US TECHNOLOGY FILTER ---
function filterTech(category) {
  // Update buttons state
  document.querySelectorAll('.tech-filter-btn').forEach(btn => {
    btn.classList.remove('bg-blue-600', 'border-blue-600', 'text-white', 'shadow-md', 'shadow-blue-500/10', 'font-bold');
    btn.classList.add('bg-slate-50', 'border-slate-200', 'text-slate-600', 'hover:border-slate-300', 'hover:bg-slate-100');
  });

  const activeBtn = document.getElementById(`tech-filter-${category}`);
  if (activeBtn) {
    activeBtn.classList.remove('bg-slate-50', 'border-slate-200', 'text-slate-600', 'hover:border-slate-300', 'hover:bg-slate-100');
    activeBtn.classList.add('bg-blue-600', 'border-blue-600', 'text-white', 'shadow-md', 'shadow-blue-500/10', 'font-bold');
  }

  // Filter items
  const grid = document.getElementById('tech-grid');
  const items = TECH_ITEMS.filter(item => category === 'all' || item.category === category);
  
  grid.style.opacity = '0';
  setTimeout(() => {
    grid.innerHTML = '';
    
    items.forEach(tech => {
      let iconName = 'cpu';
      switch(tech.iconName) {
        case 'Cpu': iconName = 'cpu'; break;
        case 'Server': iconName = 'server'; break;
        case 'Database': iconName = 'database'; break;
        case 'Layers': iconName = 'layers'; break;
        case 'Palette': iconName = 'palette'; break;
        case 'Shield': iconName = 'shield'; break;
        case 'Zap': iconName = 'zap'; break;
        case 'Box': iconName = 'box'; break;
      }

      grid.innerHTML += `
        <div class="bg-slate-50/50 border border-slate-200/80 rounded-3xl p-5 hover:border-blue-500/40 hover:bg-white hover:shadow-sm transition-all duration-300 group fade-in">
          <div class="flex items-center space-x-3 mb-4">
            <div class="bg-white p-2.5 rounded-xl border border-slate-150 group-hover:scale-110 transition-transform duration-300 shadow-sm text-blue-600">
              <i data-lucide="${iconName}" class="w-6 h-6"></i>
            </div>
            <h4 class="font-display text-base font-bold text-slate-900">${tech.name}</h4>
          </div>
          <div class="space-y-3">
            <p class="font-sans text-xs text-slate-600 leading-relaxed">${tech.description}</p>
            <div class="border-t border-slate-200 pt-3">
              <p class="font-sans text-[10px] font-semibold text-blue-600 uppercase tracking-wider">Müşteri Avantajı:</p>
              <p class="font-sans text-xs text-slate-600 mt-1 italic">"${tech.advantage}"</p>
            </div>
          </div>
        </div>
      `;
    });
    
    lucide.createIcons();
    grid.style.opacity = '1';
  }, 100);
}

// --- PORTFOLIO FILTER ---
function filterPortfolio(category) {
  // Update filter buttons
  document.querySelectorAll('.portfolio-filter-btn').forEach(btn => {
    btn.classList.remove('bg-blue-600', 'border-blue-600', 'text-white', 'shadow-md', 'font-bold');
    btn.classList.add('bg-slate-50', 'border-slate-200', 'text-slate-600', 'hover:border-slate-300', 'hover:bg-slate-100');
  });

  const activeBtn = document.getElementById(`portfolio-filter-${category}`);
  if (activeBtn) {
    activeBtn.classList.remove('bg-slate-50', 'border-slate-200', 'text-slate-600', 'hover:border-slate-300', 'hover:bg-slate-100');
    activeBtn.classList.add('bg-blue-600', 'border-blue-600', 'text-white', 'shadow-md', 'font-bold');
  }

  // Filter projects
  const grid = document.getElementById('portfolio-grid');
  const projects = category === 'all' 
    ? PORTFOLIO_PROJECTS 
    : PORTFOLIO_PROJECTS.filter(p => p.category === category);
  
  grid.style.opacity = '0';
  setTimeout(() => {
    grid.innerHTML = '';
    
    projects.forEach(project => {
      let featList = '';
      project.features.forEach(feat => {
        featList += `
          <li class="flex items-start space-x-2 text-xs font-sans text-slate-600 leading-normal">
            <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5 animate-pulse"></i>
            <span>${feat}</span>
          </li>
        `;
      });

      let techList = '';
      project.techStack.forEach(t => {
        techList += `
          <span class="text-[9px] font-mono px-2 py-0.5 bg-white rounded border border-slate-200 text-slate-600 shadow-sm">${t}</span>
        `;
      });

      grid.innerHTML += `
        <div class="bg-slate-50/50 border border-slate-200/80 rounded-3xl p-6 lg:p-8 flex flex-col justify-between hover:border-blue-500/40 hover:bg-white hover:shadow-sm transition-all duration-300 group relative fade-in">
          <div class="space-y-6">
            <div class="flex justify-between items-center">
              <span class="text-[10px] font-mono px-2.5 py-1 bg-white border border-slate-150 rounded-lg text-blue-600 font-semibold uppercase tracking-wider shadow-sm">
                ${project.categoryLabel}
              </span>
              <div class="bg-white p-2 rounded-lg border border-slate-150 text-slate-500 group-hover:text-blue-600 shadow-sm transition-all duration-200">
                <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
              </div>
            </div>

            <div class="space-y-2">
              <h3 class="font-display text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                <a href="https://${project.title}" target="_blank" rel="noreferrer" class="hover:underline inline-flex items-center space-x-1.5">
                  <span>${project.title}</span>
                  <i data-lucide="external-link" class="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity"></i>
                </a>
              </h3>
              <p class="font-sans text-xs lg:text-sm text-slate-600 leading-relaxed">${project.description}</p>
            </div>

            <div class="space-y-2 border-t border-slate-200 pt-4">
              <p class="font-sans text-[10px] font-bold text-blue-600 uppercase tracking-widest">Geliştirilen Özel Çözümler:</p>
              <ul class="space-y-2">${featList}</ul>
            </div>
          </div>

          <div class="border-t border-slate-200 pt-4 mt-6">
            <div class="flex flex-wrap gap-1.5">${techList}</div>
          </div>
        </div>
      `;
    });
    
    lucide.createIcons();
    grid.style.opacity = '1';
  }, 100);
}

// --- BUDGET ESTIMATOR WIZARD ENGINE ---
function initWizard() {
  renderWizardServices();
  renderWizardScales();
  renderWizardExtras();
  updateWizard();
}

function renderWizardServices() {
  const container = document.getElementById('wizard-services-container');
  container.innerHTML = '';
  
  SERVICES.forEach(s => {
    const isActive = currentWizardService.id === s.id;
    const btn = document.createElement('button');
    btn.className = `p-4 rounded-xl text-left border transition-all duration-200 focus:outline-none cursor-pointer ${
      isActive
        ? 'bg-blue-50/40 border-blue-600 text-slate-900 shadow-sm'
        : 'bg-slate-50/50 border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
    }`;
    btn.id = `wizard-service-btn-${s.id}`;
    btn.innerHTML = `
      <span class="font-display text-sm font-bold block mb-1 text-slate-900">${s.title}</span>
      <span class="text-[11px] font-sans text-slate-500 line-clamp-2 leading-relaxed">${s.shortDescription}</span>
    `;
    btn.onclick = () => {
      currentWizardService = s;
      renderWizardServices();
      updateWizard();
    };
    container.appendChild(btn);
  });
}

function renderWizardScales() {
  const container = document.getElementById('wizard-scales-container');
  container.innerHTML = '';
  
  Object.keys(SCALE_PROFILES).forEach(key => {
    const profile = SCALE_PROFILES[key];
    const isActive = currentWizardScale === key;
    const btn = document.createElement('button');
    btn.className = `p-4 rounded-xl text-left border transition-all duration-200 focus:outline-none cursor-pointer ${
      isActive
        ? 'bg-blue-50/40 border-blue-600 text-slate-900 shadow-sm'
        : 'bg-slate-50/50 border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
    }`;
    btn.id = `wizard-scale-btn-${key}`;
    btn.innerHTML = `
      <div class="flex items-center justify-between mb-1">
        <span class="font-display text-xs font-bold text-slate-900">${profile.label}</span>
        ${isActive ? '<span class="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>' : ''}
      </div>
      <span class="text-[11px] font-sans text-slate-500 leading-normal block">${profile.desc}</span>
    `;
    btn.onclick = () => {
      currentWizardScale = key;
      renderWizardScales();
      updateWizard();
    };
    container.appendChild(btn);
  });
}

function renderWizardExtras() {
  const container = document.getElementById('wizard-extras-container');
  container.innerHTML = '';
  
  EXTRAS_LIST.forEach(extra => {
    const isChecked = currentWizardExtras.includes(extra.id);
    const btn = document.createElement('button');
    btn.className = `p-4 rounded-xl text-left border transition-all duration-200 focus:outline-none cursor-pointer flex items-start space-x-3 ${
      isChecked
        ? 'bg-blue-50/40 border-blue-600/80 text-slate-900 shadow-sm'
        : 'bg-slate-50/50 border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
    }`;
    btn.id = `wizard-extra-btn-${extra.id}`;
    
    let checkIconClass = isChecked ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300 bg-white';
    let checkIconContent = isChecked ? '<i data-lucide="check" class="w-3 h-3 stroke-[3]"></i>' : '';
    
    btn.innerHTML = `
      <div class="w-4 h-4 rounded mt-0.5 flex items-center justify-center border transition-all ${checkIconClass}">
        ${checkIconContent}
      </div>
      <div class="flex-1 text-left">
        <div class="flex justify-between items-start mb-0.5">
          <span class="font-display text-xs font-bold text-slate-900 leading-tight">${extra.label}</span>
        </div>
        <p class="text-[10px] font-sans text-slate-500 leading-normal mb-1">${extra.desc}</p>
        <span class="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100">
          +${extra.price.toLocaleString('tr-TR')} ₺ / +${extra.days} gün
        </span>
      </div>
    `;
    
    btn.onclick = () => {
      if (isChecked) {
        currentWizardExtras = currentWizardExtras.filter(id => id !== extra.id);
      } else {
        currentWizardExtras.push(extra.id);
      }
      renderWizardExtras();
      updateWizard();
    };
    container.appendChild(btn);
  });
  
  lucide.createIcons();
}

function updateWizard() {
  const basePrice = currentWizardService.estimatedBasePrice;
  const profile = SCALE_PROFILES[currentWizardScale];
  
  // Math base
  let calculatedPrice = basePrice * profile.multiplier;
  let calculatedDays = Math.round(15 * profile.daysMultiplier);
  
  if (currentWizardService.id === 'enterprise-software') {
    calculatedDays = Math.round(30 * profile.daysMultiplier);
  } else if (currentWizardService.id === 'db-optimization') {
    calculatedDays = Math.round(10 * profile.daysMultiplier);
  }
  
  // Math extras
  currentWizardExtras.forEach(extraId => {
    const extra = EXTRAS_LIST.find(e => e.id === extraId);
    if (extra) {
      calculatedPrice += extra.price;
      calculatedDays += extra.days;
    }
  });
  
  // Floor at 45.000 TL
  const totalBudget = Math.max(45000, Math.round(calculatedPrice));
  const totalDays = calculatedDays;
  
  // Update UI values
  document.querySelector('#wizard-summary-service .id-val').textContent = currentWizardService.title;
  document.querySelector('#wizard-summary-scale .id-val').textContent = profile.label;
  document.querySelector('#wizard-summary-extras .id-val').textContent = currentWizardExtras.length > 0 ? `${currentWizardExtras.length} Adet` : 'Yok';
  document.querySelector('#wizard-summary-duration .id-val').textContent = `~ ${totalDays} İş Günü`;
  document.getElementById('wizard-price-val').textContent = `${totalBudget.toLocaleString('tr-TR')} ₺`;
  
  // Cost analysis chart math
  const designPart = Math.round(totalBudget * 0.25);
  const codingPart = Math.round(totalBudget * 0.45);
  const panelPart = Math.round(totalBudget * 0.20);
  const testingPart = Math.round(totalBudget * 0.10);
  
  document.getElementById('analysis-val-design').textContent = `${designPart.toLocaleString('tr-TR')} ₺`;
  document.getElementById('analysis-val-coding').textContent = `${codingPart.toLocaleString('tr-TR')} ₺`;
  document.getElementById('analysis-val-panel').textContent = `${panelPart.toLocaleString('tr-TR')} ₺`;
  document.getElementById('analysis-val-testing').textContent = `${testingPart.toLocaleString('tr-TR')} ₺`;
}

function startWizardWithService(serviceId) {
  const service = SERVICES.find(s => s.id === serviceId);
  if (service) {
    currentWizardService = service;
    renderWizardServices();
    updateWizard();
  }
  scrollToSection('teklif-wizard');
}

// --- WHATSAPP SUBMISSION ENGINE ---
function submitEstimatorToWhatsApp() {
  const profile = SCALE_PROFILES[currentWizardScale];
  
  // Redundant calculation to be absolutely secure on values
  const basePrice = currentWizardService.estimatedBasePrice;
  let calculatedPrice = basePrice * profile.multiplier;
  let calculatedDays = Math.round(15 * profile.daysMultiplier);
  
  if (currentWizardService.id === 'enterprise-software') {
    calculatedDays = Math.round(30 * profile.daysMultiplier);
  } else if (currentWizardService.id === 'db-optimization') {
    calculatedDays = Math.round(10 * profile.daysMultiplier);
  }
  
  const selectedExtraLabels = [];
  currentWizardExtras.forEach(extraId => {
    const extra = EXTRAS_LIST.find(e => e.id === extraId);
    if (extra) {
      calculatedPrice += extra.price;
      calculatedDays += extra.days;
      selectedExtraLabels.push(extra.label);
    }
  });
  
  const totalBudget = Math.max(45000, Math.round(calculatedPrice));
  const totalDays = calculatedDays;
  
  const extrasText = selectedExtraLabels.length > 0 
    ? `\n*Ekstra Özellikler:* ${selectedExtraLabels.join(', ')}`
    : '';

  const message = `Merhaba, tpcsoft üzerinden tahmini bir proje bütçesi hesapladım:

*Hizmet:* ${currentWizardService.title}
*Kapsam:* ${profile.label}
*Tahmini Süre:* ~ ${totalDays} İş Günü
*Tahmini Bütçe:* ${totalBudget.toLocaleString('tr-TR')} ₺${extrasText}

Detayları görüşmek ve projemizi başlatmak için teklif almak istiyorum.`;

  const whatsappUrl = `https://wa.me/905364865237?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}
