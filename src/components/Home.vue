<template>
  <mdb-container>
    <mdb-row>
      <mdb-col col="sm">Home One of three columns</mdb-col>
      <mdb-col col="sm">One of three columns</mdb-col>
      <mdb-col col="sm">One of three columns</mdb-col>
    </mdb-row>
  </mdb-container>
</template>


<script>
  import {mdbContainer, mdbRow, mdbCol} from 'mdbvue';
  export default {
    name: 'Home',
    components: {    
      mdbContainer,
      mdbRow,
      mdbCol
    }
  }
</script>