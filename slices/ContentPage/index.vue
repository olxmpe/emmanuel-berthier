<script setup lang="ts">
import type { DateField } from "@prismicio/client";
import { type Content } from "@prismicio/client";
import { DateTime } from "luxon";

const { locale } = useI18n();

defineProps(
  getSliceComponentProps<Content.ContentPageSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

const formatDate = (date: string) => {
  return DateTime.fromISO(date)
    .setLocale(locale.value)
    .toLocaleString(DateTime.DATE_FULL);
};
</script>

<template>
  <HeaderBackground />
  <div class="mobile header" v-if="slice.variation === 'default'">
    <PrismicImage :field="slice.primary.image" />
  </div>
  <div
    class="container bounded"
    :class="{ reversed: slice.variation === 'default' }"
  >
    <PrismicRichText
      :field="slice.primary.display_title"
      v-if="slice.variation === 'imageLeft'"
      class="mobile header"
    />

    <div class="image" :class="{ desktop: slice.variation === 'default' }">
      <PrismicImage :field="slice.primary.image" />
    </div>
    <div class="text">
      <PrismicRichText
        :field="slice.primary.display_title"
        :class="{ desktop: slice.variation === 'imageLeft' }"
      />

      <PrismicRichText :field="slice.primary.text_block" />
      <div class="flex logos" v-if="slice.variation === 'default'">
        <PrismicLink :field="slice.primary.logo_left_link"
          ><PrismicImage :field="slice.primary.logo_left"
        /></PrismicLink>
        <PrismicLink :field="slice.primary.logo_center_link"
          ><PrismicImage :field="slice.primary.logo_center"
        /></PrismicLink>
        <PrismicLink :field="slice.primary.logo_right_link"
          ><PrismicImage :field="slice.primary.logo_right"
        /></PrismicLink>
      </div>
      <div v-if="slice.items">
        <div class="list" v-if="slice.variation === 'default'">
          <h2>{{ $t("next_start") }}</h2>
          <div class="list-items">
            <div v-for="item in slice.items">
              <PrismicLink
                v-if="item.link"
                class="link travel"
                :field="item.link"
                >{{ item.description }}</PrismicLink
              >
              <p v-if="!item.start || !item.end" class="remaining">
                {{ item.custom_text }}
              </p>
              <p v-else>
                {{
                  $t("from_date_to_date", {
                    from: formatDate(item.start as string),
                    to: formatDate(item.end as string),
                  })
                }}
                -
                <span v-if="item.remaining === 0" class="remaining">{{
                  $t("full")
                }}</span>
                <span v-else-if="item.remaining === 1" class="remaining"
                  >{{ $t("place_left", { count: item.remaining }) }}
                </span>
                <span v-else class="remaining">{{
                  $t("places_left", { count: item.remaining })
                }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.container {
  @media screen and (min-width: 1025px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10rem;

    &.reversed {
      flex-direction: row-reverse;
    }

    .logos {
      justify-content: center;
      gap: 5rem;

      img {
        max-height: 6rem;
        width: auto;
      }
    }

    .text {
      width: 60%;
      padding-bottom: 10rem;
    }

    .image {
      width: 50%;
      z-index: var(--z-index-image-absolute);
      height: calc(100vh - var(--menu-height) * 2);

      img {
        max-height: calc(100vh - var(--menu-height) * 2);
        max-width: 40vw;
        top: 50%;
        transform: translateY(-50%);
        position: fixed;
      }
    }
  }

  @media screen and (max-width: 1025px) {
    display: block;

    .logos {
      justify-content: space-evenly;

      img {
        max-height: 5rem;
        width: auto;
      }
    }
  }
}

h1 {
  @media screen and (max-width: 1025px) {
    margin-top: 0;
  }
}

.image {
  @media screen and (max-width: 1025px) {
    text-align: center;
    margin-bottom: var(--default-spacing);

    img {
      width: 100%;
      height: auto;
    }
  }
}

.country {
  @media screen and (max-width: 1025px) {
    padding-bottom: 2rem;
  }
}

.list {
  display: flex;
  gap: var(--default-spacing);
  margin: 30px 0;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    margin-top: 20px;
    gap: 0;

    h2 {
      margin-bottom: var(--default-spacing);
    }
  }

  .country {
    color: var(--color-yellow);
    font-weight: 350;
    text-transform: uppercase;
  }

  .list-items {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .remaining {
    color: var(--color-yellow);
  }
}

.logos {
  padding: 80px 0;
}

.travel {
  font-weight: 350;
}
</style>
