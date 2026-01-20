const siteConfig = {
    // Şirket Bilgileri
    company: {
        name: "Erkal Hafriyat",
        slogan: "Geleceği İnşa Ediyoruz.",
        description: "Ankara'nın lider hafriyat ve inşaat firması. 30 yıllık tecrübe, dev makine parkı ve uzman kadro ile hizmetinizdeyiz.",
        phone: "0532 670 83 69",
        phoneDisplay: "0532 670 83 69",
        whatsapp: "905326708369", // WhatsApp numarası (Boşluksuz, + olmadan, 90 ile başlayarak)
        email: "info@erkalinsaat.com.tr",
        address: "Yeni Batı, 5427. Cd No:1 B D:6, 06374 Yenimahalle/Ankara",
        // Google Maps Linki
        mapUrl: "https://maps.google.com/maps?q=Yeni+Batı,+5427.+Cd+No:1+B+D:6,+06374+Yenimahalle/Ankara&t=&z=15&ie=UTF8&iwloc=&output=embed",
        social: {
            facebook: "https://www.facebook.com/ErkalHafriyat/?locale=tr_TR",
            instagram: "https://www.instagram.com/erkalhafriyat/",
            // linkedin: "#"
        },
        logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZvyZfQ2UQpDUAb65eLeidl5EH8ewA8EMCfw&s"
    },

    // UI ve Buton Yazıları
    // DİKKAT: Her satırın sonuna VİRGÜL (,) koymayı unutmayın!
    ui: {
        heroBtnContact: "Hemen Teklif Al",
        heroBtnProjects: "Projelerimizi İncele",
        whatsappBtnRef: "WhatsApp'tan Yaz",
        viewAllProjectsBtn: "Tüm Projeleri İncele",
        viewAllEquipmentBtn: "Tüm Ekipmanlarımız",
        getOfferBtn: "Teklif Al",
        contactTitle: "Bize Ulaşın",
        footerCopyright: "© 2026 Erkal Hafriyat. Tüm hakları saklıdır."
    },

    // İstatistikler
    stats: [
        { value: "30+", label: "Yıllık Tecrübe" },
        { value: "500+", label: "Tamamlanan Proje" },
        { value: "%100", label: "Müşteri Memnuniyeti" }
    ],

    // Projeler Listesi
    // YENİ PROJE EKLERKEN:
    // 1. Süslü parantez { ... } içine yazın.
    // 2. Bir önceki projenin süslü parantezinden sonra VİRGÜL (,) koymayı unutmayın.
    projects: [
        // ÖNE ÇIKAN (EN GÜNCEL) PROJELER
        {
            title: "Vega Center",
            client: "Nata Holding",
            location: "Vega Center",
            year: "2024 - Güncel",
            category: "AVM Hafriyat ve Altyapı İşleri",
            description: "AVM Hafriyat ve Altyapı İşleri",
            // Fotoğraf Linki
            image: "images/ne.jpeg",
            featured: true
        },
        {
            title: "Parla Projesi",
            client: "Gamador",
            location: "Parla Projesi",
            year: "2023 - 2024",
            category: "Konut Projesi Temel Hafriyatı",
            description: "Konut Projesi Temel Hafriyatı",
            image: "https://images.unsplash.com/photo-1590644365607-1c5a38fcac27?q=80&w=2070&auto=format&fit=crop",
            featured: false
        },
        {
            title: "App İstanbul Yolu Mall",
            client: "Şani İnşaat",
            location: "App İstanbul Yolu Mall Projesi",
            year: "2023 - Güncel",
            category: "AVM ve Karma Yaşam Merkezi Kazı Dolgu",
            description: "AVM ve Karma Yaşam Merkezi Kazı Dolgu",
            image: "images/saha.jpeg",
            featured: true
        },
        {
            title: "Çayyolu Projesi",
            client: "SANTRA",
            location: "Çayyolu Projesi",
            year: "2024",
            category: "Lüks Konut Altyapı ve Çevre Düzenleme",
            description: "Lüks Konut Altyapı ve Çevre Düzenleme",
            image: "images/tekkepçe.jpeg",
            featured: true
        },

        // DİĞER GEÇMİŞ PROJELER (Sadece Liste Görünümü)
        { client: "Yön İnşaat Ltd.Şti.", location: "Kahramankazan-Saray", year: "2025", category: "Bina Temel Harf. işleri" },
        { client: "Yankı Evleri", location: "Alacaatlı", year: "2025", category: "Bina Temel Harf. işleri" },
        { client: "Vivada İnşaat Ltd.Şti.", location: "Oran", year: "2025", category: "Bina Temel Harf. işleri" },
        { client: "Sukent Blokları", location: "Beytepe-İncek", year: "2024", category: "Bina Temel Harf. işleri" },
        { client: "Faras İnşaat Ltd.Şti.", location: "İncek", year: "2023", category: "Bina Temel Harf. işleri" },
        { client: "Kalander İnşaat Ltd.", location: "Mustafa Kemal mah.", year: "2021-2022", category: "Bina Temel Harf. işleri" },
        { client: "Fidanlar İnşaat Ltd.Şti.", location: "Ata Bilge Konutları İncek", year: "2014-2015", category: "Bina Temel Hafriyatı ve Çevre Düz.İşleri" },
        { client: "Koz Madencilik Ltd.", location: "İncek Konutları", year: "2013", category: "Bina Temel Harf. işleri" },
        { client: "Mikro İnş.Ltd.Şti.", location: "İncek Prestij Konutları", year: "2013", category: "Bina Temel Hafr.ve Çevre Düzenleme" },
        { client: "SİMPAŞ GYO", location: "İncek Life Ankara", year: "2012-2013", category: "Villa-bina temeli çok sert kaya hafriyatı" },
        { client: "Yankı-Metdem Ao", location: "Batıkent/Ankara", year: "2012-2013", category: "SGK Bilgi işlem Binası kazı-dolgu işleri" },
        { client: "Gayem İnşaat Ltd.Şti", location: "Batıkent/Ankara", year: "2011", category: "Toplu konut temel hafriyatı ve çevre düzn.işleri" },
        { client: "May İnşaat Ltd. Şti.", location: "Beşevler/Ankara", year: "2009-2010", category: "Voleybol kampüsü hafriyatı" },
        { client: "Alacaköy Yapı Koop.", location: "Çayyolu/Ankara", year: "2008", category: "Yol ve hafriyat yapımı" },
        { client: "Emin Eminel", location: "Ostim/Ankara", year: "2010", category: "Hafriyat yapımı" },
        { client: "Askon Ltd.Şti", location: "Çayyolu/Ankara", year: "2011", category: "Hafriyat yapımı" },
        { client: "Özlemkentgülyurt", location: "Çayyolu/Ankara", year: "2008", category: "Yol ve Hafriyat yapımı" },
        { client: "Barmek İnşaat A.Ş.", location: "Angora Evleri/Ankara", year: "1999-2000", category: "Hafriyat yapımı" },
        { client: "Borova Yapı A.Ş.", location: "İzmit", year: "2002", category: "Hafriyat ve Çevre Düzenlemesi işleri" }
    ],

    // Ekipman Listesi (Makine Parkı)
    // 'image' alanına fotoğraf URL'si ekleyebilirsiniz.
    equipment: [
        {
            category: "Paletli Ekskavatörler",
            count: 8,
            icon: "fas fa-hammer",
            // Fotoğraf Linki
            image: "images/saha1.jpeg",
            items: ["3 x CAT 336", "2 x Volvo EC380", "3 x Hyundai R220"]
        },
        {
            category: "Hafriyat Kamyonları",
            count: 15,
            icon: "fas fa-truck",
            image: "images/kamyon.jpeg",
            items: ["10 x Mercedes Arocs 4140", "5 x Ford Cargo 4142"]
        },
        {
            category: "Beko Loderler",
            count: 5,
            icon: "fas fa-snowplow",
            image: "images/yükleme.jpeg",
            items: ["3 x JCB 4CX", "2 x Hidromek 102B"]
        },
        {
            category: "Silindirler",
            count: 1,
            icon: "fas fa-road",
            image: "images/tekkamyon.jpeg",
            items: ["1 x Bomag Toprak Silindiri"]
        },
        {
            category: "Diğer Ekipmanlar",
            count: 4,
            icon: "fas fa-tools",
            image: "images/ikikamyon.jpeg",
            items: ["1 x Lowbed (Nakliye)", "1 x Arazöz", "2 x Servis Aracı"]
        }
    ],

    // Hizmetler
    services: [
        { title: "Hafriyat & Kazı", icon: "fas fa-truck-loading", desc: "Temel kazısı, derin kazı ve saha tesviyesi işlemlerinde lazer hassasiyetinde operasyonlar." },
        { title: "Yol & Altyapı", icon: "fas fa-road", desc: "Şantiye içi yollar, kanalizasyon altyapısı ve asfalt serimi hizmetlerinde uzman kadro." },
        { title: "Yıkım & Dönüşüm", icon: "fas fa-house-chimney-crack", desc: "Kentsel dönüşüm projelerinde kontrollü bina yıkımı, moloz ayrıştırma ve geri dönüşüm." },
        { title: "İş Makinesi Kiralama", icon: "fas fa-snowplow", desc: "Geniş makine parkımızdan saatlik, günlük veya proje bazlı kiralama çözümleri." },
        { title: "Moloz Nakliyat", icon: "fas fa-recycle", desc: "Çevreci yaklaşım ile inşaat atıklarının lisanslı döküm sahalarına güvenli nakliyesi." }
    ]
};
