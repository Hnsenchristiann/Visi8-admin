<template>
  <sidebar-menu :menu="menu" />
</template>

<script>
    export default {
        name: 'SideBar',
        data() {
            return {
                menu: [
                    {
                        header: true,
                        title: 'Admin Side Bar',
                        hiddenOnCollapse: true
                    },
                    {
                        href: '/',
                        title: 'Dashboard',
                        icon: 'fa fa-user'
                    },
                    {
                        href: '/About',
                        title: 'About',
                        icon: 'fa fa-book',
                        child: [
                            {
                                href: '/about/sublink',
                                title: 'Sub Link'
                            }
                        ]
                    },
                    {
                        href: '/data',
                        title: 'Data',
                        icon: 'fa fa-data'
                    },
                ]
            }
        }
    }
</script>