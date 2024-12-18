<script setup>
import { ref } from "vue";
import Card from "../components/Card.vue";

const cards = ref([
  {
    image:
      "https://s3-alpha-sig.figma.com/img/d3b4/8dda/0d202d4e7ece7c3158b9b9431e854213?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oH7evtuBLFnRgMDqmQPXCjnXJO2EhswzyLIYQsL0WCtXjnUPdXWDLIV0b3RSY06dtDmaWN~IT1LWEINBGdqzAMfGBJUpHxk6yh8qGmw8qSy5F1p8oo0GmMgRjPa9NH3hEOmcRAQBPxQaXgY6WLlYp3U-AbY9aENjg9lLyZjceow6KGa4Ogcj2v-1xxo9aEaFxJv~mirfLtm2rMyYvhRvAaRVFMt7IezleGos-WNs8kyAzPZX0ydGY1PYqTSmKQ2VRSSK~gWh24dx7uX7yEvbbBwxmoUl1Jo0iKbySN1X9PpJMHYzEMRh1S2os08XYvhkqo49t5P5~SeWleaGqglmEg__",
    href: "https://yandex.ru/maps/org/mirninskiy_teatr/33070325053/?ll=113.976025%2C62.535543&z=17",
    header: "Мирнинский театр",
    description:
      "Мирнинский театр — это современный театр, который предлагает широкий выбор спектаклей для всех возрастов.",
    rating: 4.4,
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/968d/9bbe/6da9853862b95094ab55f5fd36ef8747?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NAmd3HgYA3FlGYRT6ICeKBXBox73OvUrBIhxUPvGjfFnVinZ3Hjt~-kFVyGV~BVEuWqzPsi1yn~4E4OX1SmwQ9dhEkH5Av8Tv8J3kyup54xlFOtn60sboajORyeoCPi7mLvaUIDm5rEisTlMWuPRbM7-8gE8zqnAjeUA28uCbucIzmWS87zpj~eZa7rza4FH5Payjy9rME9Rvah8-eloZs7bcnjylmgyhEx32bfGFBOi6DBWF48OuTK9plw-dH55Rgjt-Bdv4Io7CuCe6fNRzW8J1rLtGbe9YIuEPnIqiS2sdTArgJGFm5llrw3tQSjUbsoLTMbAH-OfWmHw-dKYDw__",
    header: "Смотровая площадка карьера Мир",
    description:
      "Смотровая площадка карьера «Мир» — это место, откуда открывается захватывающий вид на гигантскую выработку, которая сейчас наполовину затоплена.",
    rating: 5.0,
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/0fbc/3b8b/1920fd2a86d6c611e0ec46fb38e163a1?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZOon4O-qTzS8LxartAq3zUC66D12Yw-QpFkGIwvlsAwgmS3iGli1g8hKh6PJYOJK6~iUiQuIrItDcKbkM1UNEwIBvOmI9m5wJM82xrk6M-a144mMrRBJqZonzJCa9-8aapQbadXYt-0oE-T4Vf87B~LTjabEIX5YBGu8K1Ju5AfSrTtFPi9H1~YRbpCMQPHrJqmH64vHXPqazCjJ2NDpTIAYPRhq6PXu7~~2HDCm~AvplmzJmwjUO-P8l0Aq-nRxWj5HUbPeibkF79gQKiK1aa9Rjq5n2v1fC5LPcS6MvcmPhOV153eX7VV0ZTkK-SknntcCMkLh3Zi6FUZfcE8oBA__",
    header: "Историко-производственный музей АК Алроса",
    description:
      "Современный, интерактивный, очень много полезной информации человек может для себя получить, как про мирный, так и про алмазы, о их истории в целом",
    rating: 4.3,
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/775c/9a9d/f25003c0b7ca06d25eda98e53068c473?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KWoA7iqVKzrKv25zVMivrto0lchmNhb5CDthMi89grEYMgLYVigWcwhBJ8JpYO8Nxd332Ct3PGUYcyncYuAVUwGR0VV7rqYArZo9-zSkXGJP8MA2DV6xRTmQ~sQ54o0Gxky-YTXZZMakG-~RgQY4UQmfiDgNd9Y6VHjV~BqvpQUCvdLs~MlLVtGK-8Sh-uS8JNId58NgNLqXvKm8Mo-1QqdMEHwW-IV22xJhdXRBYU79JS9AlzS05BAWA7t24vqieZm0HNqnt9Kef325T0osLSVLIS547Tv3kFetn8H-E8FYHjEF7RFnJwVxLofAB3glNIICb7KeAapo6Y-zXEE4Sg__",
    header: "Церковь Троицы Живоначальной",
    description:
      "Красивый храм и прихрамовый север. Благостное святое место, где можно отдохнуть душой посидев на лавочке у храма или в самом храме.",
    rating: 5.0,
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/d304/4ebe/834891cf32c509c7c71d0e915c4dad43?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n2OmhW55~5I5605l0zHvTC4yUJMmAp2w3vfipX8reUOVrq3T6xz~LzV4nvbjX5mc8DJMkhtm-OUGO~yffkmPPHagrNfYjB683LXBcS1m90lJnBSkEEyO~tqLFUJnENGrv~R-t8hj41hq89G5NO5Ku3ukop3FY-QQE8CQMQEuuazSOK6tKSHYBXa0wfmqoXTTuFVMv9Q4xoGLLr683LdfnwkrbaDzHZ~Pndmj0SXDqYIMT0VmQsqGv6hUp5RRRVKaj5EI0c~fR~hTy7aT8SaHgsQwa6GJeenGHj41KjCd8oySu2yssoZIE2mtMfYvsgKrRTeL1m9h1lTjEHUaGDRpUA__",
    href: "https://yandex.ru/maps/org/krayevedcheskiy_muzey/7666311698/?ll=113.967652%2C62.534083&z=17",
    header: "Краеведческий музей",
    description:
      "Краеведческий музей города Мирный — это небольшой, но очень симпатичный музей, где можно узнать много интересного о культуре и традициях этого края.",
    rating: 4.3,
  },
]);
</script>

<template>
  <main>
    <h1>Центры культурного досуга</h1>
    <div id="search-input"></div>
    <div class="card-container">
      <Card
        v-for="(card, index) in cards"
        class="purple-bg"
        :id="String(index)"
        :key="index"
        v-bind="card"
      />
    </div>
  </main>
</template>
