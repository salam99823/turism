<script setup>
import { ref } from "vue";
import Card from "../components/Card.vue";

const cards = ref([
  {
    image:
      "https://s3-alpha-sig.figma.com/img/5999/2818/7ae8606d8ab23ef359767def89ecb551?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FlCU2BVaDhLaCZCIp0LhTPbztNffVwdqs7h8HzGDzV6APHC~NWzWOxuZq5OlHStuE1tn3zbjLvfLd7U92TU5EgSFv5kqVP0VttOs7gqV~yzdOpTWTIiH4GJmiGmpfaklySJJF6JIkpy2~FrhvyBG3qjsBUacFALH87T0-CoWYiHClvyqFVfoJr1oHzqE9~fyaOII10ozkQmtAtT9l1Z7zfI7bBXR1WeTXXttZX7D1Igqcj~lY4tE8ygd~zCzzFw2k2ErtF2Ul68~8px6EqncMjeY1ldcKoN95Kw4XVxIcFTsFeyjhURptaq10xhxOl5RoqbXFoXMXI7FyFYZOFGeqA__",
    href: "https://yandex.ru/maps/org/tri_mecha/74570952108/?ll=113.975920%2C62.536035&z=18",
    header: "Три меча",
    description:
      "Памятник Три мяча священное место для горожан, место где можно отдать дань и низко поклониться тем , кто отдал свои жизни во время Великой Отечественной войны за наше мирное сегодня.",
    rating: 4.1,
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/719a/07b2/435e6ed85d62a3ce9fc0967e1fae8a3b?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CMm~RZSNXPIB0KQJGaXf-YF9dfLAEBZMi99Z-eWcqeRmxWdEF351Jm5B0YCOrx510lgKTiaCodifVkFCDTwvmR8MtAoSkw5AVRrGjI-yfgH6Z~03Wye2wFGwuSDlZ8QT966hb2jfdduBjYeRkcjDAFzN7NnJnMN9bNNymHwqB0HnYxBSgnjeJo322kHI6xM~diUETBo-U~2uRk3Tq9n0dnz80Jxa6N9WpisDpgs3slqx--Yq6q9gDL2DI-KCNcGv0laFkAKfYnbLXORVQIP3kdpS732xzuUUfEgzaZwuGIHsiFp73ZNfM0qGwk3-5ikYinqcrwOHyMx2CU6KDNRMjg__",
    href: "https://yandex.ru/maps/org/vilyuyskoye_koltso/11692805381/?ll=114.019273%2C62.512379&z=11",
    header: "Вилюйское кольцо",
    description:
      "Хорошая зона отдыха, Где находится памятник первооткрывателям алмазов, красивая Стелла, Лавочки, газоны всегда стригут что придаёт парку аккуратность и желание посидеть в тени.",
    rating: 4.5,
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/dbc7/1b0d/f0156b0521272b7f7a0c39a72c7386e9?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pFW7YlAHSmSg6iqpI0jlcm~G2hB2JTQ~mWCxVlqCh0PggmFwEeRckSqgmb9ZN1iONolVZsuhH6e9-H8I4fcDk4uPXAG6qMdR0zVGjBRUdje-9lMjcv81rnHoLbvQCCnn7DxABT5ULwgKKaFiWz6s67Y0OKyL4q9bkpDPkcGy5NfRtlhexemiIVMLh0rhxLuWAO3V4KL2QR~zJR5UcxicCPP4Ket-UG-UJJ-PWaJ~lOxCyqrWw6d2GxJaC9qQi74hiby~MDEBo446N9h7vB-7Y-N2FNg4vcr~fj7pcay7o06Pd9AlffC86CZYj3qMPlfOttTAmGvT1y3pfobP~tDrgg__",
    href: "https://yandex.ru/maps/org/aybolit_i_zveri/196800075000/?ll=113.977794%2C62.544799&z=17",
    header: "Айболит и звери",
    description:
      "Прекрасная жанровая скульптура, место возле детской поликлиники подходит отлично. при должной реставрации будет настоящим украшением города!",
    rating: 4.5,
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/6681/5b5f/c320c88f45ebb114e71640909ef81533?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U~r6CU1AHRvGeWu7ED1V2dCwFkT6lI2KOVAeQSoB4hvbc~r~FXbrBdb1xdj4GtqLoSzXAG7--4FUkjaENPRI1BwtDVvf2ZDyjlaJYoUp3qdPASIYPyo05EiC6SWe3bslKo4i29GTNszuVTSoWkgj3DHmx0kyipY9ssJw7wsf1RRsvDw7LRufVr4QvSsGWVxWyi54-o~LJ6B-tx6Q4zXocVP6AbQmo~ilEGksVJ~vpZPO1zpsZceuG-CLtM7-zNgjoldLklFAdjYq1k4smVVRP-9gBDoSAD2B~JJgBx33-RnwBCOsPjLt8rhgXnaUjxi6XNSSPoE4O4wvj9E2buNrLw__",
    href: "https://yandex.ru/maps/org/pervootkryvatelyam_almaznoy_trubki_mir/22279682425/?ll=114.019273%2C62.512379&z=11",
    header: "Первооткрывателям алмазной трубки Мир",
    description:
      "Живой памятник человеческого труда, очень впечатляет! Живой памятник человеческого труда, очень впечатляет!",
    rating: 4.4,
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/b053/da6d/3dbc726c55b0bceab077943839e3b2b4?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D8VvSGh3PPrrEpug7Oesn1jqNwUhN54y~DL1TfNlkjc6~29Aqiq4WSGmUoo5Rc-QQwRWD2eqf4IJw1rqU8dxPwYZxA8K9sN-yTSXbYioeTvYGEJYel-IF6FG~Ktyp9qA~aoK1Ag97o2t5QcZ1roVC4VAepF3Hv9PVyQg8Q5McG7ri24WZqcLPRqd~Zh6RTlSjdt4ChfuEXnHUVNjr~ZGGu3dMXepq92XzjyhKfEx00yNA-4W09f5YmFsXLZ6ZfRN9VmsLMZ7PQmZBoZCxGAAsQfbR3~ZphQhrCSuSqRQ1CRujwElnse1Wj2l2VHytL~EcvoSiPquZM9W2XiqH5A8qA__",
    header: "Иосифу Виссарионовичу Сталину",
    description:
      "Можно посидеть на лавочках возле памятника. Рядом театральный комплекс, храм, одна из главных улиц города. Памятник товарищу Сталину делает это место культовым и наиболее посещаемым.",
    rating: 3.8,
  },
]);
</script>

<template>
  <main>
    <h1>Достопримечательности</h1>
    <div class="card-container">
      <div class="card-container">
        <Card
          v-for="(card, index) in cards"
          class="blue-bg"
          :id="String(index)"
          :key="index"
          v-bind="card"
        />
      </div>
    </div>
  </main>
</template>
