export default defineI18nConfig(() => ({
  legacy: false,
  availableLocales: ["fr-fr", "en-us"],
  messages: {
    "en-us": {
      from_date_to_date: "From {from} to {to}",
      full: "Full",
      places_left: "{count} places left",
      place_left: "{count} place left",
    },
    "fr-fr": {
      from_date_to_date: "Du {from} au {to}",
      full: "Complet",
      places_left: "{count} places restantes",
      place_left: "{count} place restante",
    },
  },
}));
