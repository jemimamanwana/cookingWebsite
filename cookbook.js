document.addEventListener('DOMContentLoaded', function() {
    // Sample recipe data with AI-generated image URLs
    const recipes = [
        {
            id: 1,
            title: "Classic Margherita Pizza",
            image: "https://source.unsplash.com/random/600x400/?pizza",
            time: "45 mins",
            difficulty: "medium",
            cuisine: "italian",
            ingredients: [
                "1 pizza dough",
                "1/2 cup tomato sauce",
                "2 cups fresh mozzarella",
                "Fresh basil leaves",
                "2 tbsp olive oil",
                "Salt to taste"
            ],
            instructions: [
                "Preheat oven to 475°F (245°C)",
                "Roll out the pizza dough on a floured surface",
                "Spread tomato sauce evenly over the dough",
                "Add slices of fresh mozzarella",
                "Bake for 10-12 minutes until crust is golden",
                "Remove from oven, add fresh basil leaves",
                "Drizzle with olive oil and serve"
            ],
            rating: 4.5,
            reviews: 128
        },
        {
            id: 2,
            title: "Authentic Pad Thai",
            image: "https://source.unsplash.com/random/600x400/?padthai",
            time: "30 mins",
            difficulty: "hard",
            cuisine: "thai",
            ingredients: [
                "8 oz rice noodles",
                "2 tbsp vegetable oil",
                "2 eggs",
                "1 cup bean sprouts",
                "3 green onions",
                "1/4 cup crushed peanuts",
                "2 tbsp fish sauce",
                "1 tbsp tamarind paste",
                "1 tbsp sugar",
                "1/2 lime"
            ],
            instructions: [
                "Soak rice noodles in warm water for 20 minutes",
                "Heat oil in wok over medium-high heat",
                "Add eggs and scramble until just set",
                "Add drained noodles and stir-fry for 2 minutes",
                "Add sauce ingredients and mix well",
                "Add bean sprouts and green onions",
                "Serve garnished with peanuts and lime wedges"
            ],
            rating: 4,
            reviews: 95
        },
        {
            id: 3,
            title: "Chicken Tacos",
            image: "https://source.unsplash.com/random/600x400/?tacos",
            time: "25 mins",
            difficulty: "easy",
            cuisine: "mexican",
            ingredients: [
                "1 lb chicken breast",
                "1 tbsp taco seasoning",
                "8 corn tortillas",
                "1 cup shredded lettuce",
                "1/2 cup diced tomatoes",
                "1/4 cup chopped cilantro",
                "1/2 cup shredded cheese",
                "1/4 cup sour cream",
                "Lime wedges"
            ],
            instructions: [
                "Season chicken with taco seasoning",
                "Grill chicken for 6-7 minutes per side",
                "Let rest then slice into strips",
                "Warm tortillas according to package",
                "Assemble tacos with chicken and toppings",
                "Serve with lime wedges"
            ],
            rating: 5,
            reviews: 210
        },
        {
            id: 4,
            title: "Sushi Rolls",
            image: "https://source.unsplash.com/random/600x400/?sushi",
            time: "60 mins",
            difficulty: "hard",
            cuisine: "japanese",
            ingredients: [
                "2 cups sushi rice",
                "4 nori sheets",
                "1/2 lb fresh salmon",
                "1 avocado",
                "1 cucumber",
                "Wasabi paste",
                "Pickled ginger",
                "Soy sauce"
            ],
            instructions: [
                "Cook sushi rice according to package",
                "Slice fish and vegetables into thin strips",
                "Place nori on bamboo mat",
                "Spread rice evenly over nori",
                "Add fillings in center of rice",
                "Roll tightly using bamboo mat",
                "Slice into pieces with sharp knife",
                "Serve with wasabi, ginger and soy sauce"
            ],
            rating: 3.5,
            reviews: 76
        },
        {
            id: 5,
            title: "Greek Salad",
            image: "https://source.unsplash.com/random/600x400/?greeksalad",
            time: "15 mins",
            difficulty: "easy",
            cuisine: "mediterranean",
            ingredients: [
                "1 cucumber",
                "4 tomatoes",
                "1 red onion",
                "1 green bell pepper",
                "1 cup kalamata olives",
                "8 oz feta cheese",
                "2 tbsp olive oil",
                "1 tsp dried oregano",
                "Salt and pepper to taste"
            ],
            instructions: [
                "Chop all vegetables into bite-sized pieces",
                "Combine in large bowl",
                "Add olives and cubed feta cheese",
                "Drizzle with olive oil",
                "Sprinkle with oregano, salt and pepper",
                "Toss gently and serve"
            ],
            rating: 4.5,
            reviews: 142
        },
        {
            id: 6,
            title: "Beef Pho",
            image: "https://source.unsplash.com/random/600x400/?pho",
            time: "90 mins",
            difficulty: "hard",
            cuisine: "vietnamese",
            ingredients: [
                "2 lbs beef bones",
                "1 lb beef brisket",
                "1 onion",
                "3-inch ginger piece",
                "5 star anise",
                "1 cinnamon stick",
                "8 oz rice noodles",
                "Bean sprouts",
                "Thai basil",
                "Lime wedges",
                "Hoisin sauce"
            ],
            instructions: [
                "Roast beef bones in oven for 30 minutes",
                "Char onion and ginger in skillet",
                "Simmer bones with spices for 4 hours",
                "Strain broth and skim fat",
                "Slice brisket thinly",
                "Cook noodles according to package",
                "Assemble bowls with noodles, broth and toppings"
            ],
            rating: 4,
            reviews: 88
        }
    ];

    // DOM Elements
    const recipeGrid = document.getElementById('recipe-grid');
    const emptyCookbook = document.getElementById('empty-cookbook');
    const recipeCount = document.getElementById('recipe-count');
    const cuisineCount = document.getElementById('cuisine-count');
    const cuisineFilter = document.getElementById('cuisine-filter');
    const difficultyFilter = document.getElementById('difficulty-filter');
    const timeFilter = document.getElementById('time-filter');
    const clearFilters = document.getElementById('clear-filters');
    const addCategoryBtn = document.querySelector('.add-category');
    const addCategoryModal = document.getElementById('add-category-modal');
    const modalCloseBtns = document.querySelectorAll('.modal-close');
    const recipeModal = document.getElementById('recipe-modal');

    // Display recipes
    function displayRecipes(filteredRecipes = recipes) {
        recipeGrid.innerHTML = '';
        
        if (filteredRecipes.length === 0) {
            emptyCookbook.style.display = 'block';
            recipeGrid.style.display = 'none';
        } else {
            emptyCookbook.style.display = 'none';
            recipeGrid.style.display = 'grid';
            
            filteredRecipes.forEach(recipe => {
                const recipeCard = document.createElement('div');
                recipeCard.className = 'recipe-card-cookbook';
                recipeCard.innerHTML = `
                    <div class="recipe-image" style="background-image: url('${recipe.image}')">
                        <div class="recipe-tag">${recipe.cuisine.charAt(0).toUpperCase() + recipe.cuisine.slice(1)}</div>
                    </div>
                    <div class="recipe-info">
                        <h3>${recipe.title}</h3>
                        <div class="recipe-meta">
                            <span><i class="fas fa-clock"></i> ${recipe.time}</span>
                            <span><i class="fas fa-utensils"></i> ${recipe.difficulty.charAt(0).toUpperCase() + recipe.difficulty.slice(1)}</span>
                        </div>
                        <div class="recipe-actions">
                            <button class="recipe-btn view-btn" data-id="${recipe.id}">View</button>
                            <button class="recipe-btn remove-btn" data-id="${recipe.id}">Remove</button>
                        </div>
                    </div>
                `;
                recipeGrid.appendChild(recipeCard);
            });
        }
        
        // Update counts
        recipeCount.textContent = filteredRecipes.length;
        
        // Calculate unique cuisines
        const uniqueCuisines = [...new Set(filteredRecipes.map(recipe => recipe.cuisine))];
        cuisineCount.textContent = uniqueCuisines.length;
    }

    // Filter recipes
    function filterRecipes() {
        const cuisineValue = cuisineFilter.value;
        const difficultyValue = difficultyFilter.value;
        const timeValue = timeFilter.value;
        
        const filtered = recipes.filter(recipe => {
            // Cuisine filter
            if (cuisineValue !== 'all' && recipe.cuisine !== cuisineValue) {
                return false;
            }
            
            // Difficulty filter
            if (difficultyValue !== 'all' && recipe.difficulty !== difficultyValue) {
                return false;
            }
            
            // Time filter
            if (timeValue !== 'all') {
                const timeNum = parseInt(recipe.time);
                if (timeNum > parseInt(timeValue)) {
                    return false;
                }
            }
            
            return true;
        });
        
        displayRecipes(filtered);
    }

    // Show recipe modal
    function showRecipeModal(id) {
        const recipe = recipes.find(r => r.id === id);
        if (!recipe) return;
        
        // Set modal content
        document.getElementById('modal-recipe-image').style.backgroundImage = `url('${recipe.image}')`;
        document.getElementById('modal-recipe-title').textContent = recipe.title;
        document.getElementById('modal-recipe-time').textContent = recipe.time;
        document.getElementById('modal-recipe-difficulty').textContent = recipe.difficulty.charAt(0).toUpperCase() + recipe.difficulty.slice(1);
        document.getElementById('modal-recipe-cuisine').textContent = recipe.cuisine.charAt(0).toUpperCase() + recipe.cuisine.slice(1);
        
        // Set ingredients
        const ingredientsList = document.getElementById('modal-recipe-ingredients');
        ingredientsList.innerHTML = '';
        recipe.ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.innerHTML = `<span>${ingredient}</span>`;
            ingredientsList.appendChild(li);
        });
        
        // Set instructions
        const instructionsList = document.getElementById('modal-recipe-instructions');
        instructionsList.innerHTML = '';
        recipe.instructions.forEach(instruction => {
            const li = document.createElement('li');
            li.textContent = instruction;
            instructionsList.appendChild(li);
        });
        
        // Set rating
        const ratingStars = document.querySelectorAll('.modal-recipe-rating i');
        const fullStars = Math.floor(recipe.rating);
        const hasHalfStar = recipe.rating % 1 >= 0.5;
        
        ratingStars.forEach((star, index) => {
            if (index < fullStars) {
                star.className = 'fas fa-star';
            } else if (index === fullStars && hasHalfStar) {
                star.className = 'fas fa-star-half-alt';
            } else {
                star.className = 'far fa-star';
            }
        });
        
        document.querySelector('.modal-recipe-rating span').textContent = `(${recipe.reviews} reviews)`;
        
        // Show modal
        recipeModal.classList.add('active');
    }

    // Tab functionality
    function setupTabs() {
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');
        
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                
                // Update active tab button
                tabBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // Update active tab content
                tabContents.forEach(content => {
                    content.classList.remove('active');
                    if (content.id === tabId) {
                        content.classList.add('active');
                    }
                });
            });
        });
    }

    // Event Listeners
    cuisineFilter.addEventListener('change', filterRecipes);
    difficultyFilter.addEventListener('change', filterRecipes);
    timeFilter.addEventListener('change', filterRecipes);
    
    clearFilters.addEventListener('click', function() {
        cuisineFilter.value = 'all';
        difficultyFilter.value = 'all';
        timeFilter.value = 'all';
        filterRecipes();
    });
    
    addCategoryBtn.addEventListener('click', function() {
        addCategoryModal.classList.add('active');
    });
    
    modalCloseBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').classList.remove('active');
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('active');
        }
    });
    
    // View recipe button event delegation
    recipeGrid.addEventListener('click', function(e) {
        if (e.target.classList.contains('view-btn') || e.target.closest('.view-btn')) {
            const btn = e.target.classList.contains('view-btn') ? e.target : e.target.closest('.view-btn');
            const recipeId = parseInt(btn.getAttribute('data-id'));
            showRecipeModal(recipeId);
        }
        
        if (e.target.classList.contains('remove-btn') || e.target.closest('.remove-btn')) {
            const btn = e.target.classList.contains('remove-btn') ? e.target : e.target.closest('.remove-btn');
            const recipeId = parseInt(btn.getAttribute('data-id'));
            // In a real app, you would remove from saved recipes
            alert(`Recipe ${recipeId} would be removed from your cookbook`);
        }
    });
    
    // Image option selection
    document.querySelectorAll('.image-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.image-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            this.classList.add('selected');
        });
    });
    
    // Category form submission
    document.getElementById('category-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('category-name').value;
        const selectedImage = document.querySelector('.image-option.selected').getAttribute('data-image');
        
        // In a real app, you would save the category
        alert(`Category "${name}" with ${selectedImage} image would be created`);
        addCategoryModal.classList.remove('active');
        this.reset();
    });

    // Initialize
    displayRecipes();
    setupTabs();
});