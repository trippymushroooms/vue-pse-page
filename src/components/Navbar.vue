
<template>
  <mdb-navbar color="default" dark>
    <mdb-navbar-brand :to="{ name: 'Home' }">
      UB PSE APP
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav>
        <mdb-nav-item :to="{ name: 'Home' }">Home</mdb-nav-item>
        <mdb-nav-item :to="{ name: 'About' }">About</mdb-nav-item>
        <mdb-nav-item :to="{ name: 'Team' }">Team</mdb-nav-item>
        <mdb-dropdown tag="li" class="nav-item">
          <mdb-dropdown-toggle tag="a" navLink color="default" slot="toggle" waves-fixed>Quizzes</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item>Quiz 1</mdb-dropdown-item>
            <mdb-dropdown-item>Quiz 2</mdb-dropdown-item>
            <mdb-dropdown-item>Quiz 3</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
      </mdb-navbar-nav>
     
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>
<script>
  import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbDropdown, mdbDropdownMenu, mdbDropdownToggle, mdbDropdownItem } from 'mdbvue';
  export default {
    name: 'Navbar',
    components: {
      
      mdbNavbar,
      mdbNavbarBrand,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbNavItem,
      mdbDropdown,
      mdbDropdownMenu,
      mdbDropdownToggle,
      mdbDropdownItem,
      //mdbInput
    }
  }
</script>
