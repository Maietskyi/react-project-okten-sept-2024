import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useSearchParams} from "react-router";
import {AppDispatch, RootState} from "../../redux/store.ts";
import {fetchRecipes, fetchRecipesByTag, setPageRecipe} from "../../redux/slices/recipeSlice.ts";
import {SearchComponent} from "../search-component/SearchComponent.tsx";
import {RecipeList} from "../recipe-component/RecipeList.tsx";
import {PaginationComponent} from "../pagination-component/PaginationComponent.tsx";


export const RecipesComponent = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const {recipes, total, currentPage, status} = useSelector((state: RootState) => state.recipe);

    const [params] = useSearchParams();
    const page = parseInt(params.get('page') ?? '1', 10);
    const query = params.get('q') ?? '';
    const tagFromUrl = params.get("tag");

    useEffect(() => {
        if (tagFromUrl) {
            dispatch(fetchRecipesByTag({tag: tagFromUrl}));
        } else {
            dispatch(fetchRecipes({page, query}));
        }
        dispatch(setPageRecipe(page));
    }, [dispatch, page, tagFromUrl, query]);

    if (status === "loading") return <p>Loading...</p>;
    if (status === "failed") return <p>Failed to get recipes</p>;

    const totalPages = Math.ceil(total / 30);

    const handlePageChange = (page: number) => {
        dispatch(setPageRecipe(page));
        if (query != '') {
            navigate(`?page=${page}${query ? `&q=${query}` : ''}${tagFromUrl ? `&tag=${tagFromUrl}` : ''}`);
        } else {
            navigate(`?page=${page}${tagFromUrl ? `&tag=${tagFromUrl}` : ''}`);
        }
    };

    const hendleSendRecipe = (query: string) => {
        if (query !== '') {
            navigate(`?page=1&q=${query}`);
        } else {
            navigate(`?page=1`);
        }
    };

    return (
        <div>
            <h1>Recipe list</h1>
            <SearchComponent searchType="recipes" onSearch={hendleSendRecipe} search={query}/>
            <ul className="recipe-list">
                {recipes.length > 0 ? (
                    recipes.map((recipe) => (
                        <li key={recipe.id} className="recipe-item">
                            <RecipeList recipe={recipe}/>
                        </li>
                    ))
                ) : (
                    <p>No recipes</p>
                )}
            </ul>
            <PaginationComponent
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
};