<template>
  <main aria-labelledby="main-title" class="home">
    <header class="hero">
      <img
        v-if="$frontmatter.heroImage"
        :src="$withBase($frontmatter.heroImage)"
        :alt="$frontmatter.heroAlt || 'HomeLogo'"
      />
      <h1
        v-if="$frontmatter.heroText !== null"
        id="main-title"
        v-text="$frontmatter.heroText || $title || 'Hello'"
      />

      <p
        class="description"
        v-text="$frontmatter.tagline || $description || 'Welcome to your VuePress site'"
      />

      <p v-if="$frontmatter.actionText && $frontmatter.actionLink" class="action">
        <NavLink :item="actionLink" class="action-button" />
      </p>
    </header>

    <div v-if="$frontmatter.features && $frontmatter.features.length" class="features">
      <div
        v-for="(feature, index) in $frontmatter.features"
        :key="index"
        :class="{link:feature.link}"
        class="feature"
      >
        <h2>
          <span v-if="feature.link" @click="navigate(feature.link)">{{ feature.title }}</span>
          <span v-else>{{ feature.title }}</span>
        </h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>

    <Content class="theme-default-content custom" />

    <PageFooter />
  </main>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import NavLink from '@theme/components/NavLink.vue';
import navigate from '@theme/util/navigate';

@Component({ components: { NavLink } })
export default class Home extends Vue {
  private get actionLink() {
    return {
      link: this.$frontmatter.actionLink,
      text: this.$frontmatter.actionText
    };
  }

  private navigate(link: string) {
    navigate(link, this.$router, this.$route);
  }
}
</script>

<style lang="stylus">
.home
  padding $navbarHeight 2rem 0
  max-width 960px
  margin 0px auto
  display block

  .hero
    text-align center

    img
      max-width 100%
      max-height 280px
      display block
      margin 3rem auto 1.5rem

    h1
      font-size 3rem

    h1, .description, .action
      margin 1.8rem auto

    .description
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color var(--text-color-l40)

    .action-button
      display inline-block
      font-size 1.2rem
      color var(--white)
      background-color var(--accent-color)
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color 0.1s ease
      box-sizing border-box
      border-bottom 1px solid var(--accent-color-d10)

      &:hover
        background-color var(--accent-color-l10)

  .features
    border-top 1px solid $borderColor
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between

  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    transition all 0.5s
    padding 0 1.5%

    &.link
      cursor pointer

    &:hover
      transform scale(1.05)
      box-shadow 0 2px 12px 0 var(--card-shadow-color)

    &.link h2:hover
      color var(--accent-color)

    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color var(--text-color-l10)

    p
      color var(--text-color-l25)

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column

    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem

    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem

      h1
        font-size 2rem

      h1, .description, .action
        margin 1.2rem auto

      .description
        font-size 1.2rem

      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem

    .feature
      h2
        font-size 1.25rem
</style>
