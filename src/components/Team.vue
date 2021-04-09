<template>
  <mdb-container>
    <section class="text-center">
      <h2 class="h1-responsive font-weight-bold my-5">Our amazing team</h2>
      <p class="grey-text w-responsive mx-auto mb-5">These UB students worked tirelessly on the production of this PSE APP. They dedicated countless hours of their time to bring you this awesome project.</p>
      <mdb-row>
        <mdb-col lg="3" md="6"  class="mb-lg-0 mb-5">
          <mdb-avatar tag="img" src="https://www.zoochat.com/community/media/white-fronted-amazon-amazona-albifrons-may-2010.232669/full?d=1376340978" circle class="z-depth-1" alt="Sample avatar"/>
          <h5 class="font-weight-bold mt-4 mb-3">Jason Fortik</h5>
          <p class="text-uppercase blue-text">Front End Developer</p>
          <p class="grey-text">Jason enjoys programming and usually finds himself day and night stuck to a screen trying to debug his errors.</p>
          <ul class="list-unstyled mb-0">
            <a class="p-2 fa-lg">
              <mdb-icon fab icon="facebook" class="blue-text"/>
            </a>
            <a class="p-2 fa-lg">
              <mdb-icon fab icon="twitter" class="blue-text"/>
            </a>
            <a class="p-2 fa-lg">
              <mdb-icon fab icon="instagram" class="blue-text"/>
            </a>
          </ul>
        </mdb-col>
        <mdb-col lg="3" md="6"  class="mb-lg-0 mb-5">
          <mdb-avatar tag="img" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg" circle class="z-depth-1" alt="Sample avatar"/>
          <h5 class="font-weight-bold mt-4 mb-3">Devan Martinez</h5>
          <p class="text-uppercase blue-text">Web Developer</p>
          <p class="grey-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem ipsa accusantium doloremque rem laudantium totam aperiam.</p>
          <ul class="list-unstyled mb-0">
            <a class="p-2 fa-lg">
              <mdb-icon fab icon="facebook" class="blue-text"/>
            </a>
            <a class="p-2 fa-lg">
              <mdb-icon fab icon="instagram" class="blue-text"/>
            </a>
          </ul>
        </mdb-col>
        <mdb-col lg="3" md="6"  class="mb-lg-0 mb-5">
          <mdb-avatar tag="img" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" circle class="z-depth-1" alt="Sample avatar"/>
          <h5 class="font-weight-bold mt-4 mb-3">Ferdi Heredia</h5>
          <p class="text-uppercase blue-text">Full Stack Developer</p>
          <p class="grey-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim est fugiat nulla id eu laborum.</p>
          <ul class="list-unstyled mb-0">
            <a class="p-2 fa-lg">
              <mdb-icon fab icon="facebook" class="blue-text"/>
            </a>
            <a class="p-2 fa-lg">
              <mdb-icon fab icon="instagram" class="blue-text"/>
            </a>
            <a class="p-2 fa-lg">
              <mdb-icon fab icon="dribbble" class="blue-text"/>
            </a>
          </ul>
        </mdb-col>
        <mdb-col lg="3" md="6"  class="mb-lg-0 mb-5">
          <mdb-avatar tag="img" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg" circle class="z-depth-1" alt="Sample avatar"/>
          <h5 class="font-weight-bold mt-4 mb-3">Floyd Ack</h5>
          <p class="text-uppercase blue-text">Backend Developer</p>
          <p class="grey-text">Perspiciatis repellendus ad odit consequuntur, eveniet earum nisi qui consectetur totam officia voluptates perferendis voluptatibus aut.</p>
          <ul class="list-unstyled mb-0">
            <a class="p-2 fa-lg">
              <mdb-icon fab icon="facebook" class="blue-text"/>
            </a>
            <a class="p-2 fa-lg">
              <mdb-icon fab icon="github" class="blue-text"/>
            </a>
          </ul>
        </mdb-col>
        <mdb-col lg="3" md="6"  class="mb-lg-0 mb-5">
          <mdb-avatar tag="img" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg" circle class="z-depth-1" alt="Sample avatar"/>
          <h5 class="font-weight-bold mt-4 mb-3">Kieran Ryan</h5>
          <p class="text-uppercase blue-text">Full Stack Developer</p>
          <p class="grey-text">Perspiciatis repellendus ad odit consequuntur, eveniet earum nisi qui consectetur totam officia voluptates perferendis voluptatibus aut.</p>
          <ul class="list-unstyled mb-0">
            <a class="p-2 fa-lg">
              <mdb-icon fab icon="facebook" class="blue-text"/>
            </a>
            <a class="p-2 fa-lg">
              <mdb-icon fab icon="github" class="blue-text"/>
            </a>
          </ul>
        </mdb-col>
      </mdb-row>
    </section>
  </mdb-container>
</template>
<script>
  import { mdbContainer, mdbRow, mdbCol, mdbAvatar, mdbIcon } from 'mdbvue';
  export default {
    name: 'Team',
    components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbAvatar,
      mdbIcon
    }
  }
</script>
<style scoped>
  .rounded-circle {
    max-width: 150px;
  }
</style>
