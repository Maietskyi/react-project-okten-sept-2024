import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate, useParams} from "react-router";
import {AppDispatch, RootState} from "../../redux/store.ts";
import {fetchRecipeById, setSelectedRecipe} from "../../redux/slices/recipeSlice.ts";
import "./RecipeDetailComponent.css"

export const RecipeDetailComponent = () => {
    const {id} = useParams<{ id: string }>();
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const {selectedRecipe, recipes, status} = useSelector((state: RootState) => state.recipe);

    useEffect(() => {
        const recipe = recipes.find((r) => r.id === Number(id));
        if (recipe) {
            dispatch(setSelectedRecipe(recipe));
        } else {
            dispatch(fetchRecipeById(Number(id)));
        }
    }, [dispatch, id, recipes]);

    if (status === "loading") return <p>Loading...</p>;
    if (status === "failed") return <p>Error loading recipe.</p>;
    if (!selectedRecipe) return <p>Recipe not found</p>;

    return (
        <div className="details-container">
            <div className="details_result">
                <h1>{selectedRecipe.name}</h1>
                <img src={selectedRecipe.image} alt={selectedRecipe.name} width="300"/>
                <div className="time-calories"><p><strong>Cooking time:</strong> {selectedRecipe.prepTimeMinutes} min.
                </p>
                    <p><strong>Calories per serving:</strong> {selectedRecipe.caloriesPerServing}</p></div>
                <p><strong>Ingredients:</strong></p>
                <ul>
                    {selectedRecipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>

                <p><strong>Instruction:</strong></p>
                <ol>
                    {selectedRecipe.instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                    ))}
                </ol>
                <p><strong>Kitchen:</strong> {selectedRecipe.cuisine}</p>
                <p>This recipe was created by: <strong><Link className="details-result-tags"
                                                             to={`/users/${selectedRecipe.userId}`}>View
                    profile</Link></strong></p>
            </div>
            <button onClick={() => navigate(-1)} className="button-go-back">Go back to recipes</button>
        </div>
    )
        ;
};