<template>
  <article class="relative w-full max-w-[16.25rem]">
    <div>
      <div
        v-if="cardTagsShow"
        class="inline-block py-1 px-2 rounded-full bg-tagBgClr text-mainBgClr text-small absolute top-2 left-2"
      >
        Popular
      </div>
      <img :src="cardImgSrc" alt="Coffee Cup Image" class="rounded-2xl" />
    </div>

    <div class="mt-3">
      <div class="flex items-center justify-between">
        <h3 class="text-body text-headingTextClr">{{ cardTitle }}</h3>

        <div
          class="py-[0.1875rem] px-2 rounded bg-priceBgClr text-label text-mainBgClr"
        >
          {{ cardPrice }}
        </div>
      </div>

      <div class="mt-2 flex items-center justify-between">
        <div>
          <a
            href="#"
            v-if="cardRating === null"
            class="flex gap-2 items-center"
          >
            <img :src="cardEmptyStarSrc" alt="Svg Icons" />
            <p class="text-body text-bodyTextClr">No Rating</p>
          </a>

          <a href="#" v-else class="flex gap-2 items-center">
            <img :src="cardStarSrc" alt="Star SVG Icons" />

            <p class="text-body text-headingTextClr">
              {{ cardRating }}
              <span class="text-body text-bodyTextClr"
                >({{ cardVote }} votes)</span
              >
            </p>
          </a>
        </div>

        <p v-if="!cardAvailable" class="text-body text-soldOutTextClr">
          Sold Out
        </p>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps([
  "cardTags",
  "cardTagsShow",
  "cardImgSrc",
  "cardTitle",
  "cardVote",
  "cardPrice",
  "cardStarSrc",
  "cardEmptyStarSrc",
  "cardRating",
  "cardAvailable",
]);
</script>
