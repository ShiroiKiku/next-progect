new Vue({
    el: '#app',
    
    mounted : {
      sub:{
        const: divA = this.$refs.divA
      }
    
      
    },
    data: {
      sub: {
        
        width: mounted.sub.const.divA + 'px'
      }
    }
  })