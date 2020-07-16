<template>
    <section class="copyright">
        <span v-if="type === 'reprint'" class="type reprint">
            转载
        </span>
        <span v-else-if="type === 'original'" class="type original">原创</span>
        <span v-else-if="type === 'special'" class="type special">特约</span>
        <span v-else class="type">其它</span>
        <span>
            作者：<template v-if="authorLink"><a :href="authorLink" target="_blank">{{ author }}<link-icon /></a></template><template v-else>{{ author }}</template>
        </span>
        <span>来源：<template v-if="sourceLink"><a :href="sourceLink" target="_blank">{{ source }}<link-icon /></a></template><template v-else>{{ source }}</template></span>
    </section>
</template>

<script>
export default {
    name: 'copyright',
    props: {
        meta: Array
    },
    computed: {
        author() {
            return this.getItem('author')
        },
        authorLink() {
            return this.getItem('author-link')
        },
        source() {
            return this.getItem('source')
        },
        sourceLink() {
            return this.getItem('source-link')
        },
        type() {
            return this.getItem('type')
        }
    },
    methods: {
        getItem(key) {
            const item = this.meta.filter(x => x.name === key)
            return item.length > 0 ? item[0].content : ''
        }
    }
}
</script>
<style scoped>
.copyright {
    margin: 15px 0;
}
.copyright span {
    margin-right: 5px;
}

.copyright .type {
    background-color: grey;
    color: #fff;
    padding: 2px 5px;
    border-radius: 5px;
    font-size: 14px;
}

.copyright .type.reprint {
    background-color: orange;
}
.copyright .type.original {
    background-color: green;
}
.copyright .type.special {
    background-color: blueviolet;
}
</style>