<template>
  <main class="page">
    <slot name="top" />
    <!-- Reference pages are auto-generated and we don't output any content on the page. If that ever changes, bring this tag back. -->
    <!-- <Content class="theme-default-content" /> -->
    <div class="theme-default-content">
      <div>
        <h1>{{ $page.frontmatter.class_name }}</h1>
        <div>{{ $page.frontmatter.class_summary }}</div>
      </div>
      <div v-for="group in $page.frontmatter.class_members">
        <h2>{{ group.name }}</h2>
        <div class="prop-entry" v-for="member in group.members">
          <div class="prop-title">{{ member.name }} </div>
          <p class="prop-definition"><i>{{ member.definition }}</i></p>
          <p class="brief-description" v-if="member.summary">{{ member.summary }}</p>
          <p class="brief-description" v-if="member.remarks">{{ member.remarks }}</p>
          <p class="brief-description" v-if="member.returns">{{ member.returns }}</p>
          <ul v-if="member.parameters">
            <li v-for="parameter in member.parameters"><b>{{ parameter.name }}:</b> {{ parameter.description }}</li>
          </ul>
        </div>
      </div>
    </div>
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'

export default {
  components: { PageEdit, PageNav },
  props: ['sidebarItems']
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block
  
.prop-title
  margin 0
  font-size 1.2rem;
  color: $accentColor
  
.prop-title .prop-type
  font-size 1rem
  font-weight bolder  

.prop-entry
  margin-block-end: 25px;
  
.prop-entry p 
  margin:0
  
.prop-definition
  color: lighten($textColor, 30%)
  font-size 0.8rem
    
.prop-title .meth-args 
  font-size 0.9rem
  color black

p.brief-description 
  margin-top 5px
  
h2
  margin-bottom 0.83em !important



</style>
