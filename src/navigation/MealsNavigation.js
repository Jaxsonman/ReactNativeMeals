import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CategoryMealsScreen from '../components/screens/CategoryMealsScreen';
import MealDetailsScreen from '../components/screens/MealDetailsScreen';
import CategoriesScreen from '../components/screens/CategoriesScreen';

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealsScreen
  },
  MealDetail: MealDetailsScreen
});
 

export default createAppContainer(MealsNavigator);
