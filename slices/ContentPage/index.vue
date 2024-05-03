<script setup lang="ts">
import { type Content, type DateField } from "@prismicio/client";
import { DateTime } from "luxon";
const props = defineProps(
  getSliceComponentProps<Content.ContentPageSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

const countries = ref<string[]>([]);

const formatDate = (date: string) => {
  console.log(date);
  return DateTime.fromISO(date).setLocale("fr").toFormat("dd LLLL yyyy");
};

onMounted(() => {
  countries.value = [
    ...new Set(props.slice.items.map((item) => item.country as string)),
  ];
});
</script>

<template>
  <div
    class="container bounded"
    :class="{ reversed: slice.variation === 'default' }"
  >
    <h1 v-if="slice.variation === 'imageLeft'" class="mobile">
      {{ slice.primary.display_title }}
    </h1>

    <div class="image">
      <PrismicImage :field="slice.primary.image" />
    </div>
    <div class="text">
      <h1 :class="{ desktop: slice.variation === 'imageLeft' }">
        {{ slice.primary.display_title }}
      </h1>
      <PrismicRichText :field="slice.primary.text_block" />
      <div class="flex logos" v-if="slice.variation === 'default'">
        <PrismicImage :field="slice.primary.logo_left" />
        <PrismicImage :field="slice.primary.logo_center" />
        <PrismicImage :field="slice.primary.logo_right" />
      </div>
      <div v-if="slice.items">
        <div v-for="country in countries" class="list">
          <p class="country">
            {{ country }}
          </p>
          <div class="list-items">
            <div
              v-for="item in slice.items.filter(
                (item) => item.country === country
              )"
            >
              <p>{{ item.description }}</p>
              <p>
                Du {{ formatDate(item.start as string) }} au
                {{ formatDate(item.end as string) }} -
                <span v-if="item.remaining === 0" class="full">Complet</span>
                <span v-else-if="item.remaining === 1" class="available">
                  {{ item.remaining }} place restante
                </span>
                <span v-else class="available"
                  >{{ item.remaining }} places restantes</span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@media screen and (min-width: 900px) {
  .container {
    display: flex;
    justify-content: center;
    gap: 10rem;

    &.reversed {
      flex-direction: row-reverse;
    }

    .logos {
      justify-content: center;
      gap: 5rem;
    }

    .list {
      display: flex;
    }

    .text {
      width: 60%;
      padding-bottom: 10rem;
    }

    .image {
      width: 50%;
      z-index: var(--z-index-top);
      height: calc(100vh - var(--menu-height) * 2);

      img {
        max-height: calc(100vh - var(--menu-height) * 2);
        position: fixed;
      }
    }

    .logos {
      img {
        width: 10%;
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .container {
    display: block;
  }

  .image {
    text-align: center;

    img {
      width: 100%;
      height: auto;
    }
  }

  .text {
    padding: var(--default-spacing) 0;
  }

  .country {
    padding-bottom: 2rem;
  }

  .logos {
    img {
      width: calc(50% / 3);
    }
  }
}

.list {
  gap: var(--default-spacing);
  margin: 30px 0;

  .country {
    color: var(--color-yellow);
    text-transform: uppercase;
  }

  .list-items {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .full {
    color: var(--color-yellow);
  }

  .available {
    color: var(--color-blue);
  }
}

.logos {
  padding: var(--default-spacing) 0;
  justify-content: space-evenly;

  img {
    min-width: 3rem;
    max-width: 5rem;
    height: auto;
  }
}
</style>
