export interface Dish {
  id: string;
  name: string;
  description: string;
  calories: number;
  ingredients: string[];
  directions: string[];
  preparationTime: number;
  cookingTime: number;
  rating: number;
  likes: number;
  servings: number;
}
