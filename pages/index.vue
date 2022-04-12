<template>
  <div class="container">
    <div class="grid">
      <div class="col-12">
        <HelloWorld />
      </div>
    </div>
  </div>
</template>

<script>
import getMetaTags from '@/config/meta'

export default {
  name: 'Index',
  computed: {
    meta () {
      const metaData = {
        title: '',
        description: '',
        type: 'website',
        url: '', // current page canonical url
        mainImage: '' // current page image url
      }
      return getMetaTags(metaData)
    }
  },
  head () {
    return {
      title: '',
      meta: [
        ...this.meta
      ]
    }
  }
}
</script>
