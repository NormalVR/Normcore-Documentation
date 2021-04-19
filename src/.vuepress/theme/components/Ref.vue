<template>
  <main class="page">
    <slot name="top" />
    
    <Content class="theme-default-content" />
 
    <div class="theme-default-content">
        <h2>Properties</h2>
        <div class="prop-entry" v-for="prop in $page.frontmatter.class_properties">
          <div class="prop-title"> <span class="prop-type">{{prop.type}} </span> {{ prop.name }} </div>
          <p class="prop-definition"><i>{{ prop.definition }}</i></p>
          <p class="breif-description">{{ prop.brief_description }}</p>
        </div>
  


        <h2>Methods</h2>
        <div class="prop-entry" v-for="meth in $page.frontmatter.class_methods">
          <div class="prop-title"> <span class="prop-type">{{meth.type}} </span> {{ meth.name }}  <span class="meth-args">{{meth.args_string}}</span></div>
          <p class="prop-definition"><i>{{ meth.definition }}</i></p>
          <p class="breif-description">{{ meth.brief_description }}</p>
        </div>

        <h2>Events</h2>

        <div class="prop-entry" v-for="event in $page.frontmatter.class_events">
          <div class="prop-title"> <span class="prop-type">{{event.type}} </span> {{ event.name }} </span></div>
          <p class="prop-definition"><i>{{ event.definition }}</i></p>
          <p class="breif-description">{{ event.brief_description }}</p>
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

p.breif-description 
  margin-top 5px
  
h2
  margin-bottom 0.83em !important



</style>
