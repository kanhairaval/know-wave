import React from 'react';
import "../style/CreateArticle.css"

const createButtons = (arrayOfCategories) => {
    const buttons = arrayOfCategories.map((category, index) => (
        <button key={index}>{category}</button>
    ));

    return buttons;
};

const arrayOfCategories = ["Technology", "Science", "Sports", "Politics", "Business & Finance", "Travel", "Entertainment", "Food & Drink", "Health", "Fashion"];

function CreateArticle() {
    return (
        <section className = "create-article">

            <p className = "q1">What type of article would you like to publish?</p>

            <div className = "q1-a1">
                <button id = "fact">Factual</button> <button id = "opinion">Opinionated</button>
            </div>

            <p className = "q2">Please, select a category for your article:</p>

            <div className = "q2-a2">
                {createButtons(arrayOfCategories)}
            </div>

            <p className = "q3">Please, provide a title for your article:</p>

            <div className = "q3-a3">
                <input id = "title-input" type = "text" name = "article-title"/>
            </div>

            <p className = "q4">Please, share your article content here:</p>

            <div className = "q4-a4">
                <textarea id = "article-text" type = "text" name = "article-content"/>
            </div>

            <p className = "q5">Would you like to upload an image to accompany your article?</p>

            {/* <div className = "q5-a5"> */}
                <input  id = "upload-image" type = "file" name = "article-image" accept = "image/*"/>
            {/* </div> */}

            <button className = "publish-btn">Publish</button>
        </section>
    );
};

export default CreateArticle;