<template>
  <div class="add-smoothie container">
    <h2 class="center-align indigo-text">Add New Smoothie Recipe</h2>

    <form v-on:submit.prevent="AddSmoothie">
      <div class="field title">
        <label for="title">Smoothie Title</label>
        <input type="text" name="title" v-model="title" />
      </div>

      <div v-for="(ing,index) in ingredients" :key="index">
        <label for="ingredient">Ingredients:</label>
        <input type="text" name="ingredient" v-model="ingredients[index]" />
      </div>

      <div class="field add-ingredient">
        <label for="add-ingredient">Add Ingredient</label>
        <input type="text" name="add-ingredient" @keydown.tab.prevent="addIng" v-model="another" />
      </div>

      <div class="field center-align">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn pink">Add Smoothie</button>
      </div>
    </form>
  </div>
</template>

<script>
import db from "@/firebase/init";

export default {
  name: "AddSmoothie",
  data() {
    return {
      title: null,
      another: null,
      feedback: null,
      ingredients: []
    };
  },

  methods: {
    AddSmoothie() {
      if (this.title) {
        this.feedback = null;

        db.collection("smoothies").add({
          title: this.title,
          ingredients: this.ingredients
        });
      } else {
        this.feedback = "Please enter title";
      }
    },
    addIng() {
      if (this.another) {
        this.ingredients.push(this.another);
        this.another = null;
        this.feedback = null;
      } else {
        this.feedback = "you must enter a value to add an ingredient";
      }
    }
  }
};
</script>


<style scoped>
.add-smoothie {
  margin: 60px;
  padding: 20px;
  max-width: 500px;
}

.add-smoothie {
  font-size: 2em;
  margin: 20px auto;
}

.add-smoothie .field {
  margin: 20px;
}
</style>