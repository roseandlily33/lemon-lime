const RecipeForm = () => {
  return (
    <>
      <TopForm>
        <LeftDiv>
          <TopEdit formValues={formValues} handleChange={handleChange} />
        </LeftDiv>
        <RightDiv>
          <img
            src={CookingIllustration}
            alt="Cooking Illustration"
            className="cooking-image"
          />
        </RightDiv>
      </TopForm>
      <MiddleForm>
        <MiddleEdit
          ingredients={ingredients}
          setIngredients={setIngredients}
          addNewIngredient={addNewIngredient}
          instructions={instructions}
          setInstructions={setInstructions}
          addNewInstruction={addNewInstruction}
        />
      </MiddleForm>
      <BottomForm>
        <BottomEdit
          images={images}
          addNewImage={addNewImage}
          addNewPhotos={addNewPhotos}
          photos={photos}
        />
      </BottomForm>
    </>
  );
};

export default RecipeForm;
