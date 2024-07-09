import {Alert, Button, Image, List, Typography} from "antd";
import s from "@/pages/recipes/recipe/recipe.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useGetRecipeByIdQuery } from "@/services";
import { Loader } from "@/components";

export const Recipe = () => {
    const { recipeId} = useParams()
    const navigate = useNavigate()
    const {data: recipe, isLoading, isError } = useGetRecipeByIdQuery({id: recipeId})

    return (
        <div className={s.recipePage}>
            {isLoading && <Loader/>}
            <Button icon={<ArrowLeftOutlined />} onClick={() => navigate('/recipes')}></Button>
            <Typography.Title className={s.pageTitle}>{recipe?.name}</Typography.Title>

            <div className={s.content}>
                <Typography.Paragraph className={s.description}>
                    {recipe?.description}
                </Typography.Paragraph>
                <div className={s.recipe}>
                    <Typography.Text>Preparation times: {recipe?.prepTime}</Typography.Text>
                    <Typography.Text>Cook time: {recipe?.cookTime}</Typography.Text>
                    <Typography.Text>Total time {recipe?.totalTime}</Typography.Text>
                    <Typography.Text>Recipe makes {recipe?.makingAmount}</Typography.Text>
                </div>
                <div className={s.image}>
                    <Image src={recipe?.imageUrl}></Image>
                </div>
                <div className={s.ingridients}>
                    <Typography.Title>Ingridients</Typography.Title>
                    <List
                        dataSource={recipe?.ingredients}
                        renderItem={(item) => (
                            <List.Item>
                                <Typography.Text>[*]</Typography.Text> {item}
                            </List.Item>
                        )}
                    >
                    </List>
                </div>
                <div className={s.directions}>
                    <Typography.Title>Directions</Typography.Title>
                    <Typography.Text>{recipe?.directions}</Typography.Text>
                </div>
            </div>
            {isError &&
                <Alert message='something went wrong' closable type="error" />
            }
        </div>
    )
}