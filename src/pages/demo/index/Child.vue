<template>
    <div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'Child',
    data () {
        return {
            msg: 'hello world'
        }
    }
}
</script>
<style>
*{
    padding: 0;
    margin: 0;
}
</style>
