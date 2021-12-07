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
                        title: 'Overview',
                        icon: 'fa fa-user'
                    },
                    {
                        href: '/data',
                        title: 'Data',
                        icon: 'fa fa-file'
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
                ]
            }
        }
    }
</script>