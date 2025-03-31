import { getFirestore, addDoc, collection } from 'firebase/firestore';
import { firebaseApp } from '../src/services/firebase.ts';

const db = getFirestore(firebaseApp);

const addDish = async dish => {
    try {
        const docRef = await addDoc(collection(db, 'dishes'), dish);
        console.log('Document written with ID: ', docRef.id);
    } catch (e) {
        console.error('Error adding document: ', e);
    }
};

const directions = [
    'Butter an 8-inch square baking dish; set aside. Put 3 tablespoons of the butter in a microwave-safe small bowl or liquid measure; microwave for 30 seconds to 1 minute to melt the butter.',
    'Whisk together the flour, baking powder, baking soda, 3 tablespoons of the sugar and 1/2 teaspoon salt in a large bowl. In a separate small bowl, whisk together the buttermilk, 2 of the eggs and the melted butter.',
    'Add the wet ingredients to the dry ingredients, and stir until just combined.',
    'Heat a large nonstick skillet or griddle over medium heat. Melt a little of the remaining butter in the pan. For each pancake, spoon 1/4 cup of batter into the skillet and cook until the bottom is golden brown and small bubbles appear on the top, 2 to 3 minutes. Flip and cook until golden brown on the other side, about 2 minutes. If the pancakes brown too quickly, reduce the heat to medium-low.',
    'Transfer the pancakes to a plate as finished. Repeat until all the batter is used, adding more butter to the pan as necessary. (You should have at least 12 pancakes.)',
    'Whisk together the half-and-half, vanilla, the remaining 5 eggs and 3 tablespoons sugar, and 1/4 teaspoon salt in a large bowl.',
    'Shingle the pancakes in the prepared baking dish.',
    'Pour the egg mixture evenly over the pancakes. Cover the dish with plastic wrap and refrigerate for at least 8 hours up to overnight to allow the pancakes to soak in the custard.',
    'Preheat the oven to 350 degrees F.',
    'Remove the plastic wrap, and bake the casserole until it feels firm yet springy to the touch in the center and the custard is set, 50 to 60 minutes.',
    'Let cool 15 minutes before serving.',
    'Serve warm with maple syrup, blueberries and pats of butter.',
];

const dishes = [
    {
        name: 'Pancakes With Berries',
        preparationTime: 15,
        cookingTime: 45,
        calories: 200,
        ingredients: ['milk', 'sugar', 'flour', 'vegetable oil', 'baking powder', 'egg'],
        directions,
        likes: 1,
        servings: 2,
        rating: 4,
        description:
            "Pancake Breakfast Casserole takes around 9 hours and 20 minutes from beginning to end. One portion of this dish contains approximately 13g  of protein, 19g of fat, and a total of 499 calories. For $2.33 per serving, this recipe covers 19% of your daily requirements of vitamins and minerals. This recipe serves 8. It works well as a main course. 3369 people were glad they tried this recipe. It is brought to you by Foodnetwork. It is a good option if you're following a lacto ovo vegetarian diet. If you have sugar, baking soda, eggs, and a few other ingredients on hand, you can make it. It is perfect for Christmas. Taking all factors into account, this recipe earns a spoonacular score of 65%, which is pretty good. Similar recipes are Pancake Breakfast Casserole, Pancake Breakfast Casserole, and Pancake Breakfast Casserole.",
    },
    {
        name: 'Scrambled eggs with meat and tosts',
        preparationTime: 10,
        cookingTime: 60,
        calories: 600,
        ingredients: [
            'eggs',
            'fresh flatleaf parsley leaf',
            'milk',
            'olive oil',
            'pastrami',
            'unsalted butter',
            'pork',
        ],
        directions,
        description:
            "Scrambled eggs with meat and tosts takes around 10 minutes from beginning to end. One portion of this dish contains approximately 13g  of protein, 19g of fat, and a total of 499 calories. For $2.33 per serving, this recipe covers 19% of your daily requirements of vitamins and minerals. This recipe serves 8. It works well as a main course. 3369 people were glad they tried this recipe. It is brought to you by Foodnetwork. It is a good option if you're following a lacto ovo vegetarian diet. If you have sugar, baking soda, eggs, and a few other ingredients on hand, you can make it. It is perfect for Christmas. Taking all factors into account, this recipe earns a spoonacular score of 65%, which is pretty good. Similar recipes are Pancake Breakfast Casserole, Pancake Breakfast Casserole, and Pancake Breakfast Casserole.",
        likes: 100,
        servings: 2,
        rating: 5,
    },
    {
        name: 'Pancakes with raspberries',
        preparationTime: 50,
        cookingTime: 30,
        calories: 100,
        ingredients: ['eggs', 'milk', 'unsalted butter', 'pork'],
        directions,
        description:
            "Scrambled eggs with meat and tosts takes around 10 minutes from beginning to end. One portion of this dish contains approximately 13g  of protein, 19g of fat, and a total of 499 calories. For $2.33 per serving, this recipe covers 19% of your daily requirements of vitamins and minerals. This recipe serves 8. It works well as a main course. 3369 people were glad they tried this recipe. It is brought to you by Foodnetwork. It is a good option if you're following a lacto ovo vegetarian diet. If you have sugar, baking soda, eggs, and a few other ingredients on hand, you can make it. It is perfect for Christmas. Taking all factors into account, this recipe earns a spoonacular score of 65%, which is pretty good. Similar recipes are Pancake Breakfast Casserole, Pancake Breakfast Casserole, and Pancake Breakfast Casserole.",
        likes: 100,
        servings: 2,
        rating: 5,
    },
    {
        name: 'Scrambled eggs with meat and tosts',
        preparationTime: 10,
        cookingTime: 60,
        calories: 600,
        ingredients: [
            'eggs',
            'fresh flatleaf parsley leaf',
            'milk',
            'olive oil',
            'pastrami',
            'unsalted butter',
            'pork',
        ],
        directions,
        description:
            "Scrambled eggs with meat and tosts takes around 10 minutes from beginning to end. One portion of this dish contains approximately 13g  of protein, 19g of fat, and a total of 499 calories. For $2.33 per serving, this recipe covers 19% of your daily requirements of vitamins and minerals. This recipe serves 8. It works well as a main course. 3369 people were glad they tried this recipe. It is brought to you by Foodnetwork. It is a good option if you're following a lacto ovo vegetarian diet. If you have sugar, baking soda, eggs, and a few other ingredients on hand, you can make it. It is perfect for Christmas. Taking all factors into account, this recipe earns a spoonacular score of 65%, which is pretty good. Similar recipes are Pancake Breakfast Casserole, Pancake Breakfast Casserole, and Pancake Breakfast Casserole.",
        likes: 100,
        servings: 2,
        rating: 5,
    },
];

const promises = [];

for (let i = 0; i < 15; i++) {
    const dish = dishes[i % dishes.length];
    promises.push(addDish({ id: i.toString(), ...dish }));
}

await Promise.all(promises);
console.log('Database filled');
