<script setup>
import { ref } from "vue";
import Card from "../components/Card.vue";

const cards = ref([
  {
    image:
      "https://s3-alpha-sig.figma.com/img/31ce/efe0/1d6ad2e9b875fbcd15b0faca279ec09f?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EQFD~Tjg3qgiPkUaSL3MdVyZIKBKy2F1fV2vv0pqfEsXd8UEYw33dgaEM9FZg6jposl94kZkVmHLCQxUvNS9~x9r~-B~oA8T5XW~ewI7w7Ag-CR6t7E4WNeC5cXbS-4lcbBmAmGhdFvv7ZmcvS0gcrTuywe8bU5IoGwramJyCSc-2WJagAgynN1GMOqAEuXS2q5FqSSyDzHhVLukJ5ayhP38xA1Vl-KMRViYPpVoDGJufUElskqP1SQvqqavEbJd6x-OYoHZzqlOxphNhHyUUE-Co0Ed0eSClyVh5K0~Ej0GY0tdbGMtiuv0GI8YWkeIqJXzuVjnqq7b3lIa38qMlw__",
    href: "https://yandex.ru/maps/org/ansor/199048602591/?ll=113.960996%2C62.535136&z=14",
    header: "Ансор",
    description:
      "Кафе «Ансор» — это место, где можно вкусно и сытно поесть по доступным ценам. Гостям нравится разнообразное меню, большие порции, уютная атмосфера и вежливое обслуживание",
    rating: 5.0,
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/783f/65e3/b4c06c301720f91cd252680818393874?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DGj3ik9CXn0qN6uebkjWY1GDneMpOhVxq3zU55kYURlSulYFHDqxfeDCc7a~4Tr9aSZfX0e9lPFZks5hKpE8hag38Idhs6Oyp5JavTihie-Kv2kJK0m~AWThE~Hmv7~rNmmWc2dWDlm0vGLgBU5gIx2PdMBJdolbt8Rd4JfJIOLmiuCHs-4JgUv5YT9tw0ZCKKe2vf5OEH352Nvc9ZlPosV2Fm8TsqXUV9lFt0NM3KjQr~M4JuzlWQeq91JQs6~sNrvQWlV5Rdh34Bgr2IwFI8ijeCLTvvX5N9Gg4ZeBmjvia4b6h--724SCccT48imxPpyrqBbLl9dis3Vnqav00A__",
    href: "https://yandex.ru/maps/org/polyarny_volk/17222378261/?ll=113.989365%2C62.545674&z=17",
    header: "Полярный волк",
    description:
      "Бар «Полярный волк» — это место, где можно провести время в уютной атмосфере, наслаждаясь вкусной едой и напитками.",
    rating: 4.9,
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/8913/7b82/ebd46be11109d9c06202b4ffed76a2f2?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qV4w57JZPdFXY4N~hwHLT~e0YZwqHXuUmh9OGHNPGCbrZKfVDKTgDHdd1SMAmROuJBMZPZ27ziDMrlBnPRj5HvNmS8gjskB5IBS2FBcfeNinFfNbqAdrGFaenrnE4mfRJAMoHFoUCqeXW-Iq2BQ9BwjvaLZ4d~XTAUY-xGpSHK5KIlnNyU5ZsezCgasf8QkSA3wXq9JuLL39L5Q~mLhrdzvRPh6iTgy3Ya6KrSw2eb-0s04LbPJByOhOq7aMREJIyFwQnOVfMieplkqy3K8t0TOZwTNSiJoEmBIm46-mF9qIKlbv1V~QeZTCfx6n0nOx0pUSfhGPr8EiU83jZkh0aQ__",
    header: "Чайхана",
    description:
      "Кафе «Чайхана» — это место, где можно вкусно и сытно поесть. Гостям нравится местная кухня, особенно лагман, манты, жареная баранина и бургеры.",
    rating: 4.4,
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/e2c5/56cb/862bf5c25067f98208b492f4f3fcaa37?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pgaBRGPWmEXfr7LJubR3khoz7YKK~Y80xvIh9za3R0u51BYPDw3HF1KUdXpq-IUSg~eC5FMU9Cq4BpRnQe5m-p2cRZK7ZkPnr04rYpAntiMH0swuTtgnYfgfKV1Sfw5IjcnvwLSAja3LxesAQ4qyAwgsu2uXGuUKFFLQW2ikHj179qn-bjOxakRxyaitkTjs-9qJE8ZsmES1waVokx~UaJ-lWLYKV4EHfjVFGfPtjSXFr4cjIGBimVdGyhCi28rRQqFPrMyQ2lpiD1pgziNdrxxiEHv2T0xabCEUKFGSN~ZMaQJIJMN-Mw9AcwVkmYUE~vNpmYHLxpWNWuMvux~xyA__",
    header: "Геофизик",
    description:
      "Ресторан «Геофизик» — это место, где можно попробовать блюда местной национальной кухни, такие как салат «Индигирка» и оленина в брусничном соусе, а также насладиться свежим пивом, сваренным в собственной пивоварне.",
    rating: 4.2,
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/878f/ba81/1a564cf030826b73f89af354a9f02fa5?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C6eoKDLsun4bgrBJxlDvQclyMx3AbgYSCWHTf3m09eRK5AwIg69hmHTtCv~Bbj40Ej2hmIQwDk5wJQufe~cEhwY1S6x2x4tsiL4nLfzzdK8rFZoNSBu-TgYR0K~KGqEoKwac~Ismbdl9Q-aAl26WctFAFMun-4DlgV4ZOQiooMnOWTL75uMLw3gpd~CJBEbRxxVw872pLUfqXbRrUpJU10omDkrsWKf-A46isVb-e3-DbwLy7AJSX0r~KFXtMuH2Y0k3EsWPEqYfRghT94mdkOjxmWg0Z4MfgIlnwW--3~5lS26IgOQQqMxwWdCXwwDI31rF6fsvuovk8tiR2clz9w__",
    header: "Алгыс",
    description:
      "Ресторан «Алгыс» предлагает своим гостям блюда национальной якутской кухни, такие как строганина из муксуна, жареная оленина, филе чира и другие.",
    rating: 5.0,
  },
]);
</script>

<template>
  <main v-if="cards.length > 0">
    <h1 class="heading">Гостиницы</h1>
    <div class="card-container">
      <Card
        v-for="(card, index) in cards"
        class="blue-bg"
        :id="String(index)"
        :key="index"
        v-bind="card"
      />
    </div>
  </main>
</template>
