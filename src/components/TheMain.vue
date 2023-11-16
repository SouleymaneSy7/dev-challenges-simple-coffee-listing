<template>
  <main
    class="container relative bg-mainBgClr rounded-xl py-20 px-8 overflow-hidden"
  >
    <img
      src="../assets/vector.svg"
      alt="Vector Svg"
      class="absolute top-10 right-[-3.875rem] sm:top-10 sm:left-[48%]"
    />

    <h1 class="relative text-title text-headingTextClr text-center mb-4">
      Our Collection
    </h1>

    <p
      class="relative text-body text-center w-full max-w-[26rem] mx-auto mb-4 lg:max-w-[32rem]"
    >
      Introducing our Coffee Collection, a selection of unique coffees from
      different roast types and origins, expertly roasted in small batches and
      shipped fresh weekly.
    </p>

    <ul class="relative">
      <li class="flex gap-6 items-center justify-center">
        <button
          type="button"
          ref="btnFocus"
          class="first | border-none outline-none px-3 py-2 text-headingTextClr text-label cursor-pointer transition-[background-clr] hover:bg-btnBgClr rounded-md focus:bg-btnBgClr"
          @click="filterCard(false)"
        >
          All Products
        </button>

        <button
          type="button"
          class="px-3 py-2 text-headingTextClr text-label cursor-pointer transition-[background-clr] hover:bg-btnBgClr rounded-md focus:bg-btnBgClr"
          @click="filterCard(true)"
        >
          Available Now
        </button>
      </li>
    </ul>

    <section class="card-container | mt-8">
      <BaseCard
        v-for="card in cardDetails"
        :key="card.id"
        :card-title="card.name"
        :card-tags-show="card.popular"
        :card-img-src="card.image"
        :card-price="card.price"
        :card-rating="card.rating"
        :card-vote="card.votes"
        :card-available="card.available"
        :card-star-src="StarFill"
        :card-empty-star-src="emptyStar"
      />
    </section>
  </main>
</template>

<script setup>
import axios from "axios";
import { onBeforeMount, onMounted, ref } from "vue";
import BaseCard from "./BaseCard.vue";
import StarFill from "../assets/star-fill.svg";
import emptyStar from "../assets/star.svg";

const cardData = ref({});
const cardDetails = ref([]);
const btnFocus = ref(null);

onBeforeMount(() => {
  getCardDetails();
});

onMounted(() => {
  btnFocus.value.focus();
});

// Fetch Card Details With Axios
const getCardDetails = () => {
  axios
    .get(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    )
    .then((res) => {
      cardData.value = res.data;

      cardDetails.value = cardData.value;
    })
    .catch((error) => console.log(error));
};

// Filter Available Card
const filterCard = (availableCard) => {
  cardDetails.value = cardData.value;

  if (availableCard === true) {
    cardDetails.value = cardDetails.value.filter((card) => {
      return card.available === availableCard;
    });
  } else {
    return;
  }
};
</script>
