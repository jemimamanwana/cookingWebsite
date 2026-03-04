document.addEventListener('DOMContentLoaded', function() {
    // Sample recipe data with AI-generated images
    const recipes = [
        {
            id: 1,
            title: "Classic Margherita Pizza",
            image: "https://source.unsplash.com/random/600x400/?pizza",
            time: 45,
            difficulty: "medium",
            cuisine: "italian",
            category: "main-courses",
            dietary: "vegetarian",
            description: "The classic Neapolitan pizza topped with tomato sauce, fresh mozzarella, and basil leaves. Simple yet incredibly flavorful.",
            ingredients: ["Pizza dough", "Tomato sauce", "Fresh mozzarella", "Basil leaves", "Olive oil", "Salt"],
            instructions: [
                "Preheat oven to 475°F (245°C)",
                "Roll out the dough on a floured surface",
                "Spread tomato sauce evenly",
                "Add mozzarella slices",
                "Bake for 10-12 minutes until golden",
                "Add fresh basil and drizzle with olive oil"
            ],
            rating: 4.5,
            reviews: 128,
            saved: false
        },
        {
            id: 2,
            title: "Spicy Thai Green Curry",
            image: "https://source.unsplash.com/random/600x400/?thai,curry",
            time: 40,
            difficulty: "medium",
            cuisine: "thai",
            category: "main-courses",
            dietary: "gluten-free",
            description: "Aromatic Thai green curry with coconut milk, vegetables, and your choice of protein. Perfect balance of spicy, sweet, and savory.",
            ingredients: ["Green curry paste", "Coconut milk", "Vegetables", "Protein (chicken/tofu)", "Thai basil", "Fish sauce"],
            instructions: [
                "Sauté curry paste in oil",
                "Add coconut milk and bring to simmer",
                "Add vegetables and protein",
                "Simmer until cooked through",
                "Season with fish sauce and sugar",
                "Garnish with Thai basil"
            ],
            rating: 4.2,
            reviews: 95,
            saved: true
        },
        {
            id: 3,
            title: "Avocado Toast with Poached Eggs",
            image: "https://source.unsplash.com/random/600x400/?avocado,toast",
            time: 15,
            difficulty: "easy",
            cuisine: "american",
            category: "appetizers",
            dietary: "vegetarian",
            description: "Creamy avocado on toasted artisan bread topped with perfectly poached eggs. A nutritious and delicious breakfast option.",
            ingredients: ["Bread", "Ripe avocados", "Eggs", "Lemon juice", "Red pepper flakes", "Salt & pepper"],
            instructions: [
                "Toast the bread",
                "Mash avocado with lemon juice",
                "Poach eggs to desired doneness",
                "Spread avocado on toast",
                "Top with poached eggs",
                "Season with salt, pepper, and chili flakes"
            ],
            rating: 4.7,
            reviews: 210,
            saved: false
        },
        {
            id: 4,
            title: "Beef Bourguignon",
            image: "https://source.unsplash.com/random/600x400/?beef,bourguignon",
            time: 180,
            difficulty: "hard",
            cuisine: "french",
            category: "main-courses",
            dietary: "keto",
            description: "Classic French beef stew slow-cooked in red wine with mushrooms, carrots, and pearl onions. The ultimate comfort food.",
            ingredients: ["Beef chuck", "Red wine", "Beef stock", "Mushrooms", "Carrots", "Pearl onions", "Bacon"],
            instructions: [
                "Brown beef in batches",
                "Sauté vegetables and bacon",
                "Deglaze with red wine",
                "Add beef stock and herbs",
                "Simmer for 2-3 hours",
                "Serve with crusty bread"
            ],
            rating: 4.8,
            reviews: 76,
            saved: false
        },
        {
            id: 5,
            title: "Mango Sticky Rice",
            image: "https://source.unsplash.com/random/600x400/?mango,sticky,rice",
            time: 60,
            difficulty: "medium",
            cuisine: "thai",
            category: "desserts",
            dietary: "vegan",
            description: "Sweet Thai dessert featuring glutinous rice, fresh mango, and coconut milk. A perfect balance of sweet and creamy flavors.",
            ingredients: ["Sticky rice", "Ripe mangoes", "Coconut milk", "Sugar", "Salt", "Sesame seeds"],
            instructions: [
                "Soak rice for 4 hours",
                "Steam rice until tender",
                "Heat coconut milk with sugar and salt",
                "Combine with cooked rice",
                "Slice mangoes for serving",
                "Garnish with sesame seeds"
            ],
            rating: 4.6,
            reviews: 142,
            saved: true
        },
        {
            id: 6,
            title: "Greek Salad",
            image: "https://source.unsplash.com/random/600x400/?greek,salad",
            time: 15,
            difficulty: "easy",
            cuisine: "greek",
            category: "salads",
            dietary: "vegetarian",
            description: "Fresh and vibrant Greek salad with crisp vegetables, olives, and feta cheese. Dressed simply with olive oil and oregano.",
            ingredients: ["Cucumber", "Tomatoes", "Red onion", "Bell pepper", "Kalamata olives", "Feta cheese", "Olive oil"],
            instructions: [
                "Chop all vegetables",
                "Combine in large bowl",
                "Add olives and feta",
                "Drizzle with olive oil",
                "Sprinkle with oregano",
                "Toss gently and serve"
            ],
            rating: 4.4,
            reviews: 88,
            saved: false
        },
        {
            id: 7,
            title: "Chocolate Lava Cake",
            image: "https://source.unsplash.com/random/600x400/?chocolate,lava,cake",
            time: 30,
            difficulty: "medium",
            cuisine: "french",
            category: "desserts",
            dietary: "vegetarian",
            description: "Decadent individual chocolate cakes with a molten center. Served warm with vanilla ice cream for the ultimate dessert experience.",
            ingredients: ["Dark chocolate", "Butter", "Eggs", "Sugar", "Flour", "Vanilla extract"],
            instructions: [
                "Melt chocolate and butter",
                "Whisk eggs and sugar",
                "Combine with chocolate mixture",
                "Fold in flour",
                "Bake at 425°F for 12 minutes",
                "Serve immediately"
            ],
            rating: 4.9,
            reviews: 156,
            saved: true
        },
        {
            id: 8,
            title: "Miso Ramen",
            image: "https://source.unsplash.com/random/600x400/?ramen",
            time: 60,
            difficulty: "hard",
            cuisine: "japanese",
            category: "soups",
            dietary: "none",
            description: "Rich and flavorful Japanese ramen with miso broth, tender chashu pork, and perfectly cooked noodles. Topped with traditional garnishes.",
            ingredients: ["Ramen noodles", "Pork belly", "Miso paste", "Chicken stock", "Soy sauce", "Green onions", "Soft-boiled egg"],
            instructions: [
                "Cook pork belly until tender",
                "Prepare miso broth base",
                "Cook noodles separately",
                "Assemble bowls with noodles and broth",
                "Add pork slices and toppings",
                "Garnish with green onions"
            ],
            rating: 4.7,
            reviews: 112,
            saved: false
        }
    ];

    // DOM Elements
    const recipeGrid = document.getElementById('recipe-grid');
    const loadingSpinner = document.getElementById('loading-spinner');
    const noResults = document.getElementById('no-results');
    const resetFiltersBtn = document.getElementById('reset-filters-btn');
    const pagination = document.getElementById('pagination');
    const prevPageBtn = document.getElementById('prev-page');
    const nextPageBtn = document.getElementById('next-page');
    const pageNumbers = document.getElementById('page-numbers');
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    const timeFilter = document.getElementById('time-filter');
    const difficultyFilter = document.getElementById('difficulty-filter');
    const dietaryFilter = document.getElementById('dietary-filter');
    const resetFilters = document.getElementById('reset-filters');
    const quickViewModal = document.getElementById('quick-view-modal');
    const totalRecipes = document.getElementById('total-recipes');
    const totalCuisines = document.getElementById('total-cuisines');
    const rotdImage = document.getElementById('rotd-image');
    const rotdTitle = document.getElementById('rotd-title');
    const rotdTime = document.getElementById('rotd-time');
    const rotdDifficulty = document.getElementById('rotd-difficulty');
    const rotdCuisine = document.getElementById('rotd-cuisine');
    const rotdDescription = document.getElementById('rotd-description');

    // Pagination variables
    let currentPage = 1;
    const recipesPerPage = 6;
    let filteredRecipes = [...recipes];

    // Initialize
    function init() {
        displayRecipes();
        setupEventListeners();
        updateRecipeStats();
        setupRecipeOfTheDay();
    }

    // Display recipes
    function displayRecipes() {
        recipeGrid.innerHTML = '';
        loadingSpinner.classList.add('active');
        
        // Simulate loading delay
        setTimeout(() => {
            loadingSpinner.classList.remove('active');
            
            const startIndex = (currentPage - 1) * recipesPerPage;
            const endIndex = startIndex + recipesPerPage;
            const paginatedRecipes = filteredRecipes.slice(startIndex, endIndex);
            
            if (paginatedRecipes.length === 0) {
                noResults.classList.add('active');
                recipeGrid.style.display = 'none';
                pagination.style.display = 'none';
            } else {
                noResults.classList.remove('active');
                recipeGrid.style.display = 'grid';
                pagination.style.display = 'flex';
                
                paginatedRecipes.forEach(recipe => {
                    const recipeCard = document.createElement('div');
                    recipeCard.className = 'recipe-card';
                    recipeCard.innerHTML = `
                        <div class="recipe-image" style="background-image: url('${recipe.image}')">
                            <div class="recipe-tag">${recipe.cuisine.charAt(0).toUpperCase() + recipe.cuisine.slice(1)}</div>
                            <button class="save-recipe ${recipe.saved ? 'saved' : ''}" data-id="${recipe.id}">
                                <i class="${recipe.saved ? 'fas' : 'far'} fa-bookmark"></i>
                            </button>
                        </div>
                        <div class="recipe-info">
                            <h3>${recipe.title}</h3>
                            <div class="recipe-meta">
                                <span><i class="fas fa-clock"></i> ${recipe.time} mins</span>
                                <span><i class="fas fa-utensils"></i> ${recipe.difficulty.charAt(0).toUpperCase() + recipe.difficulty.slice(1)}</span>
                            </div>
                            <div class="recipe-rating">
                                ${generateRatingStars(recipe.rating)}
                                <span>(${recipe.reviews})</span>
                            </div>
                            <p class="recipe-description">${recipe.description}</p>
                            <div class="recipe-actions">
                                <a href="recipe-detail.html?id=${recipe.id}" class="btn btn-recipe btn-view">View Recipe</a>
                                <button class="btn btn-recipe btn-quick-view" data-id="${recipe.id}">Quick View</button>
                            </div>
                        </div>
                    `;
                    recipeGrid.appendChild(recipeCard);
                });
            }
            
            updatePagination();
        }, 800);
    }

    // Generate rating stars
    function generateRatingStars(rating) {
        let stars = '';
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        
        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars += '<i class="fas fa-star"></i>';
            } else if (i === fullStars + 1 && hasHalfStar) {
                stars += '<i class="fas fa-star-half-alt"></i>';
            } else {
                stars += '<i class="far fa-star"></i>';
            }
        }
        
        return stars;
    }

    // Update pagination
    function updatePagination() {
        pageNumbers.innerHTML = '';
        const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage);
        
        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage === totalPages || totalPages === 0;
        
        // Always show first page
        addPageNumber(1);
        
        // Show current page with neighbors
        if (currentPage > 2) {
            if (currentPage > 3) {
                addEllipsis();
            }
            addPageNumber(currentPage - 1);
        }
        
        if (currentPage !== 1 && currentPage !== totalPages) {
            addPageNumber(currentPage);
        }
        
        if (currentPage < totalPages - 1) {
            addPageNumber(currentPage + 1);
            if (currentPage < totalPages - 2) {
                addEllipsis();
            }
        }
        
        // Always show last page if different from first
        if (totalPages > 1) {
            addPageNumber(totalPages);
        }
    }

    function addPageNumber(page) {
        const pageElement = document.createElement('span');
        pageElement.className = `page-number ${page === currentPage ? 'active' : ''}`;
        pageElement.textContent = page;
        pageElement.addEventListener('click', () => {
            currentPage = page;
            displayRecipes();
        });
        pageNumbers.appendChild(pageElement);
    }

    function addEllipsis() {
        const ellipsis = document.createElement('span');
        ellipsis.className = 'page-ellipsis';
        ellipsis.textContent = '...';
        pageNumbers.appendChild(ellipsis);
    }

    // Filter recipes
    function filterRecipes() {
        const searchTerm = searchInput.value.toLowerCase();
        const categoryValue = categoryFilter.value;
        const timeValue = timeFilter.value;
        const difficultyValue = difficultyFilter.value;
        const dietaryValue = dietaryFilter.value;
        
        filteredRecipes = recipes.filter(recipe => {
            // Search filter
            if (searchTerm && !recipe.title.toLowerCase().includes(searchTerm) && 
                !recipe.description.toLowerCase().includes(searchTerm) && 
                !recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm))) {
                return false;
            }
            
            // Category filter
            if (categoryValue !== 'all' && recipe.category !== categoryValue) {
                return false;
            }
            
            // Time filter
            if (timeValue !== 'all' && recipe.time > parseInt(timeValue)) {
                return false;
            }
            
            // Difficulty filter
            if (difficultyValue !== 'all' && recipe.difficulty !== difficultyValue) {
                return false;
            }
            
            // Dietary filter
            if (dietaryValue !== 'all' && recipe.dietary !== dietaryValue) {
                return false;
            }
            
            return true;
        });
        
        currentPage = 1;
        displayRecipes();
    }

    // Show quick view modal
    function showQuickView(id) {
        const recipe = recipes.find(r => r.id === id);
        if (!recipe) return;
        
        document.getElementById('quick-view-image').style.backgroundImage = `url('${recipe.image}')`;
        document.getElementById('quick-view-title').textContent = recipe.title;
        document.getElementById('quick-view-time').textContent = `${recipe.time} mins`;
        document.getElementById('quick-view-difficulty').textContent = recipe.difficulty.charAt(0).toUpperCase() + recipe.difficulty.slice(1);
        document.getElementById('quick-view-cuisine').textContent = recipe.cuisine.charAt(0).toUpperCase() + recipe.cuisine.slice(1);
        document.getElementById('quick-view-description').textContent = recipe.description;
        
        const saveBtn = document.getElementById('quick-view-save');
        saveBtn.innerHTML = `<i class="${recipe.saved ? 'fas' : 'far'} fa-bookmark"></i> ${recipe.saved ? 'Saved' : 'Save'}`;
        saveBtn.dataset.id = recipe.id;
        
        quickViewModal.classList.add('active');
    }

    // Toggle saved recipe
    function toggleSavedRecipe(id) {
        const recipe = recipes.find(r => r.id === id);
        if (recipe) {
            recipe.saved = !recipe.saved;
            return true;
        }
        return false;
    }

    // Update recipe stats
    function updateRecipeStats() {
        totalRecipes.textContent = recipes.length;
        
        // Calculate unique cuisines
        const uniqueCuisines = [...new Set(recipes.map(recipe => recipe.cuisine))];
        totalCuisines.textContent = uniqueCuisines.length;
    }

    // Setup recipe of the day
    function setupRecipeOfTheDay() {
        // Get a random recipe
        const randomIndex = Math.floor(Math.random() * recipes.length);
        const recipe = recipes[randomIndex];
        
        rotdImage.style.backgroundImage = `url('${recipe.image}')`;
        rotdTitle.textContent = recipe.title;
        rotdTime.textContent = `${recipe.time} mins`;
        rotdDifficulty.textContent = recipe.difficulty.charAt(0).toUpperCase() + recipe.difficulty.slice(1);
        rotdCuisine.textContent = recipe.cuisine.charAt(0).toUpperCase() + recipe.cuisine.slice(1);
        rotdDescription.textContent = recipe.description;
        
        // Update save button
        const saveBtn = document.querySelector('.rotd-actions .save-recipe');
        saveBtn.innerHTML = `<i class="${recipe.saved ? 'fas' : 'far'} fa-bookmark"></i> ${recipe.saved ? 'Saved' : 'Save'}`;
        saveBtn.dataset.id = recipe.id;
    }

    // Setup event listeners
    function setupEventListeners() {
        // Filter events
        searchInput.addEventListener('input', filterRecipes);
        categoryFilter.addEventListener('change', filterRecipes);
        timeFilter.addEventListener('change', filterRecipes);
        difficultyFilter.addEventListener('change', filterRecipes);
        dietaryFilter.addEventListener('change', filterRecipes);
        
        // Reset filters
        resetFilters.addEventListener('click', resetAllFilters);
        resetFiltersBtn.addEventListener('click', resetAllFilters);
        
        // Pagination events
        prevPageBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                displayRecipes();
            }
        });
        
        nextPageBtn.addEventListener('click', () => {
            const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage);
            if (currentPage < totalPages) {
                currentPage++;
                displayRecipes();
            }
        });
        
        // Quick view events
        recipeGrid.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-quick-view') || e.target.closest('.btn-quick-view')) {
                const btn = e.target.classList.contains('btn-quick-view') ? e.target : e.target.closest('.btn-quick-view');
                const recipeId = parseInt(btn.dataset.id);
                showQuickView(recipeId);
            }
            
            if (e.target.classList.contains('save-recipe') || e.target.closest('.save-recipe')) {
                const btn = e.target.classList.contains('save-recipe') ? e.target : e.target.closest('.save-recipe');
                const recipeId = parseInt(btn.dataset.id);
                const wasSaved = toggleSavedRecipe(recipeId);
                
                if (wasSaved) {
                    const icon = btn.querySelector('i');
                    if (recipes.find(r => r.id === recipeId).saved) {
                        btn.classList.add('saved');
                        icon.classList.remove('far');
                        icon.classList.add('fas');
                    } else {
                        btn.classList.remove('saved');
                        icon.classList.remove('fas');
                        icon.classList.add('far');
                    }
                }
            }
        });
        
        // Save recipe in quick view
        document.getElementById('quick-view-save').addEventListener('click', function() {
            const recipeId = parseInt(this.dataset.id);
            const wasSaved = toggleSavedRecipe(recipeId);
            
            if (wasSaved) {
                const recipe = recipes.find(r => r.id === recipeId);
                this.innerHTML = `<i class="${recipe.saved ? 'fas' : 'far'} fa-bookmark"></i> ${recipe.saved ? 'Saved' : 'Save'}`;
                
                // Update save buttons in grid
                const gridSaveBtn = document.querySelector(`.recipe-card .save-recipe[data-id="${recipeId}"]`);
                if (gridSaveBtn) {
                    const icon = gridSaveBtn.querySelector('i');
                    if (recipe.saved) {
                        gridSaveBtn.classList.add('saved');
                        icon.classList.remove('far');
                        icon.classList.add('fas');
                    } else {
                        gridSaveBtn.classList.remove('saved');
                        icon.classList.remove('fas');
                        icon.classList.add('far');
                    }
                }
            }
        });
        
        // Save recipe in recipe of the day
        document.querySelector('.rotd-actions .save-recipe').addEventListener('click', function() {
            const recipeId = parseInt(this.dataset.id);
            const wasSaved = toggleSavedRecipe(recipeId);
            
            if (wasSaved) {
                const recipe = recipes.find(r => r.id === recipeId);
                this.innerHTML = `<i class="${recipe.saved ? 'fas' : 'far'} fa-bookmark"></i> ${recipe.saved ? 'Saved' : 'Save'}`;
                
                // Update save buttons in grid
                const gridSaveBtn = document.querySelector(`.recipe-card .save-recipe[data-id="${recipeId}"]`);
                if (gridSaveBtn) {
                    const icon = gridSaveBtn.querySelector('i');
                    if (recipe.saved) {
                        gridSaveBtn.classList.add('saved');
                        icon.classList.remove('far');
                        icon.classList.add('fas');
                    } else {
                        gridSaveBtn.classList.remove('saved');
                        icon.classList.remove('fas');
                        icon.classList.add('far');
                    }
                }
            }
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
                quickViewModal.classList.remove('active');
            }
        });
    }

    // Reset all filters
    function resetAllFilters() {
        searchInput.value = '';
        categoryFilter.value = 'all';
        timeFilter.value = 'all';
        difficultyFilter.value = 'all';
        dietaryFilter.value = 'all';
        filterRecipes();
    }

    // Initialize the page
    init();
});