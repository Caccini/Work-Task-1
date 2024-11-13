document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            discount: 44,
            image: '/images/product1.svg',
            title: 'Прахосмукачка за сухо и мокро почистване',
            oldPrice: 339.00,
            currentPrice: 191.00,
            savings: 148.00
        },
        {
            discount: 33,
            image: '/images/product2.svg',
            title: 'Бензинов генератор за ток Power Plus PWX5160',
            oldPrice: 2037.00,
            currentPrice: 1364.00,
            savings: 673.00
        },
        {
            discount: 42,
            image: '/images/product3.svg',
            title: 'Прахосмукачка за пепел и камини STAHL The Ash',
            oldPrice: 119.00,
            currentPrice: 69.00,
            savings: 50.00
        },
        {
            discount: 36,
            image: '/images/product4.svg',
            title: 'Газов калорифер STAHL SGAS50 50kW',
            oldPrice: 390.00,
            currentPrice: 249.00,
            savings: 141.00
        },
        {
            discount: 29,
            image: '/images/product5.svg',
            title: 'Абрихт-щрайхмус ZIPPER ZI-HB254N 1500W',
            oldPrice: 1179.00,
            currentPrice: 836.00,
            savings: 343.00
        }, {
            discount: 44,
            image: '/images/product1.svg',
            title: 'Прахосмукачка за сухо и мокро почистване',
            oldPrice: 339.00,
            currentPrice: 191.00,
            savings: 148.00
        },
        {
            discount: 33,
            image: '/images/product2.svg',
            title: 'Бензинов генератор за ток Power Plus PWX5160',
            oldPrice: 2037.00,
            currentPrice: 1364.00,
            savings: 673.00
        },
        {
            discount: 42,
            image: '/images/product3.svg',
            title: 'Прахосмукачка за пепел и камини STAHL The Ash',
            oldPrice: 119.00,
            currentPrice: 69.00,
            savings: 50.00
        },
        {
            discount: 36,
            image: '/images/product4.svg',
            title: 'Газов калорифер STAHL SGAS50 50kW',
            oldPrice: 390.00,
            currentPrice: 249.00,
            savings: 141.00
        },
        {
            discount: 29,
            image: '/images/product5.svg',
            title: 'Абрихт-щрайхмус ZIPPER ZI-HB254N 1500W',
            oldPrice: 1179.00,
            currentPrice: 836.00,
            savings: 343.00
        }, {
            discount: 44,
            image: '/images/product1.svg',
            title: 'Прахосмукачка за сухо и мокро почистване',
            oldPrice: 339.00,
            currentPrice: 191.00,
            savings: 148.00
        },
        {
            discount: 33,
            image: '/images/product2.svg',
            title: 'Бензинов генератор за ток Power Plus PWX5160',
            oldPrice: 2037.00,
            currentPrice: 1364.00,
            savings: 673.00
        },
        {
            discount: 42,
            image: '/images/product3.svg',
            title: 'Прахосмукачка за пепел и камини STAHL The Ash',
            oldPrice: 119.00,
            currentPrice: 69.00,
            savings: 50.00
        },
        {
            discount: 36,
            image: '/images/product4.svg',
            title: 'Газов калорифер STAHL SGAS50 50kW',
            oldPrice: 390.00,
            currentPrice: 249.00,
            savings: 141.00
        },
        {
            discount: 29,
            image: '/images/product5.svg',
            title: 'Абрихт-щрайхмус ZIPPER ZI-HB254N 1500W',
            oldPrice: 1179.00,
            currentPrice: 836.00,
            savings: 343.00
        }, {
            discount: 44,
            image: '/images/product1.svg',
            title: 'Прахосмукачка за сухо и мокро почистване',
            oldPrice: 339.00,
            currentPrice: 191.00,
            savings: 148.00
        },
        {
            discount: 33,
            image: '/images/product2.svg',
            title: 'Бензинов генератор за ток Power Plus PWX5160',
            oldPrice: 2037.00,
            currentPrice: 1364.00,
            savings: 673.00
        },
        {
            discount: 42,
            image: '/images/product3.svg',
            title: 'Прахосмукачка за пепел и камини STAHL The Ash',
            oldPrice: 119.00,
            currentPrice: 69.00,
            savings: 50.00
        },
        {
            discount: 36,
            image: '/images/product4.svg',
            title: 'Газов калорифер STAHL SGAS50 50kW',
            oldPrice: 390.00,
            currentPrice: 249.00,
            savings: 141.00
        },
        {
            discount: 29,
            image: '/api/placeholder/200/200',
            title: 'Абрихт-щрайхмус ZIPPER ZI-HB254N 1500W',
            oldPrice: 1179.00,
            currentPrice: 836.00,
            savings: 343.00
        }, {
            discount: 44,
            image: '/images/product1.svg',
            title: 'Прахосмукачка за сухо и мокро почистване',
            oldPrice: 339.00,
            currentPrice: 191.00,
            savings: 148.00
        },
        {
            discount: 33,
            image: '/images/product2.svg',
            title: 'Бензинов генератор за ток Power Plus PWX5160',
            oldPrice: 2037.00,
            currentPrice: 1364.00,
            savings: 673.00
        },
        {
            discount: 42,
            image: '/images/product3.svg',
            title: 'Прахосмукачка за пепел и камини STAHL The Ash',
            oldPrice: 119.00,
            currentPrice: 69.00,
            savings: 50.00
        },
        {
            discount: 36,
            image: '/images/product4.svg',
            title: 'Газов калорифер STAHL SGAS50 50kW',
            oldPrice: 390.00,
            currentPrice: 249.00,
            savings: 141.00
        },
        {
            discount: 29,
            image: '/api/placeholder/200/200',
            title: 'Абрихт-щрайхмус ZIPPER ZI-HB254N 1500W',
            oldPrice: 1179.00,
            currentPrice: 836.00,
            savings: 343.00
        },
        
        
    ];

    function createProductCard(product) {
        return `
            <div class="product-card">
                <div class="discount-badge">-${product.discount}%</div>
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <a href="#" class="product-title">${product.title}</a>
                <div class="price-container">
                    <div class="old-price">${product.oldPrice.toFixed(2)} лв.</div>
                    <div class="current-price">${product.currentPrice.toFixed(2)} лв.</div>
                    <div class="savings">Спестявате: ${product.savings.toFixed(2)} лв.</div>
                </div>
                <button class="view-button">ВИЖ</button>
            </div>
        `;
    }

    const productsGrid = document.getElementById('productsGrid');
    const loadMoreButton = document.getElementById('loadMore');
    
    if (!productsGrid || !loadMoreButton) {
        console.error('Required elements not found');
        return;
    }

    let currentPage = 0;
    const productsPerPage = 5;

    function displayProducts() {
        const startIndex = currentPage * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const productsToShow = products.slice(startIndex, endIndex);
        
        productsToShow.forEach(product => {
            productsGrid.insertAdjacentHTML('beforeend', createProductCard(product));
        });

        if (endIndex >= products.length) {
            loadMoreButton.style.display = 'none';
        }

        document.querySelectorAll('.view-button').forEach(button => {
            button.addEventListener('mouseenter', () => {
                button.style.background = '#e0e0e0';
            });
            button.addEventListener('mouseleave', () => {
                button.style.background = '#f5f5f5';
            });
        });
    }

    displayProducts();

    loadMoreButton.addEventListener('click', () => {
        currentPage++;
        displayProducts();
    });

    document.querySelectorAll('.category-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = '#f0f0f0';
        });
        item.addEventListener('mouseleave', () => {
            item.style.backgroundColor = 'transparent';
        });
    });

    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('keyup', (e) => {
            if(e.key === 'Enter') {
                alert('Търсене: ' + searchInput.value);
            }
        });
    }

    const hamburgerButton = document.querySelector('.hamburger-button');
    const closeMenuButton = document.querySelector('.close-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.overlay');

    if (hamburgerButton && closeMenuButton && mobileMenu && overlay) {
        hamburgerButton.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            overlay.style.display = 'block';
        });

        closeMenuButton.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            overlay.style.display = 'none';
        });

        overlay.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            overlay.style.display = 'none';
        });
    }

    const searchButton = document.querySelector('.search-button');
    if (searchButton) {
        searchButton.addEventListener('click', () => {
            alert('Search clicked');
        });
    }

    document.querySelectorAll('.back-to-site, .mobile-back').forEach(button => {
        button.addEventListener('click', (e) => {
            if (document.referrer) {
                e.preventDefault();
                window.location.href = document.referrer;
            }
        });
    });
});



