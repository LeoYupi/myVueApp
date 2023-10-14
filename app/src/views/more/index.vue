<template>
    <div>
        <navbar msg="更多"></navbar>
        <grid></grid>
    </div>
</template>
  
<script>
    import grid from './components/grid.vue'
    import navbar from '../../components/navbarFirstPage.vue'

    export default {
        name:'',
        components:{grid,navbar}
    }
</script>