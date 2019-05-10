<template>
  <div class="comments">
    <Comment
      v-for="(comment, index) in comments"
      :key="index"
      :comment="comment"
    />
  </div>
</template>

<script>
import Comment from '@/components/Comment'

export default {
  name: 'comments',
  data () {
    return {
      comments: [
        {
          profileImg: 'nicolas.jpg',
          name: 'Nicolas Issa',
          date: 'Avril 30, 2019 à 17:20',
          content: "J'étais un peu sceptique au début, mais je viens de recevoir ma Samsung S9 aujourd'hui! c'etait facile et fun"
        },
        {
          profileImg: 'martin.jpg',
          name: 'Martin Dupont',
          date: 'Avril 30, 2019 à 17:20',
          content: "J'étais un peu sceptique au début, mais je viens de recevoir ma Samsung S9 aujourd'hui! c'etait facile et fun"
        },
        {
          profileImg: 'tom.jpg',
          name: 'Tom Nemo',
          date: 'Avril 30, 2019 à 17:20',
          content: "J'étais un peu sceptique au début, mais je viens de recevoir ma Samsung S9 aujourd'hui! c'etait facile et fun",
          contentImg: 'hands.jpg'
        },
        {
          profileImg: 'natalia.jpg',
          name: 'Natalia Jamka',
          date: 'Avril 30, 2019 à 17:20',
          content: "J'étais un peu sceptique au début, mais je viens de recevoir ma Samsung S9 aujourd'hui! c'etait facile et fun"
        },
        {
          profileImg: 'rick.jpg',
          name: 'Rick Shaper',
          date: 'Avril 30, 2019 à 17:20',
          content: "J'étais un peu sceptique au début, mais je viens de recevoir ma Samsung S9 aujourd'hui! c'etait facile et fun"
        }
      ]
    }
  },
  components: {
    Comment
  }
}
</script>

<style>

</style>
