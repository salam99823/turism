<script setup>
import { ref } from "vue";
import Card from "../components/Card.vue";

const cards = ref([
  {
    image:
      "https://s3-alpha-sig.figma.com/img/fb05/5945/92496e63e6fc4654887dbc226c37b1de?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cLmu3G6NCOV7QkBdFOXjtZhVvFalTsrNV2Gq7V8bczWCAgF~VSk5VhHNJwDtDDrUEwJrkHOkqNAKPdQy~Y4ZbSxmolplpzzSEaW0oC4RHkiMmIgvgtZY7lNkkz~fqxQOt0Tk6laaGSSEc5GaRTWEm7yo3BgAvzkBqxN-ThpoLBcLYxA7ul7BupDecE~Ej0PnbIbLIkkezdXlT1OuJ6DtwvH4zXxbhoPVU34f-O2tZlWoIXV9YMwvT~ZzbfinPOH8qqsKrRjiD-GCp8H7b-NxUgNtiq3ILsaKj~uBhqKL7wGJXhNAhjs-vIeRR11ncVsiu~MPotI-OPX2GejdtVUBaQ__",
    href: "https://yandex.ru/maps/org/azimut_otel_mirny/164046140087/?ll=113.977705%2C62.541372&z=17",
    header: "AZIMUT",
    description:
      "Отель »AZIMUT« Отель Мирный расположен в центре города Мирный, в 5 минутах езды от аэропорта. Гостям предлагается проживание в номерах различных категорий, включая номера «Эконом» и «Стандарт», а также завтрак «Шведский стол».",
    rating: 4.1,
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/95af/6cab/6e912750109e44c58519e2ca315c11cf?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FaJcr05px~N4kFoLrZ6oYoNcOiDckD6mlJV2omyLTXESgH5Xn2z-U899T00lv-XlDqOrD7qS6FIOrRdh1w2yrbAXDDrrHAmBx5od-VpkdzfRxd55hvJNhDjSxkLr8qqNH-1KvBEo0vjsmkBbX7tJP1Wu8Wbs-0Y-OfkGgeVJYM0GAobMiEcFdgRknlWZZMW0LaHAC8Kb9EIjfbcIOVuPGNe6qvm4RbeYc0ck~qmgJ5pCwVHuClrdqkjI3iDH04g2YFpdtWatiO2tbdPK1LnRMlQQdhTTnSnnY1En8n74WYuJqBEcSvWokFSl4inInJc~ooaGPjDHgh5HoRSuADPioQ__",
    href: "https://yandex.ru/maps/org/kak_doma/114790363239/?ll=113.989679%2C62.546205&z=17",
    header: "Как дома",
    description:
      "Гостиница »Как дома« — это место, где гости могут почувствовать себя как дома, благодаря уютным номерам, приветливому персоналу и добродушной хозяйке, которая всегда готова помочь.",
    rating: 5.0,
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/dbeb/31b3/4a41c167f8783b93148acdf67abd3de0?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Glxjk02znWx8fgUsx6S9f6U6gZPeTrv4Tfdmu7W-dFRp9VtASs3Px7rbfAvuoVbCnyxXnUyVmdwlvTllCQfszjsqA0kedVQKi4WUtZ-aqoqA-s2kw~MFz2-lbs-~ITmDiAJq8Rm2msk6jcA8~QziuHaTtFy-icdqmydBdJrrWYhDw5aHltwAZ9QxcdbGqMHFM~9ceWOOIIIe~tR5w9BwktnSQSKqjLiaQIusb7qKPYcHTEYPX2BGrWc2Dbxi0f7G7bjhLsd7TGNQkPLjNpLihcjq1EUebBebsMClPvqGnsvJRLPn24LE0RB-KzrTHSRMylJ-Kh5uSD8Y1l8JGmUIPw__",
    header: "Гостиница Уют",
    description:
      "Гостиница »Уют« — это место, где гости могут остановиться в комфортабельных номерах, оснащенных всем необходимым для комфортного проживания.",
    rating: 4.0,
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/86af/c4a6/7e6fab34423b47c50280ff50640c15a8?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PtIrwG9~Ya3E6IzkpkFqpfBdcA6HWo5H001A0zkJkYROCluFndQlSwoAB78HuCOTfvjzskFAL-QnLb7VO8URtxYT~M~jXtNwyXnK98BMy4mJismNNIE35NrHNqeyZKtY5kEUwXW~yDj19hoaz81pLdXFfLLnnb0gbLlYn4rzn7LTf7MNG4AAMlXLMuBnl7ot95HNRW5IIw0fXyHee~w2KaRioZQfBD1BI6NLrsWbRnF~Xv10VY2wRBMNpAs8V5uENY22nLev3Gne0XLgL5spHPM2dLi6s2C-ek0rMlEbC9q1G~t6dFiWSH5B~wuUzJ6Yy5TCrlQYHd1e0CCgShdyHA__",
    header: "Молодежный центр",
    description:
      "Гостиница «Молодежный центр» — это уютное место, где гости могут остановиться на несколько дней.",
    rating: 4.4,
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/f1ae/0400/89b1349fccc0c2591fd29d23a42adc17?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ia3Sno3yVjIEEgiNq9XIs-brmKDoVWnlE1sQ4hc~h8O2IuI07bjHrhmEwhCv9Sw0bwuGxAc7m2pj5cE6L9hsnfQGued0fwDEm1A1V9iWVmZ42jbtggIx5yLyjPJeJx9~zhls0umQXVNqYi6d51YjbXI4rK7mGLKGCzvckvjSZ7JhCzE8651Wks2fLpWdklJYuni4D7MfjFao8ugtIhVxC-jzQh~wUKvvMMbf9F8cFfqnWiFtpupHxCPRCwd1jLKocpbH8ywSUceY2cIa2xlTZlooo2ToNdjm6KupC0vkEqmbYa3zfUroUC-Ij-6AATylNGZBc4t-OF1wip-8gQzsag__",
    header: "Айхал",
    description:
      "Интернет Доступ в интернет:в номерах, на всей территории отеля Общая информация об отеле Количество звёзд:без звёзд",
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
        class="purple-bg"
        :id="String(index)"
        :key="index"
        v-bind="card"
      />
    </div>
  </main>
</template>
