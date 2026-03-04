document.addEventListener('DOMContentLoaded', function() {
    // Sample cuisine data with AI-generated images
    const cuisines = [
        {
            id: 1,
            name: "Italian",
            image: "https://source.unsplash.com/random/800x600/?italian,food",
            region: "europe",
            description: "Italian cuisine is characterized by its simplicity, with many dishes having only four to eight ingredients. Italian cooks rely chiefly on the quality of the ingredients rather than on elaborate preparation.",
            recipes: 32,
            rating: 4.8,
            popular: true,
            signatureDishes: ["Pasta Carbonara", "Margherita Pizza", "Risotto", "Tiramisu", "Osso Buco"],
            techniques: [
                {
                    name: "Pasta Making",
                    description: "The art of creating fresh pasta from flour and eggs"
                },
                {
                    name: "Risotto Stirring",
                    description: "Constant stirring to release starches for creamy texture"
                },
                {
                    name: "Wood-Fired Cooking",
                    description: "Traditional method using wood-fired ovens for pizza and bread"
                }
            ]
        },
        {
            id: 2,
            name: "Japanese",
            image: "https://source.unsplash.com/random/800x600/?japanese,food",
            region: "asia",
            description: "Japanese cuisine encompasses the regional and traditional foods of Japan, which have developed through centuries of political, economic, and social changes.",
            recipes: 28,
            rating: 4.7,
            popular: true,
            signatureDishes: ["Sushi", "Ramen", "Tempura", "Sashimi", "Miso Soup"],
            techniques: [
                {
                    name: "Sushi Rolling",
                    description: "Precision technique for making perfect sushi rolls"
                },
                {
                    name: "Tempura Frying",
                    description: "Light batter frying for crisp texture"
                },
                {
                    name: "Dashi Preparation",
                    description: "Creating the essential umami broth"
                }
            ]
        },
        {
            id: 3,
            name: "Mexican",
            image: "https://source.unsplash.com/random/800x600/?mexican,food",
            region: "americas",
            description: "Mexican cuisine is primarily a fusion of indigenous Mesoamerican cooking with European, especially Spanish, elements added after the Spanish conquest.",
            recipes: 25,
            rating: 4.5,
            popular: true,
            signatureDishes: ["Tacos al Pastor", "Mole Poblano", "Chiles en Nogada", "Tamales", "Guacamole"],
            techniques: [
                {
                    name: "Nixtamalization",
                    description: "Process for preparing maize (corn)"
                },
                {
                    name: "Mole Preparation",
                    description: "Complex sauce making with multiple ingredients"
                },
                {
                    name: "Tortilla Pressing",
                    description: "Traditional method for making corn tortillas"
                }
            ]
        },
        {
            id: 4,
            name: "Indian",
            image: "https://source.unsplash.com/random/800x600/?indian,food",
            region: "asia",
            description: "Indian cuisine consists of a variety of regional and traditional cuisines native to the Indian subcontinent, influenced by cultural choices and traditions.",
            recipes: 36,
            rating: 4.6,
            popular: true,
            signatureDishes: ["Butter Chicken", "Biryani", "Masala Dosa", "Rogan Josh", "Palak Paneer"],
            techniques: [
                {
                    name: "Tandoor Cooking",
                    description: "Clay oven cooking method"
                },
                {
                    name: "Tempering Spices",
                    description: "Blooming spices in hot oil"
                },
                {
                    name: "Dum Cooking",
                    description: "Slow cooking in sealed pots"
                }
            ]
        },
        {
            id: 5,
            name: "French",
            image: "https://source.unsplash.com/random/800x600/?french,food",
            region: "europe",
            description: "French cuisine consists of the cooking traditions and practices from France, known for its techniques and focus on quality ingredients.",
            recipes: 30,
            rating: 4.7,
            popular: true,
            signatureDishes: ["Coq au Vin", "Bouillabaisse", "Ratatouille", "Croissant", "Crème Brûlée"],
            techniques: [
                {
                    name: "Sous Vide",
                    description: "Precision temperature cooking"
                },
                {
                    name: "Flambé",
                    description: "Cooking with ignited alcohol"
                },
                {
                    name: "Pâtisserie",
                    description: "Art of French pastry making"
                }
            ]
        },
        {
            id: 6,
            name: "Thai",
            image: "https://source.unsplash.com/random/800x600/?thai,food",
            region: "asia",
            description: "Thai cuisine is the national cuisine of Thailand, known for its balance of five fundamental flavors in each dish: spicy, sweet, sour, bitter, and salty.",
            recipes: 22,
            rating: 4.4,
            popular: false,
            signatureDishes: ["Pad Thai", "Tom Yum Goong", "Green Curry", "Som Tum", "Mango Sticky Rice"],
            techniques: [
                {
                    name: "Curry Paste Grinding",
                    description: "Traditional mortar and pestle technique"
                },
                {
                    name: "Stir-Frying",
                    description: "Quick cooking over high heat"
                },
                {
                    name: "Herb Balancing",
                    description: "Creating flavor harmony with fresh herbs"
                }
            ]
        },
        {
            id: 7,
            name: "Greek",
            image: "https://source.unsplash.com/random/800x600/?greek,food",
            region: "europe",
            description: "Greek cuisine is a Mediterranean cuisine, sharing characteristics with the cuisines of Italy, the Balkans, Turkey, and the Levant.",
            recipes: 18,
            rating: 4.3,
            popular: false,
            signatureDishes: ["Moussaka", "Souvlaki", "Spanakopita", "Tzatziki", "Baklava"],
            techniques: [
                {
                    name: "Phyllo Handling",
                    description: "Working with ultra-thin dough sheets"
                },
                {
                    name: "Grilling",
                    description: "Traditional charcoal grilling methods"
                },
                {
                    name: "Olive Oil Infusing",
                    description: "Creating flavored olive oils"
                }
            ]
        },
        {
            id: 8,
            name: "Lebanese",
            image: "https://source.unsplash.com/random/800x600/?lebanese,food",
            region: "middle-east",
            description: "Lebanese cuisine is the culinary traditions and practices originating from Lebanon, known for its variety of vegetarian dishes and use of fresh ingredients.",
            recipes: 20,
            rating: 4.2,
            popular: false,
            signatureDishes: ["Hummus", "Falafel", "Tabbouleh", "Shawarma", "Baklava"],
            techniques: [
                {
                    name: "Mezze Preparation",
                    description: "Creating small flavorful dishes"
                },
                {
                    name: "Spice Blending",
                    description: "Traditional spice combinations"
                },
                {
                    name: "Flatbread Baking",
                    description: "Making traditional Lebanese bread"
                }
            ]
        }
    ];

    // DOM Elements
    const cuisinesGrid = document.getElementById('cuisines-grid');
    const loadingSpinner = document.getElementById('cuisines-loading');
    const noResults = document.getElementById('cuisines-no-results');
    const cuisineSearch = document.getElementById('cuisine-search');
    const regionFilter = document.getElementById('region-filter');
    const popularityFilter = document.getElementById('popularity-filter');
    const resetFiltersBtn = document.getElementById('reset-cuisine-filters');
    const resetFiltersBtnAlt = document.getElementById('reset-cuisine-filters-btn');
    const spotlightImage = document.getElementById('spotlight-image');
    const spotlightTitle = document.getElementById('spotlight-title');
    const spotlightRegion = document.getElementById('spotlight-region');
    const spotlightRecipes = document.getElementById('spotlight-recipes');
    const spotlightRating = document.getElementById('spotlight-rating');
    const spotlightDescription = document.getElementById('spotlight-description');
    const signatureDishes = document.getElementById('signature-dishes');
    const exploreTechniques = document.getElementById('explore-techniques');
    const techniquesModal = document.getElementById('techniques-modal');
    const techniquesCuisine = document.getElementById('techniques-cuisine');
    const techniquesGrid = document.getElementById('techniques-grid');
    const totalCuisines = document.getElementById('total-cuisines');
    const totalRecipes = document.getElementById('total-recipes');
    const totalCountries = document.getElementById('total-countries');

    // Initialize
    function init() {
        displayCuisines();
        setupSpotlight();
        updateStats();
        setupEventListeners();
    }

    // Display cuisines
    function displayCuisines() {
        cuisinesGrid.innerHTML = '';
        loadingSpinner.classList.add('active');
        
        // Simulate loading delay
        setTimeout(() => {
            loadingSpinner.classList.remove('active');
            
            const searchTerm = cuisineSearch.value.toLowerCase();
            const regionValue = regionFilter.value;
            const popularityValue = popularityFilter.value;
            
            let filtered = [...cuisines];
            
            // Apply search filter
            if (searchTerm) {
                filtered = filtered.filter(cuisine => 
                    cuisine.name.toLowerCase().includes(searchTerm) || 
                    cuisine.description.toLowerCase().includes(searchTerm)
                );
            }
            
            // Apply region filter
            if (regionValue !== 'all') {
                filtered = filtered.filter(cuisine => cuisine.region === regionValue);
            }
            
            // Apply popularity filter
            switch(popularityValue) {
                case 'popular':
                    filtered = filtered.filter(cuisine => cuisine.popular);
                    break;
                case 'a-z':
                    filtered.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'z-a':
                    filtered.sort((a, b) => b.name.localeCompare(a.name));
                    break;
                case 'recipes':
                    filtered.sort((a, b) => b.recipes - a.recipes);
                    break;
                default:
                    // Default sorting (by popularity)
                    filtered.sort((a, b) => b.popular - a.popular || b.rating - a.rating);
            }
            
            if (filtered.length === 0) {
                noResults.classList.add('active');
                cuisinesGrid.style.display = 'none';
            } else {
                noResults.classList.remove('active');
                cuisinesGrid.style.display = 'grid';
                
                filtered.forEach(cuisine => {
                    const cuisineCard = document.createElement('div');
                    cuisineCard.className = 'cuisine-card';
                    cuisineCard.innerHTML = `
                        <div class="cuisine-image" style="background-image: url('${cuisine.image}')">
                            <div class="cuisine-overlay"></div>
                            <h3>${cuisine.name}</h3>
                        </div>
                        <div class="cuisine-info">
                            <div class="cuisine-meta">
                                <span><i class="fas fa-utensils"></i> ${cuisine.recipes} Recipes</span>
                                <span><i class="fas fa-star"></i> ${cuisine.rating}/5</span>
                            </div>
                            <p class="cuisine-description">${cuisine.description}</p>
                            <div class="cuisine-actions">
                                <a href="recipes.html?cuisine=${cuisine.name.toLowerCase()}" class="btn btn-cuisine btn-view-recipes">View Recipes</a>
                                <button class="btn btn-cuisine btn-learn-more" data-id="${cuisine.id}">Learn More</button>
                            </div>
                        </div>
                    `;
                    cuisinesGrid.appendChild(cuisineCard);
                });
            }
        }, 800);
    }

    // Setup cuisine spotlight
    function setupSpotlight() {
        // Get a popular cuisine
        const spotlightCuisine = cuisines.find(c => c.popular) || cuisines[0];
        
        spotlightImage.style.backgroundImage = `url('${spotlightCuisine.image}')`;
        spotlightTitle.textContent = `${spotlightCuisine.name} Cuisine`;
        
        // Format region name
        const regionName = spotlightCuisine.region === 'middle-east' ? 'Middle East' : 
                          spotlightCuisine.region.charAt(0).toUpperCase() + spotlightCuisine.region.slice(1);
        spotlightRegion.textContent = regionName;
        
        spotlightRecipes.textContent = spotlightCuisine.recipes;
        spotlightRating.textContent = spotlightCuisine.rating;
        spotlightDescription.textContent = spotlightCuisine.description;
        
        // Add signature dishes
        signatureDishes.innerHTML = '';
        spotlightCuisine.signatureDishes.forEach(dish => {
            const dishElement = document.createElement('span');
            dishElement.className = 'signature-dish';
            dishElement.textContent = dish;
            signatureDishes.appendChild(dishElement);
        });
        
        // Set techniques button
        exploreTechniques.dataset.id = spotlightCuisine.id;
        exploreTechniques.dataset.cuisine = spotlightCuisine.name;
    }

    // Show techniques modal
    function showTechniques(id) {
        const cuisine = cuisines.find(c => c.id === id);
        if (!cuisine) return;
        
        techniquesCuisine.textContent = `${cuisine.name} Cooking Techniques`;
        techniquesGrid.innerHTML = '';
        
        cuisine.techniques.forEach(tech => {
            const techCard = document.createElement('div');
            techCard.className = 'technique-card';
            techCard.innerHTML = `
                <h4>${tech.name}</h4>
                <p>${tech.description}</p>
            `;
            techniquesGrid.appendChild(techCard);
        });
        
        techniquesModal.classList.add('active');
    }

    // Update stats
    function updateStats() {
        totalCuisines.textContent = cuisines.length;
        
        // Calculate total recipes
        const totalRecipesCount = cuisines.reduce((sum, cuisine) => sum + cuisine.recipes, 0);
        totalRecipes.textContent = totalRecipesCount;
        
        // Calculate unique countries (simplified)
        totalCountries.textContent = 24; // This would be dynamic in a real app
    }

    // Setup event listeners
    function setupEventListeners() {
        // Filter events
        cuisineSearch.addEventListener('input', displayCuisines);
        regionFilter.addEventListener('change', displayCuisines);
        popularityFilter.addEventListener('change', displayCuisines);
        
        // Reset filters
        resetFiltersBtn.addEventListener('click', resetFilters);
        resetFiltersBtnAlt.addEventListener('click', resetFilters);
        
        // Learn more buttons
        cuisinesGrid.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-learn-more') || e.target.closest('.btn-learn-more')) {
                const btn = e.target.classList.contains('btn-learn-more') ? e.target : e.target.closest('.btn-learn-more');
                const cuisineId = parseInt(btn.dataset.id);
                const cuisine = cuisines.find(c => c.id === cuisineId);
                
                if (cuisine) {
                    // Update spotlight
                    spotlightImage.style.backgroundImage = `url('${cuisine.image}')`;
                    spotlightTitle.textContent = `${cuisine.name} Cuisine`;
                    
                    // Format region name
                    const regionName = cuisine.region === 'middle-east' ? 'Middle East' : 
                                      cuisine.region.charAt(0).toUpperCase() + cuisine.region.slice(1);
                    spotlightRegion.textContent = regionName;
                    
                    spotlightRecipes.textContent = cuisine.recipes;
                    spotlightRating.textContent = cuisine.rating;
                    spotlightDescription.textContent = cuisine.description;
                    
                    // Update signature dishes
                    signatureDishes.innerHTML = '';
                    cuisine.signatureDishes.forEach(dish => {
                        const dishElement = document.createElement('span');
                        dishElement.className = 'signature-dish';
                        dishElement.textContent = dish;
                        signatureDishes.appendChild(dishElement);
                    });
                    
                    // Update techniques button
                    exploreTechniques.dataset.id = cuisine.id;
                    exploreTechniques.dataset.cuisine = cuisine.name;
                    
                    // Scroll to spotlight
                    document.querySelector('.cuisine-spotlight').scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
        
        // Explore techniques button
        exploreTechniques.addEventListener('click', function() {
            const cuisineId = parseInt(this.dataset.id);
            showTechniques(cuisineId);
        });
        
        // Map marker hover
        document.querySelectorAll('.map-marker').forEach(marker => {
            marker.addEventListener('click', function() {
                const cuisineName = this.dataset.cuisine;
                const cuisine = cuisines.find(c => c.name.toLowerCase() === cuisineName);
                
                if (cuisine) {
                    // Update spotlight
                    spotlightImage.style.backgroundImage = `url('${cuisine.image}')`;
                    spotlightTitle.textContent = `${cuisine.name} Cuisine`;
                    
                    // Format region name
                    const regionName = cuisine.region === 'middle-east' ? 'Middle East' : 
                                      cuisine.region.charAt(0).toUpperCase() + cuisine.region.slice(1);
                    spotlightRegion.textContent = regionName;
                    
                    spotlightRecipes.textContent = cuisine.recipes;
                    spotlightRating.textContent = cuisine.rating;
                    spotlightDescription.textContent = cuisine.description;
                    
                    // Update signature dishes
                    signatureDishes.innerHTML = '';
                    cuisine.signatureDishes.forEach(dish => {
                        const dishElement = document.createElement('span');
                        dishElement.className = 'signature-dish';
                        dishElement.textContent = dish;
                        signatureDishes.appendChild(dishElement);
                    });
                    
                    // Update techniques button
                    exploreTechniques.dataset.id = cuisine.id;
                    exploreTechniques.dataset.cuisine = cuisine.name;
                    
                    // Scroll to spotlight
                    document.querySelector('.cuisine-spotlight').scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                e.target.classList.remove('active');
            }
        });
        
        // Close modal with escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                techniquesModal.classList.remove('active');
            }
        });
    }

    // Reset all filters
    function resetFilters() {
        cuisineSearch.value = '';
        regionFilter.value = 'all';
        popularityFilter.value = 'popular';
        displayCuisines();
    }

    // Initialize the page
    init();
});