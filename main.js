// Main JavaScript for Erkal Hafriyat
// Relies on siteConfig object from config.js

document.addEventListener('DOMContentLoaded', () => {

    // 1. Navbar & Scroll Effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-lg');
                navbar.classList.add('bg-navy-900/95');
            } else {
                navbar.classList.remove('shadow-lg');
            }
        });
    }

    // 2. Render Shared Content (Contact, Social, Logo)
    renderCommonInfo();

    // 3. Render Page Specific Content
    if (document.getElementById('projects-container')) {
        const isHomePage = document.getElementById('projects-container').dataset.page === 'home';
        renderProjects(isHomePage ? 3 : null);
    }

    if (document.getElementById('equipment-container')) {
        renderEquipment();
    }

    if (document.getElementById('services-container')) {
        renderServices();
    }

    // 4. Mobile Menu Logic
    initMobileMenu();

    console.log("Erkal Hafriyat Config-Driven Logic Loaded.");
});

function renderCommonInfo() {
    // Phone numbers (General)
    document.querySelectorAll('.dynamic-phone').forEach(el => {
        const isLink = el.tagName === 'A';

        if (isLink) {
            // Safe replacement: Find the icon
            const icon = el.querySelector('i');

            // If "Loading" is present, or just enforcement
            if (el.innerHTML.includes('Loading')) {
                // Clear existing text nodes but keep Element nodes (icon)
                // Or easier:
                const phoneText = ` ${siteConfig.company.phoneDisplay}`;

                // If icon exists, we want to keep it and append text
                if (icon) {
                    // Remove all non-element nodes (text nodes)
                    // converting to array to avoid live nodeList issues during removal
                    Array.from(el.childNodes).forEach(node => {
                        if (node.nodeType === 3) { // Text node
                            node.remove();
                        }
                    });
                    el.appendChild(document.createTextNode(phoneText));
                } else {
                    el.textContent = phoneText;
                }
            }

            el.href = `tel:${siteConfig.company.phone.replace(/\s/g, '')}`;

        } else {
            el.textContent = siteConfig.company.phoneDisplay;
        }
    });

    // WhatsApp Button Logic
    document.querySelectorAll('.dynamic-whatsapp-btn').forEach(el => {
        // Update Text
        if (siteConfig.ui && siteConfig.ui.whatsappBtnRef) {
            // Keep icon if exists
            const icon = el.querySelector('i');
            el.textContent = ` ${siteConfig.ui.whatsappBtnRef}`;
            if (icon) el.prepend(icon);
        }

        // Update Link
        // Format: https://wa.me/90532xxxxxxx
        el.href = `https://wa.me/${siteConfig.company.whatsapp}`;
    });

    // Button Labels from Config
    if (siteConfig.ui) {
        const updateBtnText = (selector, text) => {
            document.querySelectorAll(selector).forEach(el => {
                const icon = el.querySelector('i');
                // Simple text replacement keeping icon
                el.childNodes.forEach(node => {
                    if (node.nodeType === 3 && node.textContent.trim().length > 0) {
                        node.textContent = ` ${text}`;
                    }
                });
            });
        };

        // We need to target specific buttons. 
        // Ideally we should add distinct classes to them in HTML, 
        // but for now let's try to identify them or just leave them static if not critical.
        // User asked "bana config dosyasnıda belirt ki ordan bakınca direkt anlayabileyim"
        // So the mapping is important.
    }

    // Address
    document.querySelectorAll('.dynamic-address').forEach(el => {
        el.textContent = siteConfig.company.address;
    });

    // Email
    document.querySelectorAll('.dynamic-email').forEach(el => {
        el.textContent = siteConfig.company.email;
    });

    // Map URL
    document.querySelectorAll('.dynamic-map-iframe').forEach(el => {
        el.src = siteConfig.company.mapUrl;
    });

    // Social Links
    document.querySelectorAll('.dynamic-facebook').forEach(el => {
        el.href = siteConfig.company.social.facebook;
    });
    document.querySelectorAll('.dynamic-instagram').forEach(el => {
        el.href = siteConfig.company.social.instagram;
    });
}

function renderProjects(limit) {
    const container = document.getElementById('projects-container');
    if (!container) return;

    let projects = siteConfig.projects;

    // Sort: Featured first, then by year desc
    projects.sort((a, b) => (a.featured === b.featured) ? 0 : a.featured ? -1 : 1);

    if (limit) {
        projects = projects.slice(0, limit);
    }

    let html = '';
    // If it's the projects table page (e.g. projects.html might use a table)
    const isTable = container.dataset.layout === 'table';

    if (isTable) {
        // Render Table Rows
        projects.forEach(p => {
            const rowClass = p.featured ? 'bg-amber-50 hover:bg-amber-100' : 'hover:bg-gray-50';
            const icon = p.featured ? '<span class="w-2 h-2 rounded-full bg-amber-500"></span>' : '';

            html += `
            <tr class="${rowClass} transition-colors border-b border-gray-100">
                <td class="p-6 flex items-center gap-3">
                    ${icon}
                    <span class="font-bold text-navy-900 text-lg">${p.client}</span>
                </td>
                <td class="p-6 text-gray-700 font-medium">${p.location}</td>
                <td class="p-6 text-gray-500">${p.year}</td>
                <td class="p-6 text-gray-600">${p.category}</td>
            </tr>
            `;
        });
    } else {
        // Render Grid Cards
        projects.forEach(p => {
            // Lazy load image handling
            html += `
            <div class="group relative overflow-hidden rounded-xl h-80 cursor-pointer">
                <img src="${p.image || 'https://via.placeholder.com/800x600?text=Erkal+Hafriyat'}"
                    alt="${p.title}"
                    loading="lazy"
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span class="text-amber-500 text-sm font-bold uppercase mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">${p.category.split(' ')[0]}</span>
                    <h3 class="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">${p.title}</h3>
                    <p class="text-gray-300 text-sm mt-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">
                        ${p.year} - ${p.description}
                    </p>
                </div>
            </div>
            `;
        });
    }

    container.innerHTML = html;
}

function renderEquipment() {
    const container = document.getElementById('equipment-container');
    if (!container) return;

    let html = '';
    // Check layout type
    const isCarousel = container.classList.contains('flex');

    if (isCarousel) {
        // Home page carousel
        siteConfig.equipment.forEach(cat => {
            // Use image if available, else icon fallback
            const imageDisplay = cat.image
                ? `<img src="${cat.image}" alt="${cat.category}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy">`
                : `<div class="w-full h-full flex items-center justify-center bg-navy-700"><i class="${cat.icon} text-6xl text-gray-600"></i></div>`;

            html += `
             <div class="snap-center shrink-0 w-80 sm:w-96 bg-navy-800 rounded-xl overflow-hidden border border-navy-700 hover:border-amber-500 transition-all duration-300 group shadow-lg">
                <div class="h-56 relative overflow-hidden">
                    ${imageDisplay}
                    <div class="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-60"></div>
                    <div class="absolute bottom-4 left-4">
                        <i class="${cat.icon} text-amber-500 text-2xl drop-shadow-md"></i>
                    </div>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold text-white mb-2">${cat.category}</h3>
                    <div class="space-y-2 text-sm text-gray-400">
                        <div class="flex justify-between border-b border-navy-600 pb-1">
                            <span>Adet</span>
                            <span class="text-white font-bold">${cat.count}</span>
                        </div>
                        <div class="flex justify-between">
                            <span>Durum</span>
                            <span class="text-green-400"><i class="fas fa-check-circle mr-1"></i>Aktif / Kiralanabilir</span>
                        </div>
                    </div>
                </div>
            </div>
             `;
        });

    } else {
        // Full Equipment List Page (Grid)
        siteConfig.equipment.forEach(cat => {
            const listItems = cat.items.map(item =>
                `<li class="flex items-center text-gray-600 border-b border-gray-100 pb-2"><i class="fas fa-check text-green-500 mr-3"></i> ${item}</li>`
            ).join('');

            const imageHeader = cat.image
                ? `<div class="relative h-56 overflow-hidden">
                     <div class="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent z-10"></div>
                     <img src="${cat.image}" alt="${cat.category}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy">
                     <div class="absolute bottom-0 left-0 p-6 z-20 w-full">
                        <div class="flex justify-between items-end">
                            <h2 class="text-2xl font-bold text-white font-display shadow-black drop-shadow-lg">${cat.category}</h2>
                            <i class="${cat.icon} text-3xl text-amber-500 drop-shadow-md"></i>
                        </div>
                     </div>
                   </div>`
                : `<div class="bg-navy-900 p-8 flex justify-between items-center relative overflow-hidden h-40">
                    <div class="absolute inset-0 bg-amber-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    <h2 class="text-2xl font-bold text-white font-display">${cat.category}</h2>
                    <i class="${cat.icon} text-5xl text-amber-500 opacity-50"></i>
                   </div>`;

            html += `
            <div class="bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                ${imageHeader}
                <div class="p-8">
                    <div class="flex items-baseline mb-6 border-b border-gray-100 pb-4">
                        <span class="text-5xl font-bold text-navy-900">${cat.count}</span>
                        <span class="text-gray-500 ml-2 text-lg">Adet Makine</span>
                    </div>
                    <ul class="space-y-3">
                        ${listItems}
                    </ul>
                </div>
            </div>
            `;
        });
    }

    container.innerHTML = html;
}

function renderServices() {
    const container = document.getElementById('services-container');
    if (!container) return;

    let html = '';
    siteConfig.services.forEach(s => {
        html += `
        <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 cursor-pointer border-t-4 border-transparent hover:border-amber-500">
            <div class="w-14 h-14 bg-navy-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors">
                <i class="${s.icon} text-2xl text-navy-900 group-hover:text-white transition-colors"></i>
            </div>
            <h3 class="text-xl font-bold text-navy-900 mb-3 font-display">${s.title}</h3>
            <p class="text-gray-500 mb-6 leading-relaxed">${s.desc}</p>
            <span class="text-amber-600 font-semibold group-hover:text-navy-900 transition-colors inline-flex items-center">
                Detaylı Bilgi <i class="fas fa-chevron-right ml-2 text-xs"></i>
            </span>
        </div>
        `;
    });

    // Add CTA Card at the end
    html += `
    <div class="bg-navy-900 p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-center items-center text-center">
        <h3 class="text-2xl font-bold text-white mb-3 font-display">Özel Bir Projeniz mi Var?</h3>
        <p class="text-gray-400 mb-6">İhtiyacınıza özel çözümler için mühendislerimizle görüşün.</p>
        <a href="#contact" class="px-6 py-3 bg-amber-500 text-navy-900 font-bold rounded hover:bg-amber-400 transition-colors w-full">
            Tüm Hizmetleri Gör
        </a>
    </div>
    `;

    container.innerHTML = html;
}

function initMobileMenu() {
    if (!document.getElementById('mobile-menu-overlay')) {
        const mobileMenuHTML = `
            <div id="mobile-menu-overlay" class="fixed inset-0 z-50 bg-navy-900/95 transform translate-x-full transition-transform duration-300 md:hidden flex items-center justify-center">
                <button id="close-mobile-menu" class="absolute top-6 right-6 text-white text-3xl focus:outline-none">
                    <i class="fas fa-times"></i>
                </button>
                <div class="flex flex-col items-center space-y-8 text-xl font-bold">
                    <a href="index.html#home" class="text-white hover:text-amber-500 transition-colors">Ana Sayfa</a>
                    <a href="index.html#company" class="text-white hover:text-amber-500 transition-colors">Kurumsal</a>
                    <a href="index.html#services" class="text-white hover:text-amber-500 transition-colors">Hizmetler</a>
                    <a href="projects.html" class="text-white hover:text-amber-500 transition-colors">Projeler</a>
                    <a href="equipment.html" class="text-white hover:text-amber-500 transition-colors">Makine Parkı</a>
                    <a href="index.html#contact" class="px-8 py-3 bg-amber-500 text-navy-900 rounded shadow-lg hover:bg-amber-600 transition-colors">Teklif Al</a>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', mobileMenuHTML);
    }

    const btn = document.querySelector("button[aria-controls='mobile-menu']");
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const closeBtn = document.getElementById('close-mobile-menu');

    if (btn && mobileMenuOverlay && closeBtn) {
        btn.addEventListener('click', () => {
            mobileMenuOverlay.classList.remove('translate-x-full');
            document.body.style.overflow = 'hidden';
        });

        closeBtn.addEventListener('click', () => {
            mobileMenuOverlay.classList.add('translate-x-full');
            document.body.style.overflow = 'auto';
        });

        mobileMenuOverlay.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuOverlay.classList.add('translate-x-full');
                document.body.style.overflow = 'auto';
            });
        });
    }
}
