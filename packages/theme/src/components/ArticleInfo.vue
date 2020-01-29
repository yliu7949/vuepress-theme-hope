<template>
  <div v-if="author || time" class="article-info">
    <AuthorIcon v-if="author" />
    <span v-if="author" v-text="author" />
    <svg v-if="time" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M511.99730176 70.56849042c-243.79770498 0-441.42881133 197.63290459-441.42881133 441.43420783 0 243.79770498 197.63110635 441.42881133 441.42881133 441.42881132s441.43420781-197.63110635 441.43420781-441.42881133C953.43150958 268.20589238 755.79500674 70.56849042 511.99730176 70.56849042L511.99730176 70.56849042zM662.15499453 679.66072578l-15.60531972 15.60981623c-8.62065527 8.61525878-22.59538066 8.61525878-31.21513594-2e-8L472.19658682 552.12629434c-4.95024346-4.94394786-4.33955742-14.88850576-4.33955742-24.67746827L467.85702852 247.14037461c0-12.18943565 9.8816001-22.07013662 22.07013661-22.07013662l22.07013663 0c12.18943565 0 22.07013662 9.8816001 22.07013662 22.07013662l0 273.2176582 128.08755703 128.08755704C670.77564981 657.06534599 670.77564981 671.04097051 662.15499453 679.66072578L662.15499453 679.66072578zM662.15499453 679.66072578"
        fill="currentColor"
      />
    </svg>
    <span v-if="time" v-text="time" />
  </div>
</template>
<script lang="ts">
import * as moment from 'moment';
import { Component, Prop, Vue } from 'vue-property-decorator';
import AuthorIcon from '@mr-hope/vuepress-shared-utils/components/AuthorIcon.vue';
import { PageComputed } from 'vuepress-types';

@Component({ components: { AuthorIcon } })
export default class ArticleInfo extends Vue {
  @Prop(Object) private readonly article!: PageComputed;

  /** 作者 */
  private get author() {
    return this.article.frontmatter.author || this.$themeConfig.author || '';
  }

  /** 发表时间 */
  private get time() {
    const { time } = this.article.frontmatter;

    if (time) {
      if (time.indexOf('T') !== -1) {
        const [date, temp] = time.split('T');
        const [times] = temp.split('.');

        return `${date} ${times === '00:00:00' ? '' : times}`;
      }

      return time;
    }

    const { lastUpdated } = this.article;

    if (lastUpdated) {
      const times = lastUpdated.split(' ');

      times.pop();

      return times.join(' ');
    }

    return '';
  }
}
</script>
<style lang="stylus">
.article-info
  color desaturate(lighten($textColor, 25%), 25%)
  display flex
  align-items center
  font-size 15px
  color #888

  .icon
    width 16px
    height 16px
    margin 0 6px 0 10px

    &:first-child
      margin-left 0
</style>